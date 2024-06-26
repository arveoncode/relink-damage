import { characters } from "@/constants/character/characters";
import { z } from "zod";

export type Character = (typeof characters)[number];

export const characterInput = z.discriminatedUnion("name", [
  z.object({ name: z.literal("Zeta"), arvessFermare: z.boolean() }),
  z.object({ name: z.literal("Captain"), artsLevel: z.number().gte(0).lte(4) }), //.gte(n) alias min(n), .lte(n) alias max(n)
  z.object({
    name: z.literal("Narmaya"),
    butterflies: z.number().gte(0).lte(6),
  }),
  z.object({
    name: z.literal("Rosetta"),
    highestLvlRose: z.number().gte(0).lte(4),
  }),
  z.object({ name: z.literal("Io") }),
  z.object({ name: z.literal("Cagliostro") }),
  z.object({ name: z.literal("Ferry") }),
  z.object({ name: z.literal("Lancelot") }),
  z.object({ name: z.literal("Rackam") }),
  z.object({ name: z.literal("Vaseraga") }),
  z.object({ name: z.literal("Siegfried") }),
  z.object({ name: z.literal("Vane") }),
  z.object({ name: z.literal("Id") }),
  z.object({ name: z.literal("Charlotta") }),
  z.object({ name: z.literal("Ghandagoza") }),
  z.object({ name: z.literal("Percival") }),
  z.object({ name: z.literal("Katalina") }),
  z.object({ name: z.literal("Eugen") }),
  z.object({ name: z.literal("Yodarha") }),
  z.object({ name: z.literal("Tweyen") }),
  z.object({ name: z.literal("Seofon") }),
  z.object({ name: z.literal("Sandalphon") }),
]);

export type CharacterInput = z.infer<typeof characterInput>;

const sampleImport = {
  actorIndex: 57,
  displayName: "Arveon",
  characterName: "Charlotta" as Character,
  characterType: "Pl1200",
  sigils: [
    {
      firstTraitId: 2594029936,
      firstTraitLevel: 15,
      secondTraitId: 1911626395,
      secondTraitLevel: 15,
      sigilId: 2700693353,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 15054,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2829260347,
      firstTraitLevel: 15,
      secondTraitId: 3053428691,
      secondTraitLevel: 15,
      sigilId: 490771525,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 8207,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2812567336,
      firstTraitLevel: 15,
      secondTraitId: 99806428,
      secondTraitLevel: 15,
      sigilId: 319097004,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 6259,
      notificationEnum: 3,
    },
    {
      firstTraitId: 3689011061,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 2451411160,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 15503,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 14,
      secondTraitId: 3696775008,
      secondTraitLevel: 14,
      sigilId: 1144547182,
      equippedCharacter: 4248560482,
      sigilLevel: 14,
      acquisitionCount: 15501,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1552297491,
      firstTraitLevel: 14,
      secondTraitId: 3696775008,
      secondTraitLevel: 14,
      sigilId: 1144547182,
      equippedCharacter: 4248560482,
      sigilLevel: 14,
      acquisitionCount: 15502,
      notificationEnum: 3,
    },
    {
      firstTraitId: 2373493147,
      firstTraitLevel: 15,
      secondTraitId: 3696775008,
      secondTraitLevel: 15,
      sigilId: 196723080,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 13724,
      notificationEnum: 3,
    },
    {
      firstTraitId: 4051194041,
      firstTraitLevel: 15,
      secondTraitId: 612907763,
      secondTraitLevel: 15,
      sigilId: 1782261331,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 5368,
      notificationEnum: 3,
    },
    {
      firstTraitId: 801700863,
      firstTraitLevel: 15,
      secondTraitId: 3868870292,
      secondTraitLevel: 15,
      sigilId: 3896853593,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 9483,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2515794566,
      secondTraitLevel: 15,
      sigilId: 56249821,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 2696,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2335962636,
      secondTraitLevel: 15,
      sigilId: 56249821,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 7745,
      notificationEnum: 3,
    },
    {
      firstTraitId: 1470847760,
      firstTraitLevel: 15,
      secondTraitId: 2289754288,
      secondTraitLevel: 15,
      sigilId: 1119554588,
      equippedCharacter: 4248560482,
      sigilLevel: 15,
      acquisitionCount: 8476,
      notificationEnum: 3,
    },
  ],
  isOnline: false,
  weaponInfo: {
    weaponId: 2222708081,
    starLevel: 6,
    plusMarks: 99,
    awakeningLevel: 10,
    trait1Id: 2373493147,
    trait1Level: 10,
    trait2Id: 1327117955,
    trait2Level: 7,
    trait3Id: 99806428,
    trait3Level: 4,
    wrightstoneId: 752853394,
    weaponLevel: 150,
    weaponHp: 99,
    weaponAttack: 2285,
  },
  overmasteryInfo: {
    overmasteries: [
      { id: 1170626407, flags: 512, value: 20 },
      { id: 2622837811, flags: 512, value: 20 },
      { id: 3297926103, flags: 512, value: 1000 },
      { id: 1136089117, flags: 512, value: 20 },
    ],
  },
  playerStats: {
    level: 100,
    totalHp: 30142,
    totalAttack: 35526,
    stunPower: 13,
    criticalRate: 100,
    totalPower: 24182,
  },
};

export type importExportCharacter = typeof sampleImport;
