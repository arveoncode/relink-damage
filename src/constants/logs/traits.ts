import { TraitLiterals } from "@/types/traits.types";

//to generate type
// export function traitLiteralsCodeGen() {
//   let traitLiteralsArray: string[] = [];
//   Object.keys(logsTraits).forEach(function (key) {
//     traitLiteralsArray.push(key);
//   });
//   console.log(JSON.stringify(traitLiteralsArray));
// }

// BRUH LMAO idk how else to do this I'm a hobbyist okay???
type NoneConstant = "None";
export function convertLogsToCalculatorTrait(
  _traitID: LogsTraitsIDs
): TraitLiterals | NoneConstant {
  switch (_traitID) {
    case "0053599e":
      return "Steady Focus";
    case "05f2ecdc":
      return "Cascade";
    case "05fa4599":
      return "Awakening";
    case "082033cb":
      return "None";
    case "09aa7db5":
      return "None";
    case "0aa20846":
      return "None";
    case "0cd6c625":
      return "Awakening";
    case "0ead65e0":
      return "None";
    case "0fba47e8":
      return "None";
    case "11aae5f5":
      return "Steel Nerves";
    case "1470f860":
      return "Steel Nerves";
    case "151e4674":
      return "Awakening";
    case "1568e0e4":
      return "Head Start";
    case "16eff868":
      return "Awakening";
    case "1b0d9897":
      return "None";
    case "1c360c63":
      return "Charged Attack DMG";
    case "1dc9d7e7":
      return "None";
    case "2242921f":
      return "None";
    case "23d0f67f":
      return "Awakening";
    case "24883af3":
      return "Potion Hoarder";
    case "29b07beb":
      return "Awakening";
    case "29b292a8":
      return "None";
    case "2e65a774":
      return "Awakening";
    case "2fc8fbff":
      return "Stamina";
    case "318d12e9":
      return "Quick Cooldown";
    case "333e5862":
      return "None";
    case "3759a5b9":
      return "None";
    case "3bfed918":
      return "Awakening";
    case "3c2b57b0":
      return "None";
    case "3f2c482e":
      return "None";
    case "3f488339":
      return "Enmity";
    case "3fec5f80":
      return "Linked Together";
    case "40223c28":
      return "None";
    case "451d814c":
      return "Awakening";
    case "4bf2e191":
      return "None";
    case "4c588c27":
      return "War Elemental";
    case "4f1a3683":
      return "Injury to Insult";
    case "50079a1c":
      return "ATK";
    case "50b453dd":
      return "None";
    case "522e2388":
      return "Awakening";
    case "5463232f":
      return "Awakening";
    case "57ab5b10":
      return "Supplementary DMG";
    case "57e8a93f":
      return "None";
    case "5c862e13":
      return "Gamma";
    case "5e422ae5":
      return "None";
    case "6018372b":
      return "None";
    case "6085da25":
      return "None";
    case "66de60b1":
      return "None";
    case "6b694d6d":
      return "Weak Point DMG";
    case "6ebfa176":
      return "Awakening";
    case "6ff05223":
      return "Awakening";
    case "70395731":
      return "Berserker";
    case "71f11a9b":
      return "Tyranny";
    case "7351d602":
      return "Awakening";
    case "7440e869":
      return "Awakening";
    case "74aa75d6":
      return "None";
    case "7ad0c010":
      return "Awakening";
    case "7c2e4d64":
      return "Dodge Payback";
    case "7c84a6b3":
      return "None";
    case "7ccff74f":
      return "None";
    case "7edd69d0":
      return "Precise Wrath";
    case "82ce278d":
      return "Less Is More";
    case "84078cb0":
      return "Quick Charge";
    case "86cbcdc4":
      return "Awakening";
    case "8b3bf60c":
      return "Improved Dodge";
    case "8cdf9382":
      return "Awakening";
    case "8d078597":
      return "Throw DMG";
    case "8d2adb6e":
      return "Beta";
    case "8d78a19b":
      return "Critical Hit Rate";
    case "8f502f0d":
      return "Life on the Line";
    case "921b6b0c":
      return "Awakening";
    case "9389cc06":
      return "None";
    case "93a2093c":
      return "Awakening";
    case "95f3fa86":
      return "Autorevive";
    case "9702860f":
      return "None";
    case "973b49af":
      return "None";
    case "9a9dc170":
      return "Awakening";
    case "9ad8b5e6":
      return "None";
    case "a1a8e39d":
      return "Stout Heart";
    case "a2fa9685":
      return "None";
    case "a374fdf0":
      return "Awakening";
    case "a38510e2":
      return "Awakening";
    case "a3b49220":
      return "Awakening";
    case "a4d6b880":
      return "None";
    case "a63b89cd":
      return "Awakening";
    case "a7a45f28":
      return "Combo Finisher DMG";
    case "a8a3163b":
      return "Glass Cannon";
    case "a9d17f55":
      return "None";
    case "aa83f548":
      return "Awakening";
    case "ac9674c1":
      return "None";
    case "af513a9d":
      return "Awakening";
    case "af794a87":
      return "None";
    case "b360801d":
      return "Concentrated Fire";
    case "b48eef48":
      return "Awakening";
    case "b5ff9fd3":
      return "Uplift";
    case "b6e31f76":
      return "Firm Stance";
    case "c0979a17":
      return "Critical Hit DMG";
    case "c2a4c7a9":
      return "Awakening";
    case "c35b111b":
      return "Lucky Charge";
    case "c86f3082":
      return "None";
    case "cd030268":
      return "Awakening";
    case "cd124165":
      return "Awakening";
    case "cd18a77d":
      return "None";
    case "cdeb73f6":
      return "None";
    case "ceb700ee":
      return "Stun Power";
    case "cfb48782":
      return "None";
    case "d1012d8c":
      return "Awakening";
    case "d2c8e10a":
      return "Nimble Onslaught";
    case "d54f8ca7":
      return "None";
    case "d908223d":
      return "Awakening";
    case "dbe1d775":
      return "Alpha";
    case "dc225c96":
      return "Power Hungry";
    case "dc584f60":
      return "DMG Cap";
    case "dc607d75":
      return "Low Profile";
    case "dd4a701e":
      return "None";
    case "e0abfdfe":
      return "Aegis";
    case "e60a735c":
      return "Awakening";
    case "e69a4694":
      return "Guts";
    case "e6cdba9c":
      return "Garrison";
    case "eae321eb":
      return "Skilled Assault";
    case "ec1c6779":
      return "Flight over Fight";
    case "ec3cf174":
      return "Awakening";
    case "f17850b9":
      return "Combo Booster";
    case "f1d5dbd0":
      return "Awakening";
    case "f372f096":
      return "None";
    case "f687c5ef":
      return "None";
    case "f8496336":
      return "Awakening";
    case "fb572681":
      return "None";
    case "0e42be1b":
      return "Warpath";
    case "0f026cf0":
      return "Warpath";
    case "281214ab":
      return "Boundary";
    case "48a95b8d":
      //this is greater aegis
      return "None";
    case "4f135217":
      return "Warpath";
    case "6316cbeb":
      return "Warpath";
    case "77c809f5":
      return "Awakening";
    case "7b4fc47a":
      return "Warpath";
    case "81b293d9":
      return "Warpath";
    case "8519ad4a":
      return "Warpath";
    case "8572b8af":
      return "Awakening";
    case "9230e3f5":
      return "Awakening";
    case "9afdfa9e":
      return "Warpath";
    case "a339d642":
      return "Warpath";
    case "b064a634":
      return "Warpath";
    case "b85202bc":
      return "Warpath";
    case "ba504607":
      return "Warpath";
    case "c00163b3":
      return "Warpath";
    case "c7d379f1":
      return "Warpath";
    case "d3b8c21f":
    case "d76f4d24":
      return "Warpath";
    case "d7f9bb88":
      return "Warpath";
    case "d8f66c1c":
      return "Warpath";
    case "dade14dc":
      return "Warpath";
    case "daefbb27":
      return "Warpath";
    case "e6b92e34":
      return "Warpath";
    case "e85ff8e0":
      return "Awakening";
    case "ef05ec4d":
      return "Boundary";
    case "f71f8997":
      return "None";
    case "fdd1ad24":
      return "Warpath";
    default:
      return "None";
  }
}

