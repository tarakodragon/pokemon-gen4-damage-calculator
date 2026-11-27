const multiplierPosition = {
  none: "(なし)",
  attack: "攻撃値",
  power: "威力値",
  defense: "防御値",
  beforePlus2: "プラス2前",
  afterPlus2: "プラス2後",
  afterRand: "乱数後"
};

const typeList = [
  "ノーマル",
  "かくとう",
  "ひこう",
  "どく",
  "じめん",
  "いわ",
  "むし",
  "ゴースト",
  "はがね",
  "(なし)",
  "ほのお",
  "みず",
  "くさ",
  "でんき",
  "エスパー",
  "こおり",
  "ドラゴン",
  "あく"
];

const pokemonList = [
  {
    pokedexId: 0,
    name: "(なし)",
    stats: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    types: ["(なし)"],
    abilities: ["(なし)"],
    weightKilogram: 0,
    evolution: "(なし)"
  },
  {
    pokedexId: 1,
    name: "フシギダネ",
    stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    types: ["くさ", "どく"],
    abilities: ["しんりょく"],
    weightKilogram: 6.9,
    evolution: "未進化"
  },
  {
    pokedexId: 2,
    name: "フシギソウ",
    stats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    types: ["くさ", "どく"],
    abilities: ["しんりょく"],
    weightKilogram: 13,
    evolution: "中間進化"
  },
  {
    pokedexId: 3,
    name: "フシギバナ",
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    types: ["くさ", "どく"],
    abilities: ["しんりょく"],
    weightKilogram: 100,
    evolution: "最終進化"
  },
  {
    pokedexId: 4,
    name: "ヒトカゲ",
    stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 8.5,
    evolution: "未進化"
  },
  {
    pokedexId: 5,
    name: "リザード",
    stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 19,
    evolution: "中間進化"
  },
  {
    pokedexId: 6,
    name: "リザードン",
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    types: ["ほのお", "ひこう"],
    abilities: ["もうか"],
    weightKilogram: 90.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 7,
    name: "ゼニガメ",
    stats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 9,
    evolution: "未進化"
  },
  {
    pokedexId: 8,
    name: "カメール",
    stats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 22.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 9,
    name: "カメックス",
    stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 85.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 10,
    name: "キャタピー",
    stats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
    types: ["むし"],
    abilities: ["りんぷん"],
    weightKilogram: 2.9,
    evolution: "未進化"
  },
  {
    pokedexId: 11,
    name: "トランセル",
    stats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
    types: ["むし"],
    abilities: ["だっぴ"],
    weightKilogram: 9.9,
    evolution: "中間進化"
  },
  {
    pokedexId: 12,
    name: "バタフリー",
    stats: { hp: 60, atk: 45, def: 50, spa: 80, spd: 80, spe: 70 },
    types: ["むし", "ひこう"],
    abilities: ["ふくがん"],
    weightKilogram: 32,
    evolution: "最終進化"
  },
  {
    pokedexId: 13,
    name: "ビードル",
    stats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
    types: ["むし", "どく"],
    abilities: ["りんぷん"],
    weightKilogram: 3.2,
    evolution: "未進化"
  },
  {
    pokedexId: 14,
    name: "コクーン",
    stats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
    types: ["むし", "どく"],
    abilities: ["だっぴ"],
    weightKilogram: 10,
    evolution: "中間進化"
  },
  {
    pokedexId: 15,
    name: "スピアー",
    stats: { hp: 65, atk: 80, def: 40, spa: 45, spd: 80, spe: 75 },
    types: ["むし", "どく"],
    abilities: ["むしのしらせ"],
    weightKilogram: 29.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 16,
    name: "ポッポ",
    stats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ", "ちどりあし"],
    weightKilogram: 1.8,
    evolution: "未進化"
  },
  {
    pokedexId: 17,
    name: "ピジョン",
    stats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ", "ちどりあし"],
    weightKilogram: 30,
    evolution: "中間進化"
  },
  {
    pokedexId: 18,
    name: "ピジョット",
    stats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 91 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ", "ちどりあし"],
    weightKilogram: 39.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 19,
    name: "コラッタ",
    stats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
    types: ["ノーマル"],
    abilities: ["にげあし", "こんじょう"],
    weightKilogram: 3.5,
    evolution: "未進化"
  },
  {
    pokedexId: 20,
    name: "ラッタ",
    stats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    types: ["ノーマル"],
    abilities: ["にげあし", "こんじょう"],
    weightKilogram: 18.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 21,
    name: "オニスズメ",
    stats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ"],
    weightKilogram: 2,
    evolution: "未進化"
  },
  {
    pokedexId: 22,
    name: "オニドリル",
    stats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ"],
    weightKilogram: 38,
    evolution: "最終進化"
  },
  {
    pokedexId: 23,
    name: "アーボ",
    stats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
    types: ["どく"],
    abilities: ["いかく", "だっぴ"],
    weightKilogram: 6.9,
    evolution: "未進化"
  },
  {
    pokedexId: 24,
    name: "アーボック",
    stats: { hp: 60, atk: 85, def: 69, spa: 65, spd: 79, spe: 80 },
    types: ["どく"],
    abilities: ["いかく", "だっぴ"],
    weightKilogram: 65,
    evolution: "最終進化"
  },
  {
    pokedexId: 25,
    name: "ピカチュウ",
    stats: { hp: 35, atk: 55, def: 30, spa: 50, spd: 40, spe: 90 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 6,
    evolution: "中間進化"
  },
  {
    pokedexId: 26,
    name: "ライチュウ",
    stats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 100 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 30,
    evolution: "最終進化"
  },
  {
    pokedexId: 27,
    name: "サンド",
    stats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
    types: ["じめん"],
    abilities: ["すながくれ"],
    weightKilogram: 12,
    evolution: "未進化"
  },
  {
    pokedexId: 28,
    name: "サンドパン",
    stats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
    types: ["じめん"],
    abilities: ["すながくれ"],
    weightKilogram: 29.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 29,
    name: "ニドラン♀",
    stats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
    types: ["どく"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 7,
    evolution: "未進化"
  },
  {
    pokedexId: 30,
    name: "ニドリーナ",
    stats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
    types: ["どく"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 20,
    evolution: "中間進化"
  },
  {
    pokedexId: 31,
    name: "ニドクイン",
    stats: { hp: 90, atk: 82, def: 87, spa: 75, spd: 85, spe: 76 },
    types: ["どく", "じめん"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 60,
    evolution: "最終進化"
  },
  {
    pokedexId: 32,
    name: "ニドラン♂",
    stats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
    types: ["どく"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 9,
    evolution: "未進化"
  },
  {
    pokedexId: 33,
    name: "ニドリーノ",
    stats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
    types: ["どく"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 19.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 34,
    name: "ニドキング",
    stats: { hp: 81, atk: 92, def: 77, spa: 85, spd: 75, spe: 85 },
    types: ["どく", "じめん"],
    abilities: ["どくのトゲ", "とうそうしん"],
    weightKilogram: 62,
    evolution: "最終進化"
  },
  {
    pokedexId: 35,
    name: "ピッピ",
    stats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "マジックガード"],
    weightKilogram: 7.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 36,
    name: "ピクシー",
    stats: { hp: 95, atk: 70, def: 73, spa: 85, spd: 90, spe: 60 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "マジックガード"],
    weightKilogram: 40,
    evolution: "最終進化"
  },
  {
    pokedexId: 37,
    name: "ロコン",
    stats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
    types: ["ほのお"],
    abilities: ["もらいび"],
    weightKilogram: 9.9,
    evolution: "未進化"
  },
  {
    pokedexId: 38,
    name: "キュウコン",
    stats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    types: ["ほのお"],
    abilities: ["もらいび"],
    weightKilogram: 19.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 39,
    name: "プリン",
    stats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ"],
    weightKilogram: 5.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 40,
    name: "プクリン",
    stats: { hp: 140, atk: 70, def: 45, spa: 75, spd: 50, spe: 45 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ"],
    weightKilogram: 12,
    evolution: "最終進化"
  },
  {
    pokedexId: 41,
    name: "ズバット",
    stats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
    types: ["どく", "ひこう"],
    abilities: ["せいしんりょく"],
    weightKilogram: 7.5,
    evolution: "未進化"
  },
  {
    pokedexId: 42,
    name: "ゴルバット",
    stats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
    types: ["どく", "ひこう"],
    abilities: ["せいしんりょく"],
    weightKilogram: 55,
    evolution: "中間進化"
  },
  {
    pokedexId: 43,
    name: "ナゾノクサ",
    stats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 5.4,
    evolution: "未進化"
  },
  {
    pokedexId: 44,
    name: "クサイハナ",
    stats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 8.6,
    evolution: "中間進化"
  },
  {
    pokedexId: 45,
    name: "ラフレシア",
    stats: { hp: 75, atk: 80, def: 85, spa: 100, spd: 90, spe: 50 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 18.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 46,
    name: "パラス",
    stats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
    types: ["むし", "くさ"],
    abilities: ["ほうし", "かんそうはだ"],
    weightKilogram: 5.4,
    evolution: "未進化"
  },
  {
    pokedexId: 47,
    name: "パラセクト",
    stats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
    types: ["むし", "くさ"],
    abilities: ["ほうし", "かんそうはだ"],
    weightKilogram: 29.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 48,
    name: "コンパン",
    stats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
    types: ["むし", "どく"],
    abilities: ["ふくがん", "いろめがね"],
    weightKilogram: 30,
    evolution: "未進化"
  },
  {
    pokedexId: 49,
    name: "モルフォン",
    stats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
    types: ["むし", "どく"],
    abilities: ["りんぷん", "いろめがね"],
    weightKilogram: 12.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 50,
    name: "ディグダ",
    stats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
    types: ["じめん"],
    abilities: ["すながくれ", "ありじごく"],
    weightKilogram: 0.8,
    evolution: "未進化"
  },
  {
    pokedexId: 51,
    name: "ダグトリオ",
    stats: { hp: 35, atk: 80, def: 50, spa: 50, spd: 70, spe: 120 },
    types: ["じめん"],
    abilities: ["すながくれ", "ありじごく"],
    weightKilogram: 33.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 52,
    name: "ニャース",
    stats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
    types: ["ノーマル"],
    abilities: ["ものひろい", "テクニシャン"],
    weightKilogram: 4.2,
    evolution: "未進化"
  },
  {
    pokedexId: 53,
    name: "ペルシアン",
    stats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
    types: ["ノーマル"],
    abilities: ["じゅうなん", "テクニシャン"],
    weightKilogram: 32,
    evolution: "最終進化"
  },
  {
    pokedexId: 54,
    name: "コダック",
    stats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
    types: ["みず"],
    abilities: ["しめりけ", "ノーてんき"],
    weightKilogram: 19.6,
    evolution: "未進化"
  },
  {
    pokedexId: 55,
    name: "ゴルダック",
    stats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
    types: ["みず"],
    abilities: ["しめりけ", "ノーてんき"],
    weightKilogram: 76.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 56,
    name: "マンキー",
    stats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
    types: ["かくとう"],
    abilities: ["やるき", "いかりのつぼ"],
    weightKilogram: 28,
    evolution: "未進化"
  },
  {
    pokedexId: 57,
    name: "オコリザル",
    stats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
    types: ["かくとう"],
    abilities: ["やるき", "いかりのつぼ"],
    weightKilogram: 32,
    evolution: "最終進化"
  },
  {
    pokedexId: 58,
    name: "ガーディ",
    stats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
    types: ["ほのお"],
    abilities: ["いかく", "もらいび"],
    weightKilogram: 19,
    evolution: "未進化"
  },
  {
    pokedexId: 59,
    name: "ウインディ",
    stats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    types: ["ほのお"],
    abilities: ["いかく", "もらいび"],
    weightKilogram: 155,
    evolution: "最終進化"
  },
  {
    pokedexId: 60,
    name: "ニョロモ",
    stats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
    types: ["みず"],
    abilities: ["ちょすい", "しめりけ"],
    weightKilogram: 12.4,
    evolution: "未進化"
  },
  {
    pokedexId: 61,
    name: "ニョロゾ",
    stats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
    types: ["みず"],
    abilities: ["ちょすい", "しめりけ"],
    weightKilogram: 20,
    evolution: "中間進化"
  },
  {
    pokedexId: 62,
    name: "ニョロボン",
    stats: { hp: 90, atk: 85, def: 95, spa: 70, spd: 90, spe: 70 },
    types: ["みず", "かくとう"],
    abilities: ["ちょすい", "しめりけ"],
    weightKilogram: 54,
    evolution: "最終進化"
  },
  {
    pokedexId: 63,
    name: "ケーシィ",
    stats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
    types: ["エスパー"],
    abilities: ["シンクロ", "せいしんりょく"],
    weightKilogram: 19.5,
    evolution: "未進化"
  },
  {
    pokedexId: 64,
    name: "ユンゲラー",
    stats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
    types: ["エスパー"],
    abilities: ["シンクロ", "せいしんりょく"],
    weightKilogram: 56.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 65,
    name: "フーディン",
    stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 85, spe: 120 },
    types: ["エスパー"],
    abilities: ["シンクロ", "せいしんりょく"],
    weightKilogram: 48,
    evolution: "最終進化"
  },
  {
    pokedexId: 66,
    name: "ワンリキー",
    stats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
    types: ["かくとう"],
    abilities: ["こんじょう", "ノーガード"],
    weightKilogram: 19.5,
    evolution: "未進化"
  },
  {
    pokedexId: 67,
    name: "ゴーリキー",
    stats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
    types: ["かくとう"],
    abilities: ["こんじょう", "ノーガード"],
    weightKilogram: 70.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 68,
    name: "カイリキー",
    stats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    types: ["かくとう"],
    abilities: ["こんじょう", "ノーガード"],
    weightKilogram: 130,
    evolution: "最終進化"
  },
  {
    pokedexId: 69,
    name: "マダツボミ",
    stats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 4,
    evolution: "未進化"
  },
  {
    pokedexId: 70,
    name: "ウツドン",
    stats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 6.4,
    evolution: "中間進化"
  },
  {
    pokedexId: 71,
    name: "ウツボット",
    stats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 60, spe: 70 },
    types: ["くさ", "どく"],
    abilities: ["ようりょくそ"],
    weightKilogram: 15.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 72,
    name: "メノクラゲ",
    stats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
    types: ["みず", "どく"],
    abilities: ["クリアボディ", "ヘドロえき"],
    weightKilogram: 45.5,
    evolution: "未進化"
  },
  {
    pokedexId: 73,
    name: "ドククラゲ",
    stats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
    types: ["みず", "どく"],
    abilities: ["クリアボディ", "ヘドロえき"],
    weightKilogram: 55,
    evolution: "最終進化"
  },
  {
    pokedexId: 74,
    name: "イシツブテ",
    stats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
    types: ["いわ", "じめん"],
    abilities: ["いしあたま", "がんじょう"],
    weightKilogram: 20,
    evolution: "未進化"
  },
  {
    pokedexId: 75,
    name: "ゴローン",
    stats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
    types: ["いわ", "じめん"],
    abilities: ["いしあたま", "がんじょう"],
    weightKilogram: 105,
    evolution: "中間進化"
  },
  {
    pokedexId: 76,
    name: "ゴローニャ",
    stats: { hp: 80, atk: 110, def: 130, spa: 55, spd: 65, spe: 45 },
    types: ["いわ", "じめん"],
    abilities: ["いしあたま", "がんじょう"],
    weightKilogram: 300,
    evolution: "最終進化"
  },
  {
    pokedexId: 77,
    name: "ポニータ",
    stats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
    types: ["ほのお"],
    abilities: ["にげあし", "もらいび"],
    weightKilogram: 30,
    evolution: "未進化"
  },
  {
    pokedexId: 78,
    name: "ギャロップ",
    stats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
    types: ["ほのお"],
    abilities: ["にげあし", "もらいび"],
    weightKilogram: 95,
    evolution: "最終進化"
  },
  {
    pokedexId: 79,
    name: "ヤドン",
    stats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
    types: ["みず", "エスパー"],
    abilities: ["どんかん", "マイペース"],
    weightKilogram: 36,
    evolution: "未進化"
  },
  {
    pokedexId: 80,
    name: "ヤドラン",
    stats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
    types: ["みず", "エスパー"],
    abilities: ["どんかん", "マイペース"],
    weightKilogram: 78.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 81,
    name: "コイル",
    stats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
    types: ["でんき", "はがね"],
    abilities: ["じりょく", "がんじょう"],
    weightKilogram: 6,
    evolution: "未進化"
  },
  {
    pokedexId: 82,
    name: "レアコイル",
    stats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
    types: ["でんき", "はがね"],
    abilities: ["じりょく", "がんじょう"],
    weightKilogram: 60,
    evolution: "中間進化"
  },
  {
    pokedexId: 83,
    name: "カモネギ",
    stats: { hp: 52, atk: 65, def: 55, spa: 58, spd: 62, spe: 60 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ", "せいしんりょく"],
    weightKilogram: 15,
    evolution: "最終進化"
  },
  {
    pokedexId: 84,
    name: "ドードー",
    stats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
    types: ["ノーマル", "ひこう"],
    abilities: ["にげあし", "はやおき"],
    weightKilogram: 39.2,
    evolution: "未進化"
  },
  {
    pokedexId: 85,
    name: "ドードリオ",
    stats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100 },
    types: ["ノーマル", "ひこう"],
    abilities: ["にげあし", "はやおき"],
    weightKilogram: 85.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 86,
    name: "パウワウ",
    stats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
    types: ["みず"],
    abilities: ["あついしぼう", "うるおいボディ"],
    weightKilogram: 90,
    evolution: "未進化"
  },
  {
    pokedexId: 87,
    name: "ジュゴン",
    stats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
    types: ["みず", "こおり"],
    abilities: ["あついしぼう", "うるおいボディ"],
    weightKilogram: 120,
    evolution: "最終進化"
  },
  {
    pokedexId: 88,
    name: "ベトベター",
    stats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
    types: ["どく"],
    abilities: ["あくしゅう", "ねんちゃく"],
    weightKilogram: 30,
    evolution: "未進化"
  },
  {
    pokedexId: 89,
    name: "ベトベトン",
    stats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
    types: ["どく"],
    abilities: ["あくしゅう", "ねんちゃく"],
    weightKilogram: 30,
    evolution: "最終進化"
  },
  {
    pokedexId: 90,
    name: "シェルダー",
    stats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
    types: ["みず"],
    abilities: ["シェルアーマー", "スキルリンク"],
    weightKilogram: 4,
    evolution: "未進化"
  },
  {
    pokedexId: 91,
    name: "パルシェン",
    stats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
    types: ["みず", "こおり"],
    abilities: ["シェルアーマー", "スキルリンク"],
    weightKilogram: 132.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 92,
    name: "ゴース",
    stats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
    types: ["ゴースト", "どく"],
    abilities: ["ふゆう"],
    weightKilogram: 0.1,
    evolution: "未進化"
  },
  {
    pokedexId: 93,
    name: "ゴースト",
    stats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
    types: ["ゴースト", "どく"],
    abilities: ["ふゆう"],
    weightKilogram: 0.1,
    evolution: "中間進化"
  },
  {
    pokedexId: 94,
    name: "ゲンガー",
    stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    types: ["ゴースト", "どく"],
    abilities: ["ふゆう"],
    weightKilogram: 40.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 95,
    name: "イワーク",
    stats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
    types: ["いわ", "じめん"],
    abilities: ["いしあたま", "がんじょう"],
    weightKilogram: 210,
    evolution: "未進化"
  },
  {
    pokedexId: 96,
    name: "スリープ",
    stats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
    types: ["エスパー"],
    abilities: ["ふみん", "よちむ"],
    weightKilogram: 32.4,
    evolution: "未進化"
  },
  {
    pokedexId: 97,
    name: "スリーパー",
    stats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
    types: ["エスパー"],
    abilities: ["ふみん", "よちむ"],
    weightKilogram: 75.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 98,
    name: "クラブ",
    stats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
    types: ["みず"],
    abilities: ["かいりきバサミ", "シェルアーマー"],
    weightKilogram: 6.5,
    evolution: "未進化"
  },
  {
    pokedexId: 99,
    name: "キングラー",
    stats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
    types: ["みず"],
    abilities: ["かいりきバサミ", "シェルアーマー"],
    weightKilogram: 60,
    evolution: "最終進化"
  },
  {
    pokedexId: 100,
    name: "ビリリダマ",
    stats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
    types: ["でんき"],
    abilities: ["ぼうおん", "せいでんき"],
    weightKilogram: 10.4,
    evolution: "未進化"
  },
  {
    pokedexId: 101,
    name: "マルマイン",
    stats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 140 },
    types: ["でんき"],
    abilities: ["ぼうおん", "せいでんき"],
    weightKilogram: 66.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 102,
    name: "タマタマ",
    stats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
    types: ["くさ", "エスパー"],
    abilities: ["ようりょくそ"],
    weightKilogram: 2.5,
    evolution: "未進化"
  },
  {
    pokedexId: 103,
    name: "ナッシー",
    stats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 65, spe: 55 },
    types: ["くさ", "エスパー"],
    abilities: ["ようりょくそ"],
    weightKilogram: 120,
    evolution: "最終進化"
  },
  {
    pokedexId: 104,
    name: "カラカラ",
    stats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
    types: ["じめん"],
    abilities: ["いしあたま", "ひらいしん"],
    weightKilogram: 6.5,
    evolution: "未進化"
  },
  {
    pokedexId: 105,
    name: "ガラガラ",
    stats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
    types: ["じめん"],
    abilities: ["いしあたま", "ひらいしん"],
    weightKilogram: 45,
    evolution: "最終進化"
  },
  {
    pokedexId: 106,
    name: "サワムラー",
    stats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
    types: ["かくとう"],
    abilities: ["じゅうなん", "すてみ"],
    weightKilogram: 49.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 107,
    name: "エビワラー",
    stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    types: ["かくとう"],
    abilities: ["するどいめ", "てつのこぶし"],
    weightKilogram: 50.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 108,
    name: "ベロリンガ",
    stats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
    types: ["ノーマル"],
    abilities: ["マイペース", "どんかん"],
    weightKilogram: 65.5,
    evolution: "未進化"
  },
  {
    pokedexId: 109,
    name: "ドガース",
    stats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
    types: ["どく"],
    abilities: ["ふゆう"],
    weightKilogram: 1,
    evolution: "未進化"
  },
  {
    pokedexId: 110,
    name: "マタドガス",
    stats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    types: ["どく"],
    abilities: ["ふゆう"],
    weightKilogram: 9.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 111,
    name: "サイホーン",
    stats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
    types: ["じめん", "いわ"],
    abilities: ["ひらいしん", "いしあたま"],
    weightKilogram: 115,
    evolution: "未進化"
  },
  {
    pokedexId: 112,
    name: "サイドン",
    stats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    types: ["じめん", "いわ"],
    abilities: ["ひらいしん", "いしあたま"],
    weightKilogram: 120,
    evolution: "中間進化"
  },
  {
    pokedexId: 113,
    name: "ラッキー",
    stats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
    types: ["ノーマル"],
    abilities: ["しぜんかいふく", "てんのめぐみ"],
    weightKilogram: 34.6,
    evolution: "中間進化"
  },
  {
    pokedexId: 114,
    name: "モンジャラ",
    stats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
    types: ["くさ"],
    abilities: ["ようりょくそ", "リーフガード"],
    weightKilogram: 35,
    evolution: "未進化"
  },
  {
    pokedexId: 115,
    name: "ガルーラ",
    stats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    types: ["ノーマル"],
    abilities: ["はやおき", "きもったま"],
    weightKilogram: 80,
    evolution: "最終進化"
  },
  {
    pokedexId: 116,
    name: "タッツー",
    stats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
    types: ["みず"],
    abilities: ["すいすい", "スナイパー"],
    weightKilogram: 8,
    evolution: "未進化"
  },
  {
    pokedexId: 117,
    name: "シードラ",
    stats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
    types: ["みず"],
    abilities: ["どくのトゲ", "スナイパー"],
    weightKilogram: 25,
    evolution: "中間進化"
  },
  {
    pokedexId: 118,
    name: "トサキント",
    stats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
    types: ["みず"],
    abilities: ["すいすい", "みずのベール"],
    weightKilogram: 15,
    evolution: "未進化"
  },
  {
    pokedexId: 119,
    name: "アズマオウ",
    stats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
    types: ["みず"],
    abilities: ["すいすい", "みずのベール"],
    weightKilogram: 39,
    evolution: "最終進化"
  },
  {
    pokedexId: 120,
    name: "ヒトデマン",
    stats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
    types: ["みず"],
    abilities: ["はっこう", "しぜんかいふく"],
    weightKilogram: 34.5,
    evolution: "未進化"
  },
  {
    pokedexId: 121,
    name: "スターミー",
    stats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    types: ["みず", "エスパー"],
    abilities: ["はっこう", "しぜんかいふく"],
    weightKilogram: 80,
    evolution: "最終進化"
  },
  {
    pokedexId: 122,
    name: "バリヤード",
    stats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
    types: ["エスパー"],
    abilities: ["ぼうおん", "フィルター"],
    weightKilogram: 54.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 123,
    name: "ストライク",
    stats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
    types: ["むし", "ひこう"],
    abilities: ["むしのしらせ", "テクニシャン"],
    weightKilogram: 56,
    evolution: "未進化"
  },
  {
    pokedexId: 124,
    name: "ルージュラ",
    stats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
    types: ["こおり", "エスパー"],
    abilities: ["どんかん", "よちむ"],
    weightKilogram: 40.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 125,
    name: "エレブー",
    stats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 30,
    evolution: "中間進化"
  },
  {
    pokedexId: 126,
    name: "ブーバー",
    stats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
    types: ["ほのお"],
    abilities: ["ほのおのからだ"],
    weightKilogram: 44.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 127,
    name: "カイロス",
    stats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
    types: ["むし"],
    abilities: ["かいりきバサミ", "かたやぶり"],
    weightKilogram: 55,
    evolution: "最終進化"
  },
  {
    pokedexId: 128,
    name: "ケンタロス",
    stats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    types: ["ノーマル"],
    abilities: ["いかく", "いかりのつぼ"],
    weightKilogram: 88.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 129,
    name: "コイキング",
    stats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 10,
    evolution: "未進化"
  },
  {
    pokedexId: 130,
    name: "ギャラドス",
    stats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
    types: ["みず", "ひこう"],
    abilities: ["いかく"],
    weightKilogram: 235,
    evolution: "最終進化"
  },
  {
    pokedexId: 131,
    name: "ラプラス",
    stats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
    types: ["みず", "こおり"],
    abilities: ["ちょすい", "シェルアーマー"],
    weightKilogram: 220,
    evolution: "最終進化"
  },
  {
    pokedexId: 132,
    name: "メタモン",
    stats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
    types: ["ノーマル"],
    abilities: ["じゅうなん"],
    weightKilogram: 4,
    evolution: "最終進化"
  },
  {
    pokedexId: 133,
    name: "イーブイ",
    stats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
    types: ["ノーマル"],
    abilities: ["にげあし", "てきおうりょく"],
    weightKilogram: 6.5,
    evolution: "未進化"
  },
  {
    pokedexId: 134,
    name: "シャワーズ",
    stats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    types: ["みず"],
    abilities: ["ちょすい"],
    weightKilogram: 29,
    evolution: "最終進化"
  },
  {
    pokedexId: 135,
    name: "サンダース",
    stats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    types: ["でんき"],
    abilities: ["ちょすい"],
    weightKilogram: 24.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 136,
    name: "ブースター",
    stats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
    types: ["ほのお"],
    abilities: ["もらいび"],
    weightKilogram: 25,
    evolution: "最終進化"
  },
  {
    pokedexId: 137,
    name: "ポリゴン",
    stats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
    types: ["ノーマル"],
    abilities: ["トレース", "ダウンロード"],
    weightKilogram: 36.5,
    evolution: "未進化"
  },
  {
    pokedexId: 138,
    name: "オムナイト",
    stats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
    types: ["いわ", "みず"],
    abilities: ["すいすい", "シェルアーマー"],
    weightKilogram: 7.5,
    evolution: "未進化"
  },
  {
    pokedexId: 139,
    name: "オムスター",
    stats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
    types: ["いわ", "みず"],
    abilities: ["すいすい", "シェルアーマー"],
    weightKilogram: 35,
    evolution: "最終進化"
  },
  {
    pokedexId: 140,
    name: "カブト",
    stats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
    types: ["いわ", "みず"],
    abilities: ["すいすい", "カブトアーマー"],
    weightKilogram: 11.5,
    evolution: "未進化"
  },
  {
    pokedexId: 141,
    name: "カブトプス",
    stats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
    types: ["いわ", "みず"],
    abilities: ["すいすい", "カブトアーマー"],
    weightKilogram: 40.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 142,
    name: "プテラ",
    stats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
    types: ["いわ", "ひこう"],
    abilities: ["いしあたま", "プレッシャー"],
    weightKilogram: 59,
    evolution: "最終進化"
  },
  {
    pokedexId: 143,
    name: "カビゴン",
    stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    types: ["ノーマル"],
    abilities: ["めんえき", "あついしぼう"],
    weightKilogram: 460,
    evolution: "最終進化"
  },
  {
    pokedexId: 144,
    name: "フリーザー",
    stats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
    types: ["こおり", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 55.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 145,
    name: "サンダー",
    stats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
    types: ["でんき", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 52.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 146,
    name: "ファイヤー",
    stats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
    types: ["ほのお", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 60,
    evolution: "最終進化"
  },
  {
    pokedexId: 147,
    name: "ミニリュウ",
    stats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
    types: ["ドラゴン"],
    abilities: ["だっぴ"],
    weightKilogram: 3.3,
    evolution: "未進化"
  },
  {
    pokedexId: 148,
    name: "ハクリュー",
    stats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
    types: ["ドラゴン"],
    abilities: ["だっぴ"],
    weightKilogram: 16.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 149,
    name: "カイリュー",
    stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    types: ["ドラゴン", "ひこう"],
    abilities: ["せいしんりょく"],
    weightKilogram: 210,
    evolution: "最終進化"
  },
  {
    pokedexId: 150,
    name: "ミュウツー",
    stats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
    types: ["エスパー"],
    abilities: ["プレッシャー"],
    weightKilogram: 122,
    evolution: "伝説"
  },
  {
    pokedexId: 151,
    name: "ミュウ",
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: ["エスパー"],
    abilities: ["シンクロ"],
    weightKilogram: 4,
    evolution: "幻"
  },
  {
    pokedexId: 152,
    name: "チコリータ",
    stats: { hp: 45, atk: 49, def: 65, spa: 49, spd: 65, spe: 45 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 6.4,
    evolution: "未進化"
  },
  {
    pokedexId: 153,
    name: "ベイリーフ",
    stats: { hp: 60, atk: 62, def: 80, spa: 63, spd: 80, spe: 60 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 15.8,
    evolution: "中間進化"
  },
  {
    pokedexId: 154,
    name: "メガニウム",
    stats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 100.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 155,
    name: "ヒノアラシ",
    stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 7.9,
    evolution: "未進化"
  },
  {
    pokedexId: 156,
    name: "マグマラシ",
    stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 19,
    evolution: "中間進化"
  },
  {
    pokedexId: 157,
    name: "バクフーン",
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 79.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 158,
    name: "ワニノコ",
    stats: { hp: 50, atk: 65, def: 64, spa: 44, spd: 48, spe: 43 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 9.5,
    evolution: "未進化"
  },
  {
    pokedexId: 159,
    name: "アリゲイツ",
    stats: { hp: 65, atk: 80, def: 80, spa: 59, spd: 63, spe: 58 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 25,
    evolution: "中間進化"
  },
  {
    pokedexId: 160,
    name: "オーダイル",
    stats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 88.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 161,
    name: "オタチ",
    stats: { hp: 35, atk: 46, def: 34, spa: 35, spd: 45, spe: 20 },
    types: ["ノーマル"],
    abilities: ["にげあし", "するどいめ"],
    weightKilogram: 6,
    evolution: "未進化"
  },
  {
    pokedexId: 162,
    name: "オオタチ",
    stats: { hp: 85, atk: 76, def: 64, spa: 45, spd: 55, spe: 90 },
    types: ["ノーマル"],
    abilities: ["にげあし", "するどいめ"],
    weightKilogram: 32.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 163,
    name: "ホーホー",
    stats: { hp: 60, atk: 30, def: 30, spa: 36, spd: 56, spe: 50 },
    types: ["ノーマル", "ひこう"],
    abilities: ["ふみん", "するどいめ"],
    weightKilogram: 21.2,
    evolution: "未進化"
  },
  {
    pokedexId: 164,
    name: "ヨルノズク",
    stats: { hp: 100, atk: 50, def: 50, spa: 76, spd: 96, spe: 70 },
    types: ["ノーマル", "ひこう"],
    abilities: ["ふみん", "するどいめ"],
    weightKilogram: 40.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 165,
    name: "レディバ",
    stats: { hp: 40, atk: 20, def: 30, spa: 40, spd: 80, spe: 55 },
    types: ["むし", "ひこう"],
    abilities: ["むしのしらせ", "はやおき"],
    weightKilogram: 10.8,
    evolution: "未進化"
  },
  {
    pokedexId: 166,
    name: "レディアン",
    stats: { hp: 55, atk: 35, def: 50, spa: 55, spd: 110, spe: 85 },
    types: ["むし", "ひこう"],
    abilities: ["むしのしらせ", "はやおき"],
    weightKilogram: 35.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 167,
    name: "イトマル",
    stats: { hp: 40, atk: 60, def: 40, spa: 40, spd: 40, spe: 30 },
    types: ["むし", "どく"],
    abilities: ["むしのしらせ", "ふみん"],
    weightKilogram: 8.5,
    evolution: "未進化"
  },
  {
    pokedexId: 168,
    name: "アリアドス",
    stats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 40 },
    types: ["むし", "どく"],
    abilities: ["むしのしらせ", "ふみん"],
    weightKilogram: 33.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 169,
    name: "クロバット",
    stats: { hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130 },
    types: ["どく", "ひこう"],
    abilities: ["せいしんりょく"],
    weightKilogram: 75,
    evolution: "最終進化"
  },
  {
    pokedexId: 170,
    name: "チョンチー",
    stats: { hp: 75, atk: 38, def: 38, spa: 56, spd: 56, spe: 67 },
    types: ["みず", "でんき"],
    abilities: ["ちょすい", "はっこう"],
    weightKilogram: 12,
    evolution: "未進化"
  },
  {
    pokedexId: 171,
    name: "ランターン",
    stats: { hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67 },
    types: ["みず", "でんき"],
    abilities: ["ちょすい", "はっこう"],
    weightKilogram: 22.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 172,
    name: "ピチュー",
    stats: { hp: 20, atk: 40, def: 15, spa: 35, spd: 35, spe: 60 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 2,
    evolution: "未進化"
  },
  {
    pokedexId: 173,
    name: "ピィ",
    stats: { hp: 50, atk: 25, def: 28, spa: 45, spd: 55, spe: 15 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "マジックガード"],
    weightKilogram: 3,
    evolution: "未進化"
  },
  {
    pokedexId: 174,
    name: "ププリン",
    stats: { hp: 90, atk: 30, def: 15, spa: 40, spd: 20, spe: 15 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ"],
    weightKilogram: 1,
    evolution: "未進化"
  },
  {
    pokedexId: 175,
    name: "トゲピー",
    stats: { hp: 35, atk: 20, def: 65, spa: 40, spd: 65, spe: 20 },
    types: ["ノーマル"],
    abilities: ["はりきり", "てんのめぐみ"],
    weightKilogram: 1.5,
    evolution: "未進化"
  },
  {
    pokedexId: 176,
    name: "トゲチック",
    stats: { hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40 },
    types: ["ノーマル", "ひこう"],
    abilities: ["はりきり", "てんのめぐみ"],
    weightKilogram: 3.2,
    evolution: "中間進化"
  },
  {
    pokedexId: 177,
    name: "ネイティ",
    stats: { hp: 40, atk: 50, def: 45, spa: 70, spd: 45, spe: 70 },
    types: ["エスパー", "ひこう"],
    abilities: ["シンクロ", "はやおき"],
    weightKilogram: 2,
    evolution: "未進化"
  },
  {
    pokedexId: 178,
    name: "ネイティオ",
    stats: { hp: 65, atk: 75, def: 70, spa: 95, spd: 70, spe: 95 },
    types: ["エスパー", "ひこう"],
    abilities: ["シンクロ", "はやおき"],
    weightKilogram: 15,
    evolution: "最終進化"
  },
  {
    pokedexId: 179,
    name: "メリープ",
    stats: { hp: 55, atk: 40, def: 40, spa: 65, spd: 45, spe: 35 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 7.8,
    evolution: "未進化"
  },
  {
    pokedexId: 180,
    name: "モココ",
    stats: { hp: 70, atk: 55, def: 55, spa: 80, spd: 60, spe: 45 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 13.3,
    evolution: "中間進化"
  },
  {
    pokedexId: 181,
    name: "デンリュウ",
    stats: { hp: 90, atk: 75, def: 75, spa: 115, spd: 90, spe: 55 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 61.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 182,
    name: "キレイハナ",
    stats: { hp: 75, atk: 80, def: 85, spa: 90, spd: 100, spe: 50 },
    types: ["くさ"],
    abilities: ["ようりょくそ"],
    weightKilogram: 5.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 183,
    name: "マリル",
    stats: { hp: 70, atk: 20, def: 50, spa: 20, spd: 50, spe: 40 },
    types: ["みず"],
    abilities: ["あついしぼう", "ちからもち"],
    weightKilogram: 8.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 184,
    name: "マリルリ",
    stats: { hp: 100, atk: 50, def: 80, spa: 50, spd: 80, spe: 50 },
    types: ["みず"],
    abilities: ["あついしぼう", "ちからもち"],
    weightKilogram: 28.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 185,
    name: "ウソッキー",
    stats: { hp: 70, atk: 100, def: 115, spa: 30, spd: 65, spe: 30 },
    types: ["いわ"],
    abilities: ["がんじょう", "いしあたま"],
    weightKilogram: 38,
    evolution: "最終進化"
  },
  {
    pokedexId: 186,
    name: "ニョロトノ",
    stats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
    types: ["みず"],
    abilities: ["ちょすい", "しめりけ"],
    weightKilogram: 33.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 187,
    name: "ハネッコ",
    stats: { hp: 35, atk: 35, def: 40, spa: 35, spd: 55, spe: 50 },
    types: ["くさ", "ひこう"],
    abilities: ["ようりょくそ", "リーフガード"],
    weightKilogram: 0.5,
    evolution: "未進化"
  },
  {
    pokedexId: 188,
    name: "ポポッコ",
    stats: { hp: 55, atk: 45, def: 50, spa: 45, spd: 65, spe: 80 },
    types: ["くさ", "ひこう"],
    abilities: ["ようりょくそ", "リーフガード"],
    weightKilogram: 1,
    evolution: "中間進化"
  },
  {
    pokedexId: 189,
    name: "ワタッコ",
    stats: { hp: 75, atk: 55, def: 70, spa: 55, spd: 85, spe: 110 },
    types: ["くさ", "ひこう"],
    abilities: ["ようりょくそ", "リーフガード"],
    weightKilogram: 3,
    evolution: "最終進化"
  },
  {
    pokedexId: 190,
    name: "エイパム",
    stats: { hp: 55, atk: 70, def: 55, spa: 40, spd: 55, spe: 85 },
    types: ["ノーマル"],
    abilities: ["にげあし", "ものひろい"],
    weightKilogram: 11.5,
    evolution: "未進化"
  },
  {
    pokedexId: 191,
    name: "ヒマナッツ",
    stats: { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 30 },
    types: ["くさ"],
    abilities: ["ようりょくそ", "サンパワー"],
    weightKilogram: 1.8,
    evolution: "未進化"
  },
  {
    pokedexId: 192,
    name: "キマワリ",
    stats: { hp: 75, atk: 75, def: 55, spa: 105, spd: 85, spe: 30 },
    types: ["くさ"],
    abilities: ["ようりょくそ", "サンパワー"],
    weightKilogram: 8.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 193,
    name: "ヤンヤンマ",
    stats: { hp: 65, atk: 65, def: 45, spa: 75, spd: 45, spe: 95 },
    types: ["むし", "ひこう"],
    abilities: ["かそく", "ふくがん"],
    weightKilogram: 38,
    evolution: "未進化"
  },
  {
    pokedexId: 194,
    name: "ウパー",
    stats: { hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15 },
    types: ["みず", "じめん"],
    abilities: ["しめりけ", "ちょすい"],
    weightKilogram: 8.5,
    evolution: "未進化"
  },
  {
    pokedexId: 195,
    name: "ヌオー",
    stats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
    types: ["みず", "じめん"],
    abilities: ["しめりけ", "ちょすい"],
    weightKilogram: 75,
    evolution: "最終進化"
  },
  {
    pokedexId: 196,
    name: "エーフィ",
    stats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
    types: ["エスパー"],
    abilities: ["シンクロ"],
    weightKilogram: 26.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 197,
    name: "ブラッキー",
    stats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    types: ["あく"],
    abilities: ["シンクロ"],
    weightKilogram: 27,
    evolution: "最終進化"
  },
  {
    pokedexId: 198,
    name: "ヤミカラス",
    stats: { hp: 60, atk: 85, def: 42, spa: 85, spd: 42, spe: 91 },
    types: ["あく", "ひこう"],
    abilities: ["ふみん", "きょううん"],
    weightKilogram: 2.1,
    evolution: "未進化"
  },
  {
    pokedexId: 199,
    name: "ヤドキング",
    stats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
    types: ["みず", "エスパー"],
    abilities: ["どんかん", "マイペース"],
    weightKilogram: 79.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 200,
    name: "ムウマ",
    stats: { hp: 60, atk: 60, def: 60, spa: 85, spd: 85, spe: 85 },
    types: ["ゴースト"],
    abilities: ["ふゆう"],
    weightKilogram: 1,
    evolution: "未進化"
  },
  {
    pokedexId: 201,
    name: "アンノーン",
    stats: { hp: 48, atk: 72, def: 48, spa: 72, spd: 48, spe: 48 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 5,
    evolution: "最終進化"
  },
  {
    pokedexId: 202,
    name: "ソーナンス",
    stats: { hp: 190, atk: 33, def: 58, spa: 33, spd: 58, spe: 33 },
    types: ["エスパー"],
    abilities: ["かげふみ"],
    weightKilogram: 28.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 203,
    name: "キリンリキ",
    stats: { hp: 70, atk: 80, def: 65, spa: 90, spd: 65, spe: 85 },
    types: ["ノーマル", "エスパー"],
    abilities: ["せいしんりょく", "はやおき"],
    weightKilogram: 41.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 204,
    name: "クヌギダマ",
    stats: { hp: 50, atk: 65, def: 90, spa: 35, spd: 35, spe: 15 },
    types: ["むし"],
    abilities: ["がんじょう"],
    weightKilogram: 7.2,
    evolution: "未進化"
  },
  {
    pokedexId: 205,
    name: "フォレトス",
    stats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
    types: ["むし", "はがね"],
    abilities: ["がんじょう"],
    weightKilogram: 125.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 206,
    name: "ノコッチ",
    stats: { hp: 100, atk: 70, def: 70, spa: 65, spd: 65, spe: 45 },
    types: ["ノーマル"],
    abilities: ["てんのめぐみ", "にげあし"],
    weightKilogram: 14,
    evolution: "最終進化"
  },
  {
    pokedexId: 207,
    name: "グライガー",
    stats: { hp: 65, atk: 75, def: 105, spa: 35, spd: 65, spe: 85 },
    types: ["じめん", "ひこう"],
    abilities: ["かいりきバサミ", "すながくれ"],
    weightKilogram: 64.8,
    evolution: "未進化"
  },
  {
    pokedexId: 208,
    name: "ハガネール",
    stats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
    types: ["はがね", "じめん"],
    abilities: ["いしあたま", "がんじょう"],
    weightKilogram: 400,
    evolution: "最終進化"
  },
  {
    pokedexId: 209,
    name: "ブルー",
    stats: { hp: 60, atk: 80, def: 50, spa: 40, spd: 40, spe: 30 },
    types: ["ノーマル"],
    abilities: ["いかく", "にげあし"],
    weightKilogram: 7.8,
    evolution: "未進化"
  },
  {
    pokedexId: 210,
    name: "グランブル",
    stats: { hp: 90, atk: 120, def: 75, spa: 60, spd: 60, spe: 45 },
    types: ["ノーマル"],
    abilities: ["いかく", "はやあし"],
    weightKilogram: 48.7,
    evolution: "最終進化"
  },
  {
    pokedexId: 211,
    name: "ハリーセン",
    stats: { hp: 65, atk: 95, def: 75, spa: 55, spd: 55, spe: 85 },
    types: ["みず", "どく"],
    abilities: ["どくのトゲ", "すいすい"],
    weightKilogram: 3.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 212,
    name: "ハッサム",
    stats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
    types: ["むし", "はがね"],
    abilities: ["むしのしらせ", "テクニシャン"],
    weightKilogram: 118,
    evolution: "最終進化"
  },
  {
    pokedexId: 213,
    name: "ツボツボ",
    stats: { hp: 20, atk: 10, def: 230, spa: 10, spd: 230, spe: 5 },
    types: ["むし", "いわ"],
    abilities: ["がんじょう", "くいしんぼう"],
    weightKilogram: 20.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 214,
    name: "ヘラクロス",
    stats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
    types: ["むし", "かくとう"],
    abilities: ["むしのしらせ", "こんじょう"],
    weightKilogram: 54,
    evolution: "最終進化"
  },
  {
    pokedexId: 215,
    name: "ニューラ",
    stats: { hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115 },
    types: ["あく", "こおり"],
    abilities: ["せいしんりょく", "するどいめ"],
    weightKilogram: 28,
    evolution: "未進化"
  },
  {
    pokedexId: 216,
    name: "ヒメグマ",
    stats: { hp: 60, atk: 80, def: 50, spa: 50, spd: 50, spe: 40 },
    types: ["ノーマル"],
    abilities: ["ものひろい", "はやあし"],
    weightKilogram: 8.8,
    evolution: "未進化"
  },
  {
    pokedexId: 217,
    name: "リングマ",
    stats: { hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 55 },
    types: ["ノーマル"],
    abilities: ["こんじょう", "はやあし"],
    weightKilogram: 125.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 218,
    name: "マグマッグ",
    stats: { hp: 40, atk: 40, def: 40, spa: 70, spd: 40, spe: 20 },
    types: ["ほのお"],
    abilities: ["マグマのよろい", "ほのおのからだ"],
    weightKilogram: 35,
    evolution: "未進化"
  },
  {
    pokedexId: 219,
    name: "マグカルゴ",
    stats: { hp: 50, atk: 50, def: 120, spa: 80, spd: 80, spe: 30 },
    types: ["ほのお", "いわ"],
    abilities: ["マグマのよろい", "ほのおのからだ"],
    weightKilogram: 55,
    evolution: "最終進化"
  },
  {
    pokedexId: 220,
    name: "ウリムー",
    stats: { hp: 50, atk: 50, def: 40, spa: 30, spd: 30, spe: 50 },
    types: ["こおり", "じめん"],
    abilities: ["どんかん", "ゆきがくれ"],
    weightKilogram: 6.5,
    evolution: "未進化"
  },
  {
    pokedexId: 221,
    name: "イノムー",
    stats: { hp: 100, atk: 100, def: 80, spa: 60, spd: 60, spe: 50 },
    types: ["こおり", "じめん"],
    abilities: ["どんかん", "ゆきがくれ"],
    weightKilogram: 55.8,
    evolution: "中間進化"
  },
  {
    pokedexId: 222,
    name: "サニーゴ",
    stats: { hp: 55, atk: 55, def: 85, spa: 65, spd: 85, spe: 35 },
    types: ["みず", "いわ"],
    abilities: ["はりきり", "しぜんかいふく"],
    weightKilogram: 5,
    evolution: "最終進化"
  },
  {
    pokedexId: 223,
    name: "テッポウオ",
    stats: { hp: 35, atk: 65, def: 35, spa: 65, spd: 35, spe: 65 },
    types: ["みず"],
    abilities: ["はりきり", "スナイパー"],
    weightKilogram: 12,
    evolution: "未進化"
  },
  {
    pokedexId: 224,
    name: "オクタン",
    stats: { hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 45 },
    types: ["みず"],
    abilities: ["きゅうばん", "スナイパー"],
    weightKilogram: 28.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 225,
    name: "デリバード",
    stats: { hp: 45, atk: 55, def: 45, spa: 65, spd: 45, spe: 75 },
    types: ["こおり", "ひこう"],
    abilities: ["やるき", "はりきり"],
    weightKilogram: 16,
    evolution: "最終進化"
  },
  {
    pokedexId: 226,
    name: "マンタイン",
    stats: { hp: 65, atk: 40, def: 70, spa: 80, spd: 140, spe: 70 },
    types: ["みず", "ひこう"],
    abilities: ["すいすい", "ちょすい"],
    weightKilogram: 220,
    evolution: "最終進化"
  },
  {
    pokedexId: 227,
    name: "エアームド",
    stats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    types: ["はがね", "ひこう"],
    abilities: ["するどいめ", "がんじょう"],
    weightKilogram: 50.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 228,
    name: "デルビル",
    stats: { hp: 45, atk: 60, def: 30, spa: 80, spd: 50, spe: 65 },
    types: ["あく", "ほのお"],
    abilities: ["はやおき", "もらいび"],
    weightKilogram: 10.8,
    evolution: "未進化"
  },
  {
    pokedexId: 229,
    name: "ヘルガー",
    stats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
    types: ["あく", "ほのお"],
    abilities: ["はやおき", "もらいび"],
    weightKilogram: 35,
    evolution: "最終進化"
  },
  {
    pokedexId: 230,
    name: "キングドラ",
    stats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
    types: ["みず", "ドラゴン"],
    abilities: ["すいすい", "スナイパー"],
    weightKilogram: 152,
    evolution: "最終進化"
  },
  {
    pokedexId: 231,
    name: "ゴマゾウ",
    stats: { hp: 90, atk: 60, def: 60, spa: 40, spd: 40, spe: 40 },
    types: ["じめん"],
    abilities: ["ものひろい"],
    weightKilogram: 33.5,
    evolution: "未進化"
  },
  {
    pokedexId: 232,
    name: "ドンファン",
    stats: { hp: 90, atk: 120, def: 120, spa: 60, spd: 60, spe: 50 },
    types: ["じめん"],
    abilities: ["がんじょう"],
    weightKilogram: 120,
    evolution: "最終進化"
  },
  {
    pokedexId: 233,
    name: "ポリゴン２",
    stats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
    types: ["ノーマル"],
    abilities: ["トレース", "ダウンロード"],
    weightKilogram: 32.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 234,
    name: "オドシシ",
    stats: { hp: 73, atk: 95, def: 62, spa: 85, spd: 65, spe: 85 },
    types: ["ノーマル"],
    abilities: ["いかく", "おみとおし"],
    weightKilogram: 71.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 235,
    name: "ドーブル",
    stats: { hp: 55, atk: 20, def: 35, spa: 20, spd: 45, spe: 75 },
    types: ["ノーマル"],
    abilities: ["マイペース", "テクニシャン"],
    weightKilogram: 58,
    evolution: "最終進化"
  },
  {
    pokedexId: 236,
    name: "バルキー",
    stats: { hp: 35, atk: 35, def: 35, spa: 35, spd: 35, spe: 35 },
    types: ["かくとう"],
    abilities: ["こんじょう", "ふくつのこころ"],
    weightKilogram: 21,
    evolution: "未進化"
  },
  {
    pokedexId: 237,
    name: "カポエラー",
    stats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70 },
    types: ["かくとう"],
    abilities: ["いかく", "テクニシャン"],
    weightKilogram: 48,
    evolution: "最終進化"
  },
  {
    pokedexId: 238,
    name: "ムチュール",
    stats: { hp: 45, atk: 30, def: 15, spa: 85, spd: 65, spe: 65 },
    types: ["こおり", "エスパー"],
    abilities: ["どんかん", "よちむ"],
    weightKilogram: 6,
    evolution: "未進化"
  },
  {
    pokedexId: 239,
    name: "エレキッド",
    stats: { hp: 45, atk: 63, def: 37, spa: 65, spd: 55, spe: 95 },
    types: ["でんき"],
    abilities: ["せいでんき"],
    weightKilogram: 23.5,
    evolution: "未進化"
  },
  {
    pokedexId: 240,
    name: "ブビィ",
    stats: { hp: 45, atk: 75, def: 37, spa: 70, spd: 55, spe: 83 },
    types: ["ほのお"],
    abilities: ["ほのおのからだ"],
    weightKilogram: 21.4,
    evolution: "未進化"
  },
  {
    pokedexId: 241,
    name: "ミルタンク",
    stats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
    types: ["ノーマル"],
    abilities: ["あついしぼう", "きもったま"],
    weightKilogram: 75.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 242,
    name: "ハピナス",
    stats: { hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55 },
    types: ["ノーマル"],
    abilities: ["しぜんかいふく", "てんのめぐみ"],
    weightKilogram: 46.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 243,
    name: "ライコウ",
    stats: { hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115 },
    types: ["でんき"],
    abilities: ["プレッシャー"],
    weightKilogram: 178,
    evolution: "最終進化"
  },
  {
    pokedexId: 244,
    name: "エンテイ",
    stats: { hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100 },
    types: ["ほのお"],
    abilities: ["プレッシャー"],
    weightKilogram: 198,
    evolution: "最終進化"
  },
  {
    pokedexId: 245,
    name: "スイクン",
    stats: { hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85 },
    types: ["みず"],
    abilities: ["プレッシャー"],
    weightKilogram: 187,
    evolution: "最終進化"
  },
  {
    pokedexId: 246,
    name: "ヨーギラス",
    stats: { hp: 50, atk: 64, def: 50, spa: 45, spd: 50, spe: 41 },
    types: ["いわ", "じめん"],
    abilities: ["こんじょう"],
    weightKilogram: 72,
    evolution: "未進化"
  },
  {
    pokedexId: 247,
    name: "サナギラス",
    stats: { hp: 70, atk: 84, def: 70, spa: 65, spd: 70, spe: 51 },
    types: ["いわ", "じめん"],
    abilities: ["だっぴ"],
    weightKilogram: 152,
    evolution: "中間進化"
  },
  {
    pokedexId: 248,
    name: "バンギラス",
    stats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    types: ["いわ", "あく"],
    abilities: ["すなおこし"],
    weightKilogram: 202,
    evolution: "最終進化"
  },
  {
    pokedexId: 249,
    name: "ルギア",
    stats: { hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110 },
    types: ["エスパー", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 216,
    evolution: "伝説"
  },
  {
    pokedexId: 250,
    name: "ホウオウ",
    stats: { hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90 },
    types: ["ほのお", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 199,
    evolution: "伝説"
  },
  {
    pokedexId: 251,
    name: "セレビィ",
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: ["エスパー", "くさ"],
    abilities: ["しぜんかいふく"],
    weightKilogram: 5,
    evolution: "幻"
  },
  {
    pokedexId: 252,
    name: "キモリ",
    stats: { hp: 40, atk: 45, def: 35, spa: 65, spd: 55, spe: 70 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 5,
    evolution: "未進化"
  },
  {
    pokedexId: 253,
    name: "ジュプトル",
    stats: { hp: 50, atk: 65, def: 45, spa: 85, spd: 65, spe: 95 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 21.6,
    evolution: "中間進化"
  },
  {
    pokedexId: 254,
    name: "ジュカイン",
    stats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 52.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 255,
    name: "アチャモ",
    stats: { hp: 45, atk: 60, def: 40, spa: 70, spd: 50, spe: 45 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 2.5,
    evolution: "未進化"
  },
  {
    pokedexId: 256,
    name: "ワカシャモ",
    stats: { hp: 60, atk: 85, def: 60, spa: 85, spd: 60, spe: 55 },
    types: ["ほのお", "かくとう"],
    abilities: ["もうか"],
    weightKilogram: 19.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 257,
    name: "バシャーモ",
    stats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
    types: ["ほのお", "かくとう"],
    abilities: ["もうか"],
    weightKilogram: 52,
    evolution: "最終進化"
  },
  {
    pokedexId: 258,
    name: "ミズゴロウ",
    stats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 40 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 7.6,
    evolution: "未進化"
  },
  {
    pokedexId: 259,
    name: "ヌマクロー",
    stats: { hp: 70, atk: 85, def: 70, spa: 60, spd: 70, spe: 50 },
    types: ["みず", "じめん"],
    abilities: ["げきりゅう"],
    weightKilogram: 28,
    evolution: "中間進化"
  },
  {
    pokedexId: 260,
    name: "ラグラージ",
    stats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
    types: ["みず", "じめん"],
    abilities: ["げきりゅう"],
    weightKilogram: 81.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 261,
    name: "ポチエナ",
    stats: { hp: 35, atk: 55, def: 35, spa: 30, spd: 30, spe: 35 },
    types: ["あく"],
    abilities: ["にげあし", "はやあし"],
    weightKilogram: 13.6,
    evolution: "未進化"
  },
  {
    pokedexId: 262,
    name: "グラエナ",
    stats: { hp: 70, atk: 90, def: 70, spa: 60, spd: 60, spe: 70 },
    types: ["あく"],
    abilities: ["いかく", "はやあし"],
    weightKilogram: 37,
    evolution: "最終進化"
  },
  {
    pokedexId: 263,
    name: "ジグザグマ",
    stats: { hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60 },
    types: ["ノーマル"],
    abilities: ["ものひろい", "くいしんぼう"],
    weightKilogram: 17.5,
    evolution: "未進化"
  },
  {
    pokedexId: 264,
    name: "マッスグマ",
    stats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
    types: ["ノーマル"],
    abilities: ["ものひろい", "くいしんぼう"],
    weightKilogram: 32.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 265,
    name: "ケムッソ",
    stats: { hp: 45, atk: 45, def: 35, spa: 20, spd: 30, spe: 20 },
    types: ["むし"],
    abilities: ["りんぷん"],
    weightKilogram: 3.6,
    evolution: "未進化"
  },
  {
    pokedexId: 266,
    name: "カラサリス",
    stats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
    types: ["むし"],
    abilities: ["だっぴ"],
    weightKilogram: 10,
    evolution: "中間進化"
  },
  {
    pokedexId: 267,
    name: "アゲハント",
    stats: { hp: 60, atk: 70, def: 50, spa: 90, spd: 50, spe: 65 },
    types: ["むし", "ひこう"],
    abilities: ["むしのしらせ"],
    weightKilogram: 28.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 268,
    name: "マユルド",
    stats: { hp: 50, atk: 35, def: 55, spa: 25, spd: 25, spe: 15 },
    types: ["むし"],
    abilities: ["だっぴ"],
    weightKilogram: 11.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 269,
    name: "ドクケイル",
    stats: { hp: 60, atk: 50, def: 70, spa: 50, spd: 90, spe: 65 },
    types: ["むし", "どく"],
    abilities: ["りんぷん"],
    weightKilogram: 31.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 270,
    name: "ハスボー",
    stats: { hp: 40, atk: 30, def: 30, spa: 40, spd: 50, spe: 30 },
    types: ["みず", "くさ"],
    abilities: ["すいすい", "あめうけざら"],
    weightKilogram: 2.6,
    evolution: "未進化"
  },
  {
    pokedexId: 271,
    name: "ハスブレロ",
    stats: { hp: 60, atk: 50, def: 50, spa: 60, spd: 70, spe: 50 },
    types: ["みず", "くさ"],
    abilities: ["すいすい", "あめうけざら"],
    weightKilogram: 32.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 272,
    name: "ルンパッパ",
    stats: { hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70 },
    types: ["みず", "くさ"],
    abilities: ["すいすい", "あめうけざら"],
    weightKilogram: 55,
    evolution: "最終進化"
  },
  {
    pokedexId: 273,
    name: "タネボー",
    stats: { hp: 40, atk: 40, def: 50, spa: 30, spd: 30, spe: 30 },
    types: ["くさ"],
    abilities: ["ようりょくそ", "はやおき"],
    weightKilogram: 4,
    evolution: "未進化"
  },
  {
    pokedexId: 274,
    name: "コノハナ",
    stats: { hp: 70, atk: 70, def: 40, spa: 60, spd: 40, spe: 60 },
    types: ["くさ", "あく"],
    abilities: ["ようりょくそ", "はやおき"],
    weightKilogram: 28,
    evolution: "中間進化"
  },
  {
    pokedexId: 275,
    name: "ダーテング",
    stats: { hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80 },
    types: ["くさ", "あく"],
    abilities: ["ようりょくそ", "はやおき"],
    weightKilogram: 59.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 276,
    name: "スバメ",
    stats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 85 },
    types: ["ノーマル", "ひこう"],
    abilities: ["こんじょう"],
    weightKilogram: 2.3,
    evolution: "未進化"
  },
  {
    pokedexId: 277,
    name: "オオスバメ",
    stats: { hp: 60, atk: 85, def: 60, spa: 50, spd: 50, spe: 125 },
    types: ["ノーマル", "ひこう"],
    abilities: ["こんじょう"],
    weightKilogram: 19.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 278,
    name: "キャモメ",
    stats: { hp: 40, atk: 30, def: 30, spa: 55, spd: 30, spe: 85 },
    types: ["みず", "ひこう"],
    abilities: ["するどいめ"],
    weightKilogram: 9.5,
    evolution: "未進化"
  },
  {
    pokedexId: 279,
    name: "ペリッパー",
    stats: { hp: 60, atk: 50, def: 100, spa: 85, spd: 70, spe: 65 },
    types: ["みず", "ひこう"],
    abilities: ["するどいめ"],
    weightKilogram: 28,
    evolution: "最終進化"
  },
  {
    pokedexId: 280,
    name: "ラルトス",
    stats: { hp: 28, atk: 25, def: 25, spa: 45, spd: 35, spe: 40 },
    types: ["エスパー"],
    abilities: ["シンクロ", "トレース"],
    weightKilogram: 6.6,
    evolution: "未進化"
  },
  {
    pokedexId: 281,
    name: "キルリア",
    stats: { hp: 38, atk: 35, def: 35, spa: 65, spd: 55, spe: 50 },
    types: ["エスパー"],
    abilities: ["シンクロ", "トレース"],
    weightKilogram: 20.2,
    evolution: "中間進化"
  },
  {
    pokedexId: 282,
    name: "サーナイト",
    stats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    types: ["エスパー"],
    abilities: ["シンクロ", "トレース"],
    weightKilogram: 48.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 283,
    name: "アメタマ",
    stats: { hp: 40, atk: 30, def: 32, spa: 50, spd: 52, spe: 65 },
    types: ["むし", "みず"],
    abilities: ["すいすい"],
    weightKilogram: 1.7,
    evolution: "未進化"
  },
  {
    pokedexId: 284,
    name: "アメモース",
    stats: { hp: 70, atk: 60, def: 62, spa: 80, spd: 82, spe: 60 },
    types: ["むし", "ひこう"],
    abilities: ["いかく"],
    weightKilogram: 3.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 285,
    name: "キノココ",
    stats: { hp: 60, atk: 40, def: 60, spa: 40, spd: 60, spe: 35 },
    types: ["くさ"],
    abilities: ["ほうし", "ポイズンヒール"],
    weightKilogram: 4.5,
    evolution: "未進化"
  },
  {
    pokedexId: 286,
    name: "キノガッサ",
    stats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
    types: ["くさ", "かくとう"],
    abilities: ["ほうし", "ポイズンヒール"],
    weightKilogram: 39.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 287,
    name: "ナマケロ",
    stats: { hp: 60, atk: 60, def: 60, spa: 35, spd: 35, spe: 30 },
    types: ["ノーマル"],
    abilities: ["なまけ"],
    weightKilogram: 24,
    evolution: "未進化"
  },
  {
    pokedexId: 288,
    name: "ヤルキモノ",
    stats: { hp: 80, atk: 80, def: 80, spa: 55, spd: 55, spe: 90 },
    types: ["ノーマル"],
    abilities: ["やるき"],
    weightKilogram: 46.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 289,
    name: "ケッキング",
    stats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
    types: ["ノーマル"],
    abilities: ["なまけ"],
    weightKilogram: 130.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 290,
    name: "ツチニン",
    stats: { hp: 31, atk: 45, def: 90, spa: 30, spd: 30, spe: 40 },
    types: ["むし", "じめん"],
    abilities: ["ふくがん"],
    weightKilogram: 5.5,
    evolution: "未進化"
  },
  {
    pokedexId: 291,
    name: "テッカニン",
    stats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
    types: ["むし", "ひこう"],
    abilities: ["かそく"],
    weightKilogram: 12,
    evolution: "最終進化"
  },
  {
    pokedexId: 292,
    name: "ヌケニン",
    stats: { hp: 1, atk: 90, def: 45, spa: 30, spd: 30, spe: 40 },
    types: ["むし", "ゴースト"],
    abilities: ["ふしぎなまもり"],
    weightKilogram: 1.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 293,
    name: "ゴニョニョ",
    stats: { hp: 64, atk: 51, def: 23, spa: 51, spd: 23, spe: 28 },
    types: ["ノーマル"],
    abilities: ["ぼうおん"],
    weightKilogram: 16.3,
    evolution: "未進化"
  },
  {
    pokedexId: 294,
    name: "ドゴーム",
    stats: { hp: 84, atk: 71, def: 43, spa: 71, spd: 43, spe: 48 },
    types: ["ノーマル"],
    abilities: ["ぼうおん"],
    weightKilogram: 40.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 295,
    name: "バクオング",
    stats: { hp: 104, atk: 91, def: 63, spa: 91, spd: 63, spe: 68 },
    types: ["ノーマル"],
    abilities: ["ぼうおん"],
    weightKilogram: 84,
    evolution: "最終進化"
  },
  {
    pokedexId: 296,
    name: "マクノシタ",
    stats: { hp: 72, atk: 60, def: 30, spa: 20, spd: 30, spe: 25 },
    types: ["かくとう"],
    abilities: ["あついしぼう", "こんじょう"],
    weightKilogram: 86.4,
    evolution: "未進化"
  },
  {
    pokedexId: 297,
    name: "ハリテヤマ",
    stats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50 },
    types: ["かくとう"],
    abilities: ["あついしぼう", "こんじょう"],
    weightKilogram: 253.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 298,
    name: "ルリリ",
    stats: { hp: 50, atk: 20, def: 40, spa: 20, spd: 40, spe: 20 },
    types: ["ノーマル"],
    abilities: ["あついしぼう", "ちからもち"],
    weightKilogram: 2,
    evolution: "未進化"
  },
  {
    pokedexId: 299,
    name: "ノズパス",
    stats: { hp: 30, atk: 45, def: 135, spa: 45, spd: 90, spe: 30 },
    types: ["いわ"],
    abilities: ["がんじょう", "じりょく"],
    weightKilogram: 97,
    evolution: "未進化"
  },
  {
    pokedexId: 300,
    name: "エネコ",
    stats: { hp: 50, atk: 45, def: 45, spa: 35, spd: 35, spe: 50 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "ノーマルスキン"],
    weightKilogram: 11,
    evolution: "未進化"
  },
  {
    pokedexId: 301,
    name: "エネコロロ",
    stats: { hp: 70, atk: 65, def: 65, spa: 55, spd: 55, spe: 70 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "ノーマルスキン"],
    weightKilogram: 32.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 302,
    name: "ヤミラミ",
    stats: { hp: 50, atk: 75, def: 75, spa: 65, spd: 65, spe: 50 },
    types: ["あく", "ゴースト"],
    abilities: ["するどいめ", "あとだし"],
    weightKilogram: 11,
    evolution: "最終進化"
  },
  {
    pokedexId: 303,
    name: "クチート",
    stats: { hp: 50, atk: 85, def: 85, spa: 55, spd: 55, spe: 50 },
    types: ["はがね"],
    abilities: ["かいりきバサミ", "いかく"],
    weightKilogram: 11.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 304,
    name: "ココドラ",
    stats: { hp: 50, atk: 70, def: 100, spa: 40, spd: 40, spe: 30 },
    types: ["はがね", "いわ"],
    abilities: ["がんじょう", "いしあたま"],
    weightKilogram: 60,
    evolution: "未進化"
  },
  {
    pokedexId: 305,
    name: "コドラ",
    stats: { hp: 60, atk: 90, def: 140, spa: 50, spd: 50, spe: 40 },
    types: ["はがね", "いわ"],
    abilities: ["がんじょう", "いしあたま"],
    weightKilogram: 120,
    evolution: "中間進化"
  },
  {
    pokedexId: 306,
    name: "ボスゴドラ",
    stats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
    types: ["はがね", "いわ"],
    abilities: ["がんじょう", "いしあたま"],
    weightKilogram: 360,
    evolution: "最終進化"
  },
  {
    pokedexId: 307,
    name: "アサナン",
    stats: { hp: 30, atk: 40, def: 55, spa: 40, spd: 55, spe: 60 },
    types: ["かくとう", "エスパー"],
    abilities: ["ヨガパワー"],
    weightKilogram: 11.2,
    evolution: "未進化"
  },
  {
    pokedexId: 308,
    name: "チャーレム",
    stats: { hp: 60, atk: 60, def: 75, spa: 60, spd: 75, spe: 80 },
    types: ["かくとう", "エスパー"],
    abilities: ["ヨガパワー"],
    weightKilogram: 31.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 309,
    name: "ラクライ",
    stats: { hp: 40, atk: 45, def: 40, spa: 65, spd: 40, spe: 65 },
    types: ["でんき"],
    abilities: ["せいでんき", "ひらいしん"],
    weightKilogram: 15.2,
    evolution: "未進化"
  },
  {
    pokedexId: 310,
    name: "ライボルト",
    stats: { hp: 70, atk: 75, def: 60, spa: 105, spd: 60, spe: 105 },
    types: ["でんき"],
    abilities: ["せいでんき", "ひらいしん"],
    weightKilogram: 40.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 311,
    name: "プラスル",
    stats: { hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 95 },
    types: ["でんき"],
    abilities: ["プラス"],
    weightKilogram: 4.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 312,
    name: "マイナン",
    stats: { hp: 60, atk: 40, def: 50, spa: 75, spd: 85, spe: 95 },
    types: ["でんき"],
    abilities: ["マイナス"],
    weightKilogram: 4.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 313,
    name: "バルビート",
    stats: { hp: 65, atk: 73, def: 55, spa: 47, spd: 75, spe: 85 },
    types: ["むし"],
    abilities: ["はっこう", "むしのしらせ"],
    weightKilogram: 17.7,
    evolution: "最終進化"
  },
  {
    pokedexId: 314,
    name: "イルミーゼ",
    stats: { hp: 65, atk: 47, def: 55, spa: 73, spd: 75, spe: 85 },
    types: ["むし"],
    abilities: ["どんかん", "いろめがね"],
    weightKilogram: 17.7,
    evolution: "最終進化"
  },
  {
    pokedexId: 315,
    name: "ロゼリア",
    stats: { hp: 50, atk: 60, def: 45, spa: 100, spd: 80, spe: 65 },
    types: ["くさ", "どく"],
    abilities: ["しぜんかいふく", "どくのトゲ"],
    weightKilogram: 2,
    evolution: "中間進化"
  },
  {
    pokedexId: 316,
    name: "ゴクリン",
    stats: { hp: 70, atk: 43, def: 53, spa: 43, spd: 53, spe: 40 },
    types: ["どく"],
    abilities: ["ヘドロえき", "ねんちゃく"],
    weightKilogram: 10.3,
    evolution: "未進化"
  },
  {
    pokedexId: 317,
    name: "マルノーム",
    stats: { hp: 100, atk: 73, def: 83, spa: 73, spd: 83, spe: 55 },
    types: ["どく"],
    abilities: ["ヘドロえき", "ねんちゃく"],
    weightKilogram: 80,
    evolution: "最終進化"
  },
  {
    pokedexId: 318,
    name: "キバニア",
    stats: { hp: 45, atk: 90, def: 20, spa: 65, spd: 20, spe: 65 },
    types: ["みず", "あく"],
    abilities: ["さめはだ"],
    weightKilogram: 20.8,
    evolution: "未進化"
  },
  {
    pokedexId: 319,
    name: "サメハダー",
    stats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
    types: ["みず", "あく"],
    abilities: ["さめはだ"],
    weightKilogram: 88.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 320,
    name: "ホエルコ",
    stats: { hp: 130, atk: 70, def: 35, spa: 70, spd: 35, spe: 60 },
    types: ["みず"],
    abilities: ["みずのベール", "どんかん"],
    weightKilogram: 130,
    evolution: "未進化"
  },
  {
    pokedexId: 321,
    name: "ホエルオー",
    stats: { hp: 170, atk: 90, def: 45, spa: 90, spd: 45, spe: 60 },
    types: ["みず"],
    abilities: ["みずのベール", "どんかん"],
    weightKilogram: 398,
    evolution: "最終進化"
  },
  {
    pokedexId: 322,
    name: "ドンメル",
    stats: { hp: 60, atk: 60, def: 40, spa: 65, spd: 45, spe: 35 },
    types: ["ほのお", "じめん"],
    abilities: ["どんかん", "たんじゅん"],
    weightKilogram: 24,
    evolution: "未進化"
  },
  {
    pokedexId: 323,
    name: "バクーダ",
    stats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
    types: ["ほのお", "じめん"],
    abilities: ["マグマのよろい", "ハードロック"],
    weightKilogram: 220,
    evolution: "最終進化"
  },
  {
    pokedexId: 324,
    name: "コータス",
    stats: { hp: 70, atk: 85, def: 140, spa: 85, spd: 70, spe: 20 },
    types: ["ほのお"],
    abilities: ["しろいけむり"],
    weightKilogram: 80.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 325,
    name: "バネブー",
    stats: { hp: 60, atk: 25, def: 35, spa: 70, spd: 80, spe: 60 },
    types: ["エスパー"],
    abilities: ["あついしぼう", "マイペース"],
    weightKilogram: 30.6,
    evolution: "未進化"
  },
  {
    pokedexId: 326,
    name: "ブーピッグ",
    stats: { hp: 80, atk: 45, def: 65, spa: 90, spd: 110, spe: 80 },
    types: ["エスパー"],
    abilities: ["あついしぼう", "マイペース"],
    weightKilogram: 71.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 327,
    name: "パッチール",
    stats: { hp: 60, atk: 60, def: 60, spa: 60, spd: 60, spe: 60 },
    types: ["ノーマル"],
    abilities: ["マイペース", "ちどりあし"],
    weightKilogram: 5,
    evolution: "最終進化"
  },
  {
    pokedexId: 328,
    name: "ナックラー",
    stats: { hp: 45, atk: 100, def: 45, spa: 45, spd: 45, spe: 10 },
    types: ["じめん"],
    abilities: ["かいりきバサミ", "ありじごく"],
    weightKilogram: 15,
    evolution: "未進化"
  },
  {
    pokedexId: 329,
    name: "ビブラーバ",
    stats: { hp: 50, atk: 70, def: 50, spa: 50, spd: 50, spe: 70 },
    types: ["じめん", "ドラゴン"],
    abilities: ["ふゆう"],
    weightKilogram: 15.3,
    evolution: "中間進化"
  },
  {
    pokedexId: 330,
    name: "フライゴン",
    stats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100 },
    types: ["じめん", "ドラゴン"],
    abilities: ["ふゆう"],
    weightKilogram: 82,
    evolution: "最終進化"
  },
  {
    pokedexId: 331,
    name: "サボネア",
    stats: { hp: 50, atk: 85, def: 40, spa: 85, spd: 40, spe: 35 },
    types: ["くさ"],
    abilities: ["すながくれ"],
    weightKilogram: 51.3,
    evolution: "未進化"
  },
  {
    pokedexId: 332,
    name: "ノクタス",
    stats: { hp: 70, atk: 115, def: 60, spa: 115, spd: 60, spe: 55 },
    types: ["くさ", "あく"],
    abilities: ["すながくれ"],
    weightKilogram: 77.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 333,
    name: "チルット",
    stats: { hp: 45, atk: 40, def: 60, spa: 40, spd: 75, spe: 50 },
    types: ["ノーマル", "ひこう"],
    abilities: ["しぜんかいふく"],
    weightKilogram: 1.2,
    evolution: "未進化"
  },
  {
    pokedexId: 334,
    name: "チルタリス",
    stats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
    types: ["ドラゴン", "ひこう"],
    abilities: ["しぜんかいふく"],
    weightKilogram: 20.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 335,
    name: "ザングース",
    stats: { hp: 73, atk: 115, def: 60, spa: 60, spd: 60, spe: 90 },
    types: ["ノーマル"],
    abilities: ["めんえき"],
    weightKilogram: 40.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 336,
    name: "ハブネーク",
    stats: { hp: 73, atk: 100, def: 60, spa: 100, spd: 60, spe: 65 },
    types: ["どく"],
    abilities: ["だっぴ"],
    weightKilogram: 52.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 337,
    name: "ルナトーン",
    stats: { hp: 70, atk: 55, def: 65, spa: 95, spd: 85, spe: 70 },
    types: ["いわ", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 168,
    evolution: "最終進化"
  },
  {
    pokedexId: 338,
    name: "ソルロック",
    stats: { hp: 70, atk: 95, def: 85, spa: 55, spd: 65, spe: 70 },
    types: ["いわ", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 154,
    evolution: "最終進化"
  },
  {
    pokedexId: 339,
    name: "ドジョッチ",
    stats: { hp: 50, atk: 48, def: 43, spa: 46, spd: 41, spe: 60 },
    types: ["みず", "じめん"],
    abilities: ["どんかん", "きけんよち"],
    weightKilogram: 1.9,
    evolution: "未進化"
  },
  {
    pokedexId: 340,
    name: "ナマズン",
    stats: { hp: 110, atk: 78, def: 73, spa: 76, spd: 71, spe: 60 },
    types: ["みず", "じめん"],
    abilities: ["どんかん", "きけんよち"],
    weightKilogram: 23.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 341,
    name: "ヘイガニ",
    stats: { hp: 43, atk: 80, def: 65, spa: 50, spd: 35, spe: 35 },
    types: ["みず"],
    abilities: ["かいりきバサミ", "シェルアーマー"],
    weightKilogram: 11.5,
    evolution: "未進化"
  },
  {
    pokedexId: 342,
    name: "シザリガー",
    stats: { hp: 63, atk: 120, def: 85, spa: 90, spd: 55, spe: 55 },
    types: ["みず", "あく"],
    abilities: ["かいりきバサミ", "シェルアーマー"],
    weightKilogram: 32.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 343,
    name: "ヤジロン",
    stats: { hp: 40, atk: 40, def: 55, spa: 40, spd: 70, spe: 55 },
    types: ["じめん", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 21.5,
    evolution: "未進化"
  },
  {
    pokedexId: 344,
    name: "ネンドール",
    stats: { hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
    types: ["じめん", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 108,
    evolution: "最終進化"
  },
  {
    pokedexId: 345,
    name: "リリーラ",
    stats: { hp: 66, atk: 41, def: 77, spa: 61, spd: 87, spe: 23 },
    types: ["いわ", "くさ"],
    abilities: ["きゅうばん"],
    weightKilogram: 23.8,
    evolution: "未進化"
  },
  {
    pokedexId: 346,
    name: "ユレイドル",
    stats: { hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43 },
    types: ["いわ", "くさ"],
    abilities: ["きゅうばん"],
    weightKilogram: 60.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 347,
    name: "アノプス",
    stats: { hp: 45, atk: 95, def: 50, spa: 40, spd: 50, spe: 75 },
    types: ["いわ", "むし"],
    abilities: ["カブトアーマー"],
    weightKilogram: 12.5,
    evolution: "未進化"
  },
  {
    pokedexId: 348,
    name: "アーマルド",
    stats: { hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 45 },
    types: ["いわ", "むし"],
    abilities: ["カブトアーマー"],
    weightKilogram: 68.2,
    evolution: "最終進化"
  },
  {
    pokedexId: 349,
    name: "ヒンバス",
    stats: { hp: 20, atk: 15, def: 20, spa: 10, spd: 55, spe: 80 },
    types: ["みず"],
    abilities: ["すいすい", "どんかん"],
    weightKilogram: 7.4,
    evolution: "未進化"
  },
  {
    pokedexId: 350,
    name: "ミロカロス",
    stats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
    types: ["みず"],
    abilities: ["ふしぎなうろこ"],
    weightKilogram: 162,
    evolution: "最終進化"
  },
  {
    pokedexId: 351,
    name: "ポワルン",
    stats: { hp: 70, atk: 70, def: 70, spa: 70, spd: 70, spe: 70 },
    types: ["ノーマル"],
    abilities: ["てんきや"],
    weightKilogram: 0.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 352,
    name: "カクレオン",
    stats: { hp: 60, atk: 90, def: 70, spa: 60, spd: 120, spe: 40 },
    types: ["ノーマル"],
    abilities: ["へんしょく"],
    weightKilogram: 22,
    evolution: "最終進化"
  },
  {
    pokedexId: 353,
    name: "カゲボウズ",
    stats: { hp: 44, atk: 75, def: 35, spa: 63, spd: 33, spe: 45 },
    types: ["ゴースト"],
    abilities: ["ふみん", "おみとおし"],
    weightKilogram: 2.3,
    evolution: "未進化"
  },
  {
    pokedexId: 354,
    name: "ジュペッタ",
    stats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
    types: ["ゴースト"],
    abilities: ["ふみん", "おみとおし"],
    weightKilogram: 12.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 355,
    name: "ヨマワル",
    stats: { hp: 20, atk: 40, def: 90, spa: 30, spd: 90, spe: 25 },
    types: ["ゴースト"],
    abilities: ["ふゆう"],
    weightKilogram: 15,
    evolution: "未進化"
  },
  {
    pokedexId: 356,
    name: "サマヨール",
    stats: { hp: 40, atk: 70, def: 130, spa: 60, spd: 130, spe: 25 },
    types: ["ゴースト"],
    abilities: ["プレッシャー"],
    weightKilogram: 30.6,
    evolution: "中間進化"
  },
  {
    pokedexId: 357,
    name: "トロピウス",
    stats: { hp: 99, atk: 68, def: 83, spa: 72, spd: 87, spe: 51 },
    types: ["くさ", "ひこう"],
    abilities: ["ようりょくそ", "サンパワー"],
    weightKilogram: 100,
    evolution: "最終進化"
  },
  {
    pokedexId: 358,
    name: "チリーン",
    stats: { hp: 65, atk: 50, def: 70, spa: 95, spd: 80, spe: 65 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 1,
    evolution: "最終進化"
  },
  {
    pokedexId: 359,
    name: "アブソル",
    stats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
    types: ["あく"],
    abilities: ["プレッシャー", "きょううん"],
    weightKilogram: 47,
    evolution: "最終進化"
  },
  {
    pokedexId: 360,
    name: "ソーナノ",
    stats: { hp: 95, atk: 23, def: 48, spa: 23, spd: 48, spe: 23 },
    types: ["エスパー"],
    abilities: ["かげふみ"],
    weightKilogram: 14,
    evolution: "未進化"
  },
  {
    pokedexId: 361,
    name: "ユキワラシ",
    stats: { hp: 50, atk: 50, def: 50, spa: 50, spd: 50, spe: 50 },
    types: ["こおり"],
    abilities: ["せいしんりょく", "アイスボディ"],
    weightKilogram: 16.8,
    evolution: "未進化"
  },
  {
    pokedexId: 362,
    name: "オニゴーリ",
    stats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    types: ["こおり"],
    abilities: ["せいしんりょく", "アイスボディ"],
    weightKilogram: 256.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 363,
    name: "タマザラシ",
    stats: { hp: 70, atk: 40, def: 50, spa: 55, spd: 50, spe: 25 },
    types: ["こおり", "みず"],
    abilities: ["あついしぼう", "アイスボディ"],
    weightKilogram: 39.5,
    evolution: "未進化"
  },
  {
    pokedexId: 364,
    name: "トドグラー",
    stats: { hp: 90, atk: 60, def: 70, spa: 75, spd: 70, spe: 45 },
    types: ["こおり", "みず"],
    abilities: ["あついしぼう", "アイスボディ"],
    weightKilogram: 87.6,
    evolution: "中間進化"
  },
  {
    pokedexId: 365,
    name: "トドゼルガ",
    stats: { hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65 },
    types: ["こおり", "みず"],
    abilities: ["あついしぼう", "アイスボディ"],
    weightKilogram: 150.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 366,
    name: "パールル",
    stats: { hp: 35, atk: 64, def: 85, spa: 74, spd: 55, spe: 32 },
    types: ["みず"],
    abilities: ["シェルアーマー"],
    weightKilogram: 52.5,
    evolution: "未進化"
  },
  {
    pokedexId: 367,
    name: "ハンテール",
    stats: { hp: 55, atk: 104, def: 105, spa: 94, spd: 75, spe: 52 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 27,
    evolution: "最終進化"
  },
  {
    pokedexId: 368,
    name: "サクラビス",
    stats: { hp: 55, atk: 84, def: 105, spa: 114, spd: 75, spe: 52 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 22.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 369,
    name: "ジーランス",
    stats: { hp: 100, atk: 90, def: 130, spa: 45, spd: 65, spe: 55 },
    types: ["みず", "いわ"],
    abilities: ["すいすい", "いしあたま"],
    weightKilogram: 23.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 370,
    name: "ラブカス",
    stats: { hp: 43, atk: 30, def: 55, spa: 40, spd: 65, spe: 97 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 8.7,
    evolution: "最終進化"
  },
  {
    pokedexId: 371,
    name: "タツベイ",
    stats: { hp: 45, atk: 75, def: 60, spa: 40, spd: 30, spe: 50 },
    types: ["ドラゴン"],
    abilities: ["いしあたま"],
    weightKilogram: 42.1,
    evolution: "未進化"
  },
  {
    pokedexId: 372,
    name: "コモルー",
    stats: { hp: 65, atk: 95, def: 100, spa: 60, spd: 50, spe: 50 },
    types: ["ドラゴン"],
    abilities: ["いしあたま"],
    weightKilogram: 110.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 373,
    name: "ボーマンダ",
    stats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
    types: ["ドラゴン", "ひこう"],
    abilities: ["いかく"],
    weightKilogram: 102.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 374,
    name: "ダンバル",
    stats: { hp: 40, atk: 55, def: 80, spa: 35, spd: 60, spe: 30 },
    types: ["はがね", "エスパー"],
    abilities: ["クリアボディ"],
    weightKilogram: 95.2,
    evolution: "未進化"
  },
  {
    pokedexId: 375,
    name: "メタング",
    stats: { hp: 60, atk: 75, def: 100, spa: 55, spd: 80, spe: 50 },
    types: ["はがね", "エスパー"],
    abilities: ["クリアボディ"],
    weightKilogram: 202.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 376,
    name: "メタグロス",
    stats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    types: ["はがね", "エスパー"],
    abilities: ["クリアボディ"],
    weightKilogram: 550,
    evolution: "最終進化"
  },
  {
    pokedexId: 377,
    name: "レジロック",
    stats: { hp: 80, atk: 100, def: 200, spa: 50, spd: 100, spe: 50 },
    types: ["いわ"],
    abilities: ["クリアボディ"],
    weightKilogram: 230,
    evolution: "最終進化"
  },
  {
    pokedexId: 378,
    name: "レジアイス",
    stats: { hp: 80, atk: 50, def: 100, spa: 100, spd: 200, spe: 50 },
    types: ["こおり"],
    abilities: ["クリアボディ"],
    weightKilogram: 175,
    evolution: "最終進化"
  },
  {
    pokedexId: 379,
    name: "レジスチル",
    stats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
    types: ["はがね"],
    abilities: ["クリアボディ"],
    weightKilogram: 205,
    evolution: "最終進化"
  },
  {
    pokedexId: 380,
    name: "ラティアス",
    stats: { hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110 },
    types: ["ドラゴン", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 40,
    evolution: "最終進化"
  },
  {
    pokedexId: 381,
    name: "ラティオス",
    stats: { hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110 },
    types: ["ドラゴン", "エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 60,
    evolution: "最終進化"
  },
  {
    pokedexId: 382,
    name: "カイオーガ",
    stats: { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 },
    types: ["みず"],
    abilities: ["あめふらし"],
    weightKilogram: 352,
    evolution: "伝説"
  },
  {
    pokedexId: 383,
    name: "グラードン",
    stats: { hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90 },
    types: ["じめん"],
    abilities: ["ひでり"],
    weightKilogram: 950,
    evolution: "伝説"
  },
  {
    pokedexId: 384,
    name: "レックウザ",
    stats: { hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95 },
    types: ["ドラゴン", "ひこう"],
    abilities: ["エアロック"],
    weightKilogram: 206.5,
    evolution: "伝説"
  },
  {
    pokedexId: 385,
    name: "ジラーチ",
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: ["はがね", "エスパー"],
    abilities: ["てんのめぐみ"],
    weightKilogram: 1.1,
    evolution: "幻"
  },
  {
    pokedexId: 386,
    name: "デオキシス(ノーマル)",
    stats: { hp: 50, atk: 150, def: 50, spa: 150, spd: 50, spe: 150 },
    types: ["エスパー"],
    abilities: ["プレッシャー"],
    weightKilogram: 60.8,
    evolution: "幻"
  },
  {
    pokedexId: 386,
    name: "デオキシス(アタック)",
    stats: { hp: 50, atk: 180, def: 20, spa: 180, spd: 20, spe: 150 },
    types: ["エスパー"],
    abilities: ["プレッシャー"],
    weightKilogram: 60.8,
    evolution: "幻"
  },
  {
    pokedexId: 386,
    name: "デオキシス(ディフェンス)",
    stats: { hp: 50, atk: 70, def: 160, spa: 70, spd: 160, spe: 90 },
    types: ["エスパー"],
    abilities: ["プレッシャー"],
    weightKilogram: 60.8,
    evolution: "幻"
  },
  {
    pokedexId: 386,
    name: "デオキシス(スピード)",
    stats: { hp: 50, atk: 95, def: 90, spa: 95, spd: 90, spe: 180 },
    types: ["エスパー"],
    abilities: ["プレッシャー"],
    weightKilogram: 60.8,
    evolution: "幻"
  },
  {
    pokedexId: 387,
    name: "ナエトル",
    stats: { hp: 55, atk: 68, def: 64, spa: 45, spd: 55, spe: 31 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 10.2,
    evolution: "未進化"
  },
  {
    pokedexId: 388,
    name: "ハヤシガメ",
    stats: { hp: 75, atk: 89, def: 85, spa: 55, spd: 65, spe: 36 },
    types: ["くさ"],
    abilities: ["しんりょく"],
    weightKilogram: 97,
    evolution: "中間進化"
  },
  {
    pokedexId: 389,
    name: "ドダイトス",
    stats: { hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56 },
    types: ["くさ", "じめん"],
    abilities: ["しんりょく"],
    weightKilogram: 310,
    evolution: "最終進化"
  },
  {
    pokedexId: 390,
    name: "ヒコザル",
    stats: { hp: 44, atk: 58, def: 44, spa: 58, spd: 44, spe: 61 },
    types: ["ほのお"],
    abilities: ["もうか"],
    weightKilogram: 6.2,
    evolution: "未進化"
  },
  {
    pokedexId: 391,
    name: "モウカザル",
    stats: { hp: 64, atk: 78, def: 52, spa: 78, spd: 52, spe: 81 },
    types: ["ほのお", "かくとう"],
    abilities: ["もうか"],
    weightKilogram: 22,
    evolution: "中間進化"
  },
  {
    pokedexId: 392,
    name: "ゴウカザル",
    stats: { hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108 },
    types: ["ほのお", "かくとう"],
    abilities: ["もうか"],
    weightKilogram: 55,
    evolution: "最終進化"
  },
  {
    pokedexId: 393,
    name: "ポッチャマ",
    stats: { hp: 53, atk: 51, def: 53, spa: 61, spd: 56, spe: 40 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 5.2,
    evolution: "未進化"
  },
  {
    pokedexId: 394,
    name: "ポッタイシ",
    stats: { hp: 64, atk: 66, def: 68, spa: 81, spd: 76, spe: 50 },
    types: ["みず"],
    abilities: ["げきりゅう"],
    weightKilogram: 23,
    evolution: "中間進化"
  },
  {
    pokedexId: 395,
    name: "エンペルト",
    stats: { hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60 },
    types: ["みず", "はがね"],
    abilities: ["げきりゅう"],
    weightKilogram: 84.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 396,
    name: "ムックル",
    stats: { hp: 40, atk: 55, def: 30, spa: 30, spd: 30, spe: 60 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ"],
    weightKilogram: 2,
    evolution: "未進化"
  },
  {
    pokedexId: 397,
    name: "ムクバード",
    stats: { hp: 55, atk: 75, def: 50, spa: 40, spd: 40, spe: 80 },
    types: ["ノーマル", "ひこう"],
    abilities: ["いかく"],
    weightKilogram: 15.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 398,
    name: "ムクホーク",
    stats: { hp: 85, atk: 120, def: 70, spa: 50, spd: 50, spe: 100 },
    types: ["ノーマル", "ひこう"],
    abilities: ["いかく"],
    weightKilogram: 24.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 399,
    name: "ビッパ",
    stats: { hp: 59, atk: 45, def: 40, spa: 35, spd: 40, spe: 31 },
    types: ["ノーマル"],
    abilities: ["たんじゅん", "てんねん"],
    weightKilogram: 20,
    evolution: "未進化"
  },
  {
    pokedexId: 400,
    name: "ビーダル",
    stats: { hp: 79, atk: 85, def: 60, spa: 55, spd: 60, spe: 71 },
    types: ["ノーマル", "みず"],
    abilities: ["たんじゅん", "てんねん"],
    weightKilogram: 31.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 401,
    name: "コロボーシ",
    stats: { hp: 37, atk: 25, def: 41, spa: 25, spd: 41, spe: 25 },
    types: ["むし"],
    abilities: ["だっぴ"],
    weightKilogram: 2.2,
    evolution: "未進化"
  },
  {
    pokedexId: 402,
    name: "コロトック",
    stats: { hp: 77, atk: 85, def: 51, spa: 55, spd: 51, spe: 65 },
    types: ["むし"],
    abilities: ["むしのしらせ"],
    weightKilogram: 25.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 403,
    name: "コリンク",
    stats: { hp: 45, atk: 65, def: 34, spa: 40, spd: 34, spe: 45 },
    types: ["でんき"],
    abilities: ["とうそうしん", "いかく"],
    weightKilogram: 9.5,
    evolution: "未進化"
  },
  {
    pokedexId: 404,
    name: "ルクシオ",
    stats: { hp: 60, atk: 85, def: 49, spa: 60, spd: 49, spe: 60 },
    types: ["でんき"],
    abilities: ["とうそうしん", "いかく"],
    weightKilogram: 30.5,
    evolution: "中間進化"
  },
  {
    pokedexId: 405,
    name: "レントラー",
    stats: { hp: 80, atk: 120, def: 79, spa: 95, spd: 79, spe: 70 },
    types: ["でんき"],
    abilities: ["とうそうしん", "いかく"],
    weightKilogram: 42,
    evolution: "最終進化"
  },
  {
    pokedexId: 406,
    name: "スボミー",
    stats: { hp: 40, atk: 30, def: 35, spa: 50, spd: 70, spe: 55 },
    types: ["くさ", "どく"],
    abilities: ["しぜんかいふく", "どくのトゲ"],
    weightKilogram: 1.2,
    evolution: "未進化"
  },
  {
    pokedexId: 407,
    name: "ロズレイド",
    stats: { hp: 60, atk: 70, def: 55, spa: 125, spd: 105, spe: 90 },
    types: ["くさ", "どく"],
    abilities: ["しぜんかいふく", "どくのトゲ"],
    weightKilogram: 14.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 408,
    name: "ズガイドス",
    stats: { hp: 67, atk: 125, def: 40, spa: 30, spd: 30, spe: 58 },
    types: ["いわ"],
    abilities: ["かたやぶり"],
    weightKilogram: 31.5,
    evolution: "未進化"
  },
  {
    pokedexId: 409,
    name: "ラムパルド",
    stats: { hp: 97, atk: 165, def: 60, spa: 65, spd: 50, spe: 58 },
    types: ["いわ"],
    abilities: ["かたやぶり"],
    weightKilogram: 102.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 410,
    name: "タテトプス",
    stats: { hp: 30, atk: 42, def: 118, spa: 42, spd: 88, spe: 30 },
    types: ["いわ", "はがね"],
    abilities: ["がんじょう"],
    weightKilogram: 57,
    evolution: "未進化"
  },
  {
    pokedexId: 411,
    name: "トリデプス",
    stats: { hp: 60, atk: 52, def: 168, spa: 47, spd: 138, spe: 30 },
    types: ["いわ", "はがね"],
    abilities: ["がんじょう"],
    weightKilogram: 149.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 412,
    name: "ミノムッチ",
    stats: { hp: 40, atk: 29, def: 45, spa: 29, spd: 45, spe: 36 },
    types: ["むし"],
    abilities: ["だっぴ"],
    weightKilogram: 3.4,
    evolution: "未進化"
  },
  {
    pokedexId: 413,
    name: "ミノマダム(くさき)",
    stats: { hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 36 },
    types: ["むし", "くさ"],
    abilities: ["きけんよち"],
    weightKilogram: 6.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 413,
    name: "ミノマダム(すなち)",
    stats: { hp: 60, atk: 79, def: 105, spa: 59, spd: 85, spe: 36 },
    types: ["むし", "じめん"],
    abilities: ["きけんよち"],
    weightKilogram: 6.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 413,
    name: "ミノマダム(ゴミ)",
    stats: { hp: 60, atk: 69, def: 95, spa: 69, spd: 95, spe: 36 },
    types: ["むし", "はがね"],
    abilities: ["きけんよち"],
    weightKilogram: 6.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 414,
    name: "ガーメイル",
    stats: { hp: 70, atk: 94, def: 50, spa: 94, spd: 50, spe: 66 },
    types: ["むし", "ひこう"],
    abilities: ["むしのしらせ"],
    weightKilogram: 23.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 415,
    name: "ミツハニー",
    stats: { hp: 30, atk: 30, def: 42, spa: 30, spd: 42, spe: 70 },
    types: ["むし", "ひこう"],
    abilities: ["みつあつめ"],
    weightKilogram: 5.5,
    evolution: "未進化"
  },
  {
    pokedexId: 416,
    name: "ビークイン",
    stats: { hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40 },
    types: ["むし", "ひこう"],
    abilities: ["プレッシャー"],
    weightKilogram: 38.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 417,
    name: "パチリス",
    stats: { hp: 60, atk: 45, def: 70, spa: 45, spd: 90, spe: 95 },
    types: ["でんき"],
    abilities: ["にげあし", "ものひろい"],
    weightKilogram: 3.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 418,
    name: "ブイゼル",
    stats: { hp: 55, atk: 65, def: 35, spa: 60, spd: 30, spe: 85 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 29.5,
    evolution: "未進化"
  },
  {
    pokedexId: 419,
    name: "フローゼル",
    stats: { hp: 85, atk: 105, def: 55, spa: 85, spd: 50, spe: 115 },
    types: ["みず"],
    abilities: ["すいすい"],
    weightKilogram: 33.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 420,
    name: "チェリンボ",
    stats: { hp: 45, atk: 35, def: 45, spa: 62, spd: 53, spe: 35 },
    types: ["くさ"],
    abilities: ["ようりょくそ"],
    weightKilogram: 3.3,
    evolution: "未進化"
  },
  {
    pokedexId: 421,
    name: "チェリム",
    stats: { hp: 70, atk: 60, def: 70, spa: 87, spd: 78, spe: 85 },
    types: ["くさ"],
    abilities: ["フラワーギフト"],
    weightKilogram: 9.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 422,
    name: "カラナクシ",
    stats: { hp: 76, atk: 48, def: 48, spa: 57, spd: 62, spe: 34 },
    types: ["みず"],
    abilities: ["ねんちゃく", "よびみず"],
    weightKilogram: 6.3,
    evolution: "未進化"
  },
  {
    pokedexId: 423,
    name: "トリトドン",
    stats: { hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39 },
    types: ["みず", "じめん"],
    abilities: ["ねんちゃく", "よびみず"],
    weightKilogram: 29.9,
    evolution: "未進化"
  },
  {
    pokedexId: 424,
    name: "エテボース",
    stats: { hp: 75, atk: 100, def: 66, spa: 60, spd: 66, spe: 115 },
    types: ["ノーマル"],
    abilities: ["テクニシャン", "ものひろい"],
    weightKilogram: 20.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 425,
    name: "フワンテ",
    stats: { hp: 90, atk: 50, def: 34, spa: 60, spd: 44, spe: 70 },
    types: ["ゴースト", "ひこう"],
    abilities: ["ゆうばく", "かるわざ"],
    weightKilogram: 1.2,
    evolution: "未進化"
  },
  {
    pokedexId: 426,
    name: "フワライド",
    stats: { hp: 150, atk: 80, def: 44, spa: 90, spd: 54, spe: 80 },
    types: ["ゴースト", "ひこう"],
    abilities: ["ゆうばく", "かるわざ"],
    weightKilogram: 15,
    evolution: "最終進化"
  },
  {
    pokedexId: 427,
    name: "ミミロル",
    stats: { hp: 55, atk: 66, def: 44, spa: 44, spd: 56, spe: 85 },
    types: ["ノーマル"],
    abilities: ["にげあし", "ぶきよう"],
    weightKilogram: 5.5,
    evolution: "未進化"
  },
  {
    pokedexId: 428,
    name: "ミミロップ",
    stats: { hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105 },
    types: ["ノーマル"],
    abilities: ["メロメロボディ", "ぶきよう"],
    weightKilogram: 33.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 429,
    name: "ムウマージ",
    stats: { hp: 60, atk: 60, def: 60, spa: 105, spd: 105, spe: 105 },
    types: ["ゴースト"],
    abilities: ["ふゆう"],
    weightKilogram: 4.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 430,
    name: "ドンカラス",
    stats: { hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 71 },
    types: ["あく", "ひこう"],
    abilities: ["ふみん", "きょううん"],
    weightKilogram: 27.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 431,
    name: "ニャルマー",
    stats: { hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 85 },
    types: ["ノーマル"],
    abilities: ["じゅうなん", "マイペース"],
    weightKilogram: 3.9,
    evolution: "未進化"
  },
  {
    pokedexId: 432,
    name: "ブニャット",
    stats: { hp: 71, atk: 82, def: 64, spa: 64, spd: 59, spe: 112 },
    types: ["ノーマル"],
    abilities: ["あついしぼう", "マイペース"],
    weightKilogram: 43.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 433,
    name: "リーシャン",
    stats: { hp: 45, atk: 30, def: 50, spa: 65, spd: 50, spe: 45 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 0.6,
    evolution: "未進化"
  },
  {
    pokedexId: 434,
    name: "スカンプー",
    stats: { hp: 63, atk: 63, def: 47, spa: 41, spd: 41, spe: 74 },
    types: ["どく", "あく"],
    abilities: ["あくしゅう", "ゆうばく"],
    weightKilogram: 19.2,
    evolution: "未進化"
  },
  {
    pokedexId: 435,
    name: "スカタンク",
    stats: { hp: 103, atk: 93, def: 67, spa: 71, spd: 61, spe: 84 },
    types: ["どく", "あく"],
    abilities: ["あくしゅう", "ゆうばく"],
    weightKilogram: 38,
    evolution: "最終進化"
  },
  {
    pokedexId: 436,
    name: "ドーミラー",
    stats: { hp: 57, atk: 24, def: 86, spa: 24, spd: 86, spe: 23 },
    types: ["はがね", "エスパー"],
    abilities: ["ふゆう", "たいねつ"],
    weightKilogram: 60.5,
    evolution: "未進化"
  },
  {
    pokedexId: 437,
    name: "ドータクン",
    stats: { hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33 },
    types: ["はがね", "エスパー"],
    abilities: ["ふゆう", "たいねつ"],
    weightKilogram: 187,
    evolution: "最終進化"
  },
  {
    pokedexId: 438,
    name: "ウソハチ",
    stats: { hp: 50, atk: 80, def: 95, spa: 10, spd: 45, spe: 10 },
    types: ["いわ"],
    abilities: ["がんじょう", "いしあたま"],
    weightKilogram: 15,
    evolution: "未進化"
  },
  {
    pokedexId: 439,
    name: "マネネ",
    stats: { hp: 20, atk: 25, def: 45, spa: 70, spd: 90, spe: 60 },
    types: ["エスパー"],
    abilities: ["ぼうおん", "フィルター"],
    weightKilogram: 13,
    evolution: "未進化"
  },
  {
    pokedexId: 440,
    name: "ピンプク",
    stats: { hp: 100, atk: 5, def: 5, spa: 15, spd: 65, spe: 30 },
    types: ["ノーマル"],
    abilities: ["しぜんかいふく", "てんのめぐみ"],
    weightKilogram: 24.4,
    evolution: "未進化"
  },
  {
    pokedexId: 441,
    name: "ペラップ",
    stats: { hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 91 },
    types: ["ノーマル", "ひこう"],
    abilities: ["するどいめ", "ちどりあし"],
    weightKilogram: 1.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 442,
    name: "ミカルゲ",
    stats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
    types: ["ゴースト", "あく"],
    abilities: ["プレッシャー"],
    weightKilogram: 108,
    evolution: "最終進化"
  },
  {
    pokedexId: 443,
    name: "フカマル",
    stats: { hp: 58, atk: 70, def: 45, spa: 40, spd: 45, spe: 42 },
    types: ["ドラゴン", "じめん"],
    abilities: ["すながくれ"],
    weightKilogram: 20.5,
    evolution: "未進化"
  },
  {
    pokedexId: 444,
    name: "ガバイト",
    stats: { hp: 68, atk: 90, def: 65, spa: 50, spd: 55, spe: 82 },
    types: ["ドラゴン", "じめん"],
    abilities: ["すながくれ"],
    weightKilogram: 56,
    evolution: "中間進化"
  },
  {
    pokedexId: 445,
    name: "ガブリアス",
    stats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
    types: ["ドラゴン", "じめん"],
    abilities: ["すながくれ"],
    weightKilogram: 95,
    evolution: "最終進化"
  },
  {
    pokedexId: 446,
    name: "ゴンベ",
    stats: { hp: 135, atk: 85, def: 40, spa: 40, spd: 85, spe: 5 },
    types: ["ノーマル"],
    abilities: ["ものひろい", "あついしぼう"],
    weightKilogram: 105,
    evolution: "未進化"
  },
  {
    pokedexId: 447,
    name: "リオル",
    stats: { hp: 40, atk: 70, def: 40, spa: 35, spd: 40, spe: 60 },
    types: ["かくとう"],
    abilities: ["ふくつのこころ", "せいしんりょく"],
    weightKilogram: 20.2,
    evolution: "未進化"
  },
  {
    pokedexId: 448,
    name: "ルカリオ",
    stats: { hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90 },
    types: ["かくとう", "はがね"],
    abilities: ["ふくつのこころ", "せいしんりょく"],
    weightKilogram: 54,
    evolution: "最終進化"
  },
  {
    pokedexId: 449,
    name: "ヒポポタス",
    stats: { hp: 68, atk: 72, def: 78, spa: 38, spd: 42, spe: 32 },
    types: ["じめん"],
    abilities: ["すなおこし"],
    weightKilogram: 49.5,
    evolution: "未進化"
  },
  {
    pokedexId: 450,
    name: "カバルドン",
    stats: { hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47 },
    types: ["じめん"],
    abilities: ["すなおこし"],
    weightKilogram: 300,
    evolution: "最終進化"
  },
  {
    pokedexId: 451,
    name: "スコルピ",
    stats: { hp: 40, atk: 50, def: 90, spa: 30, spd: 55, spe: 65 },
    types: ["どく", "むし"],
    abilities: ["カブトアーマー", "スナイパー"],
    weightKilogram: 12,
    evolution: "未進化"
  },
  {
    pokedexId: 452,
    name: "ドラピオン",
    stats: { hp: 70, atk: 90, def: 110, spa: 60, spd: 75, spe: 95 },
    types: ["どく", "あく"],
    abilities: ["カブトアーマー", "スナイパー"],
    weightKilogram: 61.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 453,
    name: "グレッグル",
    stats: { hp: 48, atk: 61, def: 40, spa: 61, spd: 40, spe: 50 },
    types: ["どく", "かくとう"],
    abilities: ["きけんよち", "かんそうはだ"],
    weightKilogram: 23,
    evolution: "未進化"
  },
  {
    pokedexId: 454,
    name: "ドクロッグ",
    stats: { hp: 83, atk: 106, def: 65, spa: 86, spd: 65, spe: 85 },
    types: ["どく", "かくとう"],
    abilities: ["きけんよち", "かんそうはだ"],
    weightKilogram: 44.4,
    evolution: "最終進化"
  },
  {
    pokedexId: 455,
    name: "マスキッパ",
    stats: { hp: 74, atk: 100, def: 72, spa: 90, spd: 72, spe: 46 },
    types: ["くさ"],
    abilities: ["ふゆう"],
    weightKilogram: 27,
    evolution: "最終進化"
  },
  {
    pokedexId: 456,
    name: "ケイコウオ",
    stats: { hp: 49, atk: 49, def: 56, spa: 49, spd: 61, spe: 66 },
    types: ["みず"],
    abilities: ["すいすい", "よびみず"],
    weightKilogram: 7,
    evolution: "未進化"
  },
  {
    pokedexId: 457,
    name: "ネオラント",
    stats: { hp: 69, atk: 69, def: 76, spa: 69, spd: 86, spe: 91 },
    types: ["みず"],
    abilities: ["すいすい", "よびみず"],
    weightKilogram: 24,
    evolution: "最終進化"
  },
  {
    pokedexId: 458,
    name: "タマンタ",
    stats: { hp: 45, atk: 20, def: 50, spa: 60, spd: 120, spe: 50 },
    types: ["みず", "ひこう"],
    abilities: ["すいすい", "ちょすい"],
    weightKilogram: 65,
    evolution: "未進化"
  },
  {
    pokedexId: 459,
    name: "ユキカブリ",
    stats: { hp: 60, atk: 62, def: 50, spa: 62, spd: 60, spe: 40 },
    types: ["くさ", "こおり"],
    abilities: ["ゆきふらし"],
    weightKilogram: 50.5,
    evolution: "未進化"
  },
  {
    pokedexId: 460,
    name: "ユキノオー",
    stats: { hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60 },
    types: ["くさ", "こおり"],
    abilities: ["ゆきふらし"],
    weightKilogram: 135.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 461,
    name: "マニューラ",
    stats: { hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125 },
    types: ["あく", "こおり"],
    abilities: ["プレッシャー"],
    weightKilogram: 34,
    evolution: "最終進化"
  },
  {
    pokedexId: 462,
    name: "ジバコイル",
    stats: { hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60 },
    types: ["でんき", "はがね"],
    abilities: ["じりょく", "がんじょう"],
    weightKilogram: 180,
    evolution: "最終進化"
  },
  {
    pokedexId: 463,
    name: "ベロベルト",
    stats: { hp: 110, atk: 85, def: 95, spa: 80, spd: 95, spe: 50 },
    types: ["ノーマル"],
    abilities: ["マイペース", "どんかん"],
    weightKilogram: 140,
    evolution: "最終進化"
  },
  {
    pokedexId: 464,
    name: "ドサイドン",
    stats: { hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40 },
    types: ["じめん", "いわ"],
    abilities: ["ひらいしん", "ハードロック"],
    weightKilogram: 282.8,
    evolution: "最終進化"
  },
  {
    pokedexId: 465,
    name: "モジャンボ",
    stats: { hp: 100, atk: 100, def: 125, spa: 110, spd: 50, spe: 50 },
    types: ["くさ"],
    abilities: ["ようりょくそ", "リーフガード"],
    weightKilogram: 128.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 466,
    name: "エレキブル",
    stats: { hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 95 },
    types: ["でんき"],
    abilities: ["でんきエンジン"],
    weightKilogram: 138.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 467,
    name: "ブーバーン",
    stats: { hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83 },
    types: ["ほのお"],
    abilities: ["ほのおのからだ"],
    weightKilogram: 68,
    evolution: "最終進化"
  },
  {
    pokedexId: 468,
    name: "トゲキッス",
    stats: { hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80 },
    types: ["ノーマル", "ひこう"],
    abilities: ["はりきり", "てんのめぐみ"],
    weightKilogram: 38,
    evolution: "最終進化"
  },
  {
    pokedexId: 469,
    name: "メガヤンマ",
    stats: { hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95 },
    types: ["むし", "ひこう"],
    abilities: ["かそく", "いろめがね"],
    weightKilogram: 51.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 470,
    name: "リーフィア",
    stats: { hp: 65, atk: 110, def: 130, spa: 60, spd: 65, spe: 95 },
    types: ["くさ"],
    abilities: ["リーフガード"],
    weightKilogram: 25.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 471,
    name: "グレイシア",
    stats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65 },
    types: ["こおり"],
    abilities: ["ゆきがくれ"],
    weightKilogram: 25.9,
    evolution: "最終進化"
  },
  {
    pokedexId: 472,
    name: "グライオン",
    stats: { hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95 },
    types: ["じめん", "ひこう"],
    abilities: ["かいりきバサミ", "すながくれ"],
    weightKilogram: 42.5,
    evolution: "最終進化"
  },
  {
    pokedexId: 473,
    name: "マンムー",
    stats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80 },
    types: ["こおり", "じめん"],
    abilities: ["どんかん", "ゆきがくれ"],
    weightKilogram: 291,
    evolution: "最終進化"
  },
  {
    pokedexId: 474,
    name: "ポリゴンＺ",
    stats: { hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90 },
    types: ["ノーマル"],
    abilities: ["てきおうりょく", "ダウンロード"],
    weightKilogram: 34,
    evolution: "最終進化"
  },
  {
    pokedexId: 475,
    name: "エルレイド",
    stats: { hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80 },
    types: ["エスパー", "かくとう"],
    abilities: ["ふくつのこころ"],
    weightKilogram: 52,
    evolution: "最終進化"
  },
  {
    pokedexId: 476,
    name: "ダイノーズ",
    stats: { hp: 60, atk: 55, def: 145, spa: 75, spd: 150, spe: 40 },
    types: ["いわ", "はがね"],
    abilities: ["がんじょう", "じりょく"],
    weightKilogram: 340,
    evolution: "最終進化"
  },
  {
    pokedexId: 477,
    name: "ヨノワール",
    stats: { hp: 45, atk: 100, def: 135, spa: 65, spd: 135, spe: 45 },
    types: ["ゴースト"],
    abilities: ["プレッシャー"],
    weightKilogram: 106.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 478,
    name: "ユキメノコ",
    stats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
    types: ["こおり", "ゴースト"],
    abilities: ["ゆきがくれ"],
    weightKilogram: 26.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 479,
    name: "ロトム(ノーマル)",
    stats: { hp: 50, atk: 50, def: 77, spa: 95, spd: 77, spe: 91 },
    types: ["でんき", "ゴースト"],
    abilities: ["ふゆう"],
    weightKilogram: 0.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 479,
    name: "ロトム(FC)",
    stats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    types: ["でんき", "ゴースト"],
    abilities: ["ふゆう"],
    weightKilogram: 0.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 480,
    name: "ユクシー",
    stats: { hp: 75, atk: 75, def: 130, spa: 75, spd: 130, spe: 95 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 0.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 481,
    name: "エムリット",
    stats: { hp: 80, atk: 105, def: 105, spa: 105, spd: 105, spe: 80 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 0.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 482,
    name: "アグノム",
    stats: { hp: 75, atk: 125, def: 70, spa: 125, spd: 70, spe: 115 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 0.3,
    evolution: "最終進化"
  },
  {
    pokedexId: 483,
    name: "ディアルガ",
    stats: { hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90 },
    types: ["はがね", "ドラゴン"],
    abilities: ["プレッシャー"],
    weightKilogram: 683,
    evolution: "伝説"
  },
  {
    pokedexId: 484,
    name: "パルキア",
    stats: { hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100 },
    types: ["みず", "ドラゴン"],
    abilities: ["プレッシャー"],
    weightKilogram: 336,
    evolution: "伝説"
  },
  {
    pokedexId: 485,
    name: "ヒードラン",
    stats: { hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77 },
    types: ["ほのお", "はがね"],
    abilities: ["もらいび"],
    weightKilogram: 430,
    evolution: "最終進化"
  },
  {
    pokedexId: 486,
    name: "レジギガス",
    stats: { hp: 110, atk: 160, def: 110, spa: 80, spd: 110, spe: 100 },
    types: ["ノーマル"],
    abilities: ["スロースタート"],
    weightKilogram: 420,
    evolution: "最終進化"
  },
  {
    pokedexId: 487,
    name: "ギラティナ(アナザー)",
    stats: { hp: 150, atk: 100, def: 120, spa: 100, spd: 120, spe: 90 },
    types: ["ゴースト", "ドラゴン"],
    abilities: ["プレッシャー"],
    weightKilogram: 750,
    evolution: "伝説"
  },
  {
    pokedexId: 487,
    name: "ギラティナ(オリジン)",
    stats: { hp: 150, atk: 120, def: 100, spa: 120, spd: 100, spe: 90 },
    types: ["ゴースト", "ドラゴン"],
    abilities: ["ふゆう"],
    weightKilogram: 650,
    evolution: "伝説"
  },
  {
    pokedexId: 488,
    name: "クレセリア",
    stats: { hp: 120, atk: 70, def: 120, spa: 75, spd: 130, spe: 85 },
    types: ["エスパー"],
    abilities: ["ふゆう"],
    weightKilogram: 85.6,
    evolution: "最終進化"
  },
  {
    pokedexId: 489,
    name: "フィオネ",
    stats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    types: ["みず"],
    abilities: ["うるおいボディ"],
    weightKilogram: 3.1,
    evolution: "幻"
  },
  {
    pokedexId: 490,
    name: "マナフィ",
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: ["みず"],
    abilities: ["うるおいボディ"],
    weightKilogram: 1.4,
    evolution: "幻"
  },
  {
    pokedexId: 491,
    name: "ダークライ",
    stats: { hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125 },
    types: ["あく"],
    abilities: ["ナイトメア"],
    weightKilogram: 50.5,
    evolution: "幻"
  },
  {
    pokedexId: 492,
    name: "シェイミ(ランド)",
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    types: ["くさ"],
    abilities: ["しぜんかいふく"],
    weightKilogram: 2.1,
    evolution: "幻"
  },
  {
    pokedexId: 492,
    name: "シェイミ(スカイ)",
    stats: { hp: 100, atk: 103, def: 75, spa: 120, spd: 75, spe: 127 },
    types: ["くさ", "ひこう"],
    abilities: ["てんのめぐみ"],
    weightKilogram: 5.2,
    evolution: "幻"
  },
  {
    pokedexId: 493,
    name: "アルセウス",
    stats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
    types: ["ノーマル"],
    abilities: ["マルチタイプ"],
    weightKilogram: 320,
    evolution: "幻"
  }
];

const attackerAbilityList = [
  { name: "(なし)", multiplierPosition: multiplierPosition.none, multiplier: 1 },
  { name: "いろめがね", multiplierPosition: multiplierPosition.afterRand, multiplier: 2, note: "タイプ相性半減" },
  { name: "こんじょう", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "A" },
  { name: "サンパワー", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "C" },
  { name: "しんりょく", multiplierPosition: multiplierPosition.power, multiplier: 1.5, note: "草タイプ技" },
  { name: "げきりゅう", multiplierPosition: multiplierPosition.power, multiplier: 1.5, note: "水タイプ技" },
  { name: "むしのしらせ", multiplierPosition: multiplierPosition.power, multiplier: 1.5, note: "虫タイプ技" },
  { name: "もうか", multiplierPosition: multiplierPosition.power, multiplier: 1.5, note: "炎タイプ技" },
  { name: "すてみ", multiplierPosition: multiplierPosition.power, multiplier: 1.2, note: "反動技" },
  { name: "てつのこぶし", multiplierPosition: multiplierPosition.power, multiplier: 1.2, note: "パンチ技" },
  { name: "スナイパー", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 3, note: "急所補正:*2→*3" },
  { name: "スロースタート", multiplierPosition: multiplierPosition.attack, multiplier: 0.5, note: "A" },
  { name: "ちからもち", multiplierPosition: multiplierPosition.attack, multiplier: 2, note: "A" },
  { name: "てきおうりょく", multiplierPosition: multiplierPosition.afterRand, multiplier: 2, note: "タイプ一致補正:*1.5→*2" },
  { name: "テクニシャン", multiplierPosition: multiplierPosition.power, multiplier: 1.5, note: "威力値60以下" },
  { name: "とうそうしん＋", multiplierPosition: multiplierPosition.power, multiplier: 1.25 },
  { name: "とうそうしん－", multiplierPosition: multiplierPosition.power, multiplier: 0.75 },
  { name: "はりきり", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "A" },
  { name: "プラス", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "C" },
  { name: "フラワーギフト", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "A" },
  { name: "マイナス", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "C" },
  { name: "もらいび", multiplierPosition: multiplierPosition.beforePlus2, multiplier: 1.5 },
  { name: "ヨガパワー", multiplierPosition: multiplierPosition.attack, multiplier: 2, note: "A" }
];

const attackerHeldItemList = [
  { name: "(なし)", multiplierPosition: multiplierPosition.none, multiplier: 1 },
  { name: "こだわりハチマキ", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "A" },
  { name: "こだわりメガネ", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "C" },
  { name: "いのちのたま", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.3 },
  { name: "タイプ強化系", multiplierPosition: multiplierPosition.power, multiplier: 1.2 },
  { name: "ちからのハチマキ", multiplierPosition: multiplierPosition.power, multiplier: 1.1, note: "A" },
  { name: "ものしりメガネ", multiplierPosition: multiplierPosition.power, multiplier: 1.1, note: "C" },
  { name: "たつじんのおび", multiplierPosition: multiplierPosition.afterRand, multiplier: 1.2, note: "タイプ相性抜群" },
  { name: "メトロノーム2", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.1 },
  { name: "メトロノーム3", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.2 },
  { name: "メトロノーム4", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.3 },
  { name: "メトロノーム5", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.4 },
  { name: "メトロノーム6", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.5 },
  { name: "メトロノーム7", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.6 },
  { name: "メトロノーム8", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.7 },
  { name: "メトロノーム9", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.8 },
  { name: "メトロノーム10", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 1.9 },
  { name: "メトロノーム11", multiplierPosition: multiplierPosition.afterPlus2, multiplier: 2 },
  { name: "こころのしずく", multiplierPosition: multiplierPosition.attack, multiplier: 1.5, note: "ラティオス・ラティアスC" },
  { name: "しんかいのキバ", multiplierPosition: multiplierPosition.attack, multiplier: 2, note: "パールルC" },
  { name: "でんきだま", multiplierPosition: multiplierPosition.attack, multiplier: 2, note: "ピカチュウA・C" },
  { name: "ふといホネ", multiplierPosition: multiplierPosition.attack, multiplier: 2, note: "カラカラ・ガラガラA" }
];

const moveList = [
  {
    "id": 0,
    "name": "(なし)",
    "power": 0,
    "accuracy": 0,
    "type": "(なし)",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 1,
    "name": "はたく",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 2,
    "name": "からてチョップ",
    "power": 50,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 3,
    "name": "おうふくビンタ",
    "power": 15,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 4,
    "name": "れんぞくパンチ",
    "power": 18,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 5,
    "name": "メガトンパンチ",
    "power": 80,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 6,
    "name": "ネコにこばん",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 7,
    "name": "ほのおのパンチ",
    "power": 75,
    "accuracy": 100,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 8,
    "name": "れいとうパンチ",
    "power": 75,
    "accuracy": 100,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 9,
    "name": "かみなりパンチ",
    "power": 75,
    "accuracy": 100,
    "type": "でんき",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 10,
    "name": "ひっかく",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 11,
    "name": "はさむ",
    "power": 55,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 12,
    "name": "ハサミギロチン",
    "power": 0,
    "accuracy": 30,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 13,
    "name": "かまいたち",
    "power": 80,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 1
  },
  {
    "id": 14,
    "name": "つるぎのまい",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 15,
    "name": "いあいぎり",
    "power": 50,
    "accuracy": 95,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 16,
    "name": "かぜおこし",
    "power": 40,
    "accuracy": 100,
    "type": "ひこう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 17,
    "name": "つばさでうつ",
    "power": 60,
    "accuracy": 100,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 18,
    "name": "ふきとばし",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 19,
    "name": "そらをとぶ",
    "power": 90,
    "accuracy": 95,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 20,
    "name": "しめつける",
    "power": 15,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 21,
    "name": "たたきつける",
    "power": 80,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 22,
    "name": "つるのムチ",
    "power": 35,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 23,
    "name": "ふみつけ",
    "power": 65,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 24,
    "name": "にどげり",
    "power": 30,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 25,
    "name": "メガトンキック",
    "power": 120,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 26,
    "name": "とびげり",
    "power": 85,
    "accuracy": 95,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 27,
    "name": "まわしげり",
    "power": 60,
    "accuracy": 85,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 28,
    "name": "すなかけ",
    "power": 0,
    "accuracy": 100,
    "type": "じめん",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 29,
    "name": "ずつき",
    "power": 70,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 30,
    "name": "つのでつく",
    "power": 65,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 31,
    "name": "みだれづき",
    "power": 15,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 32,
    "name": "つのドリル",
    "power": 0,
    "accuracy": 30,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 33,
    "name": "たいあたり",
    "power": 35,
    "accuracy": 95,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 34,
    "name": "のしかかり",
    "power": 85,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 35,
    "name": "まきつく",
    "power": 15,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 36,
    "name": "とっしん",
    "power": 90,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 37,
    "name": "あばれる",
    "power": 90,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 38,
    "name": "すてみタックル",
    "power": 120,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 39,
    "name": "しっぽをふる",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 40,
    "name": "どくばり",
    "power": 15,
    "accuracy": 100,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 41,
    "name": "ダブルニードル",
    "power": 25,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 42,
    "name": "ミサイルばり",
    "power": 14,
    "accuracy": 85,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 43,
    "name": "にらみつける",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 44,
    "name": "かみつく",
    "power": 60,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 45,
    "name": "なきごえ",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 46,
    "name": "ほえる",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 47,
    "name": "うたう",
    "power": 0,
    "accuracy": 55,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 48,
    "name": "ちょうおんぱ",
    "power": 0,
    "accuracy": 55,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 49,
    "name": "ソニックブーム",
    "power": 0,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 50,
    "name": "かなしばり",
    "power": 0,
    "accuracy": 80,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 51,
    "name": "ようかいえき",
    "power": 40,
    "accuracy": 100,
    "type": "どく",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 52,
    "name": "ひのこ",
    "power": 40,
    "accuracy": 100,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 53,
    "name": "かえんほうしゃ",
    "power": 95,
    "accuracy": 100,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 54,
    "name": "しろいきり",
    "power": 0,
    "accuracy": 0,
    "type": "こおり",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 55,
    "name": "みずでっぽう",
    "power": 40,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 56,
    "name": "ハイドロポンプ",
    "power": 120,
    "accuracy": 80,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 57,
    "name": "なみのり",
    "power": 95,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 58,
    "name": "れいとうビーム",
    "power": 95,
    "accuracy": 100,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 59,
    "name": "ふぶき",
    "power": 120,
    "accuracy": 70,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 60,
    "name": "サイケこうせん",
    "power": 65,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 61,
    "name": "バブルこうせん",
    "power": 65,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 62,
    "name": "オーロラビーム",
    "power": 65,
    "accuracy": 100,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 63,
    "name": "はかいこうせん",
    "power": 150,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 64,
    "name": "つつく",
    "power": 35,
    "accuracy": 100,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 65,
    "name": "ドリルくちばし",
    "power": 80,
    "accuracy": 100,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 66,
    "name": "じごくぐるま",
    "power": 80,
    "accuracy": 80,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 67,
    "name": "けたぐり",
    "power": 0,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 68,
    "name": "カウンター",
    "power": 0,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 69,
    "name": "ちきゅうなげ",
    "power": 0,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 70,
    "name": "かいりき",
    "power": 80,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 71,
    "name": "すいとる",
    "power": 20,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 72,
    "name": "メガドレイン",
    "power": 40,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 73,
    "name": "やどりぎのタネ",
    "power": 0,
    "accuracy": 90,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 74,
    "name": "せいちょう",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 75,
    "name": "はっぱカッター",
    "power": 55,
    "accuracy": 95,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 1
  },
  {
    "id": 76,
    "name": "ソーラービーム",
    "power": 120,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 77,
    "name": "どくのこな",
    "power": 0,
    "accuracy": 75,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 78,
    "name": "しびれごな",
    "power": 0,
    "accuracy": 75,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 79,
    "name": "ねむりごな",
    "power": 0,
    "accuracy": 75,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 80,
    "name": "はなびらのまい",
    "power": 90,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 81,
    "name": "いとをはく",
    "power": 0,
    "accuracy": 95,
    "type": "むし",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 82,
    "name": "りゅうのいかり",
    "power": 0,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 83,
    "name": "ほのおのうず",
    "power": 15,
    "accuracy": 70,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 84,
    "name": "でんきショック",
    "power": 40,
    "accuracy": 100,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 85,
    "name": "１０まんボルト",
    "power": 95,
    "accuracy": 100,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 86,
    "name": "でんじは",
    "power": 0,
    "accuracy": 100,
    "type": "でんき",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 87,
    "name": "かみなり",
    "power": 120,
    "accuracy": 70,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 88,
    "name": "いわおとし",
    "power": 50,
    "accuracy": 90,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 89,
    "name": "じしん",
    "power": 100,
    "accuracy": 100,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 90,
    "name": "じわれ",
    "power": 0,
    "accuracy": 30,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 91,
    "name": "あなをほる",
    "power": 80,
    "accuracy": 100,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 92,
    "name": "どくどく",
    "power": 0,
    "accuracy": 85,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 93,
    "name": "ねんりき",
    "power": 50,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 94,
    "name": "サイコキネシス",
    "power": 90,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 95,
    "name": "さいみんじゅつ",
    "power": 0,
    "accuracy": 70,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 96,
    "name": "ヨガのポーズ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 97,
    "name": "こうそくいどう",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 98,
    "name": "でんこうせっか",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 99,
    "name": "いかり",
    "power": 20,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 100,
    "name": "テレポート",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 101,
    "name": "ナイトヘッド",
    "power": 0,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 102,
    "name": "ものまね",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 103,
    "name": "いやなおと",
    "power": 0,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 104,
    "name": "かげぶんしん",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 105,
    "name": "じこさいせい",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 106,
    "name": "かたくなる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 107,
    "name": "ちいさくなる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 108,
    "name": "えんまく",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 109,
    "name": "あやしいひかり",
    "power": 0,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 110,
    "name": "からにこもる",
    "power": 0,
    "accuracy": 0,
    "type": "みず",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 111,
    "name": "まるくなる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 112,
    "name": "バリアー",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 113,
    "name": "ひかりのかべ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 114,
    "name": "くろいきり",
    "power": 0,
    "accuracy": 0,
    "type": "こおり",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 115,
    "name": "リフレクター",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 116,
    "name": "きあいだめ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 117,
    "name": "がまん",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 118,
    "name": "ゆびをふる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 119,
    "name": "オウムがえし",
    "power": 0,
    "accuracy": 0,
    "type": "ひこう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 120,
    "name": "じばく",
    "power": 200,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 121,
    "name": "タマゴばくだん",
    "power": 100,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 122,
    "name": "したでなめる",
    "power": 20,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 123,
    "name": "スモッグ",
    "power": 20,
    "accuracy": 70,
    "type": "どく",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 124,
    "name": "ヘドロこうげき",
    "power": 65,
    "accuracy": 100,
    "type": "どく",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 125,
    "name": "ホネこんぼう",
    "power": 65,
    "accuracy": 85,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 126,
    "name": "だいもんじ",
    "power": 120,
    "accuracy": 85,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 127,
    "name": "たきのぼり",
    "power": 80,
    "accuracy": 100,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 128,
    "name": "からではさむ",
    "power": 35,
    "accuracy": 75,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 129,
    "name": "スピードスター",
    "power": 60,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 130,
    "name": "ロケットずつき",
    "power": 100,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 131,
    "name": "とげキャノン",
    "power": 20,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 132,
    "name": "からみつく",
    "power": 10,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 133,
    "name": "ドわすれ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 134,
    "name": "スプーンまげ",
    "power": 0,
    "accuracy": 80,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 135,
    "name": "タマゴうみ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 136,
    "name": "とびひざげり",
    "power": 100,
    "accuracy": 90,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 137,
    "name": "へびにらみ",
    "power": 0,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 138,
    "name": "ゆめくい",
    "power": 100,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 139,
    "name": "どくガス",
    "power": 0,
    "accuracy": 55,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 140,
    "name": "たまなげ",
    "power": 15,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 141,
    "name": "きゅうけつ",
    "power": 20,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 142,
    "name": "あくまのキッス",
    "power": 0,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 143,
    "name": "ゴッドバード",
    "power": 140,
    "accuracy": 90,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 144,
    "name": "へんしん",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 145,
    "name": "あわ",
    "power": 20,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 146,
    "name": "ピヨピヨパンチ",
    "power": 70,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 147,
    "name": "キノコのほうし",
    "power": 0,
    "accuracy": 100,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 148,
    "name": "フラッシュ",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 149,
    "name": "サイコウェーブ",
    "power": 0,
    "accuracy": 80,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 150,
    "name": "はねる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 151,
    "name": "とける",
    "power": 0,
    "accuracy": 0,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 152,
    "name": "クラブハンマー",
    "power": 90,
    "accuracy": 85,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 153,
    "name": "だいばくはつ",
    "power": 250,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 154,
    "name": "みだれひっかき",
    "power": 18,
    "accuracy": 80,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 155,
    "name": "ホネブーメラン",
    "power": 50,
    "accuracy": 90,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 156,
    "name": "ねむる",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 157,
    "name": "いわなだれ",
    "power": 75,
    "accuracy": 90,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 158,
    "name": "ひっさつまえば",
    "power": 80,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 159,
    "name": "かくばる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 160,
    "name": "テクスチャー",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 161,
    "name": "トライアタック",
    "power": 80,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 162,
    "name": "いかりのまえば",
    "power": 0,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 163,
    "name": "きりさく",
    "power": 70,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 164,
    "name": "みがわり",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 165,
    "name": "わるあがき",
    "power": 50,
    "accuracy": 0,
    "type": "(なし)",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 166,
    "name": "スケッチ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 167,
    "name": "トリプルキック",
    "power": 10,
    "accuracy": 90,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 168,
    "name": "どろぼう",
    "power": 40,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 169,
    "name": "クモのす",
    "power": 0,
    "accuracy": 0,
    "type": "むし",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 170,
    "name": "こころのめ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 171,
    "name": "あくむ",
    "power": 0,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 172,
    "name": "かえんぐるま",
    "power": 60,
    "accuracy": 100,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 173,
    "name": "いびき",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 174,
    "name": "のろい",
    "power": 0,
    "accuracy": 0,
    "type": "(なし)",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 175,
    "name": "じたばた",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 176,
    "name": "テクスチャー２",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 177,
    "name": "エアロブラスト",
    "power": 100,
    "accuracy": 95,
    "type": "ひこう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 178,
    "name": "わたほうし",
    "power": 0,
    "accuracy": 85,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 179,
    "name": "きしかいせい",
    "power": 0,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 180,
    "name": "うらみ",
    "power": 0,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 181,
    "name": "こなゆき",
    "power": 40,
    "accuracy": 100,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 182,
    "name": "まもる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 183,
    "name": "マッハパンチ",
    "power": 40,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 184,
    "name": "こわいかお",
    "power": 0,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 185,
    "name": "だましうち",
    "power": 60,
    "accuracy": 0,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 186,
    "name": "てんしのキッス",
    "power": 0,
    "accuracy": 75,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 187,
    "name": "はらだいこ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 188,
    "name": "ヘドロばくだん",
    "power": 90,
    "accuracy": 100,
    "type": "どく",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 189,
    "name": "どろかけ",
    "power": 20,
    "accuracy": 100,
    "type": "じめん",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 190,
    "name": "オクタンほう",
    "power": 65,
    "accuracy": 85,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 191,
    "name": "まきびし",
    "power": 0,
    "accuracy": 0,
    "type": "じめん",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 192,
    "name": "でんじほう",
    "power": 120,
    "accuracy": 50,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 193,
    "name": "みやぶる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 194,
    "name": "みちづれ",
    "power": 0,
    "accuracy": 0,
    "type": "ゴースト",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 195,
    "name": "ほろびのうた",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 196,
    "name": "こごえるかぜ",
    "power": 55,
    "accuracy": 95,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 197,
    "name": "みきり",
    "power": 0,
    "accuracy": 0,
    "type": "かくとう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 198,
    "name": "ボーンラッシュ",
    "power": 25,
    "accuracy": 80,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 199,
    "name": "ロックオン",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 200,
    "name": "げきりん",
    "power": 120,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 201,
    "name": "すなあらし",
    "power": 0,
    "accuracy": 0,
    "type": "いわ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 202,
    "name": "ギガドレイン",
    "power": 60,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 203,
    "name": "こらえる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 204,
    "name": "あまえる",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 205,
    "name": "ころがる",
    "power": 30,
    "accuracy": 90,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 206,
    "name": "みねうち",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 207,
    "name": "いばる",
    "power": 0,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 208,
    "name": "ミルクのみ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 209,
    "name": "スパーク",
    "power": 65,
    "accuracy": 100,
    "type": "でんき",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 210,
    "name": "れんぞくぎり",
    "power": 10,
    "accuracy": 95,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 211,
    "name": "はがねのつばさ",
    "power": 70,
    "accuracy": 90,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 212,
    "name": "くろいまなざし",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 213,
    "name": "メロメロ",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 214,
    "name": "ねごと",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 215,
    "name": "いやしのすず",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 216,
    "name": "おんがえし",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 217,
    "name": "プレゼント",
    "power": 0,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 218,
    "name": "やつあたり",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 219,
    "name": "しんぴのまもり",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 220,
    "name": "いたみわけ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 221,
    "name": "せいなるほのお",
    "power": 100,
    "accuracy": 95,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 222,
    "name": "マグニチュード",
    "power": 0,
    "accuracy": 100,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 223,
    "name": "ばくれつパンチ",
    "power": 100,
    "accuracy": 50,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 224,
    "name": "メガホーン",
    "power": 120,
    "accuracy": 85,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 225,
    "name": "りゅうのいぶき",
    "power": 60,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 226,
    "name": "バトンタッチ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 227,
    "name": "アンコール",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 228,
    "name": "おいうち",
    "power": 40,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 229,
    "name": "こうそくスピン",
    "power": 20,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 230,
    "name": "あまいかおり",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 231,
    "name": "アイアンテール",
    "power": 100,
    "accuracy": 75,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 232,
    "name": "メタルクロー",
    "power": 50,
    "accuracy": 95,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 233,
    "name": "あてみなげ",
    "power": 70,
    "accuracy": 0,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 234,
    "name": "あさのひざし",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 235,
    "name": "こうごうせい",
    "power": 0,
    "accuracy": 0,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 236,
    "name": "つきのひかり",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 237,
    "name": "めざめるパワー",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 238,
    "name": "クロスチョップ",
    "power": 100,
    "accuracy": 80,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 239,
    "name": "たつまき",
    "power": 40,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 240,
    "name": "あまごい",
    "power": 0,
    "accuracy": 0,
    "type": "みず",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 241,
    "name": "にほんばれ",
    "power": 0,
    "accuracy": 0,
    "type": "ほのお",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 242,
    "name": "かみくだく",
    "power": 80,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 243,
    "name": "ミラーコート",
    "power": 0,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 244,
    "name": "じこあんじ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 245,
    "name": "しんそく",
    "power": 80,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 246,
    "name": "げんしのちから",
    "power": 60,
    "accuracy": 100,
    "type": "いわ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 247,
    "name": "シャドーボール",
    "power": 80,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 248,
    "name": "みらいよち",
    "power": 80,
    "accuracy": 90,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 249,
    "name": "いわくだき",
    "power": 40,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 250,
    "name": "うずしお",
    "power": 15,
    "accuracy": 70,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 251,
    "name": "ふくろだたき",
    "power": 10,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 252,
    "name": "ねこだまし",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 253,
    "name": "さわぐ",
    "power": 50,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 254,
    "name": "たくわえる",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 255,
    "name": "はきだす",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 256,
    "name": "のみこむ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 257,
    "name": "ねっぷう",
    "power": 100,
    "accuracy": 90,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 258,
    "name": "あられ",
    "power": 0,
    "accuracy": 0,
    "type": "こおり",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 259,
    "name": "いちゃもん",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 260,
    "name": "おだてる",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 261,
    "name": "おにび",
    "power": 0,
    "accuracy": 75,
    "type": "ほのお",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 262,
    "name": "おきみやげ",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 263,
    "name": "からげんき",
    "power": 70,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 264,
    "name": "きあいパンチ",
    "power": 150,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 265,
    "name": "きつけ",
    "power": 60,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 266,
    "name": "このゆびとまれ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 267,
    "name": "しぜんのちから",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 268,
    "name": "じゅうでん",
    "power": 0,
    "accuracy": 0,
    "type": "でんき",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 269,
    "name": "ちょうはつ",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 270,
    "name": "てだすけ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 271,
    "name": "トリック",
    "power": 0,
    "accuracy": 100,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 272,
    "name": "なりきり",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 273,
    "name": "ねがいごと",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 274,
    "name": "ねこのて",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 275,
    "name": "ねをはる",
    "power": 0,
    "accuracy": 0,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 276,
    "name": "ばかぢから",
    "power": 120,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 277,
    "name": "マジックコート",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 278,
    "name": "リサイクル",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 279,
    "name": "リベンジ",
    "power": 60,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 280,
    "name": "かわらわり",
    "power": 75,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 281,
    "name": "あくび",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 282,
    "name": "はたきおとす",
    "power": 20,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 283,
    "name": "がむしゃら",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 284,
    "name": "ふんか",
    "power": 150,
    "accuracy": 100,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 285,
    "name": "スキルスワップ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 286,
    "name": "ふういん",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 287,
    "name": "リフレッシュ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 288,
    "name": "おんねん",
    "power": 0,
    "accuracy": 0,
    "type": "ゴースト",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 289,
    "name": "よこどり",
    "power": 0,
    "accuracy": 0,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 290,
    "name": "ひみつのちから",
    "power": 70,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 291,
    "name": "ダイビング",
    "power": 80,
    "accuracy": 100,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 292,
    "name": "つっぱり",
    "power": 15,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 293,
    "name": "ほごしょく",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 294,
    "name": "ほたるび",
    "power": 0,
    "accuracy": 0,
    "type": "むし",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 295,
    "name": "ラスターパージ",
    "power": 70,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 296,
    "name": "ミストボール",
    "power": 70,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 297,
    "name": "フェザーダンス",
    "power": 0,
    "accuracy": 100,
    "type": "ひこう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 298,
    "name": "フラフラダンス",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 299,
    "name": "ブレイズキック",
    "power": 85,
    "accuracy": 90,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 300,
    "name": "どろあそび",
    "power": 0,
    "accuracy": 0,
    "type": "じめん",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 301,
    "name": "アイスボール",
    "power": 30,
    "accuracy": 90,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 302,
    "name": "ニードルアーム",
    "power": 60,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 303,
    "name": "なまける",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 304,
    "name": "ハイパーボイス",
    "power": 90,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 305,
    "name": "どくどくのキバ",
    "power": 50,
    "accuracy": 100,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 306,
    "name": "ブレイククロー",
    "power": 75,
    "accuracy": 95,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 307,
    "name": "ブラストバーン",
    "power": 150,
    "accuracy": 90,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 308,
    "name": "ハイドロカノン",
    "power": 150,
    "accuracy": 90,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 309,
    "name": "コメットパンチ",
    "power": 100,
    "accuracy": 85,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 310,
    "name": "おどろかす",
    "power": 30,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 311,
    "name": "ウェザーボール",
    "power": 50,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 312,
    "name": "アロマセラピー",
    "power": 0,
    "accuracy": 0,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 313,
    "name": "うそなき",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 314,
    "name": "エアカッター",
    "power": 55,
    "accuracy": 95,
    "type": "ひこう",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 1
  },
  {
    "id": 315,
    "name": "オーバーヒート",
    "power": 140,
    "accuracy": 90,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 316,
    "name": "かぎわける",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 317,
    "name": "がんせきふうじ",
    "power": 50,
    "accuracy": 80,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 318,
    "name": "ぎんいろのかぜ",
    "power": 60,
    "accuracy": 100,
    "type": "むし",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 319,
    "name": "きんぞくおん",
    "power": 0,
    "accuracy": 85,
    "type": "はがね",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 320,
    "name": "くさぶえ",
    "power": 0,
    "accuracy": 55,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 321,
    "name": "くすぐる",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 322,
    "name": "コスモパワー",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 323,
    "name": "しおふき",
    "power": 150,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 324,
    "name": "シグナルビーム",
    "power": 75,
    "accuracy": 100,
    "type": "むし",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 325,
    "name": "シャドーパンチ",
    "power": 60,
    "accuracy": 0,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 326,
    "name": "じんつうりき",
    "power": 80,
    "accuracy": 100,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 327,
    "name": "スカイアッパー",
    "power": 85,
    "accuracy": 90,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 328,
    "name": "すなじごく",
    "power": 15,
    "accuracy": 70,
    "type": "じめん",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 329,
    "name": "ぜったいれいど",
    "power": 0,
    "accuracy": 30,
    "type": "こおり",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 330,
    "name": "だくりゅう",
    "power": 95,
    "accuracy": 85,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 331,
    "name": "タネマシンガン",
    "power": 10,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 332,
    "name": "つばめがえし",
    "power": 60,
    "accuracy": 0,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 333,
    "name": "つららばり",
    "power": 10,
    "accuracy": 100,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 334,
    "name": "てっぺき",
    "power": 0,
    "accuracy": 0,
    "type": "はがね",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 335,
    "name": "とおせんぼう",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 336,
    "name": "とおぼえ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 337,
    "name": "ドラゴンクロー",
    "power": 80,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 338,
    "name": "ハードプラント",
    "power": 150,
    "accuracy": 90,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 339,
    "name": "ビルドアップ",
    "power": 0,
    "accuracy": 0,
    "type": "かくとう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 340,
    "name": "とびはねる",
    "power": 85,
    "accuracy": 85,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 341,
    "name": "マッドショット",
    "power": 55,
    "accuracy": 95,
    "type": "じめん",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 342,
    "name": "ポイズンテール",
    "power": 50,
    "accuracy": 100,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 343,
    "name": "ほしがる",
    "power": 40,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 344,
    "name": "ボルテッカー",
    "power": 120,
    "accuracy": 100,
    "type": "でんき",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 345,
    "name": "マジカルリーフ",
    "power": 60,
    "accuracy": 0,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 346,
    "name": "みずあそび",
    "power": 0,
    "accuracy": 0,
    "type": "みず",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 347,
    "name": "めいそう",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 348,
    "name": "リーフブレード",
    "power": 90,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 349,
    "name": "りゅうのまい",
    "power": 0,
    "accuracy": 0,
    "type": "ドラゴン",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 350,
    "name": "ロックブラスト",
    "power": 25,
    "accuracy": 80,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 351,
    "name": "でんげきは",
    "power": 60,
    "accuracy": 0,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 352,
    "name": "みずのはどう",
    "power": 60,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 353,
    "name": "はめつのねがい",
    "power": 120,
    "accuracy": 85,
    "type": "はがね",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 354,
    "name": "サイコブースト",
    "power": 140,
    "accuracy": 90,
    "type": "エスパー",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 355,
    "name": "はねやすめ",
    "power": 0,
    "accuracy": 0,
    "type": "ひこう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 356,
    "name": "じゅうりょく",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 357,
    "name": "ミラクルアイ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 358,
    "name": "めざましビンタ",
    "power": 60,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 359,
    "name": "アームハンマー",
    "power": 100,
    "accuracy": 90,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 360,
    "name": "ジャイロボール",
    "power": 0,
    "accuracy": 100,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 361,
    "name": "いやしのねがい",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 362,
    "name": "しおみず",
    "power": 65,
    "accuracy": 100,
    "type": "みず",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 363,
    "name": "しぜんのめぐみ",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 364,
    "name": "フェイント",
    "power": 50,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 365,
    "name": "ついばむ",
    "power": 60,
    "accuracy": 100,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 366,
    "name": "おいかぜ",
    "power": 0,
    "accuracy": 0,
    "type": "ひこう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 367,
    "name": "つぼをつく",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 368,
    "name": "メタルバースト",
    "power": 0,
    "accuracy": 100,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 369,
    "name": "とんぼがえり",
    "power": 70,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 370,
    "name": "インファイト",
    "power": 120,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 371,
    "name": "しっぺがえし",
    "power": 50,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 372,
    "name": "ダメおし",
    "power": 50,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 373,
    "name": "さしおさえ",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 374,
    "name": "なげつける",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 375,
    "name": "サイコシフト",
    "power": 0,
    "accuracy": 90,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 376,
    "name": "きりふだ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 377,
    "name": "かいふくふうじ",
    "power": 0,
    "accuracy": 100,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 378,
    "name": "しぼりとる",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 379,
    "name": "パワートリック",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 380,
    "name": "いえき",
    "power": 0,
    "accuracy": 100,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 381,
    "name": "おまじない",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 382,
    "name": "さきどり",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 383,
    "name": "まねっこ",
    "power": 0,
    "accuracy": 0,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 384,
    "name": "パワースワップ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 385,
    "name": "ガードスワップ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 386,
    "name": "おしおき",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 387,
    "name": "とっておき",
    "power": 130,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 388,
    "name": "なやみのタネ",
    "power": 0,
    "accuracy": 100,
    "type": "くさ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 389,
    "name": "ふいうち",
    "power": 80,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 390,
    "name": "どくびし",
    "power": 0,
    "accuracy": 0,
    "type": "どく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 391,
    "name": "ハートスワップ",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 392,
    "name": "アクアリング",
    "power": 0,
    "accuracy": 0,
    "type": "みず",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 393,
    "name": "でんじふゆう",
    "power": 0,
    "accuracy": 0,
    "type": "でんき",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 394,
    "name": "フレアドライブ",
    "power": 120,
    "accuracy": 100,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 395,
    "name": "はっけい",
    "power": 60,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 396,
    "name": "はどうだん",
    "power": 90,
    "accuracy": 0,
    "type": "かくとう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 397,
    "name": "ロックカット",
    "power": 0,
    "accuracy": 0,
    "type": "いわ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 398,
    "name": "どくづき",
    "power": 80,
    "accuracy": 100,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 399,
    "name": "あくのはどう",
    "power": 80,
    "accuracy": 100,
    "type": "あく",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 400,
    "name": "つじぎり",
    "power": 70,
    "accuracy": 100,
    "type": "あく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 401,
    "name": "アクアテール",
    "power": 90,
    "accuracy": 90,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 402,
    "name": "タネばくだん",
    "power": 80,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 403,
    "name": "エアスラッシュ",
    "power": 75,
    "accuracy": 95,
    "type": "ひこう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 404,
    "name": "シザークロス",
    "power": 80,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 405,
    "name": "むしのさざめき",
    "power": 90,
    "accuracy": 100,
    "type": "むし",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 406,
    "name": "りゅうのはどう",
    "power": 90,
    "accuracy": 100,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 407,
    "name": "ドラゴンダイブ",
    "power": 100,
    "accuracy": 75,
    "type": "ドラゴン",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 408,
    "name": "パワージェム",
    "power": 70,
    "accuracy": 100,
    "type": "いわ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 409,
    "name": "ドレインパンチ",
    "power": 60,
    "accuracy": 100,
    "type": "かくとう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 410,
    "name": "しんくうは",
    "power": 40,
    "accuracy": 100,
    "type": "かくとう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 411,
    "name": "きあいだま",
    "power": 120,
    "accuracy": 70,
    "type": "かくとう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 412,
    "name": "エナジーボール",
    "power": 80,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 413,
    "name": "ブレイブバード",
    "power": 120,
    "accuracy": 100,
    "type": "ひこう",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 414,
    "name": "だいちのちから",
    "power": 90,
    "accuracy": 100,
    "type": "じめん",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 415,
    "name": "すりかえ",
    "power": 0,
    "accuracy": 100,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 416,
    "name": "ギガインパクト",
    "power": 150,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 417,
    "name": "わるだくみ",
    "power": 0,
    "accuracy": 0,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 418,
    "name": "バレットパンチ",
    "power": 40,
    "accuracy": 100,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 419,
    "name": "ゆきなだれ",
    "power": 60,
    "accuracy": 100,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 420,
    "name": "こおりのつぶて",
    "power": 40,
    "accuracy": 100,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 421,
    "name": "シャドークロー",
    "power": 70,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 422,
    "name": "かみなりのキバ",
    "power": 65,
    "accuracy": 95,
    "type": "でんき",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 423,
    "name": "こおりのキバ",
    "power": 65,
    "accuracy": 95,
    "type": "こおり",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 424,
    "name": "ほのおのキバ",
    "power": 65,
    "accuracy": 95,
    "type": "ほのお",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 425,
    "name": "かげうち",
    "power": 40,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 426,
    "name": "どろばくだん",
    "power": 65,
    "accuracy": 85,
    "type": "じめん",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 427,
    "name": "サイコカッター",
    "power": 70,
    "accuracy": 100,
    "type": "エスパー",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 428,
    "name": "しねんのずつき",
    "power": 80,
    "accuracy": 90,
    "type": "エスパー",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 429,
    "name": "ミラーショット",
    "power": 65,
    "accuracy": 85,
    "type": "はがね",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 430,
    "name": "ラスターカノン",
    "power": 80,
    "accuracy": 100,
    "type": "はがね",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 431,
    "name": "ロッククライム",
    "power": 90,
    "accuracy": 85,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 432,
    "name": "きりばらい",
    "power": 0,
    "accuracy": 0,
    "type": "ひこう",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 433,
    "name": "トリックルーム",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 434,
    "name": "りゅうせいぐん",
    "power": 140,
    "accuracy": 90,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 435,
    "name": "ほうでん",
    "power": 80,
    "accuracy": 100,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 436,
    "name": "ふんえん",
    "power": 80,
    "accuracy": 100,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": true,
    "criticalStage": 0
  },
  {
    "id": 437,
    "name": "リーフストーム",
    "power": 140,
    "accuracy": 90,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 438,
    "name": "パワーウィップ",
    "power": 120,
    "accuracy": 85,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 439,
    "name": "がんせきほう",
    "power": 150,
    "accuracy": 90,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 440,
    "name": "クロスポイズン",
    "power": 70,
    "accuracy": 100,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 441,
    "name": "ダストシュート",
    "power": 120,
    "accuracy": 70,
    "type": "どく",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 442,
    "name": "アイアンヘッド",
    "power": 80,
    "accuracy": 100,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 443,
    "name": "マグネットボム",
    "power": 60,
    "accuracy": 0,
    "type": "はがね",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 444,
    "name": "ストーンエッジ",
    "power": 100,
    "accuracy": 80,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 445,
    "name": "ゆうわく",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 446,
    "name": "ステルスロック",
    "power": 0,
    "accuracy": 0,
    "type": "いわ",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 447,
    "name": "くさむすび",
    "power": 0,
    "accuracy": 100,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 448,
    "name": "おしゃべり",
    "power": 60,
    "accuracy": 100,
    "type": "ひこう",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 449,
    "name": "さばきのつぶて",
    "power": 100,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 450,
    "name": "むしくい",
    "power": 60,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 451,
    "name": "チャージビーム",
    "power": 50,
    "accuracy": 90,
    "type": "でんき",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 452,
    "name": "ウッドハンマー",
    "power": 120,
    "accuracy": 100,
    "type": "くさ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 453,
    "name": "アクアジェット",
    "power": 40,
    "accuracy": 100,
    "type": "みず",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 454,
    "name": "こうげきしれい",
    "power": 90,
    "accuracy": 100,
    "type": "むし",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 455,
    "name": "ぼうぎょしれい",
    "power": 0,
    "accuracy": 0,
    "type": "むし",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 456,
    "name": "かいふくしれい",
    "power": 0,
    "accuracy": 0,
    "type": "むし",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 457,
    "name": "もろはのずつき",
    "power": 150,
    "accuracy": 80,
    "type": "いわ",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 458,
    "name": "ダブルアタック",
    "power": 35,
    "accuracy": 90,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 459,
    "name": "ときのほうこう",
    "power": 150,
    "accuracy": 90,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 460,
    "name": "あくうせつだん",
    "power": 100,
    "accuracy": 95,
    "type": "ドラゴン",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 1
  },
  {
    "id": 461,
    "name": "みかづきのまい",
    "power": 0,
    "accuracy": 0,
    "type": "エスパー",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 462,
    "name": "にぎりつぶす",
    "power": 0,
    "accuracy": 100,
    "type": "ノーマル",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 463,
    "name": "マグマストーム",
    "power": 120,
    "accuracy": 70,
    "type": "ほのお",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 464,
    "name": "ダークホール",
    "power": 0,
    "accuracy": 80,
    "type": "あく",
    "category": "へんか",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 465,
    "name": "シードフレア",
    "power": 120,
    "accuracy": 85,
    "type": "くさ",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 466,
    "name": "あやしいかぜ",
    "power": 60,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "とくしゅ",
    "isRanged": false,
    "criticalStage": 0
  },
  {
    "id": 467,
    "name": "シャドーダイブ",
    "power": 120,
    "accuracy": 100,
    "type": "ゴースト",
    "category": "ぶつり",
    "isRanged": false,
    "criticalStage": 0
  }
];

const moveTypeEffectList = [
  { name: "抜群", multiplierPosition: multiplierPosition.afterRand, multiplier: 2 },
  { name: "等倍", multiplierPosition: multiplierPosition.afterRand, multiplier: 1 },
  { name: "半減", multiplierPosition: multiplierPosition.afterRand, multiplier: 0.5 },
  { name: "無効", multiplierPosition: multiplierPosition.afterRand, multiplier: 0 },
]

const defenderAbilityList = [
  { name: "(なし)", multiplierPosition: multiplierPosition.none, multiplier: 1 },
  { name: "あついしぼう", multiplierPosition: multiplierPosition.power, multiplier: 0.5, note: "炎・氷タイプ技" },
  { name: "かんそうはだ", multiplierPosition: multiplierPosition.power, multiplier: 1.25, note: "炎タイプ技" },
  { name: "たいねつ", multiplierPosition: multiplierPosition.power, multiplier: 0.5, note: "炎タイプ技" },
  { name: "ハードロック", multiplierPosition: multiplierPosition.afterRand, multiplier: 0.75, note: "タイプ相性抜群" },
  { name: "フィルター", multiplierPosition: multiplierPosition.afterRand, multiplier: 0.75, note: "タイプ相性抜群" },
  { name: "ふしぎなうろこ", multiplierPosition: multiplierPosition.defense, multiplier: 1.5, note: "B" },
  { name: "フラワーギフト", multiplierPosition: multiplierPosition.defense, multiplier: 1.5, note: "D" }
];

const defenderHeldItemList = [
  { name: "(なし)", multiplierPosition: multiplierPosition.none, multiplier: 1 },
  { name: "オボンのみ", multiplierPosition: multiplierPosition.none, multiplier: 1 },
  { name: "半減木の実", multiplierPosition: multiplierPosition.afterRand, multiplier: 0.5, note: "タイプ相性抜群" },
  { name: "ホズのみ", multiplierPosition: multiplierPosition.afterRand, multiplier: 0.5, note: "ノーマルタイプ技" },
  { name: "こころのしずく", multiplierPosition: multiplierPosition.defense, multiplier: 1.5, note: "ラティオス・ラティアスD" },
  { name: "しんかいのウロコ", multiplierPosition: multiplierPosition.defense, multiplier: 2, note: "パールルD" },
  { name: "メタルパウダー", multiplierPosition: multiplierPosition.defense, multiplier: 2, note: "メタモンB" }
];

const constantRatioList = [
  { name: "1/2", value: 1 / 2, title: "ステルスロック4倍など" },
  { name: "1/4", value: 1 / 4, title: "みがわり,ステルスロック2倍など" },
  { name: "1/8", value: 1 / 8, title: "ステルスロック1倍,火傷など" },
  { name: "1/16", value: 1 / 16, title: "天候など" },
  { name: "1/32", value: 1 / 32, title: "ステルスロック1/4倍など" },
  { name: "1/6", value: 1 / 6, title: "まきびし*2など" },
  { name: "1/10", value: 1 / 10, title: "いのちのたまなど" },
  { name: "3/16", value: 3 / 16, title: "猛毒*3など" },
  { name: "5/16", value: 5 / 16, title: "猛毒*5など" },
  { name: "7/16", value: 7 / 16, title: "猛毒*7など" }
];

let damageStates = [];
let damageLogs = []
let damageHistory = [];
let damageHistoryIndex = -1;

function initializeApp() {
  resetDefaultValues();

  // タブの初期化
  document.querySelectorAll(".tab-group").forEach(group => {
    const tabs = group.querySelectorAll(".tab-button");
    const contents = group.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // このグループ内の選択状態だけを解除
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        // クリックされたタブを選択
        tab.classList.add("active");

        // 対応する内容を表示
        const target = group.querySelector(`#${tab.dataset.tab}`);
        target.classList.add("active");
      });
    });
  });

  document.querySelector(".tab-button[data-tab='assistance1']").addEventListener("click", () => {
    // ツール部分にスクロール
    document.querySelector("#tool").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // ポケモンセレクトの初期化
  document.querySelectorAll("[id$='pokemon-input']").forEach(input => {
    const prefix = input.id.replace("-input", "");
    const sortedPokemonList = pokemonList.toSorted((a, b) => a.name.localeCompare(b.name, "ja"));
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: sortedPokemonList
    });
  });

  // めざパセレクトの初期化
  const hiddenPowerType = document.getElementById("hidden-power-type")
  const hiddenpowerTypeList = typeList.filter(type => !["ノーマル", "(なし)"].includes(type)).sort();
  hiddenpowerTypeList.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    hiddenPowerType.appendChild(option);
  });
  hiddenPowerType.value = "こおり";
  hiddenPowerType.addEventListener("change", updateHiddenPowerIvOption);
  document.getElementById("hidden-power-min-atk").addEventListener("change", updateHiddenPowerIvOption);
  document.getElementById("hidden-power-min-spe").addEventListener("change", updateHiddenPowerIvOption);
  updateHiddenPowerIvOption();

  // 性格補正の排他処理
  document.querySelectorAll("input[class*='assistance-nature-']").forEach(input => {
    input.addEventListener("change", () => {
      if (!input.checked) {
        return;
      }

      const type = input.className.includes("assistance-nature-plus-")
        ? "plus"
        : "minus";
      const opposite = type === "plus" ? "minus" : "plus";
      const stat = input.className.split("-").pop();

      document.querySelectorAll(`input[class*="assistance-nature-${type}-"]`)
        .forEach(other => {
          if (other !== input) other.checked = false;
        });

      document.querySelector(`.assistance-nature-${opposite}-${stat}`).checked = false;
    });
  });

  // 攻撃側特性セレクトの初期化
  document.querySelectorAll(".attacker-ability-input").forEach(input => {
    const prefix = input.id.replace("-input", "");
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: attackerAbilityList,
      getTitle: item => `${item.multiplierPosition}${"note" in item ? `(${item.note})` : ""}: *${item.multiplier}`
    });
  });

  // 攻撃側持ち物セレクトの初期化
  document.querySelectorAll(".attacker-held-item-input").forEach(input => {
    const prefix = input.id.replace("-input", "");
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: attackerHeldItemList,
      getTitle: item => `${item.multiplierPosition}${"note" in item ? `(${item.note})` : ""}: *${item.multiplier}`
    });
  });

  // 技セレクトの初期化
  document.querySelectorAll(".move-input").forEach(input => {
    const prefix = input.id.replace("-input", "");
    const filteredMoveList = moveList
      .filter(move => move.category !== "へんか")
      .sort((a, b) => a.name.localeCompare(b.name, "ja"));
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: filteredMoveList
    });
  });

  // 攻撃側急所ランク適用のイベント登録
  document.querySelectorAll(".attacker-apply-critical-stage").forEach(apply => {
    const criticalStageId = apply.id.replace("-apply", "");
    const criticalStageInput = document.getElementById(criticalStageId);
    const update = () => {
      criticalStageInput.disabled = !apply.checked;
    }
    apply.addEventListener("change", update);
    update();
  });

  // 攻撃側技命中率適用のイベント登録
  document.querySelectorAll(".apply-move-accuracy").forEach(apply => {
    const accuracyId = apply.id.replace("-apply", "");
    const accuracyInput = document.getElementById(accuracyId);
    const update = () => {
      accuracyInput.disabled = !apply.checked;
    }
    apply.addEventListener("change", update);
    update();
  });

  // 攻撃側技タイプセレクトの初期化
  document.querySelectorAll(".move-type").forEach(input => {
    const sortedTypeList = typeList.toSorted((a, b) => a.localeCompare(b, "ja"));
    sortedTypeList.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      input.appendChild(option);
    });
    input.value = "(なし)";
  });

  // 攻撃側タイプ相性セレクトの初期化
  document.querySelectorAll(".move-type-effect").forEach(input => {
    moveTypeEffectList.forEach(item => {
      const option = document.createElement("option");
      option.value = item.multiplier;
      option.textContent = item.name;
      input.appendChild(option);
    });
    input.value = "1";
  });

  // 攻撃側技の範囲技適用のイベント登録
  document.querySelectorAll(".apply-move-ranged").forEach(apply => {
    const moveRangedId = apply.id.replace("-apply", "");
    const moveRanged = document.getElementById(moveRangedId);
    const update = () => {
      moveRanged.disabled = !apply.checked;
    }
    apply.addEventListener("change", update);
    update();
  })

  // 防御側特性セレクトの初期化
  document.querySelectorAll(".defender-ability-input").forEach(input => {
    const prefix = input.id.replace("-input", "");
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: defenderAbilityList,
      getTitle: item => `${item.multiplierPosition}${"note" in item ? `(${item.note})` : ""}: *${item.multiplier}`
    });
  });

  // 防御側持ち物セレクトの初期化
  document.querySelectorAll(".defender-held-item-input").forEach(input => {
    const prefix = input.id.replace("-input", "");
    setupAutocomplete({
      inputId: input.id,
      listId: `${prefix}-list`,
      data: defenderHeldItemList,
      getTitle: item => `${item.multiplierPosition}${"note" in item ? `(${item.note})` : ""}: *${item.multiplier}`
    });
  });

  document.getElementById("attack-tab-group").addEventListener("change", updateResult);
  document.getElementById("defense-tab-group").addEventListener("change", updateResult);
  document.getElementById("even-distribution").addEventListener("change", updateResult);

  document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener("input", () => {
      if (input.value === "") {
        return;
      }

      const min = input.min !== "" ? Number(input.min) : -Infinity;
      const max = input.max !== "" ? Number(input.max) : Infinity;

      const value = clamp(Number(input.value), min, max);

      input.value = value;
    });
  });

  document.querySelectorAll("input[type='number'], input[type='text']").forEach(input => {
    input.addEventListener("focus", () => input.select());
  });

  document.querySelectorAll("input[type='number']:not([class^='assistance-stat-'])").forEach(input => {
    input.addEventListener("wheel", (event) => {
      event.preventDefault();

      const step = Number(input.step) || 1;
      const direction = event.deltaY < 0 ? 1 : -1;

      let value = Number(input.value) || 0;
      value += step * direction;

      const min = input.min !== "" ? Number(input.min) : -Infinity;
      const max = input.max !== "" ? Number(input.max) : Infinity;
      value = clamp(value, min, max);

      input.value = value;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    },
      // スクロールに関係するイベントでpreventDefault()を使うイベントリスナーでは{ passive: false }を付けるらしい
      { passive: false });
  });

  document.querySelectorAll("[class^='assistance-stat-']").forEach(input => {
    input.addEventListener("wheel", (event) => {
      event.preventDefault();

      const step = Number(input.step) || 1;
      const direction = event.deltaY < 0 ? 1 : -1;

      let value = Number(input.value) || 0;
      value += step * direction;

      // ステータスが11nから変更するときの処理
      const tab = event.target.closest(".tab-content");
      const key = input.className.split("-").pop();
      const naturePlus = tab.querySelector(`.assistance-nature-plus-${key}`)?.checked ?? false;
      if (naturePlus && value % 11 === 10 && direction === -1) {
        value += step * direction;
      }

      const min = input.min !== "" ? Number(input.min) : -Infinity;
      const max = input.max !== "" ? Number(input.max) : Infinity;
      value = clamp(value, min, max);

      input.value = value;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    },
      // スクロールに関係するイベントでpreventDefault()を使うイベントリスナーでは{ passive: false }を付けるらしい
      { passive: false });
  });

  document.querySelectorAll("[class^='assistance-iv-'], [class^='assistance-ev-']").forEach(input => {
    input.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      input.value = input.value === input.max ? input.min : input.max;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
    input.title = `右クリックで${input.min}, ${input.max}にする`;
  });

  document.querySelectorAll("[data-default-value]:not([class^='assistance-iv-'], [class^='assistance-ev-'])").forEach(input => {
    input.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      input.value = input.dataset.defaultValue;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
    input.title = `右クリックで${input.dataset.defaultValue}にする`;
  });

  document.querySelector("#assistance-tab-group").addEventListener("change", (event) => {
    if (!event.target.matches("input, select")) {
      return;
    }

    const tab = event.target.closest(".tab-content");

    if (event.target.matches("[class^='assistance-stat-']")) {
      calculateEvs(tab);
    } else if (event.target.matches(
      ".assistance-pokemon-input, .assistance-level, [class^='assistance-iv-'], [class^='assistance-ev-'], [class^='assistance-nature-']"
    )) {
      calculateStats(tab);
    }

    updateAssistanceInfo(tab);
  });

  document.querySelectorAll(".hidden-power-option").forEach(button => {
    button.addEventListener("click", (event) => {
      const tab = event.currentTarget.closest(".tab-content");
      const ivInputs = [
        tab.querySelector(".assistance-iv-hp"),
        tab.querySelector(".assistance-iv-atk"),
        tab.querySelector(".assistance-iv-def"),
        tab.querySelector(".assistance-iv-spa"),
        tab.querySelector(".assistance-iv-spd"),
        tab.querySelector(".assistance-iv-spe")
      ];

      const dialog = document.getElementById("hidden-power-dialog");

      dialog.querySelector("#hidden-power-confirm").onclick = () => {
        const hiddenPowerIvOption = dialog.querySelector("#hidden-power-iv-option");
        const formattedIvs = hiddenPowerIvOption.value;
        const ivs = formattedIvs.split("-").map(Number);
        ivs.forEach((iv, index) => {
          ivInputs[index].value = iv;
          ivInputs[index].dispatchEvent(new Event("change", { bubbles: true }));
        });

        dialog.close();
      };

      dialog.querySelector("#hidden-power-cancel").onclick = () => {
        dialog.close();
      };

      dialog.showModal();
    });
  });

  document.querySelectorAll(".assistance-copy-stats").forEach(button => {
    button.addEventListener("click", (() => {
      let copyTimeout = null;

      return async (event) => {
        const tab = event.currentTarget.closest(".tab-content");

        const stats = {
          hp: tab.querySelector(".assistance-stat-hp").valueAsNumber,
          atk: tab.querySelector(".assistance-stat-atk").valueAsNumber,
          def: tab.querySelector(".assistance-stat-def").valueAsNumber,
          spa: tab.querySelector(".assistance-stat-spa").valueAsNumber,
          spd: tab.querySelector(".assistance-stat-spd").valueAsNumber,
          spe: tab.querySelector(".assistance-stat-spe").valueAsNumber
        };

        const evs = {
          hp: tab.querySelector(".assistance-ev-hp").valueAsNumber,
          atk: tab.querySelector(".assistance-ev-atk").valueAsNumber,
          def: tab.querySelector(".assistance-ev-def").valueAsNumber,
          spa: tab.querySelector(".assistance-ev-spa").valueAsNumber,
          spd: tab.querySelector(".assistance-ev-spd").valueAsNumber,
          spe: tab.querySelector(".assistance-ev-spe").valueAsNumber
        };

        const natureChecks = {
          plus: {
            atk: tab.querySelector(".assistance-nature-plus-atk").checked,
            def: tab.querySelector(".assistance-nature-plus-def").checked,
            spa: tab.querySelector(".assistance-nature-plus-spa").checked,
            spd: tab.querySelector(".assistance-nature-plus-spd").checked,
            spe: tab.querySelector(".assistance-nature-plus-spe").checked
          },
          minus: {
            atk: tab.querySelector(".assistance-nature-minus-atk").checked,
            def: tab.querySelector(".assistance-nature-minus-def").checked,
            spa: tab.querySelector(".assistance-nature-minus-spa").checked,
            spd: tab.querySelector(".assistance-nature-minus-spd").checked,
            spe: tab.querySelector(".assistance-nature-minus-spe").checked
          }
        };

        const ivs = {
          hp: tab.querySelector(".assistance-iv-hp").valueAsNumber,
          atk: tab.querySelector(".assistance-iv-atk").valueAsNumber,
          def: tab.querySelector(".assistance-iv-def").valueAsNumber,
          spa: tab.querySelector(".assistance-iv-spa").valueAsNumber,
          spd: tab.querySelector(".assistance-iv-spd").valueAsNumber,
          spe: tab.querySelector(".assistance-iv-spe").valueAsNumber
        };

        const formattedStats = Object.values(stats).join("-");

        const formattedEvs = ["hp", "atk", "def", "spa", "spd", "spe"]
          .map(stat => {
            const ev = evs[stat];

            if (natureChecks.plus[stat]) {
              return `${ev}↑`;
            }
            if (natureChecks.minus[stat]) {
              return `${ev}↓`;
            }
            return ev;
          })
          .join("-");

        const formattedIvs = Object.values(ivs).join("-");
        const isAll31 = Object.values(ivs).every(iv => iv === 31);
        const isAtk0Others31 =
          ivs.atk === 0 &&
          Object.entries(ivs)
            .filter(([key]) => key !== "atk")
            .every(([, value]) => value === 31);

        const text = `${formattedStats}(${formattedEvs})${isAll31 || isAtk0Others31 ? "" : `(${formattedIvs})`}`;

        const originalText = "ステータスをコピー";

        // 前回のタイマーを解除
        clearTimeout(copyTimeout);

        try {
          await navigator.clipboard.writeText(text);
          button.textContent = "コピーしました！";
        } catch (error) {
          console.error("コピーに失敗しました", error);
          button.textContent = "コピーに失敗しました";
        } finally {
          copyTimeout = setTimeout(() => {
            button.textContent = originalText;
            copyTimeout = null;
          }, 1000);
        }
      };
    })());
  });

  document.querySelectorAll(".assistance-copy-container").forEach(container => {
    container.addEventListener("click", (event) => {
      const button = event.target.closest(".assistance-copy");
      if (!button) {
        return;
      }

      // コピー元：アクティブなタブ
      const sourceTab = document.querySelector("#assistance-tab-group .tab-content.active");
      if (!sourceTab) {
        return;
      }

      // コピー先の情報
      const className = [...button.classList].find(className =>
        className.startsWith("assistance-copy-")
      );

      const targets = {
        "assistance-copy-atk-to-alpha": ["attack-tab-group", "attack-side1", ["atk"]],
        "assistance-copy-atk-to-beta": ["attack-tab-group", "attack-side2", ["atk"]],
        "assistance-copy-spa-to-alpha": ["attack-tab-group", "attack-side1", ["spa"]],
        "assistance-copy-spa-to-beta": ["attack-tab-group", "attack-side2", ["spa"]],
        "assistance-copy-hbd-to-i": ["defense-tab-group", "defense-side1", ["hp", "def", "spd"]],
        "assistance-copy-hbd-to-ii": ["defense-tab-group", "defense-side2", ["hp", "def", "spd"]]
      };

      const targetInfo = targets[className];
      if (!targetInfo) {
        return;
      }

      const [groupId, tabId, stats] = targetInfo;
      const targetTab = document.getElementById(tabId);
      if (!targetTab || !document.getElementById(groupId)) {
        return;
      }

      activateTab(groupId, tabId);

      // ステータスをコピー
      stats.forEach(stat => {
        const source = sourceTab.querySelector(`.assistance-stat-${stat}`);
        const destination = targetTab.querySelector(
          stat === "atk" || stat === "spa"
            ? ".attacker-ac-stat"
            : `.defender-${stat}-stat`
        );

        if (source && destination) {
          destination.value = source.value;
          destination.dispatchEvent(new Event("input", { bubbles: true }));
          destination.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });

      // ポケモン名をコピー
      const sourceName = sourceTab.querySelector(".assistance-pokemon-input");

      const destinationName = targetTab.querySelector(
        tabId.startsWith("attack-")
          ? ".attacker-pokemon-input"
          : ".defender-pokemon-input"
      );

      if (sourceName && destinationName) {
        destinationName.value = sourceName.value;
        destinationName.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });
  });

  document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
      updateResult();
    });
  });

  document.querySelectorAll("#defense-tab-group .tab-button").forEach(button => {
    button.addEventListener("click", () => {
      clearDamage();
    });
  });

  document.querySelectorAll(".move-input").forEach(input => {
    input.addEventListener("change", (event) => {
      const moveName = input.value;
      const move = moveList.find(move => move.name === moveName);

      const tab = event.currentTarget.closest(".tab-content");

      tab.querySelector(".attacker-critical-stage").value = move.criticalStage;
      tab.querySelector(".move-power").value = move.power;
      tab.querySelector(".move-accuracy").value = move.accuracy;
      tab.querySelector(".move-type").value = move.type;

      const categoryRadios = tab.querySelectorAll(".move-category");
      categoryRadios.forEach(radio => {
        radio.checked = radio.value === move.category;
      });

      const defenderName = getCalculationInputs().defender.name;
      const defenderPokemon = pokemonList.find(pokemon => pokemon.name === defenderName);
      const typeEffects = getTypeEffects(move, defenderPokemon);

      tab.querySelectorAll(".move-type-effect").forEach((select, index) => {
        select.value = typeEffects[index];
      });

      const attackerName = tab.querySelector(".attacker-pokemon-input").value;
      const attackerPokemon = pokemonList.find(pokemon => pokemon.name === attackerName);

      tab.querySelector(".move-stab").checked = getStab(attackerPokemon, move);

      tab.querySelector(".move-explosion").checked = move.name === "じばく" || move.name === "だいばくはつ";

      tab.querySelector(".move-ranged").checked = move.isRanged;
    });
  });

  document.querySelectorAll(".defender-hp-stat").forEach(input => {
    input.addEventListener("change", clearDamage);
  });

  document.querySelectorAll(".defender-pokemon-input").forEach(input => {
    input.addEventListener("change", (event) => {
      const pokemonName = input.value;
      const pokemon = pokemonList.find(pokemon => pokemon.name === pokemonName);

      const attackTabGroup = document.querySelector("#attack-tab-group");
      const activeAttackTab = attackTabGroup.querySelector(".tab-content.active");

      const moveName = activeAttackTab.querySelector(".move-input").value;
      const move = moveList.find(move => move.name === moveName);

      const typeEffects = getTypeEffects(move, pokemon);

      activeAttackTab.querySelectorAll(".move-type-effect").forEach((select, index) => {
        select.value = typeEffects[index];
      });
    });
  });

  const constantRatio = document.getElementById("constant-ratio");
  constantRatioList.forEach(item => {
    const option = document.createElement("option");
    option.value = item.value;
    option.textContent = item.name;
    option.title = item.title;
    constantRatio.appendChild(option);
  });
  constantRatio.value = 1 / 16;

  document.getElementById("constant-damage").addEventListener("click", () => applyConstantDamage(1));

  document.getElementById("constant-heal").addEventListener("click", () => applyConstantDamage(-1));


  document.getElementById("add-damage").addEventListener("click", () => {
    const { move, attacker, defender } = getCalculationInputs();
    const { miss, normal, critical } = calculateDamage({ move, attacker, defender }).damage;

    const inputDamageProbs = [
      miss,
      ...normal,
      ...critical
    ];

    const attackTabGroup = document.querySelector("#attack-tab-group");
    const activeAttackTab = attackTabGroup.querySelector(".tab-content.active");
    const tab = activeAttackTab === document.getElementById("attack-side1") ? "α" : "β";
    const log = `${move.category === "ぶつり" ? "A" : "C"}${attacker.atkSpa}の攻撃${tab}`;
    addDamage(inputDamageProbs, log);
  });

  document.getElementById("redo-damage").addEventListener("click", redoDamage);

  document.getElementById("undo-damage").addEventListener("click", undoDamage);

  document.getElementById("clear-damage").addEventListener("click", clearDamage);

  initializeHistory();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function resetDefaultValues() {
  document.querySelectorAll("[data-default-value]").forEach(element => {
    element.value = element.dataset.defaultValue;
  });
}

function getTypeEffects(move, pokemon) {
  const moveType = move.type;
  const pokemonType1 = pokemon.types[0];
  const pokemonType2 = pokemon.types[1] ?? "(なし)";

  const chart = {
    "ノーマル": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 0.5, "むし": 1, "ゴースト": 0, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 1, "あく": 1
    },
    "かくとう": {
      "ノーマル": 2, "かくとう": 1, "ひこう": 0.5, "どく": 0.5, "じめん": 1, "いわ": 2, "むし": 0.5, "ゴースト": 0, "はがね": 2, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 0.5, "こおり": 2, "ドラゴン": 1, "あく": 2
    },
    "ひこう": {
      "ノーマル": 1, "かくとう": 2, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 0.5, "むし": 2, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 2, "でんき": 0.5, "エスパー": 1, "こおり": 1, "ドラゴン": 1, "あく": 1
    },
    "どく": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 0.5, "じめん": 0.5, "いわ": 0.5, "むし": 1, "ゴースト": 0.5, "はがね": 0, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 2, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 1, "あく": 1
    },
    "じめん": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 0, "どく": 2, "じめん": 1, "いわ": 2, "むし": 0.5, "ゴースト": 1, "はがね": 2, "(なし)": 1, "ほのお": 2, "みず": 1, "くさ": 0.5, "でんき": 2, "エスパー": 1, "こおり": 1, "ドラゴン": 1, "あく": 1
    },
    "いわ": {
      "ノーマル": 1, "かくとう": 0.5, "ひこう": 2, "どく": 1, "じめん": 0.5, "いわ": 1, "むし": 2, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 2, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 1, "こおり": 2, "ドラゴン": 1, "あく": 1
    },
    "むし": {
      "ノーマル": 1, "かくとう": 0.5, "ひこう": 0.5, "どく": 0.5, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 0.5, "はがね": 0.5, "(なし)": 1, "ほのお": 0.5, "みず": 1, "くさ": 2, "でんき": 1, "エスパー": 2, "こおり": 1, "ドラゴン": 1, "あく": 2
    },
    "ゴースト": {
      "ノーマル": 0, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 2, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 2, "こおり": 1, "ドラゴン": 1, "あく": 0.5
    },
    "はがね": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 2, "むし": 1, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 0.5, "みず": 0.5, "くさ": 1, "でんき": 0.5, "エスパー": 1, "こおり": 2, "ドラゴン": 1, "あく": 1
    },
    "(なし)": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 1, "はがね": 1, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 1, "あく": 1
    },
    "ほのお": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 0.5, "むし": 2, "ゴースト": 1, "はがね": 2, "(なし)": 1, "ほのお": 0.5, "みず": 0.5, "くさ": 2, "でんき": 1, "エスパー": 1, "こおり": 2, "ドラゴン": 0.5, "あく": 1
    },
    "みず": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 2, "いわ": 2, "むし": 1, "ゴースト": 1, "はがね": 1, "(なし)": 1, "ほのお": 2, "みず": 0.5, "くさ": 0.5, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 0.5, "あく": 1
    },
    "くさ": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 0.5, "どく": 0.5, "じめん": 2, "いわ": 2, "むし": 0.5, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 0.5, "みず": 2, "くさ": 0.5, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 0.5, "あく": 1
    },
    "でんき": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 2, "どく": 1, "じめん": 0, "いわ": 1, "むし": 1, "ゴースト": 1, "はがね": 1, "(なし)": 1, "ほのお": 1, "みず": 2, "くさ": 0.5, "でんき": 0.5, "エスパー": 1, "こおり": 1, "ドラゴン": 0.5, "あく": 1
    },
    "エスパー": {
      "ノーマル": 1, "かくとう": 2, "ひこう": 1, "どく": 2, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 0.5, "こおり": 1, "ドラゴン": 1, "あく": 0
    },
    "こおり": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 2, "どく": 1, "じめん": 2, "いわ": 1, "むし": 1, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 0.5, "みず": 0.5, "くさ": 2, "でんき": 1, "エスパー": 1, "こおり": 0.5, "ドラゴン": 2, "あく": 1
    },
    "ドラゴン": {
      "ノーマル": 1, "かくとう": 1, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 1, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 1, "こおり": 1, "ドラゴン": 2, "あく": 1
    },
    "あく": {
      "ノーマル": 1, "かくとう": 0.5, "ひこう": 1, "どく": 1, "じめん": 1, "いわ": 1, "むし": 1, "ゴースト": 2, "はがね": 0.5, "(なし)": 1, "ほのお": 1, "みず": 1, "くさ": 1, "でんき": 1, "エスパー": 2, "こおり": 1, "ドラゴン": 1, "あく": 0.5
    }
  };

  const effect1 = chart[moveType][pokemonType1];
  const effect2 = chart[moveType][pokemonType2];

  const typeEffectivenessPrecedences = [
    "ノーマル",
    "ほのお",
    "みず",
    "でんき",
    "くさ",
    "こおり",
    "かくとう",
    "どく",
    "じめん",
    "ひこう",
    "エスパー",
    "むし",
    "いわ",
    "ゴースト",
    "ドラゴン",
    "あく",
    "はがね",
    "(なし)"
  ];

  const effect1Precedence = typeEffectivenessPrecedences.indexOf(pokemonType1);
  const effect2Precedence = typeEffectivenessPrecedences.indexOf(pokemonType2);

  if (effect1Precedence > effect2Precedence) {
    return [effect2, effect1];
  } else {
    return [effect1, effect2];
  }
}

function getStab(pokemon, move) {
  return pokemon.types.includes(move.type);
}

// 分数を分数のままで表示する
function formatMultiplier(value) {
  const multiplierList = [
    [2 / 3, "2/3"],
    [2 / 5, "2/5"],
    [2 / 6, "2/6"],
    [2 / 7, "2/7"],
    [1 / 2, "1/2"],
    [1 / 4, "1/4"],
    [1 / 8, "1/8"],
    [1 / 16, "1/16"],
    [1 / 32, "1/32"],
    [1 / 6, "1/6"],
    [1 / 10, "1/10"],
    [3 / 16, "3/16"],
    [5 / 16, "5/16"],
    [7 / 16, "7/16"]
  ];

  const match = multiplierList.find(
    ([num]) => Math.abs(num - value) < 1e-10
  );

  return match?.[1] ?? String(value);
}

function formatPercent(value, digit = 2) {
  const formatter = Intl.NumberFormat(
    "ja-JP",
    {
      style: "percent",
      minimumFractionDigits: digit,
      maximumFractionDigits: digit
    });
  const result = formatter.format(value);
  return result;
}

function applyConstantDamage(sign) {
  const constantType = document.querySelector('input[name="constant"]:checked').value;

  let damage;
  let log;

  if (constantType === "ratio") {
    const ratio = document.getElementById("constant-ratio").value;
    const defender = getCalculationInputs().defender;

    damage = Math.floor(defender.hp * ratio);
    log = `割合(${formatMultiplier(ratio)}=${damage * sign})`;
  } else if (constantType === "number") {
    damage = document.getElementById("constant-number").valueAsNumber;
    log = `数値(${damage * sign})`;
  }

  const damageProbs = [{ damage: damage * sign, prob: 1 }];
  addDamage(damageProbs, log);
}

function activateTab(groupId, tabId) {
  const group = document.getElementById(groupId);
  if (!group) return;

  // コンテンツのactiveを切り替え
  group.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.toggle("active", tab.id === tabId);
  });

  // タブボタンのactiveを切り替え
  group.querySelectorAll("[data-tab]").forEach(button => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });

  updateResult();
}

// オートコンプリートを初期化する共通関数
function setupAutocomplete({
  inputId,
  listId,
  data,
  getTitle = () => ""
}) {
  // ========================================
  // 1. ローマ字変換用データ
  // ========================================

  const romajiGroups = [
    // 基本のかな
    ["あ", ["a"]],
    ["い", ["i"]],
    ["う", ["u"]],
    ["え", ["e"]],
    ["お", ["o"]],
    ["か", ["ka"]],
    ["き", ["ki"]],
    ["く", ["ku"]],
    ["け", ["ke"]],
    ["こ", ["ko"]],
    ["さ", ["sa"]],
    ["し", ["shi", "si"]],
    ["す", ["su"]],
    ["せ", ["se"]],
    ["そ", ["so"]],
    ["た", ["ta"]],
    ["ち", ["chi", "ti"]],
    ["つ", ["tsu", "tu"]],
    ["て", ["te"]],
    ["と", ["to"]],
    ["な", ["na"]],
    ["に", ["ni"]],
    ["ぬ", ["nu"]],
    ["ね", ["ne"]],
    ["の", ["no"]],
    ["は", ["ha"]],
    ["ひ", ["hi"]],
    ["ふ", ["fu", "hu"]],
    ["へ", ["he"]],
    ["ほ", ["ho"]],
    ["ま", ["ma"]],
    ["み", ["mi"]],
    ["む", ["mu"]],
    ["め", ["me"]],
    ["も", ["mo"]],
    ["や", ["ya"]],
    ["ゆ", ["yu"]],
    ["よ", ["yo"]],
    ["ら", ["ra"]],
    ["り", ["ri"]],
    ["る", ["ru"]],
    ["れ", ["re"]],
    ["ろ", ["ro"]],
    ["わ", ["wa"]],
    ["を", ["wo"]],
    ["ん", ["n"]],

    ["が", ["ga"]],
    ["ぎ", ["gi"]],
    ["ぐ", ["gu"]],
    ["げ", ["ge"]],
    ["ご", ["go"]],
    ["ざ", ["za"]],
    ["じ", ["ji", "zi"]],
    ["ず", ["zu"]],
    ["ぜ", ["ze"]],
    ["ぞ", ["zo"]],
    ["だ", ["da"]],
    ["ぢ", ["di", "zi"]],
    ["づ", ["du", "zu"]],
    ["で", ["de"]],
    ["ど", ["do"]],
    ["ば", ["ba"]],
    ["び", ["bi"]],
    ["ぶ", ["bu"]],
    ["べ", ["be"]],
    ["ぼ", ["bo"]],
    ["ぱ", ["pa"]],
    ["ぴ", ["pi"]],
    ["ぷ", ["pu"]],
    ["ぺ", ["pe"]],
    ["ぽ", ["po"]],

    ["きゃ", ["kya"]],
    ["きゅ", ["kyu"]],
    ["きょ", ["kyo"]],
    ["しゃ", ["sha", "sya"]],
    ["しゅ", ["shu", "syu"]],
    ["しょ", ["sho", "syo"]],
    ["ちゃ", ["cha", "tya", "cya"]],
    ["ちゅ", ["chu", "tyu", "cyu"]],
    ["ちょ", ["cho", "tyo", "cyo"]],
    ["じゃ", ["ja", "jya", "zya"]],
    ["じゅ", ["ju", "jyu", "zyu"]],
    ["じょ", ["jo", "jyo", "zyo"]],
    ["ぢゃ", ["dya", "ja", "jya", "zya"]],
    ["ぢゅ", ["dyu", "ju", "jyu", "zyu"]],
    ["ぢょ", ["dyo", "jo", "jyo", "zyo"]],
    ["にゃ", ["nya"]],
    ["にゅ", ["nyu"]],
    ["にょ", ["nyo"]],
    ["ひゃ", ["hya"]],
    ["ひゅ", ["hyu"]],
    ["ひょ", ["hyo"]],
    ["ふぁ", ["fa"]],
    ["ふぃ", ["fi"]],
    ["ふぇ", ["fe"]],
    ["ふぉ", ["fo"]],
    ["ふゅ", ["fyu"]],
    ["みゃ", ["mya"]],
    ["みゅ", ["myu"]],
    ["みょ", ["myo"]],
    ["りゃ", ["rya"]],
    ["りゅ", ["ryu"]],
    ["りょ", ["ryo"]],
    ["ぎゃ", ["gya"]],
    ["ぎゅ", ["gyu"]],
    ["ぎょ", ["gyo"]],
    ["びゃ", ["bya"]],
    ["びゅ", ["byu"]],
    ["びょ", ["byo"]],
    ["ぴゃ", ["pya"]],
    ["ぴゅ", ["pyu"]],
    ["ぴょ", ["pyo"]],

    ["でぃ", ["dhi", "di"]],

    ["ぁ", ["xa", "la"]], ["ぃ", ["xi", "li"]],
    ["ぅ", ["xu", "lu"]], ["ぇ", ["xe", "le"]],
    ["ぉ", ["xo", "lo"]],
    ["ゃ", ["xya", "lya"]], ["ゅ", ["xyu", "lyu"]],
    ["ょ", ["xyo", "lyo"]],
    ["っ", ["xtu", "ltu", "xtsu", "ltsu"]],
    ["ー", ["-"]]
  ];

  // 長いかなから順に照合する
  const kanaEntries = romajiGroups.toSorted((a, b) => b[0].length - a[0].length);


  // ========================================
  // 2. かな・ローマ字変換用の内部関数
  // ========================================

  // カタカナをひらがなに統一する
  function normalizeKana(text) {
    return text
      .normalize("NFKC")
      .replace(/[ァ-ヶ]/g, char =>
        String.fromCharCode(char.charCodeAt(0) - 0x60)
      )
      .toLowerCase();
  }

  // かなをローマ字の候補単位に分割する

  function kanaToRomajiUnits(text) {
    const kana = normalizeKana(text);
    const units = [];

    for (let i = 0; i < kana.length;) {
      const char = kana[i];

      // 「っ」は次の子音を重ねる表記にも対応させる
      if (char === "っ") {
        const next = kanaEntries.find(([key]) =>
          kana.startsWith(key, i + 1)
        );

        if (next) {
          const [key, spellings] = next;
          const doubled = spellings
            .filter(spelling => /^[bcdfghjklmpqrstvwxyz]/.test(spelling))
            .map(spelling => spelling[0] + spelling);

          units.push([
            ...new Set([...doubled, "xtu", "ltu", "xtsu", "ltsu"])
          ]);
          i += 1;
          continue;
        }

        units.push(["xtu", "ltu", "xtsu", "ltsu"]);
        i += 1;
        continue;
      }

      // 「ん」の次が母音・y・n のときの nn 表記にも対応
      if (
        char === "ん" &&
        i + 1 < kana.length &&
        /^[あいうえおやゆよなにぬねの]/.test(kana[i + 1])
      ) {
        units.push(["n", "nn", "n'"]);
        i += 1;
        continue;
      }

      const entry = kanaEntries.find(([key]) =>
        kana.startsWith(key, i)
      );

      if (entry) {
        units.push(entry[1]);
        i += entry[0].length;
      } else {
        // 対応表にない文字は、その文字自体で比較する
        units.push([char]);
        i += 1;
      }
    }

    return units;
  }

  // ローマ字入力が、候補の読みの途中まで一致するか判定
  function matchesRomajiPrefix(query, candidate) {
    const input = query.toLowerCase();
    if (!input) return true;

    const units = kanaToRomajiUnits(candidate);

    function match(unitIndex, inputIndex) {
      if (inputIndex === input.length) return true;
      if (unitIndex >= units.length) return false;

      for (const spelling of units[unitIndex]) {
        const remaining = input.slice(inputIndex);

        // 入力が音節の途中でも一致とみなす
        if (spelling.startsWith(remaining)) return true;

        if (
          remaining.startsWith(spelling) &&
          match(unitIndex + 1, inputIndex + spelling.length)
        ) {
          return true;
        }
      }

      return false;
    }

    return match(0, 0);
  }


  // ========================================
  // 3. オートコンプリート本体
  // ========================================

  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  let filteredItems = [];
  let activeIndex = -1;

  // 候補一覧を更新する
  function renderItems() {
    const query = input.value.trim().toLowerCase();

    const isRomaji = /^[a-z'-]+$/i.test(query);

    filteredItems = data.filter(item => {
      if (!query) {
        return true;
      }

      // 日本語で入力した場合は部分一致
      if (!isRomaji) {
        return normalizeKana(item.name).includes(normalizeKana(query));
      }

      // ローマ字の場合は読みの先頭から一致
      return matchesRomajiPrefix(query, item.name);
    });

    activeIndex = -1;
    list.replaceChildren();

    for (const item of filteredItems) {
      const li = document.createElement("li");

      li.textContent = item.name;
      li.title = getTitle(item);
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", "false");

      // blur より先に選択する
      li.addEventListener("mousedown", event => {
        event.preventDefault();
        selectItem(item);
      });

      list.appendChild(li);
    }

    list.hidden = filteredItems.length === 0;
    input.setAttribute("aria-expanded", String(!list.hidden));
  }

  // 候補を選択する
  function selectItem(item) {
    input.value = item.name;
    list.hidden = true;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");

    // changeイベントを親要素まで伝播させる
    input.dispatchEvent(new Event("change", { bubbles: true }));

    // test
    // 選択したデータを取得
    // console.log(item.value);
  }

  // 選択中の候補を更新する
  function updateActiveItem() {
    const elements = list.querySelectorAll('[role="option"]');

    elements.forEach((element, index) => {
      const isActive = index === activeIndex;

      element.classList.toggle("active", isActive);
      element.setAttribute("aria-selected", String(isActive));
    });

    if (activeIndex >= 0) {
      const activeItem = elements[activeIndex];

      activeItem.scrollIntoView({
        block: "nearest"
      });

      input.setAttribute(
        "aria-activedescendant",
        activeItem.id || ""
      );
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }

  function validateInput() {
    const value = input.value.trim();

    const exists = data.some(item =>
      normalizeKana(item.name) === normalizeKana(value)
    );

    if (!exists) {
      input.value = "(なし)";
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }

  // 入力中は候補を絞り込む
  input.addEventListener("input", renderItems);

  // フォーカス時に候補を表示する
  input.addEventListener("focus", renderItems);

  // キーボード操作
  input.addEventListener("keydown", event => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (list.hidden) renderItems();
      if (filteredItems.length === 0) return;

      activeIndex =
        (activeIndex + 1) % filteredItems.length;

      updateActiveItem();
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (list.hidden) renderItems();
      if (filteredItems.length === 0) return;

      activeIndex =
        activeIndex <= 0
          ? filteredItems.length - 1
          : activeIndex - 1;

      updateActiveItem();
    }

    if (
      event.key === "Enter" &&
      activeIndex >= 0 &&
      !list.hidden
    ) {
      event.preventDefault();
      selectItem(filteredItems[activeIndex]);
    }

    if (event.key === "Escape") {
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    }
  });

  // 右クリックでリセット
  input.addEventListener("contextmenu", event => {
    event.preventDefault();

    input.value = "";
    activeIndex = -1;
    filteredItems = [];

    renderItems();
    input.focus();
  });
  input.title = "右クリックでリセットする";

  // 入力欄の外をクリックしたら閉じる
  const container = input.closest(".autocomplete");
  document.addEventListener("mousedown", event => {
    if (!container.contains(event.target)) {
      list.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.removeAttribute("aria-activedescendant");
    }
  });

  // フォーカスが外れたとき
  input.addEventListener("blur", validateInput);

  validateInput();
}

function calculateStats(tab) {
  const pokemonName = tab.querySelector(".assistance-pokemon-input").value;
  const pokemon = pokemonList.find(pokemon => pokemon.name === pokemonName);
  const baseStats = pokemon.stats;
  const level = tab.querySelector(".assistance-level").valueAsNumber;

  const ivs = {
    hp: tab.querySelector(".assistance-iv-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-iv-atk").valueAsNumber,
    def: tab.querySelector(".assistance-iv-def").valueAsNumber,
    spa: tab.querySelector(".assistance-iv-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-iv-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-iv-spe").valueAsNumber
  };

  const evs = {
    hp: tab.querySelector(".assistance-ev-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-ev-atk").valueAsNumber,
    def: tab.querySelector(".assistance-ev-def").valueAsNumber,
    spa: tab.querySelector(".assistance-ev-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-ev-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-ev-spe").valueAsNumber
  };

  const nature = {
    atk: { plus: tab.querySelector(".assistance-nature-plus-atk").checked, minus: tab.querySelector(".assistance-nature-minus-atk").checked },
    def: { plus: tab.querySelector(".assistance-nature-plus-def").checked, minus: tab.querySelector(".assistance-nature-minus-def").checked },
    spa: { plus: tab.querySelector(".assistance-nature-plus-spa").checked, minus: tab.querySelector(".assistance-nature-minus-spa").checked },
    spd: { plus: tab.querySelector(".assistance-nature-plus-spd").checked, minus: tab.querySelector(".assistance-nature-minus-spd").checked },
    spe: { plus: tab.querySelector(".assistance-nature-plus-spe").checked, minus: tab.querySelector(".assistance-nature-minus-spe").checked }
  };

  const statInputs = {
    hp: tab.querySelector(".assistance-stat-hp"),
    atk: tab.querySelector(".assistance-stat-atk"),
    def: tab.querySelector(".assistance-stat-def"),
    spa: tab.querySelector(".assistance-stat-spa"),
    spd: tab.querySelector(".assistance-stat-spd"),
    spe: tab.querySelector(".assistance-stat-spe")
  };

  const stats = {};

  for (const key of ["hp", "atk", "def", "spa", "spd", "spe"]) {
    const base = baseStats[key];
    const iv = ivs[key];
    const ev = evs[key];

    if (key === "hp") {
      if (pokemon.name === "ヌケニン") {
        stats[key] = 1;
      } else {
        stats[key] = Math.floor((2 * base + iv + Math.floor(ev / 4)) * level / 100) + level + 10;
      }
    } else {
      const natureModifier = nature[key].plus ? 1.1
        : nature[key].minus ? 0.9
          : 1.0;
      stats[key] = Math.floor((Math.floor((2 * base + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureModifier);
    }

    statInputs[key].value = stats[key];
  }
}

function calculateEvs(tab) {
  const pokemonName = tab.querySelector(".assistance-pokemon-input").value;
  const pokemon = pokemonList.find(pokemon => pokemon.name === pokemonName);
  const baseStats = pokemon.stats;
  const level = tab.querySelector(".assistance-level").valueAsNumber;

  const ivs = {
    hp: tab.querySelector(".assistance-iv-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-iv-atk").valueAsNumber,
    def: tab.querySelector(".assistance-iv-def").valueAsNumber,
    spa: tab.querySelector(".assistance-iv-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-iv-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-iv-spe").valueAsNumber
  };

  const stats = {
    hp: tab.querySelector(".assistance-stat-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-stat-atk").valueAsNumber,
    def: tab.querySelector(".assistance-stat-def").valueAsNumber,
    spa: tab.querySelector(".assistance-stat-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-stat-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-stat-spe").valueAsNumber
  };

  const nature = {
    atk: { plus: tab.querySelector(".assistance-nature-plus-atk").checked, minus: tab.querySelector(".assistance-nature-minus-atk").checked },
    def: { plus: tab.querySelector(".assistance-nature-plus-def").checked, minus: tab.querySelector(".assistance-nature-minus-def").checked },
    spa: { plus: tab.querySelector(".assistance-nature-plus-spa").checked, minus: tab.querySelector(".assistance-nature-minus-spa").checked },
    spd: { plus: tab.querySelector(".assistance-nature-plus-spd").checked, minus: tab.querySelector(".assistance-nature-minus-spd").checked },
    spe: { plus: tab.querySelector(".assistance-nature-plus-spe").checked, minus: tab.querySelector(".assistance-nature-minus-spe").checked }
  };

  const evInputs = {
    hp: tab.querySelector(".assistance-ev-hp"),
    atk: tab.querySelector(".assistance-ev-atk"),
    def: tab.querySelector(".assistance-ev-def"),
    spa: tab.querySelector(".assistance-ev-spa"),
    spd: tab.querySelector(".assistance-ev-spd"),
    spe: tab.querySelector(".assistance-ev-spe")
  };

  const evs = {};

  for (const key of ["hp", "atk", "def", "spa", "spd", "spe"]) {
    const base = baseStats[key];
    const iv = ivs[key];
    const stat = stats[key];

    if (key === "hp") {
      if (pokemon.name === "ヌケニン") {
        evs[key] = 0;
      } else {
        evs[key] = (Math.ceil((stat - 10 - level) * 100 / level) - iv - base * 2) * 4;
      }
    } else {
      const natureModifier = nature[key].plus ? 1.1
        : nature[key].minus ? 0.9
          : 1.0;
      evs[key] = (Math.ceil((Math.ceil(stat / natureModifier) - 5) * 100 / level) - iv - base * 2) * 4;
    }

    evs[key] = clamp(evs[key], 0, 252);

    evInputs[key].value = evs[key];
  }

  // statsの再計算
  calculateStats(tab);
}

function updateAssistanceInfo(tab) {
  function getWeightMovePower(weightKilogram) {
    if (weightKilogram <= 10.0) {
      return 20;
    }
    else if (weightKilogram <= 25.0) {
      return 40;
    }
    else if (weightKilogram <= 50.0) {
      return 60;
    }
    else if (weightKilogram <= 100.0) {
      return 80;
    }
    else if (weightKilogram <= 200.0) {
      return 100;
    }
    return 120;
  }

  function calculateHiddenPower(ivs) {
    const hiddenPowerIvs = [
      ivs.hp,
      ivs.atk,
      ivs.def,
      ivs.spe,
      ivs.spa,
      ivs.spd
    ];

    const powerValue = hiddenPowerIvs.reduce((sum, iv, i) => sum + (iv % 4 >= 2 ? 2 ** i : 0), 0);
    const typeValue = hiddenPowerIvs.reduce((sum, iv, i) => sum + (iv % 2 === 1 ? 2 ** i : 0), 0);

    const power = Math.floor(powerValue * 40 / 63 + 30);

    const typeId = Math.floor(typeValue * 15 / 63);
    const excludedTypes = ["ノーマル", "(なし)"];
    const filteredTypeList = typeList.filter(type => !excludedTypes.includes(type));
    const type = filteredTypeList[typeId];

    return { type: type, power: power };
  }

  function getNature() {
    const natureList = [
      {
        name: "無補正",
        plus: null,
        minus: null
      },
      {
        name: "さみしがり",
        plus: "atk",
        minus: "def"
      },
      {
        name: "ゆうかん",
        plus: "atk",
        minus: "spe"
      },
      {
        name: "いじっぱり",
        plus: "atk",
        minus: "spa"
      },
      {
        name: "やんちゃ",
        plus: "atk",
        minus: "spd"
      },
      {
        name: "ずぶとい",
        plus: "def",
        minus: "atk"
      },
      {
        name: "のんき",
        plus: "def",
        minus: "spe"
      },
      {
        name: "わんぱく",
        plus: "def",
        minus: "spa"
      },
      {
        name: "のうてんき",
        plus: "def",
        minus: "spd"
      },
      {
        name: "おくびょう",
        plus: "spe",
        minus: "atk"
      },
      {
        name: "せっかち",
        plus: "spe",
        minus: "def"
      },
      {
        name: "ようき",
        plus: "spe",
        minus: "spa"
      },
      {
        name: "むじゃき",
        plus: "spe",
        minus: "spd"
      },
      {
        name: "ひかえめ",
        plus: "spa",
        minus: "atk"
      },
      {
        name: "おっとり",
        plus: "spa",
        minus: "def"
      },
      {
        name: "れいせい",
        plus: "spa",
        minus: "spe"
      },
      {
        name: "うっかりや",
        plus: "spa",
        minus: "spd"
      },
      {
        name: "おだやか",
        plus: "spd",
        minus: "atk"
      },
      {
        name: "おとなしい",
        plus: "spd",
        minus: "def"
      },
      {
        name: "なまいき",
        plus: "spd",
        minus: "spe"
      },
      {
        name: "しんちょう",
        plus: "spd",
        minus: "spa"
      }
    ];

    const natureChecks = {
      plus: {
        atk: tab.querySelector(".assistance-nature-plus-atk").checked,
        def: tab.querySelector(".assistance-nature-plus-def").checked,
        spa: tab.querySelector(".assistance-nature-plus-spa").checked,
        spd: tab.querySelector(".assistance-nature-plus-spd").checked,
        spe: tab.querySelector(".assistance-nature-plus-spe").checked
      },
      minus: {
        atk: tab.querySelector(".assistance-nature-minus-atk").checked,
        def: tab.querySelector(".assistance-nature-minus-def").checked,
        spa: tab.querySelector(".assistance-nature-minus-spa").checked,
        spd: tab.querySelector(".assistance-nature-minus-spd").checked,
        spe: tab.querySelector(".assistance-nature-minus-spe").checked
      }
    };

    const plus = Object.keys(natureChecks.plus)
      .find(stat => natureChecks.plus[stat]) ?? null;

    const minus = Object.keys(natureChecks.minus)
      .find(stat => natureChecks.minus[stat]) ?? null;

    return natureList.find(nature =>
      nature.plus === plus && nature.minus === minus
    )?.name ?? "";
  }


  const pokemonName = tab.querySelector(".assistance-pokemon-input").value;
  const pokemon = pokemonList.find(pokemon => pokemon.name === pokemonName);

  const baseStats = pokemon.stats;
  const formattedBaseStats = Object.values(baseStats).join("-");

  tab.querySelector(".assistance-base-stats").textContent = formattedBaseStats;

  tab.querySelector(".assistance-types").textContent = pokemon.types.join(",");

  tab.querySelector(".assistance-abilities").textContent = pokemon.abilities.join(",");

  const weightMovePower = getWeightMovePower(pokemon.weightKilogram);
  tab.querySelector(".assistance-weight-move-power").textContent = `${weightMovePower} (${pokemon.weightKilogram}kg)`;

  const ivs = {
    hp: tab.querySelector(".assistance-iv-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-iv-atk").valueAsNumber,
    def: tab.querySelector(".assistance-iv-def").valueAsNumber,
    spa: tab.querySelector(".assistance-iv-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-iv-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-iv-spe").valueAsNumber
  };

  const hiddenPower = calculateHiddenPower(ivs);

  const hiddenPowerSpan = tab.querySelector(".assistance-hidden-power");
  hiddenPowerSpan.textContent = `${hiddenPower.type}${hiddenPower.power}`;

  const evs = {
    hp: tab.querySelector(".assistance-ev-hp").valueAsNumber,
    atk: tab.querySelector(".assistance-ev-atk").valueAsNumber,
    def: tab.querySelector(".assistance-ev-def").valueAsNumber,
    spa: tab.querySelector(".assistance-ev-spa").valueAsNumber,
    spd: tab.querySelector(".assistance-ev-spd").valueAsNumber,
    spe: tab.querySelector(".assistance-ev-spe").valueAsNumber
  };

  const evSum = Object.values(evs).reduce((sum, ev) => sum + ev, 0);
  const evRemaining = 508 - evSum;

  const evSumSpan = tab.querySelector(".assistance-ev-sum");
  evSumSpan.textContent = evSum;
  const evRemainingSpan = tab.querySelector(".assistance-ev-remaining");
  evRemainingSpan.textContent = evRemaining;

  const nature = getNature();

  const natureSpan = tab.querySelector(".assistance-nature");
  natureSpan.textContent = nature;
}

function updateHiddenPowerIvOption() {
  const hiddenPowers = [
    {
      type: "かくとう",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 30, spd: 30, spe: 30 },
        { hp: 30, atk: 30, def: 31, spa: 30, spd: 30, spe: 30 }
      ]
    },
    {
      type: "ひこう",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 30, spd: 30, spe: 30 },
        { hp: 30, atk: 30, def: 30, spa: 30, spd: 30, spe: 31 }
      ]
    },
    {
      type: "どく",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 30, spd: 30, spe: 31 },
        { hp: 30, atk: 30, def: 31, spa: 30, spd: 30, spe: 31 }
      ]
    },
    {
      type: "じめん",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 30, spd: 30, spe: 31 },
        { hp: 30, atk: 30, def: 30, spa: 31, spd: 30, spe: 30 }
      ]
    },
    {
      type: "いわ",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 31, spd: 30, spe: 30 },
        { hp: 30, atk: 30, def: 31, spa: 31, spd: 30, spe: 30 }
      ]
    },
    {
      type: "むし",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 31, spd: 30, spe: 30 },
        { hp: 30, atk: 30, def: 30, spa: 31, spd: 30, spe: 31 }
      ]
    },
    {
      type: "ゴースト",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 31, spd: 30, spe: 31 },
        { hp: 31, atk: 30, def: 31, spa: 31, spd: 30, spe: 31 }
      ]
    },
    {
      type: "はがね",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 31, spd: 30, spe: 31 },
        { hp: 31, atk: 30, def: 30, spa: 30, spd: 31, spe: 30 }
      ]
    },
    {
      type: "ほのお",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 30, spd: 31, spe: 30 },
        { hp: 31, atk: 30, def: 31, spa: 30, spd: 31, spe: 30 }
      ]
    },
    {
      type: "みず",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 30, spd: 31, spe: 30 },
        { hp: 31, atk: 30, def: 30, spa: 30, spd: 31, spe: 31 }
      ]
    },
    {
      type: "くさ",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 30, spd: 31, spe: 31 },
        { hp: 31, atk: 30, def: 31, spa: 30, spd: 31, spe: 31 },
        { hp: 30, atk: 31, def: 31, spa: 30, spd: 31, spe: 31 }
      ]
    },
    {
      type: "でんき",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 30, spd: 31, spe: 31 },
        { hp: 31, atk: 30, def: 30, spa: 31, spd: 31, spe: 30 },
        { hp: 30, atk: 31, def: 30, spa: 31, spd: 31, spe: 30 }
      ]
    },
    {
      type: "エスパー",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 31, spd: 31, spe: 30 },
        { hp: 31, atk: 30, def: 31, spa: 31, spd: 31, spe: 30 },
        { hp: 30, atk: 31, def: 31, spa: 31, spd: 31, spe: 30 }
      ]
    },
    {
      type: "こおり",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 30 },
        { hp: 31, atk: 30, def: 30, spa: 31, spd: 31, spe: 31 },
        { hp: 30, atk: 31, def: 30, spa: 31, spd: 31, spe: 31 }
      ]
    },
    {
      type: "ドラゴン",
      ivsList: [
        { hp: 31, atk: 31, def: 30, spa: 31, spd: 31, spe: 31 },
        { hp: 31, atk: 30, def: 31, spa: 31, spd: 31, spe: 31 },
        { hp: 30, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }
      ]
    },
    {
      type: "あく",
      ivsList: [
        { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 }
      ]
    }
  ];

  const type = document.getElementById("hidden-power-type").value;
  const hiddenPower = hiddenPowers.find(item => item.type === type);
  const ivsList = hiddenPower?.ivsList ?? [];

  const minAtk = document.getElementById("hidden-power-min-atk").checked;
  const minSpe = document.getElementById("hidden-power-min-spe").checked;

  if (minAtk) {
    for (ivs of ivsList) {
      ivs.atk = ivs.atk === 31 ? 3 : 2;
    }
  }
  if (minSpe) {
    for (ivs of ivsList) {
      ivs.spe = ivs.spe === 31 ? 3 : 2;
    }
  }

  const formattedIvs = ivsList.map(iv => Object.values(iv).join("-"));

  const hiddenPowerIvOption = document.getElementById("hidden-power-iv-option");
  hiddenPowerIvOption.replaceChildren();
  formattedIvs.forEach(ivs => {
    const option = document.createElement("option");
    option.value = ivs;
    option.textContent = ivs;
    hiddenPowerIvOption.appendChild(option);
  });
}

