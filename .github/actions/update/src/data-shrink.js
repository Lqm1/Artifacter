import fs from "node:fs";
import { folder } from "./utils.js";

// text-map
// import en from "../../../../genshin/.text/TextMapEN.json";
// import ja from "../../../../genshin/.text/TextMapJP.json";
// import ko from "../../../../genshin/.text/TextMapKR.json";
// import pt from "../../../../genshin/.text/TextMapPT.json";
// const en = JSON.parse(fs.readFileSync(`${folder.text}TextMapEN.json`, "utf8"));
const ja = JSON.parse(fs.readFileSync(`${folder.text}TextMapJP.json`, "utf8"));
// const ko = JSON.parse(fs.readFileSync(`${folder.text}TextMapKR.json`, "utf8"));
// const pt = JSON.parse(fs.readFileSync(`${folder.text}TextMapPT.json`, "utf8"));

// const TextMap = { en, ja, ko, pt };
const TextMap = { ja };

// import AvatarCodex from "../../../../genshin/.data/AvatarCodexExcelConfigData.json";
const AvatarCodex = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarCodexExcelConfigData.json`, "utf8")
);
// avatar
// import AvatarCostume from "../../../../genshin/.data/AvatarCostumeExcelConfigData.json";
// import Avatar from "../../../../genshin/.data/AvatarExcelConfigData.json";
// import AvatarPromote from "../../../../genshin/.data/AvatarPromoteExcelConfigData.json";
// import AvatarSkillDepot from "../../../../genshin/.data/AvatarSkillDepotExcelConfigData.json";
// import AvatarSkill from "../../../../genshin/.data/AvatarSkillExcelConfigData.json";
// import AvatarTalent from "../../../../genshin/.data/AvatarTalentExcelConfigData.json";
// import ProudSkill from "../../../../genshin/.data/ProudSkillExcelConfigData.json";
const AvatarCostume = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarCostumeExcelConfigData.json`, "utf8")
);
const Avatar = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarExcelConfigData.json`, "utf8")
);
const AvatarPromote = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarPromoteExcelConfigData.json`, "utf8")
);
const AvatarSkillDepot = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarSkillDepotExcelConfigData.json`, "utf8")
);
const AvatarSkill = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarSkillExcelConfigData.json`, "utf8")
);
const AvatarTalent = JSON.parse(
  fs.readFileSync(`${folder.data}AvatarTalentExcelConfigData.json`, "utf8")
);
const ProudSkill = JSON.parse(
  fs.readFileSync(`${folder.data}ProudSkillExcelConfigData.json`, "utf8")
);

// weapon
// import Weapon from "../../../../genshin/.data/WeaponExcelConfigData.json";
// import WeaponPromote from "../../../../genshin/.data/WeaponPromoteExcelConfigData.json";
const Weapon = JSON.parse(
  fs.readFileSync(`${folder.data}WeaponExcelConfigData.json`, "utf8")
);
const WeaponPromote = JSON.parse(
  fs.readFileSync(`${folder.data}WeaponPromoteExcelConfigData.json`, "utf8")
);

// import EquipAffix from "../../../../genshin/.data/EquipAffixExcelConfigData.json";
const EquipAffix = JSON.parse(
  fs.readFileSync(`${folder.data}EquipAffixExcelConfigData.json`, "utf8")
);

// material
// import Material from "../../../../genshin/.data/MaterialExcelConfigData.json";
const Material = JSON.parse(
  fs.readFileSync(`${folder.data}MaterialExcelConfigData.json`, "utf8")
);

// artifact
// import Reliquary from "../../../../genshin/.data/ReliquaryExcelConfigData.json";
const Reliquary = JSON.parse(
  fs.readFileSync(`${folder.data}ReliquaryExcelConfigData.json`, "utf8")
);

// artifact-set
// import ReliquarySet from "../../../../genshin/.data/ReliquarySetExcelConfigData.json";
const ReliquarySet = JSON.parse(
  fs.readFileSync(`${folder.data}ReliquarySetExcelConfigData.json`, "utf8")
);

