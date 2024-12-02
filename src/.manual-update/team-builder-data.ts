import type { Avatar } from '@components/team-builder/types'

export const avatar: Avatar[] = [
  /*
  {
    name: '',
    score: [0, 0, 0, 0],
  },
  */
  {
    name: 'Chasca',
    score: [1, 0, 0, 0],
    dmg: ['charge'],
    explor: ['fly', 3],
    coop: [
      { score: 1, add: [[{ elem: ['4elem'] }, { elem: ['4elem'] }, { elem: ['4elem'] }]] },
      { score: 4, add: [[{ elem: ['4elem'] }, { elem: ['4elem'] }]] },
    ],
    filter: { score: 5, roll: 'main' },
  },
  {
    name: 'Xilonen',
    score: [0, 0, 1, 2],
    explor: ['climb', 3],
    coop: [{ score: 4, add: [{ roll: ['main', 'sub'], elem: ['4elem'] }] }],
    filter: { score: 5, roll: 'healer' },
  },
  {
    name: 'Kinich',
    score: [5, 0, 0, 0],
    dmg: ['skill'],
    explor: ['fly', 2],
  },
  {
    name: 'Mualani',
    score: [5, 0, 0, 0],
    dmg: ['skill'],
    stat: ['HP'],
    explor: ['boat', 2],
    coop: [
      { score: -2, add: [{ trigger: ['normal'] }] },
      { score: 1, add: [{ elem: ['Pyro'] }] },
      { score: 2, add: ['Dehya'] },
    ],
  },
  {
    name: 'Emilie',
    score: [0, 4, 0, 0],
    burstDep: 2,
    dmg: ['skill'],
    coop: [{ score: 2, add: [{ elem: ['Pyro'] }] }],
    filter: { score: 5, roll: 'sub' },
  },
  {
    name: 'Sigewinne',
    score: [0, 0, 0, 3],
    coop: [{ score: 2, add: [{ roll: ['sub'], dmg: ['skill'] }] }],
    filter: { score: 4, roll: 'healer' },
  },
  {
    name: 'Clorinde',
    score: [6, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Arlecchino',
    score: [6, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Chiori',
    score: [0, 4, 0, 0],
    dmg: ['skill'],
    stat: ['DEF'],
    coop: [{ score: 2, add: ['Arataki Itto', 'Albedo', 'Zhongli', 'Ningguang'] }],
    filter: { score: 5, roll: 'sub' },
  },
  {
    name: 'Xianyun',
    score: [0, 0, 2, 3],
    explor: ['fly', 2],
    coop: [
      { score: 2, add: ['Diluc'] },
      { score: 3, add: [{ roll: ['main'], dmg: ['plunge'] }] },
    ],
    filter: { score: 5, roll: 'healer' },
  },
  {
    name: 'Navia',
    score: [4, 3, 0, 0],
    dmg: ['skill'],
    coop: [{ score: 2, add: [{ elem: ['4elem'] }] }],
    filter: { score: 5, roll: 'main' },
  },
  {
    name: 'Furina',
    score: [0, 6, 4, 0],
    burstDep: 2,
    dmg: ['skill'],
    stat: ['HP'],
    explor: ['boat', 3],
  },
  {
    name: 'Wriothesley',
    score: [5, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Neuvillette',
    score: [6, 0, 0, 0],
    dmg: ['charge'],
    stat: ['HP'],
    coop: [{ score: -2, add: [{ trigger: ['normal'] }] }],
  },
  {
    name: 'Lyney',
    score: [4, 0, 0, 0],
    dmg: ['charge'],
    coop: [{ score: 2, add: [[{ elem: ['Pyro'] }, { elem: ['Pyro'] }]] }],
    filter: { score: 5, roll: 'main' },
  },
  {
    name: 'Baizhu',
    score: [0, 0, 0, 5],
    burstDep: 3,
  },
  {
    name: 'Dehya',
    score: [3, 0, 1, 0],
    burstDep: 3,
    dmg: ['burst'],
    stat: ['ATK', 'HP'],
    explor: ['run-speed', 1],
  },
  {
    name: 'Alhaitham',
    score: [5, 0, 0, 0],
    dmg: ['normal'],
    stat: ['ATK', 'EM'],
    coop: [{ score: 1, add: [{ elem: ['Electro'] }] }],
    filter: { score: 6, roll: 'main' },
  },
  {
    name: 'Wanderer',
    score: [5, 0, 0, 0],
    dmg: ['normal'],
    explor: ['fly', 3],
  },
  {
    name: 'Nahida',
    score: [0, 6, 0, 0],
    dmg: ['skill'],
    stat: ['EM'],
  },
  {
    name: 'Nilou',
    score: [1, 0, 1, 0],
    dmg: ['normal'],
    stat: ['HP'],
    coop: [
      { score: 1, add: [[{ elem: ['Hydro'] }, { elem: ['Dendro'] }, { elem: ['Dendro'] }]] },
      { score: 4, add: [[{ elem: ['Dendro'] }, { elem: ['Hydro', 'Dendro'] }, { elem: ['Hydro', 'Dendro'] }]] },
    ],
    filter: { score: 5, roll: 'support' },
  },
  {
    name: 'Cyno',
    score: [5, 0, 0, 0],
    burstDep: 3,
  },
  {
    name: 'Tighnari',
    score: [5, 0, 0, 0],
    dmg: ['charge'],
    coop: [{ score: -2, add: [{ trigger: ['normal'] }] }],
  },
  {
    name: 'Yelan',
    score: [0, 5, 0, 0],
    burstDep: 2,
    dmg: ['burst'],
    stat: ['HP'],
    trigger: ['normal'],
    explor: ['run', 2],
  },
  {
    name: 'Kamisato Ayato',
    score: [5, 3, 0, 0],
    burstDep: 2,
    dmg: ['normal'],
  },
  {
    name: 'Yae Miko',
    score: [0, 5, 0, 0],
    dmg: ['skill'],
  },
  {
    name: 'Shenhe',
    score: [0, 0, 1, 0],
    burstDep: 3,
    coop: [{ score: 4, add: [{ roll: ['main', 'sub'], elem: ['Cryo'] }] }],
    filter: { score: 4, roll: 'support' },
  },
  {
    name: 'Arataki Itto',
    score: [5, 0, 0, 0],
    burstDep: 3,
    dmg: ['charge'],
    stat: ['ATK', 'DEF'],
  },
  {
    name: 'Sangonomiya Kokomi',
    score: [3, 0, 0, 5],
    burstDep: 1,
    dmg: ['normal'],
    stat: ['HP'],
  },
  {
    name: 'Raiden Shogun',
    score: [5, 0, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
    coop: [
      { score: -2, add: ['Beidou'] },
      { score: 1, add: [{ roll: ['sub'], dmg: ['burst'] }] },
    ],
    filter: { score: 6, roll: 'main' },
  },
  {
    name: 'Yoimiya',
    score: [5, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Kamisato Ayaka',
    score: [4, 3, 0, 0],
    burstDep: 3,
    dmg: ['normal', 'burst'],
    explor: ['boat', 2],
    coop: [{ score: 1, add: [{ elem: ['Hydro'] }, { elem: ['Cryo'] }] }],
    filter: { score: 5, roll: 'main' },
  },
  {
    name: 'Kaedehara Kazuha',
    score: [0, 0, 5, 0],
    explor: ['climb', 1],
    coop: [{ score: -3, add: [{ roll: ['main'], elem: ['Dendro', 'Anemo', 'Geo'] }] }],
  },
  {
    name: 'Eula',
    score: [5, 0, 0, 0],
    burstDep: 3,
    dmg: ['normal', 'burst'],
  },
  {
    name: 'Hu Tao',
    score: [5, 0, 0, 0],
    dmg: ['charge'],
    coop: [{ score: 1, add: [{ roll: ['sub'], elem: ['Hydro'] }] }],
  },
  {
    name: 'Xiao',
    score: [6, 0, 0, 0],
    burstDep: 2,
    dmg: ['plunge'],
    coop: [{ score: -3, add: [{ trigger: ['normal'] }] }],
  },
  {
    name: 'Ganyu',
    score: [5, 3, 0, 0],
    burstDep: 1,
    dmg: ['charge', 'burst'],
  },
  {
    name: 'Albedo',
    score: [0, 5, 0, 0],
    dmg: ['skill'],
  },
  {
    name: 'Zhongli',
    score: [0, 0, 0, 5],
  },
  {
    name: 'Tartaglia',
    score: [5, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Klee',
    score: [5, 0, 0, 0],
    dmg: ['normal', 'charge'],
  },
  {
    name: 'Venti',
    score: [0, 4, 5, 0],
    burstDep: 2,
    explor: ['fly', 1],
    dmg: ['burst'],
  },
  {
    name: 'Keqing',
    score: [4, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Mona',
    score: [0, 4, 0, 0],
    burstDep: 2,
    dmg: ['burst'],
    explor: ['boat', 1],
  },
  {
    name: 'Qiqi',
    score: [0, 0, 0, 4],
    burstDep: 4,
  },
  {
    name: 'Diluc',
    score: [4, 0, 0, 0],
    burstDep: 1,
    dmg: ['normal'],
  },
  {
    name: 'Jean',
    score: [0, 0, 0, 4],
    burstDep: 3,
  },

  {
    name: 'Ororon',
    score: [0, 1, 0, 0],
    coop: [
      { score: 1, add: [{ elem: ['Hydro'] }] },
      { score: 2, add: [{ roll: ['main'], elem: ['Anemo', 'Cryo', 'Dendro', 'Geo', 'Hydro', 'Pyro'] }] },
    ],
    filter: { score: 3, roll: 'sub' },
  },
  {
    name: 'Kachina',
    score: [0, 0, 1, 0],
    explor: ['climb', 2],
    coop: [{ score: 2, add: [{ roll: ['main'], elem: ['4elem'] }] }],
    filter: { score: 3, roll: 'support' },
  },
  {
    name: 'Sethos',
    score: [4, 0, 0, 0],
    burstDep: 2,
    dmg: ['charge'],
  },
  {
    name: 'Gaming',
    score: [4, 0, 0, 0],
    burstDep: 2,
    explor: ['run-speed', 1],
    coop: [{ score: -1, add: [{ trigger: ['normal'] }] }],
  },
  {
    name: 'Chevreuse',
    score: [0, 0, 0, 1],
    burstDep: 2,
    explor: ['run-stamina', 1],
    coop: [
      {
        score: 2,
        add: [
          { elem: ['Electro'] },
          [{ elem: ['Electro'] }, { elem: ['Electro'] }, { elem: ['Electro'] }],
          [{ elem: ['Electro'] }, { elem: ['Electro'] }, { elem: ['Pyro'] }],
          [{ elem: ['Electro'] }, { elem: ['Pyro'] }, { elem: ['Pyro'] }],
        ],
      },
    ],
    filter: { score: 4, roll: 'healer' },
  },
  {
    name: 'Charlotte',
    score: [0, 0, 0, 4],
    burstDep: 3,
  },
  {
    name: 'Freminet',
    score: [3, 0, 0, 0],
    burstDep: 2,
    dmg: ['normal'],
    coop: [{ score: 1, add: [{ elem: ['Electro', 'Hydro'] }] }],
  },
  {
    name: 'Lynette',
    score: [0, 0, 1, 0],
    burstDep: 3,
    coop: [{ score: 1, add: [{ stat: ['ATK'] }] }],
    filter: { score: 2, roll: 'support' },
  },
  {
    name: 'Kirara',
    score: [0, 0, 0, 2],
    burstDep: 1,
    explor: ['climb', 1],
  },
  {
    name: 'Kaveh',
    score: [1, 0, 0, 0],
    burstDep: 3,
    stat: ['EM'],
    coop: [
      { score: 3, add: [{ elem: ['Hydro'] }] },
      { score: -2, add: [{ elem: ['Pyro', 'Electro'] }] },
    ],
    filter: { score: 3, roll: 'main' },
  },
  {
    name: 'Mika',
    score: [0, 0, 0, 2],
    burstDep: 3,
    coop: [
      { score: 1, add: [{ roll: ['main'], dmg: ['normal'] }] },
      { score: 3, add: ['Eula', 'Freminet', 'Razor'] },
    ],
    filter: { score: 4, roll: 'healer' },
  },
  {
    name: 'Yaoyao',
    score: [0, 0, 0, 4],
    burstDep: 1,
  },
  {
    name: 'Faruzan',
    score: [0, 0, 1, 0],
    burstDep: 3,
    coop: [{ score: 4, add: [{ roll: ['main'], elem: ['Anemo'] }] }],
    filter: { score: 4, roll: 'support' },
  },
  {
    name: 'Layla',
    score: [0, 4, 0, 2],
    burstDep: 1,
    dmg: ['burst'],
  },
  {
    name: 'Candace',
    score: [0, 0, 1, 0],
    burstDep: 2,
  },
  {
    name: 'Dori',
    score: [0, 0, 0, 3],
    burstDep: 3,
  },
  {
    name: 'Collei',
    score: [0, 3, 0, 0],
    burstDep: 2,
    dmg: ['burst'],
  },
  {
    name: 'Shikanoin Heizou',
    score: [2, 0, 0, 0],
    dmg: ['normal', 'skill'],
    explor: ['run-stamina', 1],
    coop: [{ score: 2, add: [{ elem: ['4elem'] }] }],
    filter: { score: 4, roll: 'main' },
  },
  {
    name: 'Kuki Shinobu',
    score: [0, 0, 0, 3],
    coop: [{ score: 2, add: [[{ elem: ['Hydro'] }, { elem: ['Dendro'] }]] }],
    filter: { score: 4, roll: 'healer' },
  },
  {
    name: 'Yun Jin',
    score: [0, 0, 1, 0],
    burstDep: 2,
    coop: [{ score: 3, add: [{ roll: ['main'], dmg: ['normal'] }] }],
    filter: { score: 3, roll: 'support' },
  },
  {
    name: 'Gorou',
    score: [0, 0, 1, 0],
    burstDep: 1,
    coop: [
      { score: 1, add: [[{ elem: ['Geo'] }, { elem: ['Geo'] }]] },
      { score: 3, add: [{ roll: ['main'], elem: ['Geo'], stat: ['DEF'] }] },
    ],
    filter: { score: 3, roll: 'support' },
  },
  {
    name: 'Thoma',
    score: [0, 0, 1, 1],
    burstDep: 3,
    trigger: ['normal'],
    coop: [{ score: 2, add: [[{ elem: ['Hydro'] }, { elem: ['Dendro'] }]] }],
    filter: { score: 2, roll: 'support' },
  },
  {
    name: 'Kujou Sara',
    score: [0, 2, 3, 0],
    burstDep: 2,
    dmg: ['burst'],
    coop: [{ score: 2, add: [{ roll: ['main'], elem: ['Electro'], stat: ['ATK'] }] }],
    filter: { score: 4, roll: 'support' },
  },
  {
    name: 'Sayu',
    score: [0, 0, 0, 3],
    burstDep: 3,
    explor: ['run', 3],
  },
  {
    name: 'Yanfei',
    score: [4, 0, 0, 0],
    burstDep: 2,
    dmg: ['charge'],
  },
  {
    name: 'Rosaria',
    score: [0, 5, 0, 0],
    burstDep: 2,
    explor: ['run-speed', 1],
  },
  {
    name: 'Xinyan',
    score: [1, 1, 0, 0],
    burstDep: 1,
    dmg: ['burst'],
  },
  {
    name: 'Diona',
    score: [0, 0, 0, 5],
    burstDep: 2,
  },
  {
    name: 'Sucrose',
    score: [0, 0, 3, 0],
    burstDep: 2,
    coop: [{ score: 1, add: [{ stat: ['EM'] }] }],
  },
  {
    name: 'Chongyun',
    score: [2, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Noelle',
    score: [3, 0, 0, 1],
    burstDep: 3,
    dmg: ['normal'],
    stat: ['ATK', 'DEF'],
  },
  {
    name: 'Bennett',
    score: [0, 0, 1, 3],
    burstDep: 2,
    coop: [
      { score: 1, add: ['Xiangling'] },
      { score: 2, add: [{ roll: ['main'], stat: ['ATK'] }] },
    ],
    filter: { score: 5, roll: 'healer' },
  },
  {
    name: 'Fischl',
    score: [0, 4, 0, 0],
    burstDep: 1,
    dmg: ['skill'],
  },
  {
    name: 'Ningguang',
    score: [3, 0, 1, 0],
    dmg: ['charge'],
  },
  {
    name: 'Xingqiu',
    score: [0, 5, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
    trigger: ['normal'],
  },
  {
    name: 'Beidou',
    score: [0, 5, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
    trigger: ['normal'],
  },
  {
    name: 'Xiangling',
    score: [0, 5, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
  },
  {
    name: 'Razor',
    score: [3, 0, 0, 0],
    burstDep: 3,
    dmg: ['normal'],
    explor: ['run-stamina', 1],
    coop: [{ score: 1, add: [{ elem: ['Cryo'] }] }],
  },
  {
    name: 'Barbara',
    score: [0, 0, 0, 2],
    burstDep: 4,
  },
  {
    name: 'Lisa',
    score: [0, 3, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
  },
  {
    name: 'Kaeya',
    score: [0, 4, 0, 0],
    burstDep: 2,
    dmg: ['burst'],
    explor: ['run-stamina', 1],
  },
  {
    name: 'Amber',
    score: [0, 2, 0, 0],
    burstDep: 1,
    dmg: ['burst'],
  },

  {
    name: 'Aloy',
    score: [2, 0, 0, 0],
    dmg: ['normal'],
  },
  {
    name: 'Traveler',
    elem: 'Hydro',
    score: [0, 0, 0, 1],
    burstDep: 0,
  },
  {
    name: 'Traveler',
    elem: 'Dendro',
    score: [0, 3, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
  },
  {
    name: 'Traveler',
    elem: 'Electro',
    score: [0, 3, 0, 0],
    burstDep: 3,
    dmg: ['burst'],
    trigger: ['normal'],
  },
  {
    name: 'Traveler',
    elem: 'Geo',
    score: [0, 0, 1, 0],
    burstDep: 1,
  },
  {
    name: 'Traveler',
    elem: 'Anemo',
    score: [0, 0, 1, 0],
    burstDep: 1,
  },
]