initializeApp();
calculateStats(document.getElementById("assistance1"));
updateAssistanceInfo(document.getElementById("assistance1"));
calculateStats(document.getElementById("assistance2"));
updateAssistanceInfo(document.getElementById("assistance2"));
updateResult();

function calculateDamage({ move, attacker, defender }) {
  function calculatePower() {
    // 威力値補正順
    // 1. 技威力(Smogonでは手助け→技威力だけど汎用処理の関係で。計算結果に影響しないはず)
    // 2. 手助け
    // 3. 攻撃側持ち物(ちからのハチマキ,ものしりメガネ,タイプ強化系)
    // 4. 充電
    // 5. 泥遊び
    // 6. 水遊び
    // 7. 攻撃側特性(とうそうしん＋,とうそうしん－,すてみ,てつのこぶし,もうか,しんりょく,げきりゅう,むしのしらせ,テクニシャン)
    // 8. 防御側特性(あついしぼう,たいねつ,かんそうはだ)
    const isPhysical = move.category === "ぶつり";
    let power = move.power;
    const log = [];
    log.push(`技威力: ${power}`);

    const moveModifierList = [
      {
        name: "手助け",
        multiplier: 1.5,
        condition: () => attacker.isHelpingHand
      },
      {
        name: "ちからのハチマキ",
        multiplier: 1.1,
        condition: () => attacker.heldItem === "ちからのハチマキ" && isPhysical
      },
      {
        name: "ものしりメガネ",
        multiplier: 1.1,
        condition: () => attacker.heldItem === "ものしりメガネ" && !isPhysical
      },
      {
        name: "タイプ強化系",
        multiplier: 1.2,
        condition: () => attacker.heldItem === "タイプ強化系"
      },
      {
        name: "充電",
        multiplier: 2,
        condition: () => attacker.isCharge && move.type === "でんき"
      },
      {
        name: "泥遊び",
        multiplier: 0.5,
        condition: () => defender.isMudSport && move.type === "でんき"
      },
      {
        name: "水遊び",
        multiplier: 0.5,
        condition: () => defender.isWaterSport && move.type === "ほのお"
      },
      {
        name: "とうそうしん＋",
        multiplier: 1.25,
        condition: () => attacker.ability === "とうそうしん＋"
      },
      {
        name: "とうそうしん－",
        multiplier: 0.75,
        condition: () => attacker.ability === "とうそうしん－"
      },
      {
        name: "すてみ",
        multiplier: 1.2,
        condition: () => {
          const recklessMoves = [
            "ウッドハンマー",
            "じごくぐるま",
            "すてみタックル",
            "とっしん",
            "とびげり",
            "とびひざげり",
            "フレアドライブ",
            "ブレイブバード",
            "ボルテッカー",
            "もろはのずつき"
          ];
          return attacker.ability === "すてみ" && recklessMoves.includes(move.name);
        }
      },
      {
        name: "てつのこぶし",
        multiplier: 1.2,
        condition: () => {
          const ironFistMoves = [
            "アームハンマー",
            "かみなりパンチ",
            "きあいパンチ",
            "コメットパンチ",
            "シャドーパンチ",
            "スカイアッパー",
            "ドレインパンチ",
            "ばくれつパンチ",
            "バレットパンチ",
            "ピヨピヨパンチ",
            "ほのおのパンチ",
            "マッハパンチ",
            "メガトンパンチ",
            "れいとうパンチ",
            "れんぞくパンチ"
          ];
          return attacker.ability === "てつのこぶし" && ironFistMoves.includes(move.name);
        }
      },
      {
        name: "もうか",
        multiplier: 1.5,
        condition: () => attacker.ability === "もうか" && move.type === "ほのお"
      },
      {
        name: "しんりょく",
        multiplier: 1.5,
        condition: () => attacker.ability === "しんりょく" && move.type === "くさ"
      },
      {
        name: "げきりゅう",
        multiplier: 1.5,
        condition: () => attacker.ability === "げきりゅう" && move.type === "みず"
      },
      {
        name: "むしのしらせ",
        multiplier: 1.5,
        condition: () => attacker.ability === "むしのしらせ" && move.type === "むし"
      },
      {
        name: "テクニシャン",
        multiplier: 1.5,
        condition: () => attacker.ability === "テクニシャン" && power <= 60
      },
      {
        name: "あついしぼう",
        multiplier: 0.5,
        condition: () => defender.ability === "あついしぼう" && (move.type === "ほのお" || move.type === "こおり")
      },
      {
        name: "たいねつ",
        multiplier: 0.5,
        condition: () => defender.ability === "たいねつ" && move.type === "ほのお"
      },
      {
        name: "かんそうはだ",
        multiplier: 1.25,
        condition: () => defender.ability === "かんそうはだ" && move.type === "ほのお"
      }
    ];

    for (const { name, multiplier, condition } of moveModifierList) {
      if (condition()) {
        power = Math.floor(power * multiplier);
        log.push(`${name}: *${formatMultiplier(multiplier)}`);
      }
    }

    return {
      basePower: move.power,
      log: log,
      power: power
    };
  }

  function calculateStatMultiplier(stage) {
    // 分子
    const numerator = stage > 0 ? 2 + stage : 2;
    // 分母
    const denominator = stage < 0 ? 2 - stage : 2;
    return numerator / denominator;
  }

  function calculateAttack() {
    // 攻撃値補正順
    // 1. ステータス
    // 2. ランク
    // 3. 攻撃側特性(ヨガパワー,ちからもち,フラワーギフト,こんじょう,はりきり,スロースタート,プラス,マイナス,サンパワー)
    // 4. 攻撃側持ち物(こだわりハチマキ,でんきだま,ふといホネ,こだわりメガネ,こころのしずく,しんかいのキバ)
    const isPhysical = move.category === "ぶつり";
    let normalAttack = attacker.atkSpa;
    let criticalAttack = normalAttack;
    const log = [];
    log.push(`${isPhysical ? "A" : "C"}: ${normalAttack}`);

    const attackModifierList = [
      {
        name: "ランク",
        normalMultiplier: calculateStatMultiplier(attacker.atkSpaStage),
        criticalMultiplier: calculateStatMultiplier(Math.max(0, attacker.atkSpaStage)),
        condition: () => attacker.atkSpaStage !== 0
      },
      {
        name: "ヨガパワー",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.ability === "ヨガパワー" && isPhysical
      },
      {
        name: "ちからもち",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.ability === "ちからもち" && isPhysical
      },
      {
        name: "フラワーギフト",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => (attacker.ability === "フラワーギフト" || attacker.isFlowerGift) && isPhysical
      },
      {
        name: "こんじょう",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.ability === "こんじょう" && isPhysical
      },
      {
        name: "はりきり",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.ability === "はりきり" && isPhysical
      },
      {
        name: "スロースタート",
        normalMultiplier: 0.5,
        criticalMultiplier: 0.5,
        condition: () => attacker.ability === "スロースタート" && isPhysical
      },
      {
        name: "プラス",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.ability === "プラス" && !isPhysical
      },
      {
        name: "マイナス",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.ability === "マイナス" && !isPhysical
      },
      {
        name: "サンパワー",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.ability === "サンパワー" && !isPhysical
      },
      {
        name: "こだわりハチマキ",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.heldItem === "こだわりハチマキ" && isPhysical
      },
      {
        name: "でんきだま",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.heldItem === "でんきだま" && attacker.name === "ピカチュウ"
      },
      {
        name: "ふといホネ",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.heldItem === "ふといホネ" && isPhysical && (attacker.name === "カラカラ" || attacker.name === "ガラガラ")
      },
      {
        name: "こだわりメガネ",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.heldItem === "こだわりメガネ" && !isPhysical
      },
      {
        name: "こころのしずく",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.heldItem === "こころのしずく" && !isPhysical && (attacker.name === "ラティオス" || attacker.name === "ラティアス")
      },
      {
        name: "しんかいのキバ",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.heldItem === "しんかいのキバ" && !isPhysical && attacker.name === "パールル"
      }
    ];

    for (const { name, normalMultiplier, criticalMultiplier, condition } of attackModifierList) {
      if (condition()) {
        normalAttack = Math.floor(normalAttack * normalMultiplier);
        criticalAttack = Math.floor(criticalAttack * criticalMultiplier);
        log.push(`${name}: *${formatMultiplier(normalMultiplier)}`);
      }
    }

    return {
      baseAttack: attacker.atkSpa,
      log: log,
      normalAttack: normalAttack,
      criticalAttack: criticalAttack
    };
  }

  function calculateDefense() {
    // 防御値補正順
    // 1. ステータス
    // 2. ランク
    // 3. 防御側特性(ふしぎなうろこ,フラワーギフト)
    // 4. 防御側持ち物(メタルパウダー,こころのしずく,しんかいのウロコ)
    // 5. 砂嵐
    // 6. 爆発技
    const isPhysical = move.category === "ぶつり";
    let normalDefense = isPhysical ? defender.def : defender.spd;
    let criticalDefense = normalDefense;
    const log = [];
    log.push(`${isPhysical ? "B" : "D"}: ${normalDefense}`);

    const defenseModifierList = [
      {
        name: "ランク",
        normalMultiplier: calculateStatMultiplier(isPhysical ? defender.defStage : defender.spdStage),
        criticalMultiplier: calculateStatMultiplier(Math.min(0, isPhysical ? defender.defStage : defender.spdStage)),
        condition: () => isPhysical ? defender.defStage !== 0 : defender.spdStage !== 0
      },
      {
        name: "ふしぎなうろこ",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => defender.ability === "ふしぎなうろこ" && isPhysical
      },
      {
        name: "フラワーギフト",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => (defender.ability === "フラワーギフト" || defender.isFlowerGift) && !isPhysical
      },
      {
        name: "メタルパウダー",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => defender.heldItem === "メタルパウダー" && isPhysical && defender.name === "メタモン"
      },
      {
        name: "こころのしずく",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => defender.heldItem === "こころのしずく" && !isPhysical && (defender.name === "ラティオス" || defender.name === "ラティアス")
      },
      {
        name: "しんかいのウロコ",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => defender.heldItem === "しんかいのウロコ" && !isPhysical && defender.name === "パールル"
      },
      {
        name: "砂嵐",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => defender.isSandstorm && !isPhysical && defender.types.includes("いわ")
      },
      {
        name: "爆発技",
        normalMultiplier: 0.5,
        criticalMultiplier: 0.5,
        condition: () => move.isExplosion && isPhysical
      }
    ];

    for (const { name, normalMultiplier, criticalMultiplier, condition } of defenseModifierList) {
      if (condition()) {
        normalDefense = Math.floor(normalDefense * normalMultiplier);
        criticalDefense = Math.floor(criticalDefense * criticalMultiplier);
        log.push(`${name}: *${formatMultiplier(normalMultiplier)}`);
      }
    }

    return {
      baseDefense: isPhysical ? defender.def : defender.spd,
      log: log,
      normalDefense: normalDefense,
      criticalDefense: criticalDefense
    };
  }

  function calculateBeforePlus2Modifier({ normalDamage, criticalDamage }) {
    // 補正1補正順
    // 1. 火傷
    // 2. 壁(シングル,ダブル)
    // 3. 範囲技
    // 4. 天候(天候＋,天候－)
    // 5. 貰い火
    const isPhysical = move.category === "ぶつり";
    const log = [];
    const beforePlus2ModifierList = [
      {
        name: "火傷",
        normalMultiplier: 0.5,
        criticalMultiplier: 0.5,
        condition: () => attacker.isBurned && isPhysical
      },
      {
        name: "壁(シングル)",
        normalMultiplier: 0.5,
        criticalMultiplier: 1,
        condition: () => defender.isWallSingle
      },
      {
        name: "壁(ダブル)",
        normalMultiplier: 2 / 3,
        criticalMultiplier: 1,
        condition: () => defender.isWallDouble
      },
      {
        name: "範囲技",
        normalMultiplier: 0.75,
        criticalMultiplier: 0.75,
        condition: () => move.isRanged
      },
      {
        name: "天候＋",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.isWeatherPlus && (move.type === "ほのお" || move.type === "みず")
      },
      {
        name: "天候－",
        normalMultiplier: 0.5,
        criticalMultiplier: 0.5,
        condition: () => attacker.isWeatherMinus && (move.type === "ほのお" || move.type === "みず")
      },
      {
        name: "貰い火",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => (attacker.ability === "もらいび" || attacker.isFlashFire) && move.type === "ほのお"
      }
    ];

    for (const { name, normalMultiplier, criticalMultiplier, condition } of beforePlus2ModifierList) {
      if (condition()) {
        normalDamage = Math.floor(normalDamage * normalMultiplier);
        criticalDamage = Math.floor(criticalDamage * criticalMultiplier);
        log.push(`${name}: *${formatMultiplier(normalMultiplier)}`);
      }
    }

    return {
      log: log,
      normalDamage: normalDamage,
      criticalDamage: criticalDamage
    };
  }

  function calculateAfterPlus2Modifier({ normalDamage, criticalDamage }) {
    // 補正2補正順
    // 0. 急所(非スナイパー,スナイパー)
    // 1. いのちのたま
    // 2. メトロノーム
    // 3. 先取り
    const log = [];
    const afterPlus2ModifierList = [
      {
        name: "急所",
        normalMultiplier: 1,
        criticalMultiplier: 2,
        condition: () => attacker.ability !== "スナイパー"
      },
      {
        name: "急所(スナイパー)",
        normalMultiplier: 1,
        criticalMultiplier: 3,
        condition: () => attacker.ability === "スナイパー"
      },
      {
        name: "いのちのたま",
        normalMultiplier: 1.3,
        criticalMultiplier: 1.3,
        condition: () => attacker.heldItem === "いのちのたま"
      },
      {
        name: "メトロノーム2",
        normalMultiplier: 1.1,
        criticalMultiplier: 1.1,
        condition: () => attacker.heldItem === "メトロノーム2"
      },
      {
        name: "メトロノーム3",
        normalMultiplier: 1.2,
        criticalMultiplier: 1.2,
        condition: () => attacker.heldItem === "メトロノーム3"
      },
      {
        name: "メトロノーム4",
        normalMultiplier: 1.3,
        criticalMultiplier: 1.3,
        condition: () => attacker.heldItem === "メトロノーム4"
      },
      {
        name: "メトロノーム5",
        normalMultiplier: 1.4,
        criticalMultiplier: 1.4,
        condition: () => attacker.heldItem === "メトロノーム5"
      },
      {
        name: "メトロノーム6",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.heldItem === "メトロノーム6"
      },
      {
        name: "メトロノーム7",
        normalMultiplier: 1.6,
        criticalMultiplier: 1.6,
        condition: () => attacker.heldItem === "メトロノーム7"
      },
      {
        name: "メトロノーム8",
        normalMultiplier: 1.7,
        criticalMultiplier: 1.7,
        condition: () => attacker.heldItem === "メトロノーム8"
      },
      {
        name: "メトロノーム9",
        normalMultiplier: 1.8,
        criticalMultiplier: 1.8,
        condition: () => attacker.heldItem === "メトロノーム9"
      },
      {
        name: "メトロノーム10",
        normalMultiplier: 1.9,
        criticalMultiplier: 1.8,
        condition: () => attacker.heldItem === "メトロノーム10"
      },
      {
        name: "メトロノーム11",
        normalMultiplier: 2,
        criticalMultiplier: 2,
        condition: () => attacker.heldItem === "メトロノーム11"
      },
      {
        name: "先取り",
        normalMultiplier: 1.5,
        criticalMultiplier: 1.5,
        condition: () => attacker.isMeFirst
      }
    ];

    for (const { name, normalMultiplier, criticalMultiplier, condition } of afterPlus2ModifierList) {
      if (condition()) {
        normalDamage = Math.floor(normalDamage * normalMultiplier);
        criticalDamage = Math.floor(criticalDamage * criticalMultiplier);
        if (name !== "急所") {
          log.push(`${name}: *${formatMultiplier(criticalMultiplier)}`);
        }
      }
    }

    return {
      log: log,
      normalDamage: normalDamage,
      criticalDamage: criticalDamage
    };
  }

  function calculateAfrerRandModifier(normalDamageArray, criticalDamageArray) {
    // 補正3補正順
    // 0-1. タイプ一致(非適応力,適応力)
    // 0-2. タイプ相性(1,2)
    // 1. ハードロック,フィルター
    // 2. たつじんのおび
    // 3. いろめがね
    // 4. 半減木の実,ホズのみ
    const log = [];
    const afterRandMmodifierList = [
      {
        name: "タイプ一致",
        multiplier: 1.5,
        condition: () => move.isStab && attacker.ability !== "てきおうりょく"
      },
      {
        name: "タイプ一致(適応力)",
        multiplier: 2,
        condition: () => move.isStab && attacker.ability === "てきおうりょく"
      },
      {
        name: "タイプ相性1",
        multiplier: move.typeEffects[0],
        condition: () => true
      },
      {
        name: "タイプ相性2",
        multiplier: move.typeEffects[1],
        condition: () => true
      },
      {
        name: "ハードロック",
        multiplier: 0.75,
        condition: () => defender.ability === "ハードロック" && move.typeEffects[0] * move.typeEffects[1] > 1
      },
      {
        name: "フィルター",
        multiplier: 0.75,
        condition: () => defender.ability === "フィルター" && move.typeEffects[0] * move.typeEffects[1] > 1
      },
      {
        name: "たつじんのおび",
        multiplier: 1.2,
        condition: () => defender.heldItem === "たつじんのおび" && move.typeEffects[0] * move.typeEffects[1] > 1
      },
      {
        name: "いろめがね",
        multiplier: 2,
        condition: () => attacker.ability === "いろめがね" && move.typeEffects[0] * move.typeEffects[1] < 1
      },
      {
        name: "半減木の実",
        multiplier: 0.5,
        condition: () => defender.heldItem === "半減木の実" && move.typeEffects[0] * move.typeEffects[1] < 1
      },
      {
        name: "ホズのみ",
        multiplier: 0.5,
        condition: () => defender.heldItem === "ホズのみ" && move.type === "ノーマル"
      }
    ];

    for (const { name, multiplier, condition } of afterRandMmodifierList) {
      if (condition()) {
        for (const normalDamage of normalDamageArray) {
          normalDamage.damage = Math.floor(normalDamage.damage * multiplier);
        }
        for (const criticalDamage of criticalDamageArray) {
          criticalDamage.damage = Math.floor(criticalDamage.damage * multiplier);
        }
        log.push(`${name}: *${formatMultiplier(multiplier)}`);
      }
    }

    return {
      log: log,
      normalDamageArray: normalDamageArray,
      criticalDamageArray: criticalDamageArray
    };
  }

  const resultPower = calculatePower();
  const resultAttack = calculateAttack();
  const resultDefense = calculateDefense();

  let normalDamage = Math.floor(attacker.level * 2 / 5) + 2;
  normalDamage = Math.floor(normalDamage * resultPower.power * resultAttack.normalAttack / 50);
  normalDamage = Math.floor(normalDamage / resultDefense.normalDefense);

  let criticalDamage = Math.floor(attacker.level * 2 / 5) + 2;
  criticalDamage = Math.floor(criticalDamage * resultPower.power * resultAttack.criticalAttack / 50);
  criticalDamage = Math.floor(criticalDamage / resultDefense.criticalDefense);

  const resultBeforePlus2Modifier = calculateBeforePlus2Modifier({ normalDamage, criticalDamage });
  normalDamage = resultBeforePlus2Modifier.normalDamage;
  criticalDamage = resultBeforePlus2Modifier.criticalDamage;

  normalDamage += 2;
  criticalDamage += 2;

  const resultAfterPlus2Modifier = calculateAfterPlus2Modifier({ normalDamage, criticalDamage });
  normalDamage = resultAfterPlus2Modifier.normalDamage;
  criticalDamage = resultAfterPlus2Modifier.criticalDamage;

  const miss = {
    damage: 0,
    prob: (100 - move.accuracy) / 100
  };

  const criticalProbArray = [
    { stage: -1, prob: 0 },
    { stage: 0, prob: 1 / 16 },
    { stage: 1, prob: 1 / 8 },
    { stage: 2, prob: 1 / 4 },
    { stage: 3, prob: 1 / 3 },
    { stage: 4, prob: 1 / 2 },
    { stage: 5, prob: 1 }
  ];
  const criticalProb = criticalProbArray.find(item => item.stage === attacker.criticalStage)?.prob;

  const rands = Array.from({ length: 16 }, (_, i) => 85 + i);

  const evenWeights = Array(16).fill(1);
  const unevenWeights = [3, 2, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 1];
  const evenDistributiton = document.getElementById("even-distribution");
  const weights = evenDistributiton.checked ? evenWeights : unevenWeights;
  const weightSum = weights.reduce((sum, value) => sum + value, 0);

  let normalDamages = rands.map((rand, i) => ({
    damage: Math.floor(normalDamage * rand / 100),
    prob: (1 - miss.prob) * (1 - criticalProb) * weights[i] / weightSum
  }));
  let criticalDamages = rands.map((rand, i) => ({
    damage: Math.floor(criticalDamage * rand / 100),
    prob: (1 - miss.prob) * criticalProb * weights[i] / weightSum
  }));

  const resultAfterRandModifier = calculateAfrerRandModifier(normalDamages, criticalDamages);
  normalDamages = resultAfterRandModifier.normalDamageArray;
  criticalDamages = resultAfterRandModifier.criticalDamageArray;

  const calculated = {
    power: resultPower.power,
    attack: resultAttack.normalAttack,
    defense: resultDefense.normalDefense
  };
  const log = {
    power: resultPower.log,
    attack: resultAttack.log,
    defense: resultDefense.log,
    beforePlus2: resultBeforePlus2Modifier.log,
    afterPlus2: resultAfterPlus2Modifier.log,
    afterRand: resultAfterRandModifier.log
  };
  const damage = {
    miss: miss,
    normal: normalDamages,
    critical: criticalDamages
  }

  return {
    calculated: calculated,
    log: log,
    damage: damage
  };
}