// artifact-substat
// import ReliquaryAffix from "../../../../genshin/.data/ReliquaryAffixExcelConfigData.json";
const ReliquaryAffix = JSON.parse(
  fs.readFileSync(`${folder.data}ReliquaryAffixExcelConfigData.json`, "utf8")
);

// pfp
// import ProfilePicture from "../../../../genshin/.data/ProfilePictureExcelConfigData.json";
const ProfilePicture = JSON.parse(
  fs.readFileSync(`${folder.data}ProfilePictureExcelConfigData.json`, "utf8")
);

const E = {
  Avatar,
  AvatarSkillDepot,
  AvatarSkill,
  AvatarTalent,
  AvatarCostume,
  AvatarPromote,
  AvatarCodex,
  Weapon,
  WeaponPromote,
  Material,
  ProudSkill,
  Reliquary,
  ReliquaryAffix,
  ProfilePicture,
  ReliquarySet,
  EquipAffix,
};

export const dataShrink = () => {
  console.log("Data Shrink Start");
  dumpAvatar();
  dumpWeapon();
  dumpMaterial();
  dumpReliquaryIcon();
  dumpReliquarySet();
  dumpProfilePicture();
  dumpTextMap();
  dumpReliquaryAffix();
  console.log("Data Shrink End");
};

const dumpAvatar = () => {
  const a = [];
  // biome-ignore format: ids
  //const blockIds = [10000001, 11000008, 11000009, 11000010, 11000011, 11000013, 11000017, 11000018, 11000019, 11000025, 11000026, 11000027, 11000028, 11000030, 11000031, 11000032, 11000033, 11000034, 11000035, 11000036, 11000037, 11000038, 11000039, 11000040, 11000041, 11000042, 11000043, 11000044, 11000045, 11000046, 10000901]
  const minIdNum = 10000001;
  const maxIdNum = 10000901; // 11000000
  const isCodex = (id) => {
    const find = E.AvatarCodex.find((e) => e.avatarId === id);
    if (!find || new Date(find.beginTime) < new Date()) return true;
    return false;
  };
  for (const avatar of E.Avatar.filter(
    (e) => minIdNum < e.id && e.id < maxIdNum && isCodex(e.id)
  )) {
    const aInfo = {};
    aInfo.key = avatar.iconName.split("_").at(-1);
    // biome-ignore format: index
    for (const index of [
      "id",
      "qualityType",
      "weaponType",
      "nameTextMapHash",
      "skillDepotId",
    ]) {
      aInfo[index] = avatar[index];
    }
    if (aInfo.id === 10000005 || aInfo.id === 10000007) {
      for (const depot of E.AvatarSkillDepot.filter((e) =>
        avatar.candSkillDepotIds.includes(e.id)
      )) {
        const aInfo57 = { ...aInfo };
        aInfo57.skillDepotId = depot.id;
        aInfo57.element = avatarElement(depot);
        if (!(depot.id === 501 || depot.id === 701) && aInfo57.element === null)
          continue;
        aInfo57.consts = avatarConsts(depot);
        aInfo57.skills = avatarSkills(depot);
        aInfo57.allCosts = avatarAllCosts(avatar, aInfo57);
        a.push(aInfo57);
      }
    } else {
      const depot = E.AvatarSkillDepot.find((e) => e.id === aInfo.skillDepotId);
      aInfo.element = avatarElement(depot);
      aInfo.consts = avatarConsts(depot);
      aInfo.skills = avatarSkills(depot);
      aInfo.costumes = E.AvatarCostume.filter(
        (e) => e.characterId === aInfo.id && e.sideIconName !== ""
      ).map((costume) => ({
        skinId: costume.skinId,
        key: costume.frontIconName.split("_").at(-1),
      }));
      aInfo.allCosts = avatarAllCosts(avatar, aInfo);
      a.push(aInfo);
    }
  }
  dumpFile(
    "avatar",
    a
      .sort((a, b) => {
        if (a.qualityType === "QUALITY_ORANGE_SP") return -1;
        if (a.qualityType === b.qualityType) return 0;
        return a.qualityType < b.qualityType ? 1 : -1; // QUALITY_PURPLE -> QUALITY_ORANGE
      })
      .reverse()
  );
};

