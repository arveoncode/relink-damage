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
    // for sandalphon
    case "Pl2200":
    // for seofon
    case "Pl2300":
      return "Tweyen" as Character;
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

export const sample = {
  actorIndex: 1149,
  displayName: "あの夢をなぞって",
  characterName: "Tweyen",
  characterType: "Pl2300",
  sigils: [
    {
      firstTraitId: 3898603744,
      firstTraitLevel: 15,
      secondTraitId: 4051194041,
      secondTraitLevel: 15,
      sigilId: 3947551085,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 22253,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2175964121,
      firstTraitLevel: 15,
      secondTraitId: 2289754288,
      secondTraitLevel: 15,
      sigilId: 2959295748,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 21713,
      notificationEnum: 2,
    },
    {
      firstTraitId: 672273579,
      firstTraitLevel: 15,
      secondTraitId: 1619384869,
      secondTraitLevel: 15,
      sigilId: 1138615773,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 21526,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 1144547182,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 21469,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 1144547182,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 21470,
      notificationEnum: 3,
    },
    {
      firstTraitId: 3696775008,
      firstTraitLevel: 15,
      secondTraitId: 3536380170,
      secondTraitLevel: 15,
      sigilId: 1423501828,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 18479,
      notificationEnum: 3,
    },
    {
      firstTraitId: 3696775008,
      firstTraitLevel: 15,
      secondTraitId: 612907763,
      secondTraitLevel: 15,
      sigilId: 1423501828,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 13657,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2215087280,
      firstTraitLevel: 15,
      secondTraitId: 3868870292,
      secondTraitLevel: 15,
      sigilId: 2442488633,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 7109,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2335962636,
      secondTraitLevel: 15,
      sigilId: 56249821,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 7117,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2515794566,
      secondTraitLevel: 15,
      sigilId: 56249821,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 3962,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2373493147,
      firstTraitLevel: 15,
      secondTraitId: 1911626395,
      secondTraitLevel: 15,
      sigilId: 196723080,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 12298,
      notificationEnum: 3,
    },
    {
      firstTraitId: 801700863,
      firstTraitLevel: 15,
      secondTraitId: 831329001,
      secondTraitLevel: 15,
      sigilId: 3896853593,
      equippedCharacter: 3134287419,
      sigilLevel: 15,
      acquisitionCount: 11858,
      notificationEnum: 3,
    },
  ],
  isOnline: false,
  weaponInfo: {
    weaponId: 2111112867,
    starLevel: 6,
    plusMarks: 99,
    awakeningLevel: 10,
    trait1Id: 3468099822,
    trait1Level: 9,
    trait2Id: 801700863,
    trait2Level: 7,
    trait3Id: 801700863,
    trait3Level: 4,
    wrightstoneId: 2856724214,
    weaponLevel: 150,
    weaponHp: 1151,
    weaponAttack: 1013,
  },
  overmasteryInfo: {
    overmasteries: [
      { id: 1170626407, flags: 512, value: 20 },
      { id: 2622837811, flags: 128, value: 12 },
      { id: 1136089117, flags: 512, value: 20 },
      { id: 3297926103, flags: 512, value: 1000 },
    ],
  },
  playerStats: {
    level: 100,
    totalHp: 32569,
    totalAttack: 23427,
    stunPower: 18.5,
    criticalRate: 100,
    totalPower: 22851,
  },
};