function getCalculationInputs() {
  const attackTabGroup = document.querySelector("#attack-tab-group");
  const activeAttackTab = attackTabGroup.querySelector(".tab-content.active");
  const defenseTabGroup = document.querySelector("#defense-tab-group");
  const activeDefenseTab = defenseTabGroup.querySelector(".tab-content.active");

  const move = {
    name: activeAttackTab.querySelector(".move-input").value ?? "(なし)",
    power: activeAttackTab.querySelector(".move-power").valueAsNumber,
    type: activeAttackTab.querySelector(".move-type").value,
    typeEffects: [...activeAttackTab.querySelectorAll(".move-type-effect")].map(select => Number(select.value)),
    category: activeAttackTab.querySelector(".move-category:checked").value,
    accuracy: activeAttackTab.querySelector(".apply-move-accuracy").checked
      ? activeAttackTab.querySelector(".move-accuracy").valueAsNumber
      : 100,
    isStab: activeAttackTab.querySelector(".move-stab").checked,
    isRanged: activeAttackTab.querySelector(".apply-move-ranged").checked
      ? activeAttackTab.querySelector(".move-ranged").checked
      : false,
    isExplosion: activeAttackTab.querySelector(".move-explosion").checked
  };

  const attacker = {
    name: activeAttackTab.querySelector(".attacker-pokemon-input").value ?? "(なし)",
    atkSpa: activeAttackTab.querySelector(".attacker-ac-stat").valueAsNumber,
    atkSpaStage: activeAttackTab.querySelector(".attacker-ac-stage").valueAsNumber,
    criticalStage: activeAttackTab.querySelector(".attacker-apply-critical-stage").checked
      ? activeAttackTab.querySelector(".attacker-critical-stage").valueAsNumber
      : -1,
    level: activeAttackTab.querySelector(".attacker-level").value,
    ability: activeAttackTab.querySelector(".attacker-ability-input").value ?? "(なし)",
    heldItem: activeAttackTab.querySelector(".attacker-held-item-input").value ?? "(なし)",
    isMeFirst: activeAttackTab.querySelector(".attacker-me-first").checked,
    isCharge: activeAttackTab.querySelector(".attacker-charge").checked,
    isHelpingHand: activeAttackTab.querySelector(".attacker-helping-hand").checked,
    isFlowerGift: activeAttackTab.querySelector(".attacker-flower-gift").checked,
    isFlashFire: activeAttackTab.querySelector(".attacker-flash-fire").checked,
    isBurned: activeAttackTab.querySelector(".attacker-burned").checked,
    isWeatherPlus: activeAttackTab.querySelector(".attacker-weather-plus").checked,
    isWeatherMinus: activeAttackTab.querySelector(".attacker-weather-minus").checked
  };

  const defender = {
    name: activeDefenseTab.querySelector(".defender-pokemon-input").value ?? "(なし)",
    hp: activeDefenseTab.querySelector(".defender-hp-stat").valueAsNumber,
    def: activeDefenseTab.querySelector(".defender-def-stat").valueAsNumber,
    spd: activeDefenseTab.querySelector(".defender-spd-stat").valueAsNumber,
    defStage: activeDefenseTab.querySelector(".defender-def-stage").valueAsNumber,
    spdStage: activeDefenseTab.querySelector(".defender-spd-stage").valueAsNumber,
    ability: activeDefenseTab.querySelector(".defender-ability-input").value,
    heldItem: activeDefenseTab.querySelector(".defender-held-item-input").value,
    isSandstorm: activeDefenseTab.querySelector(".defender-sandstorm").checked,
    isMudSport: activeDefenseTab.querySelector(".defender-mud-sport").checked,
    isWaterSport: activeDefenseTab.querySelector(".defender-water-sport").checked,
    isFlowerGift: activeDefenseTab.querySelector(".defender-flower-gift").checked,
    isWallSingle: activeDefenseTab.querySelector(".defender-wall-single").checked,
    isWallDouble: activeDefenseTab.querySelector(".defender-wall-double").checked
  };

  return { move, attacker, defender };
}

