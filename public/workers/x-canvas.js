const defaultFont = "Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif";
const fixFontFaceConstructor = (parameters) => {
  let [family, source, descriptors] = parameters;
  if (typeof source === "string" && !source.startsWith("url(")) source = `url(${self.location.origin + source})`;
  return [family, source, descriptors];
};
const fetchImage = (url) => fetch(self.location.origin + url).then((res) => res.blob()).then((blob) => createImageBitmap(blob));
const drawImageArea = (image, pos, props) => {
  const w = image.width;
  const h = image.height;
  const posRatio = pos.w / pos.h;
  const imgRatio = w / h;
  let fit = void 0;
  if ("objectFit" in props && props.objectFit === "cover") {
    if (posRatio < imgRatio) fit = "y";
    if (imgRatio < posRatio) fit = "x";
  } else {
    if (posRatio < imgRatio) fit = "x";
    if (imgRatio < posRatio) fit = "y";
  }
  if (fit === "x") {
    const img2 = { w: pos.w, h: h * pos.w / w };
    const posY = pos.y + pos.h / 2 - img2.h / 2;
    return [0, 0, w, h, pos.x, posY, img2.w, img2.h];
  }
  const img = { w: w * pos.h / h, h: pos.h };
  const posX = pos.x + pos.w / 2 - img.w / 2;
  return [0, 0, w, h, posX, pos.y, img.w, img.h];
};
const per2num = (per) => typeof per === "string" && per.at(-1) === "%" ? Number(per.slice(0, -1)) / 100 : void 0;
class XCanvasWorker {
  #canvas;
  #ctx;
  #fontFace;
  #fontFamily = defaultFont;
  #fontSize = 16;
  #fontColor = "#000";
  #debugMode;
  //#renderDelay: number | undefined
  #structure = void 0;
  #imageMap = /* @__PURE__ */ new Map();
  #imageSrcList = [];
  // 重複回避用
  #isFontReady = false;
  constructor(canvas, ctx) {
    this.#canvas = canvas;
    this.#ctx = ctx;
  }
  options = (options) => {
    if (options?.canvasWidth) this.#canvas.width = options.canvasWidth;
    if (options?.canvasHeight) this.#canvas.height = options.canvasHeight;
    if (options?.fontFace) {
      this.#fontFace = new FontFace(...fixFontFaceConstructor(options.fontFace));
      this.#fontFamily = `${options.fontFace[0]}, ${defaultFont}`;
      this.#isFontReady = false;
      self.fonts.add(this.#fontFace);
    }
    if (options?.fontSize) this.#fontSize = options.fontSize;
    if (options?.fontColor) this.#fontColor = options.fontColor;
    if (options?.debugMode) this.#debugMode = options.debugMode;
  };
  render(root) {
    const pos = { x: 0, y: 0, z: 0, w: this.#canvas.width, h: this.#canvas.height };
    this.#structure = { pos, elem: root, inner: this.#recuStructure(pos, root) };
    if (self.fonts.check(`${this.#fontSize}px ${this.#fontFamily}`)) this.#draw();
    else
      this.#fontFace?.load().then(() => {
        if (self.fonts.check(`${this.#fontSize}px ${this.#fontFamily}`)) this.#isFontReady = true;
        this.#structure = { pos, elem: root, inner: this.#recuStructure(pos, root) };
        this.#draw();
      });
    this.#load();
  }
  /*
   * Analysis of Structure
   */
  #recuStructure(pos, elem) {
    const posArr = this.#calcChildrenPos(pos, elem);
    if (typeof elem !== "object" || !posArr) return void 0;
    const re = elem.children?.map((child, i) => ({
      pos: posArr[i],
      elem: child,
      inner: void 0
    }));
    for (const e of re) e.inner = this.#recuStructure(e.pos, e.elem);
    return re;
  }
  #calcChildrenPos(pos, elem) {
    if (typeof elem !== "object") return void 0;
    const px = this.#fixSize(elem.props.p, pos.w, 0);
    const py = this.#fixSize(elem.props.p, pos.h, 0);
    const pt = this.#fixSize(elem.props.pt, pos.h, py);
    const pr = this.#fixSize(elem.props.pr, pos.w, px);
    const pb = this.#fixSize(elem.props.pb, pos.h, py);
    const pl = this.#fixSize(elem.props.pl, pos.w, px);
    const sxArr = elem.children.map((child) => {
      if (typeof child !== "object")
        return { z: 0, w: "auto", h: "auto", mt: "auto", mr: "auto", mb: "auto", ml: "auto", position: void 0 };
      const m = child.props?.m != null ? Number(child.props.m) : "auto";
      return {
        z: child.props?.z ?? 0,
        w: child.props?.w ?? this.#getTextWidth(child.children[0]) ?? "auto",
        h: child.props?.h ?? (typeof child.children[0] === "string" || typeof child.children[0] === "number" ? this.#fixSize(child.props.fontSize, this.#fontSize, this.#fontSize) * 1.5 : "auto"),
        mt: child.props?.mt ?? m,
        mr: child.props?.mr ?? m,
        mb: child.props?.mb ?? m,
        ml: child.props?.ml ?? m,
        position: child.props?.position
      };
    });
    if (elem.props?.display === "flex")
      return this.#calcPos({ ...pos, pt, pr, pb, pl }, sxArr, "row");
    return this.#calcPos({ ...pos, pt, pr, pb, pl }, sxArr);
  }
  #calcPos(outer, innerArr, direction) {
    const isRow = direction === "row";
    const x = outer.x + outer.pl;
    const y = outer.y + outer.pt;
    const w = outer.w - outer.pl - outer.pr;
    const h = outer.h - outer.pt - outer.pb;
    const xPos = this.#calcPosUni(
      x,
      w,
      innerArr.map((e) => ({ len: e.w, ms: e.ml, me: e.mr, pos: isRow ? e.position : "absolute" }))
    );
    const yPos = this.#calcPosUni(
      y,
      h,
      innerArr.map((e) => ({ len: e.h, ms: e.mt, me: e.mb, pos: isRow ? "absolute" : e.position }))
    );
    return innerArr.map((e, i) => ({
      x: xPos[i].start,
      y: yPos[i].start,
      z: e.z,
      w: xPos[i].len,
      h: yPos[i].len
    }));
  }
  #calcPosUni(x, w, innerArr) {
    let sumNum = 0;
    let sumPer = 0;
    for (const inner of innerArr) {
      if (inner.pos === "absolute") continue;
      for (const size of [inner.len, inner.ms, inner.me]) {
        sumNum += this.#fixSize(size, void 0, 0);
        sumPer += per2num(size) || 0;
      }
    }
    let tmp = x;
    if (w < sumNum || w === sumNum && 0 < sumPer) {
      return innerArr.map((inner) => {
        if (inner.pos === "absolute") return this.#calcPosAbsolute(tmp, w, inner);
        const { start, len, next } = this.#calcPosStatic(tmp, w, inner);
        tmp = next;
        return { start, len };
      });
    }
    const remainRate = (w - sumNum) / w;
    if (remainRate < sumPer) {
      return innerArr.map((inner) => {
        if (inner.pos === "absolute") return this.#calcPosAbsolute(tmp, w, inner);
        const { start, len, next } = this.#calcPosStatic(tmp, w * remainRate / sumPer, inner);
        tmp = next;
        return { start, len };
      });
    }
    let lenAutoCount = 0;
    let mAutoCount = 0;
    for (const inner of innerArr) {
      if (inner.pos === "absolute") continue;
      if (inner.len === "auto") lenAutoCount++;
      if (inner.ms === "auto") mAutoCount++;
      if (inner.me === "auto") mAutoCount++;
    }
    return innerArr.map((inner) => {
      if (inner.pos === "absolute") return this.#calcPosAbsolute(tmp, w, inner);
      if (lenAutoCount > 0) {
        const { start: start2, len: len2, next: next2 } = this.#calcPosStatic(tmp, w, inner, (w - sumNum - sumPer * w) / lenAutoCount);
        tmp = next2;
        return { start: start2, len: len2 };
      }
      if (mAutoCount > 0) {
        const { start: start2, len: len2, next: next2 } = this.#calcPosStatic(tmp, w, inner, w, (w - sumNum - sumPer * w) / mAutoCount);
        tmp = next2;
        return { start: start2, len: len2 };
      }
      const { start, len, next } = this.#calcPosStatic(tmp, w, inner);
      tmp = next;
      return { start, len };
    });
  }
  #calcPosStatic(x, w, inner, defaultW, defaultM) {
    const len = this.#fixSize(inner.len, w, defaultW ?? w);
    const ms = this.#fixSize(inner.ms, w, defaultM ?? 0);
    const me = this.#fixSize(inner.me, w, defaultM ?? 0);
    return { len, start: x + ms, next: x + len + ms + me };
  }
  #calcPosAbsolute(x, w, inner) {
    if (inner.len === "auto") {
      const ms2 = this.#fixSize(inner.ms, w, 0);
      const me2 = this.#fixSize(inner.me, w, 0);
      const start2 = x + ms2;
      const len2 = w - ms2 - me2;
      return { start: start2, len: len2 };
    }
    const len = this.#fixSize(inner.len, w, w);
    const mAutoCount = (inner.ms === "auto" ? 1 : 0) + (inner.me === "auto" ? 1 : 0);
    const me = this.#fixSize(inner.me, w, 0);
    const ms = this.#fixSize(inner.ms, w, (w - len - me) / mAutoCount);
    const start = x + ms;
    return { start, len };
  }
  /*
   * Load
   */
  #load(structure, recursive) {
    const s = recursive ? structure : this.#structure;
    if (!s) return;
    if (typeof s.elem !== "object" || !s.elem) return;
    if (s.elem.type === "img") this.#loadImage(s.elem.props.src);
    if (s.elem.props.backgroundImage) this.#loadImage(s.elem.props.backgroundImage);
    if (s.elem.type === "canvas")
      this.#loadCanvas(s.elem.props.id || "canvas", s.elem.props.func, s.pos, s.elem.props.refresh);
    for (const e of s.inner || []) this.#load(e, true);
  }
  #loadImage(src) {
    if (this.#imageSrcList.includes(src)) return;
    this.#imageSrcList.push(src);
    fetchImage(src).then((image) => {
      this.#imageMap.set(src, image);
      this.#draw();
    });
  }
  #loadCanvas(id, func, pos, refresh = true) {
    if (!refresh && this.#imageSrcList.includes(id)) return;
    if (!this.#imageSrcList.includes(id)) this.#imageSrcList.push(id);
    let canvas = this.#imageMap.get(id);
    if (canvas instanceof OffscreenCanvas) {
      canvas.width = Math.round(pos.w);
      canvas.height = Math.round(pos.h);
    } else {
      canvas = new OffscreenCanvas(Math.round(pos.w), Math.round(pos.h));
    }
    func(canvas).then(() => {
      this.#imageMap.set(id, canvas);
      this.#draw();
    });
  }
  /*
   * Draw
   */
  #draw(structure, recursive) {
    if (!structure && this.#imageSrcList.length !== this.#imageMap.size) return;
    const s = recursive ? structure : this.#structure;
    if (!s) return;
    if (typeof s.elem !== "object" || !s.elem) return;
    if (!recursive && this.#debugMode) console.log("Canvas Render", this.#structure);
    const h = s.elem.props?.overflow === "hidden" ? { pos: s.pos, radius: s.elem.props.borderRadius } : void 0;
    if (h) this.#ctxClipBox(h.pos, h.radius);
    const clipPath = s.elem.props?.clipPathLine ? { pos: s.pos, path: s.elem.props.clipPathLine } : void 0;
    if (clipPath) this.#ctxClipPath(clipPath.pos, clipPath.path);
    if (s.elem.props) this.#drawBackground(s.pos, s.elem.props);
    if (s.elem.type === "img") this.#drawImage(s.pos, s.elem.props?.src || "", s.elem.props);
    if (s.elem.type === "canvas") this.#drawImage(s.pos, s.elem.props?.id || "canvas", s.elem.props);
    if (s.elem.type === "div") {
      if (typeof s.elem.children[0] === "string" || typeof s.elem.children[0] === "number") {
        this.#drawText(s.pos, s.elem.children[0], s.elem.props);
      }
    }
    for (const e of s.inner || []) this.#draw(e, true);
    if (clipPath) this.#ctx.restore();
    if (h) this.#ctx.restore();
  }
  #drawText(pos, text, props) {
    const align = props?.textAlign || "left";
    const x = align === "left" ? pos.x : align === "right" ? pos.x + pos.w : pos.x + pos.w / 2;
    this.#ctx.fillStyle = props?.color || this.#fontColor;
    this.#ctxFont(props?.fontSize);
    this.#ctx.textAlign = align;
    this.#ctx.textBaseline = "middle";
    if (props?.opacity) this.#ctx.globalAlpha = props.opacity;
    if (props?.shadow) {
      this.#ctx.shadowBlur = props.shadow.size;
      this.#ctx.shadowColor = props.shadow.color || "#000";
      for (let i = 0; i < (props.shadow?.for || 1); i++) {
        this.#ctx.fillText(text.toString(), x, pos.y + pos.h / 2);
      }
      this.#ctx.shadowBlur = 0;
    } else {
      this.#ctx.fillText(text.toString(), x, pos.y + pos.h / 2);
    }
    if (props?.opacity) this.#ctx.globalAlpha = 1;
  }
  #drawImage(pos, src, props) {
    const image = this.#imageMap.get(src);
    if (!image) return;
    if (props.opacity) this.#ctx.globalAlpha = props.opacity;
    if (props.shadow) {
      this.#ctx.shadowBlur = props.shadow.size;
      this.#ctx.shadowColor = props.shadow.color || "#000";
      for (let i = 0; i < (props.shadow?.for || 1); i++) {
        this.#ctx.drawImage(image, ...drawImageArea(image, pos, props));
      }
      this.#ctx.shadowBlur = 0;
    } else {
      this.#ctx.drawImage(image, ...drawImageArea(image, pos, props));
    }
    if (props.opacity) this.#ctx.globalAlpha = 1;
  }
  #drawBackground(pos, props) {
    if (props.backgroundColor) {
      this.#ctx.fillStyle = props.backgroundColor;
      this.#ctx.fillRect(pos.x, pos.y, pos.w, pos.h);
    }
    if (props.backgroundBlendMode) this.#ctx.globalCompositeOperation = props.backgroundBlendMode;
    if (props.backgroundImage)
      this.#drawImage(pos, props.backgroundImage, { objectFit: props.objectFit });
    if (props.backgroundBlendMode) this.#ctx.globalCompositeOperation = "source-over";
    if (props.border) this.#drawBorder(pos, props.borderRadius, props.border);
  }
  #drawBorder(pos, radius, border) {
    const borderArr = Array.isArray(border) ? border : [border];
    const rad = this.#fixSize(radius, pos.w < pos.h ? pos.w : pos.h, 0);
    for (const b of borderArr) {
      const bo = b.offset || 0;
      const bw = b.width / 2;
      const p = {
        x: pos.x + bo + bw,
        y: pos.y + bo + bw,
        w: pos.w - bo * 2 - bw * 2,
        h: pos.h - bo * 2 - bw * 2,
        z: pos.z
      };
      const tmpRad = rad - bo - bw;
      const r = 0 < tmpRad ? tmpRad : 0;
      this.#ctx.lineWidth = b.width;
      this.#ctx.strokeStyle = b.color;
      this.#ctxPathBox(p, r);
      this.#ctx.stroke();
    }
  }
  #ctxPathBox(pos, rad) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(pos.x + rad, pos.y);
    this.#ctx.lineTo(pos.x + pos.w - rad, pos.y);
    this.#ctx.arcTo(pos.x + pos.w, pos.y, pos.x + pos.w, pos.y + pos.h, rad);
    this.#ctx.lineTo(pos.x + pos.w, pos.y + pos.h - rad);
    this.#ctx.arcTo(pos.x + pos.w, pos.y + pos.h, pos.x, pos.y + pos.h, rad);
    this.#ctx.lineTo(pos.x + rad, pos.y + pos.h);
    this.#ctx.arcTo(pos.x, pos.y + pos.h, pos.x, pos.y, rad);
    this.#ctx.lineTo(pos.x, pos.y + rad);
    this.#ctx.arcTo(pos.x, pos.y, pos.x + pos.w, pos.y, rad);
    this.#ctx.closePath();
  }
  #ctxClipBox(pos, radius) {
    const rad = this.#fixSize(radius, pos.w < pos.h ? pos.w : pos.h, 0);
    this.#ctx.save();
    this.#ctxPathBox(pos, rad);
    this.#ctx.clip();
  }
  #ctxClipPath(pos, clipPath) {
    const path = clipPath.map(
      (p, i) => i % 2 === 0 ? pos.x + this.#fixSize(p, pos.w, 0) : pos.y + this.#fixSize(p, pos.h, 0)
    );
    this.#ctx.save();
    this.#ctx.beginPath();
    this.#ctx.moveTo(path[0], path[1]);
    for (let i = 2; i < path.length; i += 2) {
      this.#ctx.lineTo(path[i], path[i + 1]);
    }
    this.#ctx.lineTo(path[0], path[1]);
    this.#ctx.closePath();
    this.#ctx.clip();
  }
  /*
   * Utils
   */
  #fixSize(size, length, defaultValue) {
    if (size !== void 0) {
      if (typeof size === "number") return size;
      if (size.endsWith("rem")) {
        const sizeNum = Number(size.slice(0, -3));
        if (!Number.isNaN(sizeNum)) return sizeNum * this.#fontSize;
      }
      if (length && size.endsWith("%")) {
        const sizeNum = Number(size.slice(0, -1));
        if (!Number.isNaN(sizeNum)) return sizeNum * length / 100;
      }
    }
    return defaultValue ?? "auto";
  }
  #getTextWidth(text, fontSize) {
    if (typeof text !== "string" && typeof text !== "number") return void 0;
    this.#ctxFont(fontSize);
    return this.#ctx.measureText(text.toString()).width;
  }
  #ctxFont(fontSize) {
    this.#ctx.font = `${this.#fixSize(fontSize, this.#fontSize, this.#fontSize)}px ${this.#isFontReady ? this.#fontFamily : defaultFont}`;
  }
}
let xc;
self.onmessage = (event) => {
  const { canvas, options, root } = event.data;
  if (!xc && canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) xc ??= new XCanvasWorker(canvas, ctx);
    else new Error('web worker: OffscreenCanvas.getContext("2d")');
  }
  if (xc) {
    if (options) xc.options(options);
    xc.render(root);
  }
};
