import { Character } from "@/types/character.types";

// Taken from https://github.com/false-spring/gbfr-resources/blob/main/en/characters.json
export const logsCharacters = {
  Pl0000: "Gran",
  Pl0100: "Djeeta",
  Pl0200: "Katalina",
  Pl0300: "Rackam",
  Pl0400: "Io",
  Pl0500: "Eugen",
  Pl0600: "Rosetta",
  Pl0700: "Ferry",
  Pl0800: "Lancelot",
  Pl0900: "Vane",
  Pl1000: "Percival",
  Pl1100: "Siegfried",
  Pl1200: "Charlotta",
  Pl1300: "Yodarha",
  Pl1400: "Narmaya",
  Pl1500: "Ghandagoza",
  Pl1600: "Zeta",
  Pl1700: "Vaseraga",
  Pl1800: "Cagliostro",
  Pl1900: "Id",
  Pl2000: "",
  Pl2100: "Sandalphon",
  Pl2200: "",
  Pl2300: "",
  Pl2400: "",
};

export function convertLogsToCalculatorCharacter(
  _characterType: LogsCharacterTypes
) {
  console.log(_characterType);
  console.log(logsCharacters[_characterType]);
  switch (_characterType) {
    case "Pl0000":
    case "Pl0100":
      return "Captain" as Character;
    case "Pl0200":
    case "Pl0300":
    case "Pl0400":
    case "Pl0500":
    case "Pl0600":
    case "Pl0700":
    case "Pl0800":
    case "Pl0900":
    case "Pl1000":
    case "Pl1100":
    case "Pl1200":
    case "Pl1300":
    case "Pl1400":
    case "Pl1500":
    case "Pl1600":
    case "Pl1700":
    case "Pl1800":
    case "Pl1900":
      return logsCharacters[_characterType] as Character;
    case "Pl2000":
    case "Pl2100":
    case "Pl2200":
    case "Pl2300":
    case "Pl2400":
      return "Io" as Character;
    default:
      return "Io" as Character;
  }
}

export const logsCharacterTypes = [
  "Pl0000",
  "Pl0100",
  "Pl0200",
  "Pl0300",
  "Pl0400",
  "Pl0500",
  "Pl0600",
  "Pl0700",
  "Pl0800",
  "Pl0900",
  "Pl1000",
  "Pl1100",
  "Pl1200",
  "Pl1300",
  "Pl1400",
  "Pl1500",
  "Pl1600",
  "Pl1700",
  "Pl1800",
  "Pl1900",
  "Pl2000",
  "Pl2100",
  "Pl2200",
  "Pl2300",
  "Pl2400",
] as const;

//for data validation shit man idk what im doing here
export const logsCharacterTypesArray = Object.keys(logsCharacters);

export type LogsCharacterTypes = (typeof logsCharacterTypes)[number];