function updateResult() {
  const { move, attacker, defender } = getCalculationInputs();
  const { calculated, log, damage } = calculateDamage({ move, attacker, defender });

  function updateDamageInfo() {
    const attackSideActiveTabName = document.querySelector('#attack-tab-group .tab-button.active').dataset.tab;
    const attackTarget = attackSideActiveTabName === "attack-side1" ? "α" : "β";
    const defenseSideActiveTabName = document.querySelector('#defense-tab-group .tab-button.active').dataset.tab;
    const defenseTarget = defenseSideActiveTabName === "defense-side1" ? "I" : "II";
    const moveTarget = move.category === "ぶつり" ? "B" : "D";

    const resultTarget = document.getElementById("result-target");
    resultTarget.textContent = `攻撃側${attackTarget} → 防御側${defenseTarget}-${moveTarget}`;

    const minDamage = damage.normal[0].damage;
    const maxDamage = damage.normal.at(-1).damage;

    const damageSpan = document.getElementById("damage");
    damageSpan.textContent = `${minDamage}~${maxDamage}`;

    const minDamageRatio = minDamage / defender.hp;
    const maxDamageRatio = maxDamage / defender.hp;

    const damageRatioSpan = document.getElementById("damage-ratio");
    damageRatioSpan.textContent = `${formatPercent(minDamageRatio)}~${formatPercent(maxDamageRatio)}`;

    const minHitsToKnockOut = maxDamage === 0 ? Infinity : Math.ceil(defender.hp / maxDamage);
    const maxHitsToKnockOut = minDamage === 0 ? Infinity : Math.ceil(defender.hp / minDamage);
    const hitsToKcockOut = document.getElementById("hits-to-knock-out");
    hitsToKcockOut.textContent = `${minHitsToKnockOut === maxHitsToKnockOut ? "確定" : "乱数"}${minHitsToKnockOut}発`;


    const minCriticalDamage = damage.critical[0].damage;
    const maxCriticalDamage = damage.critical.at(-1).damage;

    const criticalDamageSpan = document.getElementById("critical-damage");
    criticalDamageSpan.textContent = `${minCriticalDamage}~${maxCriticalDamage}`;

    const minCriticalDamageRatio = minCriticalDamage / defender.hp;
    const maxCriticalDamageRatio = maxCriticalDamage / defender.hp;

    const criticalDamageRatioSpan = document.getElementById("critical-damage-ratio");
    criticalDamageRatioSpan.textContent = `${formatPercent(minCriticalDamageRatio)}~${formatPercent(maxCriticalDamageRatio)}`;


    const damageProbs = [
      damage.miss,
      ...damage.normal,
      ...damage.critical
    ];
    const expectedValue = damageProbs.reduce((sum, item) => sum + item.damage * item.prob, 0);
    const expectedValueRatio = expectedValue / defender.hp;

    const expectedValueDamageSpan = document.getElementById("expected-value-damage");
    expectedValueDamageSpan.textContent = `${Math.round(expectedValue * 100) / 100} (${formatPercent(expectedValueRatio)})`;
  }

  function updateHpBar() {
    const bar = document.getElementById("hp-bar-fill");

    const minDamage = damage.normal[0].damage;
    const maxDamage = damage.normal.at(-1).damage;

    const minHp = Math.max(0, defender.hp - maxDamage);
    const maxHp = Math.max(0, defender.hp - minDamage);

    const greenEnd = minHp / defender.hp * 100;
    const darkGreenEnd = maxHp / defender.hp * 100;

    bar.style.background = `linear-gradient(
        to right,
        #36B84A 0%,
        #36B84A ${greenEnd}%,
        #087A24 ${greenEnd}%,
        #087A24 ${darkGreenEnd}%,
        white ${darkGreenEnd}%,
        white 100%
    )`;
  }

  function updateLegend() {
    const powerLegend = document.getElementById("power-legend");
    powerLegend.textContent = calculated.power;

    const powerModifiers = document.getElementById("power-modifiers");
    powerModifiers.replaceChildren();
    log.power.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      powerModifiers.append(div);
    });

    const attackLegend = document.getElementById("attack-legend");
    attackLegend.textContent = calculated.attack;

    const attackModifiers = document.getElementById("attack-modifiers");
    attackModifiers.replaceChildren();
    log.attack.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      attackModifiers.append(div);
    });

    const defenseLegend = document.getElementById("defense-legend");
    defenseLegend.textContent = calculated.defense;

    const defenseModifiers = document.getElementById("defense-modifiers");
    defenseModifiers.replaceChildren();
    log.defense.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      defenseModifiers.append(div);
    });

    const beforePlus2Modifiers = document.getElementById("moddifier1-modifiers");
    beforePlus2Modifiers.replaceChildren();
    log.beforePlus2.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      beforePlus2Modifiers.append(div);
    });

    const afterPlus2Modifiers = document.getElementById("moddifier2-modifiers");
    afterPlus2Modifiers.replaceChildren();
    log.afterPlus2.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      afterPlus2Modifiers.append(div);
    });

    const afterRandModifiers = document.getElementById("moddifier3-modifiers");
    afterRandModifiers.replaceChildren();
    log.afterRand.forEach(item => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = item;
      div.append(span);
      afterRandModifiers.append(div);
    });
  }

  function updateDamageTable() {
    const table = document.getElementById("raw-damage-table");
    const tbody = table.querySelector("tbody");
    tbody.replaceChildren();

    if (damage.miss.prob !== 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${damage.miss.damage}</td>
      <td>${formatPercent(damage.miss.prob)}</td>
      <td></td>
      <td></td>
    `;
      tbody.appendChild(tr);
    }

    damage.normal.forEach((normal, i) => {
      const critical = damage.critical[i];
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${normal.damage}</td>
      <td>${formatPercent(normal.prob)}</td>
      <td>${critical.damage}</td>
      <td>${formatPercent(critical.prob)}</td>
    `;
      tbody.appendChild(tr);
    });
  }

  function updateVicinity() {
    function calculateVicinities(side = "attacker") {
      const minStat = 1;
      const maxStat = 999;
      const vicinityWidth = 4;

      const isAttacker = side === "attacker";

      // 変化させる能力値と表示名を決定
      const statKey = isAttacker
        ? "atkSpa"
        : move.category === "ぶつり" ? "def" : "spd";

      const target = isAttacker ? attacker : defender;
      const currentStat = target[statKey];

      function getDamages(stat) {
        const adjustedTarget = {
          ...target,
          [statKey]: stat
        };

        return calculateDamage({
          move,
          attacker: isAttacker ? adjustedTarget : attacker,
          defender: isAttacker ? defender : adjustedTarget
        }).damage.normal.map(item => item.damage);
      }

      function isArrayEqual(a, b) {
        return a.length === b.length
          && a.every((value, index) => value === b[index]);
      }

      function calculateVicinity({ startStat, direction }) {
        const damages = getDamages(startStat);

        let min = startStat;
        let max = startStat;
        let currentStat = startStat;

        while (true) {
          const nextStat = currentStat + direction;

          if (nextStat < minStat || nextStat > maxStat) {
            break;
          }

          if (!isArrayEqual(damages, getDamages(nextStat))) {
            break;
          }

          currentStat = nextStat;

          if (direction > 0) {
            max = currentStat;
          } else {
            min = currentStat;
          }
        }

        return { min, max, damages };
      }

      // 現在値を中心とした範囲
      const plusCenter = calculateVicinity({
        startStat: currentStat,
        direction: 1
      });

      const minusCenter = calculateVicinity({
        startStat: currentStat,
        direction: -1
      });

      const center = {
        min: minusCenter.min,
        max: plusCenter.max,
        damages: plusCenter.damages
      };

      const vicinities = [center];

      // プラス方向
      let nextStat = center.max + 1;

      for (let i = 0; i < vicinityWidth && nextStat <= maxStat; i++) {
        const vicinity = calculateVicinity({
          startStat: nextStat,
          direction: 1
        });

        vicinities.push(vicinity);
        nextStat = vicinity.max + 1;
      }

      // マイナス方向
      nextStat = center.min - 1;

      for (let i = 0; i < vicinityWidth && nextStat >= minStat; i++) {
        const vicinity = calculateVicinity({
          startStat: nextStat,
          direction: -1
        });

        vicinities.unshift(vicinity);
        nextStat = vicinity.min - 1;
      }

      return vicinities;
    }

    function calculateHBDVicinities() {
      const minStat = 1;
      const maxStat = 999;
      const vicinityWidth = 4;

      const defSpd = move.category === "ぶつり" ? defender.def : defender.spd;
      const statKey = move.category === "ぶつり" ? "def" : "spd";

      const centerDamages = calculateDamage({
        move,
        attacker,
        defender,
      }).damage.normal.map(item => item.damage);
      const center = { hp: defender.hp, defSpd: defSpd, damages: centerDamages };
      const vicinities = [center];

      for (let i = 1; i <= vicinityWidth && defender.hp - i >= minStat && defSpd + i <= maxStat; i++) {
        const nextHp = defender.hp - i;
        const nextDefSpd = defSpd + i;

        const damages = calculateDamage({
          move,
          attacker,
          defender: {
            ...defender,
            hp: nextHp,
            [statKey]: nextDefSpd
          }
        }).damage.normal.map(item => item.damage);

        const vicinity = { hp: nextHp, defSpd: nextDefSpd, damages: damages };
        vicinities.push(vicinity);
      }

      for (let i = 1; i <= vicinityWidth && defender.hp + i <= maxStat && defSpd - i >= minStat; i++) {
        const nextHp = defender.hp + i;
        const nextDefSpd = defSpd - i;

        const damages = calculateDamage({
          move,
          attacker,
          defender: {
            ...defender,
            hp: nextHp,
            [statKey]: nextDefSpd
          }
        }).damage.normal.map(item => item.damage);

        const vicinity = { hp: nextHp, defSpd: nextDefSpd, damages: damages };
        vicinities.unshift(vicinity);
      }

      return vicinities;
    }

    // テーブル描画
    const acVicinityTab = document.getElementById("ac-vicinity-tab");
    acVicinityTab.textContent = `${move.category === "ぶつり" ? "A" : "C"}周囲`;

    const acVicinityTable = document.getElementById("ac-vicinity-table");
    const acVicinityTbody = acVicinityTable.querySelector("tbody");
    acVicinityTbody.replaceChildren();

    const acVicinityTh = document.getElementById("ac-vicinity-table-th");
    acVicinityTh.textContent = `${move.category === "ぶつり" ? "A" : "C"}`;

    const acVicinities = calculateVicinities("attacker");
    for (const vicinity of acVicinities) {
      const tr = document.createElement("tr");

      const rangeTd = document.createElement("td");
      rangeTd.textContent = `${vicinity.min}~${vicinity.max}`;
      tr.appendChild(rangeTd);

      for (const damage of vicinity.damages) {
        const td = document.createElement("td");
        td.textContent = damage;

        const mod = damage % 10;

        if (damage >= defender.hp) {
          td.classList.add("damage-over");
        } else {
          td.classList.add("damage-under");
        }

        td.classList.add(`damage-${mod}`);

        tr.appendChild(td);
      }

      acVicinityTbody.appendChild(tr);
    }

    const bdVicinityTab = document.getElementById("bd-vicinity-tab");
    bdVicinityTab.textContent = `${move.category === "ぶつり" ? "B" : "D"}周囲`;

    const bdVicinityTable = document.getElementById("bd-vicinity-table");
    const bdVicinityTbody = bdVicinityTable.querySelector("tbody");
    bdVicinityTbody.replaceChildren();

    const bdVicinityTh = document.getElementById("bd-vicinity-table-th");
    bdVicinityTh.textContent = `${move.category === "ぶつり" ? "B" : "D"}`;

    const bdVicinities = calculateVicinities("defender");
    for (const vicinity of bdVicinities) {
      const tr = document.createElement("tr");

      const rangeTd = document.createElement("td");
      rangeTd.textContent = `${vicinity.min === vicinity.max ? vicinity.min : `${vicinity.min}~${vicinity.max}`}`;
      tr.appendChild(rangeTd);

      for (const damage of vicinity.damages) {
        const td = document.createElement("td");
        td.textContent = damage;

        const mod = damage % 10;

        if (damage >= defender.hp) {
          td.classList.add("damage-over");
        } else {
          td.classList.add("damage-under");
        }

        td.classList.add(`damage-${mod}`);

        tr.appendChild(td);
      }

      bdVicinityTbody.appendChild(tr);
    }

    const hbdVicinityTab = document.getElementById("hbd-vicinity-tab");
    hbdVicinityTab.textContent = `H${move.category === "ぶつり" ? "B" : "D"}周囲`;

    const hbdVicinityTable = document.getElementById("hbd-vicinity-table");
    const hbdVicinityTbody = hbdVicinityTable.querySelector("tbody");
    hbdVicinityTbody.replaceChildren();

    const hbdVicinityTh = document.getElementById("hbd-vicinity-table-th");
    hbdVicinityTh.textContent = `${move.category === "ぶつり" ? "B" : "D"}`;

    const hbdVicinities = calculateHBDVicinities();
    for (const vicinity of hbdVicinities) {
      const tr = document.createElement("tr");
      const hTd = document.createElement("td");
      hTd.textContent = vicinity.hp;
      tr.appendChild(hTd);

      const bdTd = document.createElement("td");
      bdTd.textContent = vicinity.defSpd;
      tr.appendChild(bdTd);

      for (const damage of vicinity.damages) {
        const td = document.createElement("td");
        td.textContent = damage;

        const mod = damage % 10;

        if (damage >= vicinity.hp) {
          td.classList.add("damage-over");
        } else {
          td.classList.add("damage-under");
        }

        td.classList.add(`damage-${mod}`);

        tr.appendChild(td);
      }

      hbdVicinityTbody.appendChild(tr);
    }
  }

  updateDamageInfo();
  updateHpBar();
  updateLegend();
  updateDamageTable();
  updateVicinity();
}

