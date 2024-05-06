import { Character } from "@/types/character.types";
import { Overmasteries } from "@/types/overmasteries.types";
import { SigilSet, Trait } from "@/types/traits.types";

interface RecommendedBuildPage {
  character: Character;
  builds: {
    name: string;
    sigils: SigilSet[];
    overmasteries: Overmasteries;
    weaponImbues: Trait[];
  }[];
}

export const recommendedBuilds: RecommendedBuildPage[] = [
  { character: "Io", builds: [] },
  { character: "Zeta", builds: [] },
  { character: "Captain", builds: [] },
  { character: "Narmaya", builds: [] },
  { character: "Rosetta", builds: [] },
  { character: "Cagliostro", builds: [] },
  { character: "Ferry", builds: [] },
  { character: "Lancelot", builds: [] },
  { character: "Rackam", builds: [] },
  { character: "Vaseraga", builds: [] },
  { character: "Vane", builds: [] },
  { character: "Id", builds: [] },
  { character: "Charlotta", builds: [] },
  { character: "Ghandagoza", builds: [] },
  { character: "Percival", builds: [] },
  { character: "Katalina", builds: [] },
  { character: "Eugen", builds: [] },
  { character: "Yodarha", builds: [] },
  {
    character: "Tweyen",
    builds: [
      {
        name: "Default Tweyen",
        sigils: [
          { sigil1: "Alpha", sigil2: "DMG Cap", level: 15 },
          { sigil1: "Alpha", sigil2: "DMG Cap", level: 15 },
          { sigil1: "Gamma", sigil2: "DMG Cap", level: 15 },
          { sigil1: "Gamma", sigil2: "DMG Cap", level: 15 },
          {
            sigil1: "Supplementary DMG",
            sigil2: "Nimble Onslaught",
            level: 15,
          },
          {
            sigil1: "Supplementary DMG",
            sigil2: "Quick Cooldown",
            level: 15,
          },
          {
            sigil1: "Supplementary DMG",
            sigil2: "Quick Charge",
            level: 15,
          },
          {
            sigil1: "Critical Hit Rate",
            sigil2: "Cascade",
            level: 15,
          },
          {
            sigil1: "War Elemental",
            sigil2: "None",
            level: 15,
          },
          {
            sigil1: "Awakening",
            sigil2: "None",
            level: 15,
          },
          {
            sigil1: "Warpath",
            sigil2: "None",
            level: 15,
          },
          {
            sigil1: "Boundary",
            sigil2: "None",
            level: 15,
          },
        ],
        overmasteries: {
          attack: 1000,
          normalDamageCapUp: 0.2,
          skillDamageCapUp: 0.2,
          sbaDamageCapUp: 0,
          sbaDamageUp: 0,
          skillDamageUp: 0,
          critHitRate: 0.2,
        },
        weaponImbues: [
          { traitName: "Stun Power", level: 10 },
          { traitName: "Concentrated Fire", level: 7 },
          { traitName: "Cascade", level: 5 },
        ],
      },
    ],
  },
  { character: "Seofon", builds: [] },
];