const sample = {
  actorIndex: 75,
  displayName: "すし",
  characterName: "すし",
  characterType: "Pl1800",
  sigils: [
    {
      firstTraitId: 2368396142,
      firstTraitLevel: 14,
      secondTraitId: 3696775008,
      secondTraitLevel: 14,
      sigilId: 3996352483,
      equippedCharacter: 2289754288,
      sigilLevel: 14,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 14,
      secondTraitId: 3696775008,
      secondTraitLevel: 14,
      sigilId: 1144547182,
      equippedCharacter: 2289754288,
      sigilLevel: 14,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 14,
      secondTraitId: 3696775008,
      secondTraitLevel: 14,
      sigilId: 1144547182,
      equippedCharacter: 2289754288,
      sigilLevel: 14,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 2373493147,
      firstTraitLevel: 15,
      secondTraitId: 2515794566,
      secondTraitLevel: 15,
      sigilId: 196723080,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 3963416948,
      firstTraitLevel: 15,
      secondTraitId: 3468099822,
      secondTraitLevel: 15,
      sigilId: 348490737,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 3769368062,
      firstTraitLevel: 15,
      secondTraitId: 3053428691,
      secondTraitLevel: 15,
      sigilId: 2619578842,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1911626395,
      firstTraitLevel: 15,
      secondTraitId: 3868870292,
      secondTraitLevel: 15,
      sigilId: 2761097132,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 3696775008,
      firstTraitLevel: 15,
      secondTraitId: 831329001,
      secondTraitLevel: 15,
      sigilId: 1423501828,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1280871463,
      firstTraitLevel: 15,
      secondTraitId: 2289754288,
      secondTraitLevel: 15,
      sigilId: 3666949793,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2289754288,
      secondTraitLevel: 15,
      sigilId: 1119554588,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 2829260347,
      firstTraitLevel: 14,
      secondTraitId: 2289754288,
      secondTraitLevel: 14,
      sigilId: 229840632,
      equippedCharacter: 2289754288,
      sigilLevel: 14,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 801700863,
      firstTraitLevel: 15,
      secondTraitId: 612907763,
      secondTraitLevel: 15,
      sigilId: 3896853593,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
  ],
  isOnline: true,
  weaponInfo: {
    weaponId: 1788689872,
    starLevel: 6,
    plusMarks: 99,
    awakeningLevel: 10,
    trait1Id: 2373493147,
    trait1Level: 10,
    trait2Id: 99806428,
    trait2Level: 7,
    trait3Id: 3231160855,
    trait3Level: 4,
    wrightstoneId: 2289754288,
    weaponLevel: 150,
    weaponHp: 99,
    weaponAttack: 2285,
  },
  overmasteryInfo: {
    overmasteries: [
      { id: 1246497085, flags: 512, value: 20 },
      { id: 2593636425, flags: 512, value: 20 },
      { id: 1756598296, flags: 64, value: 10 },
      { id: 1170626407, flags: 512, value: 20 },
    ],
  },
  playerStats: {
    level: 100,
    totalHp: 41024,
    totalAttack: 32874,
    stunPower: 18.100000381469727,
    criticalRate: 100,
    totalPower: 23523,
  },
};

const sample2 = {
  actorIndex: 451,
  displayName: "Pomni",
  characterName: "Pomni",
  characterType: "Pl0700",
  sigils: [
    {
      firstTraitId: 3641188925,
      firstTraitLevel: 15,
      secondTraitId: 99806428,
      secondTraitLevel: 15,
      sigilId: 3765693029,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1280871463,
      firstTraitLevel: 15,
      secondTraitId: 2289754288,
      secondTraitLevel: 15,
      sigilId: 3666949793,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 3696775008,
      firstTraitLevel: 15,
      secondTraitId: 3053428691,
      secondTraitLevel: 15,
      sigilId: 1423501828,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 3696775008,
      firstTraitLevel: 11,
      secondTraitId: 3868870292,
      secondTraitLevel: 11,
      sigilId: 1423501828,
      equippedCharacter: 2289754288,
      sigilLevel: 11,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 14,
      secondTraitId: 2289754288,
      secondTraitLevel: 14,
      sigilId: 1119554588,
      equippedCharacter: 2289754288,
      sigilLevel: 14,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 2373493147,
      firstTraitLevel: 12,
      secondTraitId: 801700863,
      secondTraitLevel: 12,
      sigilId: 1167971010,
      equippedCharacter: 2289754288,
      sigilLevel: 12,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1934743042,
      firstTraitLevel: 15,
      secondTraitId: 2515794566,
      secondTraitLevel: 15,
      sigilId: 3211872906,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1342675484,
      firstTraitLevel: 15,
      secondTraitId: 3053428691,
      secondTraitLevel: 15,
      sigilId: 763309680,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1911626395,
      firstTraitLevel: 15,
      secondTraitId: 3872242332,
      secondTraitLevel: 15,
      sigilId: 2761097132,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1911626395,
      firstTraitLevel: 11,
      secondTraitId: 612907763,
      secondTraitLevel: 11,
      sigilId: 2761097132,
      equippedCharacter: 2289754288,
      sigilLevel: 11,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 1144547182,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 1144547182,
      equippedCharacter: 2289754288,
      sigilLevel: 15,
      acquisitionCount: 0,
      notificationEnum: 0,
    },
  ],
  isOnline: true,
  weaponInfo: {
    weaponId: 869275872,
    starLevel: 6,
    plusMarks: 99,
    awakeningLevel: 10,
    trait1Id: 2373493147,
    trait1Level: 10,
    trait2Id: 3940753899,
    trait2Level: 6,
    trait3Id: 3468099822,
    trait3Level: 4,
    wrightstoneId: 2289754288,
    weaponLevel: 150,
    weaponHp: 99,
    weaponAttack: 2285,
  },
  overmasteryInfo: {
    overmasteries: [
      { id: 3297926103, flags: 256, value: 800 },
      { id: 1136089117, flags: 512, value: 20 },
      { id: 2593636425, flags: 512, value: 20 },
      { id: 1823706867, flags: 512, value: 2 },
    ],
  },
  playerStats: {
    level: 100,
    totalHp: 30148,
    totalAttack: 29393,
    stunPower: 17,
    criticalRate: 77,
    totalPower: 22771,
  },
};