function updateDamageProbTable() {
  const hasSitrusBerry = damageStates[0]?.heldItem === "オボンのみ";

  const damageProbTable = document.getElementById("damage-prob-table");
  const damageProbTbody = damageProbTable.querySelector("tbody");
  const damageProbThead = damageProbTable.querySelector("thead");
  damageProbTbody.replaceChildren();

  const damageProbHeaderRow = damageProbThead.querySelector("tr");
  damageProbHeaderRow.replaceChildren();

  const damageHeader = document.createElement("th");
  damageHeader.textContent = "ダメージ";
  damageProbHeaderRow.appendChild(damageHeader);

  if (hasSitrusBerry) {
    const heldItemHeader = document.createElement("th");
    heldItemHeader.textContent = "オボン";
    damageProbHeaderRow.appendChild(heldItemHeader);
  }

  const damageProbProbHeader = document.createElement("th");
  damageProbProbHeader.textContent = "確率";
  damageProbHeaderRow.appendChild(damageProbProbHeader);

  const damageProbMap = new Map();

  for (const item of damageStates) {
    const key = `${item.damage},${item.usedHeldItem}`;

    if (damageProbMap.has(key)) {
      damageProbMap.get(key).prob += item.prob;
    } else {
      damageProbMap.set(key, {
        damage: item.damage,
        usedHeldItem: item.usedHeldItem,
        prob: item.prob
      });
    }
  }

  const damageProbList = Array.from(damageProbMap.values()).sort(
    (a, b) => a.damage - b.damage
  );

  for (const item of damageProbList) {
    const tr = document.createElement("tr");

    const damageTd = document.createElement("td");
    damageTd.textContent = item.damage;
    tr.appendChild(damageTd);

    if (hasSitrusBerry) {
      const heldItemTd = document.createElement("td");
      heldItemTd.textContent = item.usedHeldItem ? "消費" : "保持";
      tr.appendChild(heldItemTd);
    }

    const probTd = document.createElement("td");
    probTd.textContent = formatPercent(item.prob);
    tr.appendChild(probTd);

    damageProbTbody.appendChild(tr);
  }

  const hpProbTable = document.getElementById("hp-prob-table");
  const hpProbTbody = hpProbTable.querySelector("tbody");
  const hpProbThead = hpProbTable.querySelector("thead");
  hpProbTbody.replaceChildren();

  const hpProbHeaderRow = hpProbThead.querySelector("tr");
  hpProbHeaderRow.replaceChildren();

  const hpHeader = document.createElement("th");
  hpHeader.textContent = "HP";
  hpProbHeaderRow.appendChild(hpHeader);

  if (hasSitrusBerry) {
    const heldItemHeader = document.createElement("th");
    heldItemHeader.textContent = "オボン";
    hpProbHeaderRow.appendChild(heldItemHeader);
  }

  const hpPrpbProbHeader = document.createElement("th");
  hpPrpbProbHeader.textContent = "確率";
  hpProbHeaderRow.appendChild(hpPrpbProbHeader);

  const hpProbMap = new Map();

  for (const item of damageStates) {
    const key = `${item.currentHp},${item.usedHeldItem}`;

    if (hpProbMap.has(key)) {
      hpProbMap.get(key).prob += item.prob;
    } else {
      hpProbMap.set(key, {
        currentHp: item.currentHp,
        usedHeldItem: item.usedHeldItem,
        prob: item.prob
      });
    }
  }

  const hpProbList = Array.from(hpProbMap.values()).sort(
    (a, b) => a.currentHp - b.currentHp
  );

  for (const item of hpProbList) {
    const tr = document.createElement("tr");

    const currentHpTd = document.createElement("td");
    currentHpTd.textContent = item.currentHp;
    tr.appendChild(currentHpTd);

    if (hasSitrusBerry) {
      const heldItemTd = document.createElement("td");

      if (item.usedHeldItem) {
        heldItemTd.classList.add("used-held-item");
        heldItemTd.textContent = "消費";
      } else {
        heldItemTd.textContent = "保持";
      }

      tr.appendChild(heldItemTd);
    }

    const probTd = document.createElement("td");
    probTd.textContent = formatPercent(item.prob);
    tr.appendChild(probTd);

    hpProbTbody.appendChild(tr);
  }
}