const avatarElement = (depot) =>
  E.AvatarSkill.find((e) => e.id === depot.energySkill)?.costElemType || null;

const avatarConsts = (depot) =>
  depot.talents.map(
    (talentId) => E.AvatarTalent.find((e) => e.talentId === talentId)?.icon
  );

const avatarSkills = (depot) =>
  depot.skills
    .slice(0, 2)
    .concat(depot.energySkill)
    .map((id) => {
      const skill = E.AvatarSkill.find((e) => e.id === id);
      return {
        id: id || null,
        icon: skill?.skillIcon || null,
        proud: skill?.proudSkillGroupId || null,
      };
    });

// @yuko1101 https://github.com/yuko1101/enka-network-api/blob/main/example/upgradeCosts.js
const avatarAllCosts = (avatar, aInfo) => {
  const promoteArray = E.AvatarPromote.filter(
    (e) => e.avatarPromoteId === avatar.avatarPromoteId
  );
  const promoteMaterials = promoteArray
    .filter((e) => e.costItems[0]?.id)
    .map((e) => e.costItems);
  const ids = aInfo.skills.map((e) => e.proud);
  const skillArray = E.ProudSkill.filter((e) =>
    ids.includes(e.proudSkillGroupId)
  );
  const skillMaterials = skillArray
    .filter((e) => e.costItems[0]?.id)
    .map((e) => e.costItems);
  const promoteCoin = promoteArray
    .filter((e) => e.scoinCost)
    .map((e) => e.scoinCost)
    .reduce((a, b) => a + b);
  const skillCoin = skillArray
    .filter((e) => e.coinCost)
    .map((e) => e.coinCost)
    .reduce((a, b) => a + b);
  const materials = promoteMaterials
    .concat(skillMaterials)
    .reduce((materialMap, items) => {
      for (const item of items) {
        if (!item.id) continue;
        materialMap[item.id] ??= 0;
        materialMap[item.id] += item.count || 0;
      }
      return materialMap;
    }, {});
  return { promoteCoin, skillCoin, materials };
};

const dumpWeapon = () => {
  const w = [];
  // biome-ignore format: ids
  const blockIds = [
    20001, 10002, 10003, 10004, 10005, 10006, 10008, 11411, 11506, 11507, 11508,
    12505, 12506, 12508, 12509, 13503, 13506, 14411, 14503, 14508, 15504, 15505,
    15506,
  ];
  for (const weapon of E.Weapon.filter((e) => !blockIds.includes(e.id))) {
    const wInfo = {};
    // biome-ignore format: index
    for (const index of [
      "id",
      "icon",
      "rankLevel",
      "nameTextMapHash",
      "weaponType",
    ]) {
      wInfo[index] = weapon[index];
    }
    // costs
    const weaponPromote = E.WeaponPromote.filter(
      (e) => e.weaponPromoteId === weapon.weaponPromoteId
    );
    const promoteCoin = weaponPromote
      .map((e) => e.coinCost || 0)
      .reduce((a, b) => a + b);
    const materials = weaponPromote
      .filter((e) => e.costItems[0]?.id)
      .map((e) => e.costItems)
      .reduce((materialMap, items) => {
        for (const item of items) {
          if (!item.id) continue;
          materialMap[item.id] ??= 0;
          materialMap[item.id] += item.count;
        }
        return materialMap;
      }, {});
    if (Object.keys(materials).length === 0) continue;
    wInfo.allCosts = { promoteCoin, materials };
    w.push(wInfo);
  }
  // sort
  const weaponTypeFilter = (type) =>
    w
      .filter((e) => e.weaponType === type)
      .sort((a, b) => a.rankLevel - b.rankLevel)
      .reverse();
  dumpFile("weapon", [
    ...weaponTypeFilter("WEAPON_SWORD_ONE_HAND"),
    ...weaponTypeFilter("WEAPON_CLAYMORE"),
    ...weaponTypeFilter("WEAPON_BOW"),
    ...weaponTypeFilter("WEAPON_CATALYST"),
    ...weaponTypeFilter("WEAPON_POLE"),
  ]);
};