export function convertCalculatorToLogsTrait(
  _traitName: TraitLiterals | NoneConstant
): LogsTraitsIDs | NoneConstant {
  return Object.keys(logsTraits).find(
    (key) => logsTraits[key as keyof typeof logsTraits].text === _traitName
  ) as LogsTraitsIDs;
}

export const logsTraits = {
  "0053599e": {
    key: "SKILL_094_00",
    text: "Steady Focus",
  },
  "05f2ecdc": {
    key: "SKILL_070_00",
    text: "Cascade",
  },
  "05fa4599": {
    key: "SKILL_124_01",
    text: "Dragonslayer's Ingenuity",
  },
  "082033cb": {
    key: "SKILL_140_00",
    text: "Crabby Resonance",
  },
  "09aa7db5": {
    key: "SKILL_104_00",
    text: "Nimble Defense",
  },
  "0aa20846": {
    key: "SKILL_060_00",
    text: "Improved Guard",
  },
  "0cd6c625": {
    key: "SKILL_126_00",
    text: "Swordmaster's Prowess",
  },
  "0e42be1b": {
    key: "SKILL_118_02",
    text: "Veteran's Warpath",
  },
  "0ead65e0": {
    key: "SKILL_103_00",
    text: "Natural Defenses",
  },
  "0f026cf0": {
    key: "SKILL_128_02",
    text: "Eternal Rage's Warpath",
  },
  "0fba47e8": {
    key: "SKILL_133_00",
    text: "Fortifying Vigor",
  },
  "11aae5f5": {
    key: "SKILL_117_01",
    text: "Mage's Savvy",
  },
  "1470f860": {
    key: "SKILL_096_00",
    text: "Steel Nerves",
  },
  "151e4674": {
    key: "SKILL_116_00",
    text: "Helmsman's Navigation",
  },
  "1568e0e4": {
    key: "SKILL_153_00",
    text: "Head Start",
  },
  "16eff868": {
    key: "SKILL_122_01",
    text: "Hero's Will",
  },
  "1b0d9897": {
    key: "SKILL_141_00",
    text: "Crabvestment Returns",
  },
  "1c360c63": {
    key: "SKILL_008_00",
    text: "Charged Attack DMG",
  },
  "1dc9d7e7": {
    key: "SKILL_136_00",
    text: "Held Under Resistance",
  },
  "2242921f": {
    key: "SKILL_055_00",
    text: "Paralysis Resistance",
  },
  "23d0f67f": {
    key: "SKILL_119_00",
    text: "Rose's Blooming",
  },
  "24883af3": {
    key: "SKILL_073_00",
    text: "Potion Hoarder",
  },
  "281214ab": {
    key: "SKILL_171_03",
    text: "Two-Crown Boundary",
  },
  "29b07beb": {
    key: "SKILL_127_00",
    text: "Butterfly's Grace",
  },
  "29b292a8": {
    key: "SKILL_107_00",
    text: "Precise Resilience",
  },
  "2e65a774": {
    key: "SKILL_122_00",
    text: "Hero's Creed",
  },
  "2fc8fbff": {
    key: "SKILL_006_00",
    text: "Stamina",
  },
  "318d12e9": {
    key: "SKILL_069_00",
    text: "Quick Cooldown",
  },
  "333e5862": {
    key: "SKILL_157_00",
    text: "Roll of the Die",
  },
  "3759a5b9": {
    key: "SKILL_054_00",
    text: "Dizzy Resistance",
  },
  "3bfed918": {
    key: "SKILL_115_00",
    text: "Guardian's Conviction",
  },
  "3c2b57b0": {
    key: "SKILL_061_00",
    text: "Guard Payback",
  },
  "3f2c482e": {
    key: "SKILL_100_00",
    text: "Supplements",
  },
  "3f488339": {
    key: "SKILL_005_00",
    text: "Enmity",
  },
  "3fec5f80": {
    key: "SKILL_009_00",
    text: "Linked Together",
  },
  "40223c28": {
    key: "SKILL_143_00",
    text: "Catastrophe",
  },
  "451d814c": {
    key: "SKILL_128_01",
    text: "Eternal Rage's Ethos",
  },
  "48a95b8d": {
    key: "SKILL_166_00",
    text: "Greater Aegis",
  },
  "4bf2e191": {
    key: "SKILL_138_00",
    text: "ATK↓ Resistance",
  },
  "4c588c27": {
    key: "SKILL_146_00",
    text: "War Elemental",
  },
  "4f135217": {
    key: "SKILL_131_02",
    text: "Crimson's Warpath",
  },
  "4f1a3683": {
    key: "SKILL_029_00",
    text: "Injury to Insult",
  },
  "50079a1c": {
    key: "SKILL_000_00",
    text: "ATK",
  },
  "50b453dd": {
    key: "SKILL_057_00",
    text: "Skill Sealed Resistance",
  },
  "522e2388": {
    key: "SKILL_125_01",
    text: "Holy Knight's Grandeur",
  },
  "5463232f": {
    key: "SKILL_128_00",
    text: "Eternal Rage's Mettle",
  },
  "57ab5b10": {
    key: "SKILL_151_00",
    text: "Supplementary DMG",
  },
  "57e8a93f": {
    key: "SKILL_113_00",
    text: "Sigil Booster",
  },
  "5c862e13": {
    key: "SKILL_162_00",
    text: "Gamma",
  },
  "5e422ae5": {
    key: "SKILL_147_00",
    text: "Path to Mastery",
  },
  "6018372b": {
    key: "SKILL_078_00",
    text: "Provoke",
  },
  "6085da25": {
    key: "SKILL_066_00",
    text: "Regen",
  },
  "6316cbeb": {
    key: "SKILL_121_02",
    text: "White Dragon's Warpath",
  },
  "66de60b1": {
    key: "SKILL_139_00",
    text: "DEF↓ Resistance",
  },
  "6b694d6d": {
    key: "SKILL_014_00",
    text: "Weak Point DMG",
  },
  "6ebfa176": {
    key: "SKILL_131_00",
    text: "Crimson's Clout",
  },
  "6ff05223": {
    key: "SKILL_123_01",
    text: "Lord's Ambition",
  },
  "70395731": {
    key: "SKILL_154_00",
    text: "Berserker",
  },
  "71f11a9b": {
    key: "SKILL_027_00",
    text: "Tyranny",
  },
  "7351d602": {
    key: "SKILL_120_01",
    text: "Phantasm's Harmony",
  },
  "7440e869": {
    key: "SKILL_132_00",
    text: "Ebony's Presence",
  },
  "74aa75d6": {
    key: "SKILL_144_00",
    text: "Stronghold",
  },
  "77c809f5": {
    key: "SKILL_170_00",
    text: "Spirit Edge's Rally",
  },
  "7ad0c010": {
    key: "SKILL_130_01",
    text: "Versalis Ignition",
  },
  "7b4fc47a": {
    key: "SKILL_170_02",
    text: "Spirit Edge's Warpath",
  },
  "7c2e4d64": {
    key: "SKILL_064_00",
    text: "Dodge Payback",
  },
  "7c84a6b3": {
    key: "SKILL_047_00",
    text: "Burn Resistance",
  },
  "7ccff74f": {
    key: "SKILL_067_00",
    text: "Drain",
  },
  "7edd69d0": {
    key: "SKILL_109_00",
    text: "Precise Wrath",
  },
  "81b293d9": {
    key: "SKILL_171_02",
    text: "Dark Huntress's Warpath",
  },
  "82ce278d": {
    key: "SKILL_152_00",
    text: "Less Is More",
  },
  "84078cb0": {
    key: "SKILL_111_00",
    text: "Quick Charge",
  },
  "8519ad4a": {
    key: "SKILL_119_02",
    text: "Rose's Warpath",
  },
  "8572b8af": {
    key: "SKILL_171_01",
    text: "Dark Huntress's Surge",
  },
  "86cbcdc4": {
    key: "SKILL_124_00",
    text: "Dragonslayer's Dominance",
  },
  "8b3bf60c": {
    key: "SKILL_063_00",
    text: "Improved Dodge",
  },
  "8cdf9382": {
    key: "SKILL_121_00",
    text: "White Dragon's Oath",
  },
  "8d078597": {
    key: "SKILL_012_00",
    text: "Throw DMG",
  },
  "8d2adb6e": {
    key: "SKILL_161_00",
    text: "Beta",
  },
  "8d78a19b": {
    key: "SKILL_003_00",
    text: "Critical Hit Rate",
  },
  "8f502f0d": {
    key: "SKILL_110_00",
    text: "Life on the Line",
  },
  "921b6b0c": {
    key: "SKILL_118_01",
    text: "Veteran's Vision",
  },
  "9230e3f5": {
    key: "SKILL_170_01",
    text: "Spirit Edge's Fury",
  },
  "9389cc06": {
    key: "SKILL_065_00",
    text: "Improved Healing",
  },
  "93a2093c": {
    key: "SKILL_130_00",
    text: "Versalis Foundation",
  },
  "95f3fa86": {
    key: "SKILL_068_00",
    text: "Autorevive",
  },
  "9702860f": {
    key: "SKILL_088_00",
    text: "Blight Resistance",
  },
  "973b49af": {
    key: "SKILL_046_00",
    text: "Poison Resistance",
  },
  "9a9dc170": {
    key: "SKILL_125_00",
    text: "Holy Knight's Luster",
  },
  "9ad8b5e6": {
    key: "SKILL_142_00",
    text: "Seven Net",
  },
  "9afdfa9e": {
    key: "SKILL_115_02",
    text: "Guardian's Warpath",
  },
  a1a8e39d: {
    key: "SKILL_044_00",
    text: "Stout Heart",
  },
  a2fa9685: {
    key: "SKILL_086_00",
    text: "Slow Resistance",
  },
  a339d642: {
    key: "SKILL_120_02",
    text: "Phantasm's Warpath",
  },
  a374fdf0: {
    key: "SKILL_116_01",
    text: "Helmsman's Tenacity",
  },
  a38510e2: {
    key: "SKILL_114_01",
    text: "Fearless Spirit",
  },
  a3b49220: {
    key: "SKILL_126_01",
    text: "Swordmaster's Art",
  },
  a4d6b880: {
    key: "SKILL_134_00",
    text: "Instilling Vigor",
  },
  a63b89cd: {
    key: "SKILL_127_01",
    text: "Butterfly's Valor",
  },
  a7a45f28: {
    key: "SKILL_017_00",
    text: "Combo Finisher DMG",
  },
  a8a3163b: {
    key: "SKILL_158_00",
    text: "Glass Cannon",
  },
  a9d17f55: {
    key: "SKILL_030_00",
    text: "Overdrive Assassin",
  },
  aa83f548: {
    key: "SKILL_118_00",
    text: "Veteran's Insight",
  },
  ac9674c1: {
    key: "SKILL_031_00",
    text: "Break Assassin",
  },
  af513a9d: {
    key: "SKILL_129_01",
    text: "Founder's Truth",
  },
  af794a87: {
    key: "SKILL_150_00",
    text: "Untouchable",
  },
  b064a634: {
    key: "SKILL_130_02",
    text: "Versalis Heart",
  },
  b360801d: {
    key: "SKILL_018_00",
    text: "Concentrated Fire",
  },
  b48eef48: {
    key: "SKILL_117_00",
    text: "Mage's Aspiration",
  },
  b5ff9fd3: {
    key: "SKILL_072_00",
    text: "Uplift",
  },
  b6e31f76: {
    key: "SKILL_087_00",
    text: "Firm Stance",
  },
  b85202bc: {
    key: "SKILL_125_02",
    text: "Holy Knight's Warpath",
  },
  ba504607: {
    key: "SKILL_123_02",
    text: "Lord's Warpath",
  },
  c00163b3: {
    key: "SKILL_117_02",
    text: "Mage's Warpath",
  },
  c0979a17: {
    key: "SKILL_013_00",
    text: "Critical Hit DMG",
  },
  c2a4c7a9: {
    key: "SKILL_119_01",
    text: "Rose's Profusion",
  },
  c35b111b: {
    key: "SKILL_028_00",
    text: "Lucky Charge",
  },
  c7d379f1: {
    key: "SKILL_124_02",
    text: "Dragonslayer's Warpath",
  },
  c86f3082: {
    key: "SKILL_080_00",
    text: "Rupie Tycoon",
  },
  cd030268: {
    key: "SKILL_114_00",
    text: "Fearless Drive",
  },
  cd124165: {
    key: "SKILL_132_01",
    text: "Ebony's Poise",
  },
  cd18a77d: {
    key: "SKILL_156_00",
    text: "Potent Greens",
  },
  cdeb73f6: {
    key: "SKILL_135_00",
    text: "Gilding Vigor",
  },
  ceb700ee: {
    key: "SKILL_004_00",
    text: "Stun Power",
  },
  cfb48782: {
    key: "SKILL_058_00",
    text: "SBA Sealed Resistance",
  },
  d1012d8c: {
    key: "SKILL_121_01",
    text: "White Dragon's Glory",
  },
  d2c8e10a: {
    key: "SKILL_106_00",
    text: "Nimble Onslaught",
  },
  d3b8c21f: {
    key: "SKILL_164_00",
    text: "Crabmiration",
  },
  d54f8ca7: {
    key: "SKILL_051_00",
    text: "Sandtomb Resistance",
  },
  d76f4d24: {
    key: "SKILL_116_02",
    text: "Helmsman's Warpath",
  },
  d7f9bb88: {
    key: "SKILL_132_02",
    text: "Ebony's Warpath",
  },
  d8f66c1c: {
    key: "SKILL_122_02",
    text: "Hero's Warpath",
  },
  d908223d: {
    key: "SKILL_120_00",
    text: "Phantasm's Concord",
  },
  dade14dc: {
    key: "SKILL_114_02",
    text: "Fearless Heart",
  },
  daefbb27: {
    key: "SKILL_126_02",
    text: "Swordmaster's Warpath",
  },
  dbe1d775: {
    key: "SKILL_160_00",
    text: "Alpha",
  },
  dc225c96: {
    key: "SKILL_145_00",
    text: "Power Hungry",
  },
  dc584f60: {
    key: "SKILL_020_00",
    text: "DMG Cap",
  },
  dc607d75: {
    key: "SKILL_077_00",
    text: "Low Profile",
  },
  dd4a701e: {
    key: "SKILL_137_00",
    text: "Darkflame Resistance",
  },
  e0abfdfe: {
    key: "SKILL_085_00",
    text: "Aegis",
  },
  e60a735c: {
    key: "SKILL_123_00",
    text: "Lord's Procession",
  },
  e69a4694: {
    key: "SKILL_045_00",
    text: "Guts",
  },
  e6b92e34: {
    key: "SKILL_129_02",
    text: "Founder's Warpath",
  },
  e6cdba9c: {
    key: "SKILL_036_00",
    text: "Garrison",
  },
  e85ff8e0: {
    key: "SKILL_171_00",
    text: "Dark Huntress's Volley",
  },
  eae321eb: {
    key: "SKILL_083_00",
    text: "Skilled Assault",
  },
  ec1c6779: {
    key: "SKILL_159_00",
    text: "Flight over Fight",
  },
  ec3cf174: {
    key: "SKILL_129_00",
    text: "Founder's Strategy",
  },
  ef05ec4d: {
    key: "SKILL_170_03",
    text: "Seven-Star Boundary",
  },
  f17850b9: {
    key: "SKILL_024_00",
    text: "Combo Booster",
  },
  f1d5dbd0: {
    key: "SKILL_131_01",
    text: "Crimson's Flight",
  },
  f372f096: {
    key: "SKILL_001_00",
    text: "HP",
  },
  f687c5ef: {
    key: "SKILL_079_00",
    text: "Fast Learner",
  },
  f71f8997: {
    key: "SKILL_167_00",
    text: "Auto Potion",
  },
  f8496336: {
    key: "SKILL_115_01",
    text: "Guardian's Honor",
  },
  fb572681: {
    key: "SKILL_052_00",
    text: "Glaciate Resistance",
  },
  fdd1ad24: {
    key: "SKILL_127_02",
    text: "Butterfly's Warpath",
  },
};