function updateDamageLog() {
  const damageLogTextarea = document.getElementById("damage-log");
  damageLogTextarea.value = damageLogs.join("\n");

  const { move, attacker, defender } = getCalculationInputs();

  const isPhysical = move.category === "ぶつり";
  const defenderText = `H${defender.hp}-${isPhysical ? `B${defender.def}` : `D${defender.spd}`}`;

  const minDamage = Math.min(...damageStates.map(state => state.damage));
  const maxDamage = Math.max(...damageStates.map(state => state.damage));

  const knockOutProb = damageStates
    .filter(state => state.currentHp === 0)
    .reduce((sum, state) => sum + state.prob, 0);
  const knockOutText = knockOutProb === 1 ? "確定" : formatPercent(knockOutProb);
  const surviveText = knockOutProb === 0 ? "確定" : formatPercent(1 - knockOutProb);

  const forAttackCopy = document.getElementById("for-attack-copy");
  forAttackCopy.value = damageStates.length === 0 ? "" : `${defenderText}を${damageLogs.join("＋")}で${knockOutText}で倒す(${minDamage}~${maxDamage})`;

  const forDefenseCopy = document.getElementById("for-defense-copy");
  forDefenseCopy.value = damageStates.length === 0 ? "" : `${damageLogs.join("＋")}を${surviveText}で耐える(${minDamage}~${maxDamage})`;

  console.log(damageStates);
}

