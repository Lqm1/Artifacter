export const defaultLang = 'en'

export const ui = {
  en: {
    label: 'English',
    'seo.prefix': 'Genshin Impact ',
    'game.title': 'Genshin Impact',
    'game.characters': 'Characters',
    'game.weapons': 'Weapons',
    'footer.unofficial': 'Paimon+ is not affiliated to miHoYo.',
    'nopage.text': 'This page is no longer available. Please visit the new URL below.',
    // home
    'home.title': 'Genshin Impact Online Tools',
    'home.thanks': 'Appreciation',
    'home.developers': 'Developers',
    'home.translators': 'Translators',
    'home.resources': 'Resources',
    'home.nav.crit-ratio': 'CRIT Checker',
    'home.nav.team-builder': 'Team Builder',
    'home.nav.showcase': 'Showcase',
    'home.nav.avg-dmg': 'Avg. Calc',
    'home.nav.wish-banner': 'Wish Banner',
    'home.nav.analytics': 'Statistics',
    'home.nav.player-card': 'Player Card',
    'home.nav.randomizer': 'Randomizer',
    'home.nav.artifacter': 'Artifacter',
    'home.nav.official': 'Official Link',
    'home.nav.checkin': 'Check-In',
    'home.nav.wiki': 'HoYoWiki',
    'home.nav.map': 'Teyvat Map',
    'home.nav.chronicle': 'Chronicle',
    'home.nav.calculator': 'Calculator',
    'home.nav.calendar': 'Calendar',
    // showcase, artifacter
    'showcase.title': 'Character Showcase',
    'showcase.error.register': 'No characters found in the Character Showcase.',
    'showcase.error.public':
      'Please enable the "Show Character Details" option in your Character Showcase in-game to see the details.',
    'showcase.analysis': 'Analysis',
    'showcase.more': 'Read more',
    'showcase.statistics': 'Statistics',
    'showcase.crit-ratio': 'CRIT Ratio Checker',
    'showcase.comp': 'Stats Comparison',
    'showcase.you': 'You',
    'showcase.median': 'Median',
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
    // crit-ratio, avg-dmg
    'crit-ratio.title': 'CRIT Ratio Checker',
    'crit-ratio.(wg)': '(White + Green)',
    'crit-ratio.keep': 'Keep Note',
    'crit-ratio.current': 'Current Ratio',
    'crit-ratio.ideal': 'Ideal Ratio',
    'crit-ratio.green': 'Green',
    'crit-ratio.avg': 'Avg.',
    'crit-ratio.diff': 'Difference from Ideal Ratio',
    'crit-ratio.HP': 'Balance of HP and CRIT',
    'crit-ratio.ATK': 'Balance of ATK and CRIT',
    'crit-ratio.DEF': 'Balance of DEF and CRIT',
    'crit-ratio.low': 'Low equipment score makes it appear as an specialization.',
    'avg-dmg.title': 'Average Damage Calculator',
    'avg-dmg.stats': 'In The Stats',
    'avg-dmg.damage': 'Damage Dealt',
    'avg-dmg.noncrit': 'Non CRIT',
    'avg-dmg.avg': 'Damage (Avg.)',
    // statistics
    'statistics.title': 'Showcase Analytics',
    'statistics.player': 'Player Data',
    'statistics.users': 'users',
    'statistics.ar': 'Adventure Rank',
    'statistics.achievement': 'Achievement',
    'statistics.abyss': 'Spiral Abyss Floor',
    'statistics.theater': 'Imaginarium Theater Floor',
    'statistics.character': 'Character Data',
    'statistics.select-character': 'Select Character',
    'statistics.talent': 'Median Talent Level',
    'statistics.stats': 'Median Stats',
    // wish-banner
    'wish-banner.title': 'Wish Banner History',
    'wish-banner.ver': 'Ver.',
    'wish-banner.hint': '[Shift] + [Mouse Wheel] to scroll horizontally',
    // stat
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
    'seo.prefix': '【原神】',
    'game.title': '原神',
    'game.characters': 'キャラクター',
    'game.weapons': '武器',
    'footer.unofficial': 'Paimon+は非公式のwebサイトです。',
    'nopage.text': 'このページは廃止されました。代わりに次のURLを利用してください。',
    'home.title': '原神 webツール',
    'home.thanks': '謝辞',
    'home.developers': '開発者',
    'home.translators': '翻訳者',
    'home.resources': 'データソース',
    'home.nav.crit-ratio': '理想値診断',
    'home.nav.team-builder': 'パーティ編成',
    'home.nav.showcase': 'プロフキャラ',
    'home.nav.avg-dmg': '期待値計算',
    'home.nav.wish-banner': '祈願PU履歴',
    'home.nav.analytics': '統計データ',
    'home.nav.player-card': '自己紹介カード',
    'home.nav.randomizer': 'サイコロ螺旋',
    'home.nav.official': '公式リンク',
    'home.nav.checkin': 'ログボ',
    'home.nav.map': 'マップ',
    'home.nav.chronicle': '戦績',
    'home.nav.calculator': '育成計算機',
    'home.nav.calendar': '素材曜日',
    'showcase.title': 'プロフィール キャラクター',
    'showcase.error.register': 'キャラクターラインナップにキャラが登録されていません。',
    'showcase.error.public':
      '「キャラクターラインナップ」の「キャラ詳細非表示」を「キャラ詳細表示中」に切り替えて下さい。',
    'showcase.analysis': '分析',
    'showcase.more': '詳しく見る',
    'showcase.crit-ratio': '会心バランス診断',
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
    'crit-ratio.title': '会心バランス 理想値診断',
    'crit-ratio.(wg)': '(白字 + 緑字)',
    'crit-ratio.keep': '期待値をメモ',
    'crit-ratio.current': '現在値',
    'crit-ratio.ideal': '理想値',
    'crit-ratio.green': '緑',
    'crit-ratio.avg': '期待値',
    'crit-ratio.diff': '理想値との差',
    'crit-ratio.HP': 'HPと会心のバランス',
    'crit-ratio.ATK': '攻撃と会心のバランス',
    'crit-ratio.DEF': '防御と会心のバランス',
    'crit-ratio.low': '装備スコアが低いと、特化型として表示されます。',
    'avg-dmg.title': 'ダメージ期待値 計算機',
    'avg-dmg.stats': 'ステータス',
    'avg-dmg.damage': '与ダメージ',
    'avg-dmg.noncrit': '非会心',
    'avg-dmg.avg': 'ダメージ (期待値)',
    'wish-banner.title': '祈願ピックアップ履歴',
    'wish-banner.hint': '[Shift] + [マウスホイール] で横スクロール',
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
    'Cryo DMG Bonus': '氷元素ダメージ',
    'Geo DMG Bonus': '岩元素ダメージ',
    'CRIT Value': '会心スコア',
  },
  ko: {
    label: '한국어',
    'seo.prefix': '[원신] ',
    'game.title': '원신',
    'footer.unofficial': 'Paimon+는 비공식 웹사이트입니다.',
    'home.title': '원신 웹 툴',
    'showcase.title': '캐릭터 진열장',
  },
  pt: {
    label: 'Português',
    'seo.prefix': 'Genshin Impact ',
    'game.title': 'Genshin Impact',
    'game.characters': 'Personagens',
    'game.weapons': 'Armas',
    'footer.unofficial': 'Paimon+ não esta filiada com a miHoYo.',
    'nopage.text': 'Esta página não está mais disponível. Visite o novo URL abaixo.',
    'home.title': 'Ferramentas Genshin Impact Online',
    'home.thanks': 'Agradecimentos',
    'home.developers': 'Desenvolvedor',
    'home.translators': 'Tradução',
    'home.resources': 'Recursos',
    'home.nav.crit-ratio': 'Visualizador de Crítico',
    'home.nav.team-builder': 'Construtor de Equipes',
    'home.nav.showcase': 'Personagens do Perfil',
    'home.nav.avg-dmg': 'Calculadora de Dano',
    'home.nav.wish-banner': 'Histórico de Banners',
    'home.nav.analytics': 'Estatísticas',
    'home.nav.player-card': 'Cartão do Jogador',
    'home.nav.randomizer': 'Aleatorizador de Equipes',
    'home.nav.artifacter': 'Artifacter',
    'home.nav.official': 'Links Oficiais',
    'home.nav.checkin': 'Check-In',
    'home.nav.wiki': 'HoYoWiki',
    'home.nav.map': 'Mapa Interativo de Teyvat',
    'home.nav.chronicle': 'Conquistas',
    'home.nav.calculator': 'Calculador  de Aprimoramento',
    'home.nav.calendar': 'Calendário de Viagem',
    'showcase.title': 'Exibição de Personagens',
    'showcase.error.register': 'Nenhum Personagem foi encontrado no Perfil.',
    'showcase.error.public':
      'Por favor, ative a opção "Mostrar os detalhes do Personagem" em Exibição de Personagem no jogo par ver os detalhes.',
    'showcase.analysis': 'Análise',
    'showcase.more': 'Ver mais',
    'showcase.crit-ratio': 'Visualizador de Chance de Crítico',
    'artifacter.title': 'Rede Artifacter',
    'artifacter.card.total': 'Pontuação Total',
    'artifacter.card.tcv': 'CV Total',
    'artifacter.crit': 'CV Apenas',
    'artifacter.hint.none': 'Esta pontuação não está no original.',
    'artifacter.hint.same': 'Esta pontuação é igual à original.',
    'artifacter.hint.formula': 'Fórmula',
    'artifacter.hint.grade': 'Nota',
    'artifacter.team': 'Cartão de Time',
    'artifacter.projects': 'Esta página é um dos projetos subsequentes do Genshin Artifacter.',
    'artifacter.original': 'Original',
    'uid.player.ar': 'AR',
    'uid.player.wl': 'WL',
    'uid.player.achievements': 'Conquistas',
    'uid.player.friendship': 'Amizade Máxima',
    'uid.player.tower': 'Abismo do Espiral',
    'uid.player.theater': 'Teatro das Realidades Imaginárias',
    'uid.player.server': 'Status do Servidor',
    'uid.error.400': 'Você pode ter excedido o limite de taxa da Cloudflare.',
    'uid.error.404': 'O UID de destino talvez não exista.',
    'uid.error.424': 'Provavelmente o servidor do Genshin ou o servidor do Enka está em manutenção.',
    'uid.error.429': 'Os limites de taxa do servidor Enka ou Genshin podem ter sido excedidos.',
    'uid.error.500': 'Possível erro do servidor do Enka.',
    'uid.error.503': 'O servidor Enka pode estar temporariamente fora do ar.',
    'uid.error.other': 'Erro desconhecido. Entre em contato com o desenvolvedor.',
    'uid.error.li1': '1. Tente recarregar a página',
    'uid.error.li2': '2. Tente inserir o UID novamente mais tarde.',
    'uid.error.report': 'Se você reportar isso em nosso Discord, poderemos lidar com isso mais rapido',
    'uid.error.link': 'Link de convite do Discord',
    'card.download': 'Baixar',
    'crit-ratio.title': 'Visualizador de Chance de Crítico',
    'crit-ratio.(wg)': '(Branco + Verde)',
    'crit-ratio.keep': 'Salvar Nota',
    'crit-ratio.current': 'Taxa Atual',
    'crit-ratio.ideal': 'Taxa Ideal',
    'crit-ratio.green': 'Verde',
    'crit-ratio.avg': 'Média',
    'crit-ratio.diff': 'Diferença da Taxa Ideal',
    'crit-ratio.HP': 'Saldo de Vida e Crítico',
    'crit-ratio.ATK': 'Saldo de ATQ e Crítico',
    'crit-ratio.DEF': 'Saldo de DEF e Crítico',
    'crit-ratio.low': 'A baixa pontuação do equipamento faz com que pareça uma melhoria',
    'avg-dmg.title': 'Calculadora de Dano',
    'avg-dmg.stats': 'Status',
    'avg-dmg.damage': 'Dano Causado',
    'avg-dmg.noncrit': 'Sem CRIT',
    'avg-dmg.avg': 'Dano (Média)',
    'statistics.title': 'Estatísticas',
    'statistics.player': 'Dados dos Jogadores',
    'statistics.ar': 'Rank de Aventura',
    'statistics.achievement': 'Conquistas',
    'statistics.abyss': 'Pisos do Abismo do Espiral',
    'statistics.theater': 'Pisos do Teatro das Realidades Imaginárias',
    'statistics.character': 'Dados do Personagem',
    'wish-banner.title': 'Histórico de Banners',
    'wish-banner.ver': 'Ver.',
    'wish-banner.hint': '[Shift] + [Scroll do mouse] para rolar horizontalmente',
    'Base ATK': 'ATQ Básico',
    HP: 'Vida',
    ATK: 'ATQ',
    DEF: 'DEF',
    'HP %': 'Vida%',
    'ATK %': 'ATQ%',
    'DEF %': 'DEF%',
    CRIT: 'CRIT',
    'CRIT Rate': 'Taxa Crítica',
    'CRIT DMG': 'Dano Crítico',
    'C Rate': 'Taxa Crítica',
    'C DMG': 'Dano Crítico',
    EM: 'P.E',
    ER: 'R.E',
    'Elemental Mastery': 'Proficiência Elemental',
    'Energy Recharge': 'Recarga de Energia',
    'El. Mastery': 'Prof. Elemental',
    'En. Recharge': 'Rec. Energia',
    'Healing Bonus': 'Bônus de Cura',
    'Elemental DMG Bonus': 'Bônus de Dano Elemental',
    'El. DMG': 'Dano Elem.',
    'Physical DMG Bonus': 'Bônus de Dano Físico',
    'Pyro DMG Bonus': 'Bônus de Dano Pyro',
    'Electro DMG Bonus': 'Bônus de Dano Electro',
    'Hydro DMG Bonus': 'Bônus de Dano Hydro',
    'Dendro DMG Bonus': 'Bônus de Dano Dendro',
    'Anemo DMG Bonus': 'Bônus de Dano Anemo',
    'Cryo DMG Bonus': 'Bônus de Dano Cryo',
    'Geo DMG Bonus': 'Bônus de Dano Geo',
    'CRIT Value': 'Valor Crítico',
  },
} as const