export const logsTraitsIDs = [
  "70395731",
  "0053599e",
  "05f2ecdc",
  "05fa4599",
  "082033cb",
  "09aa7db5",
  "0aa20846",
  "0cd6c625",
  "0e42be1b",
  "0ead65e0",
  "0f026cf0",
  "0fba47e8",
  "11aae5f5",
  "1470f860",
  "151e4674",
  "1568e0e4",
  "16eff868",
  "1b0d9897",
  "1c360c63",
  "1dc9d7e7",
  "2242921f",
  "23d0f67f",
  "24883af3",
  "281214ab",
  "29b07beb",
  "29b292a8",
  "2e65a774",
  "2fc8fbff",
  "318d12e9",
  "333e5862",
  "3759a5b9",
  "3bfed918",
  "3c2b57b0",
  "3f2c482e",
  "3f488339",
  "3fec5f80",
  "40223c28",
  "451d814c",
  "48a95b8d",
  "4bf2e191",
  "4c588c27",
  "4f135217",
  "4f1a3683",
  "50079a1c",
  "50b453dd",
  "522e2388",
  "5463232f",
  "57ab5b10",
  "57e8a93f",
  "5c862e13",
  "5e422ae5",
  "6018372b",
  "6085da25",
  "6316cbeb",
  "66de60b1",
  "6b694d6d",
  "6ebfa176",
  "6ff05223",
  "71f11a9b",
  "7351d602",
  "7440e869",
  "74aa75d6",
  "77c809f5",
  "7ad0c010",
  "7b4fc47a",
  "7c2e4d64",
  "7c84a6b3",
  "7ccff74f",
  "7edd69d0",
  "81b293d9",
  "82ce278d",
  "84078cb0",
  "8519ad4a",
  "8572b8af",
  "86cbcdc4",
  "8b3bf60c",
  "8cdf9382",
  "8d078597",
  "8d2adb6e",
  "8d78a19b",
  "8f502f0d",
  "921b6b0c",
  "9230e3f5",
  "9389cc06",
  "93a2093c",
  "95f3fa86",
  "9702860f",
  "973b49af",
  "9a9dc170",
  "9ad8b5e6",
  "9afdfa9e",
  "a1a8e39d",
  "a2fa9685",
  "a339d642",
  "a374fdf0",
  "a38510e2",
  "a3b49220",
  "a4d6b880",
  "a63b89cd",
  "a7a45f28",
  "a8a3163b",
  "a9d17f55",
  "aa83f548",
  "ac9674c1",
  "af513a9d",
  "af794a87",
  "b064a634",
  "b360801d",
  "b48eef48",
  "b5ff9fd3",
  "b6e31f76",
  "b85202bc",
  "ba504607",
  "c00163b3",
  "c0979a17",
  "c2a4c7a9",
  "c35b111b",
  "c7d379f1",
  "c86f3082",
  "cd030268",
  "cd124165",
  "cd18a77d",
  "cdeb73f6",
  "ceb700ee",
  "cfb48782",
  "d1012d8c",
  "d2c8e10a",
  "d3b8c21f",
  "d54f8ca7",
  "d76f4d24",
  "d7f9bb88",
  "d8f66c1c",
  "d908223d",
  "dade14dc",
  "daefbb27",
  "dbe1d775",
  "dc225c96",
  "dc584f60",
  "dc607d75",
  "dd4a701e",
  "e0abfdfe",
  "e60a735c",
  "e69a4694",
  "e6b92e34",
  "e6cdba9c",
  "e85ff8e0",
  "eae321eb",
  "ec1c6779",
  "ec3cf174",
  "ef05ec4d",
  "f17850b9",
  "f1d5dbd0",
  "f372f096",
  "f687c5ef",
  "f71f8997",
  "f8496336",
  "fb572681",
  "fdd1ad24",
];