function addDamage(damageProbs, log) {
  const mergedInputDamageProbs = Array.from(
    damageProbs.reduce((map, item) => {
      if (item.prob === 0) {
        return map;
      }
      map.set(
        item.damage,
        (map.get(item.damage) ?? 0) + item.prob
      );
      return map;
    }, new Map()),
    ([damage, prob]) => ({ damage, prob })
  );

  function calculateDamageState(damageStates, damageProbs) {
    const result = new Map();

    if (damageStates.length === 0) {
      const defender = getCalculationInputs().defender;
      damageStates = [
        {
          maxHp: defender.hp,
          damage: 0,
          currentHp: defender.hp,
          prob: 1,
          heldItem: defender.heldItem,
          usedHeldItem: false
        }
      ];
    }

    for (const state of damageStates) {
      for (const input of damageProbs) {
        const newState = {
          maxHp: state.maxHp,
          damage: Math.max(0, state.damage + input.damage),
          prob: state.prob * input.prob,
          currentHp: clamp(state.currentHp - input.damage, 0, state.maxHp),
          heldItem: state.heldItem,
          usedHeldItem: state.usedHeldItem
        };

        if (
          newState.heldItem === "オボンのみ"
          && newState.currentHp <= Math.floor(newState.maxHp / 2)
          && newState.currentHp !== 0
          && !newState.usedHeldItem
        ) {
          const heal = Math.floor(newState.maxHp / 4)
          const actualHeal = Math.min(heal, newState.maxHp - newState.currentHp);
          newState.damage -= actualHeal;
          newState.currentHp += actualHeal;
          newState.usedHeldItem = true;
        }

        const key = JSON.stringify([
          newState.maxHp,
          newState.damage,
          newState.currentHp,
          newState.heldItem,
          newState.usedHeldItem
        ]);

        // 既に同じ状態があれば確率を加算
        if (result.has(key)) {
          result.get(key).prob += newState.prob;
        } else {
          result.set(key, newState);
        }
      }
    }

    return Array.from(result.values());
  }

  damageStates = calculateDamageState(damageStates, mergedInputDamageProbs);
  damageLogs.push(log);

  saveHistory();

  updateDamageProbTable();
  updateDamageLog();
}

