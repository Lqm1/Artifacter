export const defaultLang = 'en'

export const ui = {
  en: {
    label: 'English',
    'game.title': 'Genshin Impact',
    'game.characters': 'Characters',
    'game.weapons': 'Weapons',
    'footer.unofficial': 'Paimon+ is not affiliated to miHoYo.',
    'home.title': 'Genshin Impact Online Tools',
    'home.thanks': 'Appreciation',
    'home.developers': 'Developers',
    'home.translators': 'Translators',
    'home.resources': 'Resources',
    'showcase.title': 'Character Showcase',
    'showcase.error.register': 'No characters found in the Character Showcase.',
    'showcase.error.public':
      'Please enable the "Show Character Details" option in your Character Showcase in-game to see the details.',
    'artifacter.title': 'Artifacter Web',
    'artifacter.card.total': 'Total Score',
    'artifacter.card.tcv': 'Total CRIT Value',
    'artifacter.crit': 'CRIT Only',
    'artifacter.hint.none': 'This scoring is not in the original.',
    'artifacter.hint.same': 'This scoring is the same as the original.',
    'artifacter.hint.formula': 'Formula',
    'artifacter.hint.grade': 'Grade',
    'artifacter.team': 'Team Card',
    'artifacter.projects': 'This page is one of Genshin Artifacter subsequent projects.',
    'artifacter.original': 'Original',
    'uid.player.ar': 'AR',
    'uid.player.wl': 'WL',
    'uid.player.achievements': 'Achievements',
    'uid.player.friendship': 'Max Friendship',
    'uid.player.tower': 'Spiral Abyss',
    'uid.player.theater': 'Imaginarium Theater',
    'uid.player.server': 'Server Status',
    'uid.error.400': "You may have exceeded Cloudflare's rate limit.",
    'uid.error.404': 'The target UID may not exist.',
    'uid.error.424': 'Probably Genshin server maintenance or Enka server maintenance.',
    'uid.error.429': 'Enka or Genshin server rate limits may have been exceeded.',
    'uid.error.500': 'Possible Enka server error.',
    'uid.error.503': 'Enka server may be temporarily down.',
    'uid.error.other': 'Unknown error. Please contact the developer.',
    'uid.error.li1': '1. Try reloading the page.',
    'uid.error.li2': '2. Try entering the UID again later.',
    'uid.error.report': 'If you report it on our Discord, we might be able to deal with it sooner.',
    'uid.error.link': 'Discord invitation link',
    'card.download': 'Download',
    '404.title': '404 Not Found',
    '404.text': 'Lost? This page has vanished!',
    // stat
    'Max HP': 'Max HP',
    'Base ATK': 'Base ATK',
    HP: 'HP',
    ATK: 'ATK',
    DEF: 'DEF',
    'HP %': 'HP %',
    'ATK %': 'ATK %',
    'DEF %': 'DEF %',
    CRIT: 'CRIT',
    'CRIT Rate': 'CRIT Rate',
    'CRIT DMG': 'CRIT DMG',
    'C Rate': 'C Rate',
    'C DMG': 'C DMG',
    EM: 'EM',
    ER: 'ER',
    'Elemental Mastery': 'Elemental Mastery',
    'Energy Recharge': 'Energy Recharge',
    'El. Mastery': 'El. Mastery',
    'En. Recharge': 'En. Recharge',
    'Healing Bonus': 'Healing Bonus',
    'Elemental DMG Bonus': 'Elemental DMG Bonus',
    'El. DMG': 'El. DMG',
    'Physical DMG Bonus': 'Physical DMG Bonus',
    'Pyro DMG Bonus': 'Pyro DMG Bonus',
    'Electro DMG Bonus': 'Electro DMG Bonus',
    'Hydro DMG Bonus': 'Hydro DMG Bonus',
    'Dendro DMG Bonus': 'Dendro DMG Bonus',
    'Anemo DMG Bonus': 'Anemo DMG Bonus',
    'Cryo DMG Bonus': 'Cryo DMG Bonus',
    'Geo DMG Bonus': 'Geo DMG Bonus',
    // like stat
    'CRIT Value': 'CRIT Value',
  },
  ja: {
    label: '日本語',
    'game.title': '原神',
    'game.characters': 'キャラクター',
    'game.weapons': '武器',
    'footer.unofficial': 'Paimon+は非公式のwebサイトです。',
    'home.title': '原神 webツール',
    'home.thanks': '謝辞',
    'home.developers': '開発者',
    'home.translators': '翻訳者',
    'home.resources': 'データソース',
    'showcase.title': 'プロフィール キャラクター',
    'showcase.error.register': 'キャラクターラインナップにキャラが登録されていません。',
    'showcase.error.public':
      '「キャラクターラインナップ」の「キャラ詳細非表示」を「キャラ詳細表示中」に切り替えて下さい。',
    'artifacter.card.total': '総合スコア',
    'artifacter.card.tcv': '総会心スコア',
    'artifacter.crit': '会心のみ',
    'artifacter.hint.none': '本家には無いスコアリングです。',
    'artifacter.hint.same': '本家と同じスコアリングです。',
    'artifacter.hint.formula': '計算式',
    'artifacter.hint.grade': '評価',
    'artifacter.team': 'パーティーカード',
    'artifacter.projects': 'このページはGenshin Artifacterの後続プロジェクトです。',
    'artifacter.original': '本家',
    'uid.player.achievements': 'アチーブメント',
    'uid.player.friendship': '好感度Max',
    'uid.player.tower': '深境螺旋',
    'uid.player.theater': '幻想シアター',
    'uid.player.server': 'サーバーステータス',
    'uid.error.400': 'Cloudflareのレート制限を超えた可能性があります。',
    'uid.error.404': '対象のUIDが存在していない可能性があります。',
    'uid.error.424': 'おそらく、原神サーバーのメンテナンスまたはEnkaサーバーのメンテナンスです。',
    'uid.error.429': 'Enkaまたは原神サーバーのレート制限を超えた可能性があります。',
    'uid.error.500': 'Enkaサーバーエラーの可能性があります。',
    'uid.error.503': 'Enkaサーバーが一時停止している可能性があります。',
    'uid.error.other': '未知のエラーです。開発者に連絡してください。',
    'uid.error.li1': '1. ページを更新してみてください。',
    'uid.error.li2': '2. 時間を置いてから、もう一度UIDを入力してみてください。',
    'uid.error.report': 'Discordで報告すると、より早く対応できるかもしれません。',
    'uid.error.link': 'Discordの招待リンク',
    'card.download': 'ダウンロード',
    '404.text': '迷子？このページは消えちゃいました！',
    // stat
    'Max HP': 'HP上限',
    'Base ATK': '基礎攻撃力',
    ATK: '攻撃力',
    DEF: '防御力',
    'ATK %': '攻撃力%',
    'DEF %': '防御力%',
    CRIT: '会心',
    'CRIT Rate': '会心率',
    'CRIT DMG': '会心ダメージ',
    'C Rate': '会心率',
    'C DMG': '会心ダメ',
    EM: '熟知',
    ER: 'チャージ',
    'Elemental Mastery': '元素熟知',
    'Energy Recharge': '元素チャージ',
    'El. Mastery': '元素熟知',
    'En. Recharge': '元素チャージ',
    'Healing Bonus': '与える治療効果',
    'Elemental DMG Bonus': '元素ダメージ',
    'El. DMG': '元素ダメージ',
    'Physical DMG Bonus': '物理ダメージ',
    'Pyro DMG Bonus': '炎元素ダメージ',
    'Electro DMG Bonus': '雷元素ダメージ',
    'Hydro DMG Bonus': '水元素ダメージ',
    'Dendro DMG Bonus': '草元素ダメージ',
    'Anemo DMG Bonus': '風元素ダメージ',
    'Geo DMG Bonus': '岩元素ダメージ',
    'Cryo DMG Bonus': '氷元素ダメージ',
    // like stat
    'CRIT Value': '会心スコア',
  },
  ko: {
    label: '한국어',
    'game.title': '원신',

    'footer.unofficial': 'Paimon+는 비공식 웹사이트입니다.',
    'home.title': '원신 웹 툴',
    'showcase.title': '캐릭터 진열장',
  },
} as const
