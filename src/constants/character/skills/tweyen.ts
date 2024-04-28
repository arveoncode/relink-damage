import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Basic Attack",
    Modifier: "First Hit",
    "Skill Ratio": 0.35,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRa",
  },
  {
    Skill: "",
    Modifier: "Second Hit",
    "Skill Ratio": 0.35,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRa",
  },
  {
    Skill: "",
    Modifier: "Third Hit",
    "Skill Ratio": 0.35,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRa",
  },
  {
    Skill: "Charged Attack",
    Modifier: "First Hit",
    "Skill Ratio": 1.02,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "Second Hit",
    "Skill Ratio": 1.02,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "Third Hit",
    "Skill Ratio": 1.02,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "Combo Finisher",
    Modifier: "XY",
    "Skill Ratio": 0.9,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXY",
    "Skill Ratio": 0.2,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXXY",
    "Skill Ratio": 1.19,
    "DMG Cap": 15999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XY Charged",
    "Skill Ratio": 1.33,
    "DMG Cap": 19999,
    CD: "",
    Classification: "NoRaFiCh",
  },
  {
    Skill: "",
    Modifier: "XXY Charged",
    "Skill Ratio": 0.49,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRaFiCh",
  },
  {
    Skill: "",
    Modifier: "XXXY Charged",
    "Skill Ratio": 2.71,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoRaFiCh",
  },
  {
    Skill: "Power Finisher",
    Modifier: "XYY",
    "Skill Ratio": 1.59,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXYY",
    "Skill Ratio": 0.19,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXXYY",
    "Skill Ratio": 3.25,
    "DMG Cap": 15999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "Power Finisher",
    Modifier: "XYCharged Y",
    "Skill Ratio": 2.04,
    "DMG Cap": 19999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXYCharged Y",
    "Skill Ratio": 0.35,
    "DMG Cap": 3499,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "",
    Modifier: "XXXYCharged Y",
    "Skill Ratio": 3.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoRaFi",
  },
  {
    Skill: "Multilock Hail",
    Modifier: "I",
    "Skill Ratio": 0.91,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "II",
    "Skill Ratio": 0.91,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "III",
    "Skill Ratio": 0.91,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "IV",
    "Skill Ratio": 1.08,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "V",
    "Skill Ratio": 1.08,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "VI",
    "Skill Ratio": 1.08,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "VII",
    "Skill Ratio": 1.35,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "VIII",
    "Skill Ratio": 1.35,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "IX",
    "Skill Ratio": 1.35,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "",
    Modifier: "X",
    "Skill Ratio": 1.35,
    "DMG Cap": 12999,
    CD: "",
    Classification: "NoRaCh",
  },
  {
    Skill: "Depravity",
    Modifier: "Per hit",
    "Skill Ratio": 0.53,
    "DMG Cap": 3999,
    CD: 180,
    Classification: "RaSk",
  },
  {
    Skill: "Clincher",
    Modifier: "0 Debuffs",
    "Skill Ratio": 18.16,
    "DMG Cap": 199999,
    CD: 50,
    Classification: "RaSk",
  },
  {
    Skill: "Clincher",
    Modifier: "1 Debuffs",
    "Skill Ratio": 20.75,
    "DMG Cap": 199999,
    CD: 50,
    Classification: "RaSk",
  },
  {
    Skill: "Clincher",
    Modifier: "2 Debuffs",
    "Skill Ratio": 25.01,
    "DMG Cap": 199999,
    CD: 50,
    Classification: "RaSk",
  },
  {
    Skill: "Clincher",
    Modifier: "3 Debuffs",
    "Skill Ratio": 25.94,
    "DMG Cap": 199999,
    CD: 50,
    Classification: "RaSk",
  },
  {
    Skill: "Clincher",
    Modifier: "4 Debuffs",
    "Skill Ratio": 26.87,
    "DMG Cap": 199999,
    CD: 50,
    Classification: "RaSk",
  },
  {
    Skill: "Lethal Rain",
    Modifier: "Per hit",
    "Skill Ratio": 2.59,
    "DMG Cap": 19999,
    CD: 40,
    Classification: "RaSk",
  },
  {
    Skill: "Wheel of Death",
    Modifier: "Per hit",
    "Skill Ratio": 1.04,
    "DMG Cap": 7999,
    CD: 35,
    Classification: "RaSk",
  },
  {
    Skill: "Valiant Weave",
    Modifier: "Initial Hit",
    "Skill Ratio": 2.33,
    "DMG Cap": 19999,
    CD: 15,
    Classification: "RaSk",
  },
  {
    Skill: "Two Crown's Strife",
    Modifier: "Initial Hit",
    "Skill Ratio": 53.44,
    "DMG Cap": 599999,
    CD: 180,
    Classification: "RaSk",
  },
  {
    Skill: "",
    Modifier: "Follow-up",
    "Skill Ratio": 4.74,
    "DMG Cap": 49999,
    CD: 180,
    Classification: "RaSk",
  },
  {
    Skill: "Bring the Thunder",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Depravity",
    "Skill Ratio": 0,
    "DMG Cap": 1999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Wheel of Death",
    "Skill Ratio": 0,
    "DMG Cap": 3999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Lethal Rain",
    "Skill Ratio": 0,
    "DMG Cap": 9999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Valiant Weave",
    "Skill Ratio": 0,
    "DMG Cap": 99999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Clincher",
    "Skill Ratio": 0,
    "DMG Cap": 99999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "",
    Modifier: "Two Crown's Strife",
    "Skill Ratio": 0,
    "DMG Cap": 299999,
    CD: "",
    Classification: "",
  },
  {
    Skill: "Merculight",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: 80,
    Classification: "",
  },
  {
    Skill: "Peerless Eye",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: 120,
    Classification: "",
  },
];

export const tweyenSkills = convertSkills(skillsJson);