function clearDamage() {
  damageStates = [];
  damageLogs = [];
  initializeHistory();
  updateDamageProbTable();
  updateDamageLog();
}


function saveHistory() {
  // Undo後に新しい操作をした場合、未来の履歴を削除する
  damageHistory = damageHistory.slice(0, damageHistoryIndex + 1);

  // 現在の状態をコピーして保存
  damageHistory.push(structuredClone({ damageStates, damageLogs }));

  damageHistoryIndex++;

  // ボタンの有効・無効を更新
  updateUndoRedoButtons();
}

function undoDamage() {
  if (damageHistoryIndex <= 0) {
    return;
  }

  damageHistoryIndex--;

  const history = structuredClone(damageHistory[damageHistoryIndex]);

  damageStates = history.damageStates;
  damageLogs = history.damageLogs;

  updateDamageProbTable();
  updateDamageLog();
  updateUndoRedoButtons();
}

function redoDamage() {
  if (damageHistoryIndex >= damageHistory.length - 1) {
    return;
  }

  damageHistoryIndex++;

  const history = structuredClone(damageHistory[damageHistoryIndex]);

  damageStates = history.damageStates;
  damageLogs = history.damageLogs;

  updateDamageProbTable();
  updateDamageLog();
  updateUndoRedoButtons();
}

function updateUndoRedoButtons() {
  const undo = document.getElementById("undo-damage");
  undo.disabled = damageHistoryIndex <= 0;

  const redo = document.getElementById("redo-damage");
  redo.disabled = damageHistoryIndex >= damageHistory.length - 1;

  const clear = document.getElementById("clear-damage");
  clear.disabled = damageHistory.length === 1;
}

function initializeHistory() {
  damageHistory = [];
  damageHistoryIndex = -1;

  saveHistory();
}

// ダークモード
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").match ? "dark" : "light";
const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.checked = theme === "dark";
}

applyTheme(initialTheme);

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});