const dumpMaterial = () => {
  const avatar = readFile("avatar");
  const weapon = readFile("weapon");
  const avatarMaterials = avatar.flatMap((a) =>
    Object.keys(a.allCosts.materials).map((e) => Number(e))
  );
  const weaponMaterials = weapon.flatMap((w) =>
    Object.keys(w.allCosts.materials).map((e) => Number(e))
  );
  const m = [
    ...new Set([...avatarMaterials, ...weaponMaterials, 104003, 104013]),
  ]
    .sort()
    .map((id) => {
      const material = E.Material.find((e) => e.id === Number(id));
      const copyIndex = ["id", "icon", "rankLevel", "nameTextMapHash", "rank"];
      const re = {};
      for (const index of copyIndex) {
        re[index] = material[index];
      }
      return re;
    });
  dumpFile("material", m);
};

const dumpReliquaryIcon = () => {
  const blockList = [
    "UI_RelicIcon_15004_1",
    "UI_RelicIcon_15004_2",
    "UI_RelicIcon_15004_3",
    "UI_RelicIcon_15004_4",
    "UI_RelicIcon_15004_5",
    "UI_RelicIcon_15012_3",
    "UI_RelicIcon_15000_1",
    "UI_RelicIcon_15000_2",
    "UI_RelicIcon_15000_3",
    "UI_RelicIcon_15000_4",
    "UI_RelicIcon_15000_5",
  ];
  const icon = [...new Set(E.Reliquary.map((r) => r.icon))].filter(
    (i) => !blockList.includes(i)
  );
  dumpFile("reliquary-icon", icon);
};

const dumpReliquarySet = () => {
  const set = E.ReliquarySet.map((set) => {
    const { setId, equipAffixId } = set;
    const affix = E.EquipAffix.find((e) => e.id === equipAffixId && !!e.level);
    const nameTextMapHash = affix?.nameTextMapHash || 0;
    return {
      id: setId,
      nameTextMapHash,
    };
  });
  dumpFile("reliquary-set", set);
};

const dumpProfilePicture = () => {
  const pfp = {};
  for (const p of E.ProfilePicture) {
    pfp[p.id.toString()] = p.iconPath;
  }
  dumpFile("profile-picture", pfp);
};

const dumpTextMap = () => {
  let hashs = readFile("avatar").map((e) => e.nameTextMapHash);
  hashs.push(...readFile("weapon").map((e) => e.nameTextMapHash));
  hashs.push(...readFile("material").map((e) => e.nameTextMapHash));
  hashs.push(...readFile("reliquary-set").map((e) => e.nameTextMapHash));
  hashs = [...new Set(hashs)];
  // const textMap = {};
  for (const lang of Object.keys(TextMap)) {
    // textMap[lang] ??= {};
    // for (const hash of hashs) {
    //   textMap[lang][hash] = TextMap[lang][hash];
    // }
    const message = JSON.parse(
      fs.readFileSync(`./messages/${lang}.json`, "utf8")
    );
    message.genshin = {};
    for (const hash of hashs) {
      message.genshin[hash] = TextMap[lang][hash];
    }
    fs.writeFileSync(
      `./messages/${lang}.json`,
      JSON.stringify(message, null, 2)
    );
  }
  // dumpFile("text-map", textMap);
};

const dumpReliquaryAffix = () => {
  const re = E.ReliquaryAffix.map((e) => ({
    id: e.id,
    propType: e.propType,
    propValue: e.propValue,
  }));
  dumpFile("reliquary-affix", re);
};

const readFile = (name) =>
  JSON.parse(fs.readFileSync(`${folder.dist + name}.json`, "utf8"));
const dumpFile = (name, data) => {
  fs.writeFileSync(`${folder.dist + name}.json`, JSON.stringify(data, null, 2));
};