// for typescript shit jesus f
const logsTraitsIDsArray = [
  "70395731",
  "0053599e",
  "05f2ecdc",
  "05fa4599",
  "082033cb",
  "09aa7db5",
  "0aa20846",
  "0cd6c625",
  "0e42be1b",
  "0ead65e0",
  "0f026cf0",
  "0fba47e8",
  "11aae5f5",
  "1470f860",
  "151e4674",
  "1568e0e4",
  "16eff868",
  "1b0d9897",
  "1c360c63",
  "1dc9d7e7",
  "2242921f",
  "23d0f67f",
  "24883af3",
  "281214ab",
  "29b07beb",
  "29b292a8",
  "2e65a774",
  "2fc8fbff",
  "318d12e9",
  "333e5862",
  "3759a5b9",
  "3bfed918",
  "3c2b57b0",
  "3f2c482e",
  "3f488339",
  "3fec5f80",
  "40223c28",
  "451d814c",
  "48a95b8d",
  "4bf2e191",
  "4c588c27",
  "4f135217",
  "4f1a3683",
  "50079a1c",
  "50b453dd",
  "522e2388",
  "5463232f",
  "57ab5b10",
  "57e8a93f",
  "5c862e13",
  "5e422ae5",
  "6018372b",
  "6085da25",
  "6316cbeb",
  "66de60b1",
  "6b694d6d",
  "6ebfa176",
  "6ff05223",
  "71f11a9b",
  "7351d602",
  "7440e869",
  "74aa75d6",
  "77c809f5",
  "7ad0c010",
  "7b4fc47a",
  "7c2e4d64",
  "7c84a6b3",
  "7ccff74f",
  "7edd69d0",
  "81b293d9",
  "82ce278d",
  "84078cb0",
  "8519ad4a",
  "8572b8af",
  "86cbcdc4",
  "8b3bf60c",
  "8cdf9382",
  "8d078597",
  "8d2adb6e",
  "8d78a19b",
  "8f502f0d",
  "921b6b0c",
  "9230e3f5",
  "9389cc06",
  "93a2093c",
  "95f3fa86",
  "9702860f",
  "973b49af",
  "9a9dc170",
  "9ad8b5e6",
  "9afdfa9e",
  "a1a8e39d",
  "a2fa9685",
  "a339d642",
  "a374fdf0",
  "a38510e2",
  "a3b49220",
  "a4d6b880",
  "a63b89cd",
  "a7a45f28",
  "a8a3163b",
  "a9d17f55",
  "aa83f548",
  "ac9674c1",
  "af513a9d",
  "af794a87",
  "b064a634",
  "b360801d",
  "b48eef48",
  "b5ff9fd3",
  "b6e31f76",
  "b85202bc",
  "ba504607",
  "c00163b3",
  "c0979a17",
  "c2a4c7a9",
  "c35b111b",
  "c7d379f1",
  "c86f3082",
  "cd030268",
  "cd124165",
  "cd18a77d",
  "cdeb73f6",
  "ceb700ee",
  "cfb48782",
  "d1012d8c",
  "d2c8e10a",
  "d3b8c21f",
  "d54f8ca7",
  "d76f4d24",
  "d7f9bb88",
  "d8f66c1c",
  "d908223d",
  "dade14dc",
  "daefbb27",
  "dbe1d775",
  "dc225c96",
  "dc584f60",
  "dc607d75",
  "dd4a701e",
  "e0abfdfe",
  "e60a735c",
  "e69a4694",
  "e6b92e34",
  "e6cdba9c",
  "e85ff8e0",
  "eae321eb",
  "ec1c6779",
  "ec3cf174",
  "ef05ec4d",
  "f17850b9",
  "f1d5dbd0",
  "f372f096",
  "f687c5ef",
  "f71f8997",
  "f8496336",
  "fb572681",
  "fdd1ad24",
] as const;

export type LogsTraitsIDs = (typeof logsTraitsIDsArray)[number];
