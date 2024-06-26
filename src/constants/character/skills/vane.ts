import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Basic Attack",
    Modifier: "First Attack",
    "Skill Ratio": 1,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Second Attack",
    "Skill Ratio": 1.7,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Third Attack",
    "Skill Ratio": 2.7,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Combo A",
    Modifier: "First Attack",
    "Skill Ratio": 1,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike",
    "Skill Ratio": 2.3,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoS2",
  },
  {
    Skill: "",
    Modifier: "Finisher",
    "Skill Ratio": 3.4,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Combo B",
    Modifier: "First Attack",
    "Skill Ratio": 1,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Second Attack",
    "Skill Ratio": 1.7,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike",
    "Skill Ratio": 2.17,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoS2",
  },
  {
    Skill: "",
    Modifier: "Finisher",
    "Skill Ratio": 4.87,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoFiS2",
  },
  {
    Skill: "",
    Modifier: "Spin Attack",
    "Skill Ratio": 0.6,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoFiS2",
  },
  {
    Skill: "Combo C",
    Modifier: "First Attack",
    "Skill Ratio": 1,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Second Attack",
    "Skill Ratio": 1.7,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Third Attack",
    "Skill Ratio": 2.7,
    "DMG Cap": 22999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike",
    "Skill Ratio": 3.4,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoS2",
  },
  {
    Skill: "",
    Modifier: "Finisher",
    "Skill Ratio": 9.7,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoFiS2",
  },
  {
    Skill: "Beatdown",
    Modifier: "Hvy Swing Hit 1",
    "Skill Ratio": 2.3,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hvy Swing Hit 2",
    "Skill Ratio": 3.7,
    "DMG Cap": 44999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Power Strike 1",
    "Skill Ratio": 3.7,
    "DMG Cap": 49999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hit 2",
    "Skill Ratio": 5.4,
    "DMG Cap": 49999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Power Strike 2",
    "Skill Ratio": 3.9,
    "DMG Cap": 54999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hit 2",
    "Skill Ratio": 3.9,
    "DMG Cap": 54999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hit 3",
    "Skill Ratio": 7.65,
    "DMG Cap": 54999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Power Strike 3",
    "Skill Ratio": 4.6,
    "DMG Cap": 64999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hit 2",
    "Skill Ratio": 4.6,
    "DMG Cap": 64999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Hit 3",
    "Skill Ratio": 9.95,
    "DMG Cap": 64999,
    CD: "",
    Classification: "NoSpS2",
  },
  {
    Skill: "",
    Modifier: "Finisher",
    "Skill Ratio": 13.5,
    "DMG Cap": 149999,
    CD: "",
    Classification: "NoFiSpS2",
  },
  {
    Skill: "Link Attack",
    Modifier: "",
    "Skill Ratio": 6,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Li",
  },
  {
    Skill: "SBA",
    Modifier: "Initial Hit",
    "Skill Ratio": 1,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "BIGG Smack",
    "Skill Ratio": 12,
    "DMG Cap": 259999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "Arm Destructon",
    Modifier: "",
    "Skill Ratio": 6,
    "DMG Cap": 49999,
    CD: 30,
    Classification: "Sk",
  },
  {
    Skill: "Heroic Beat",
    Modifier: "",
    "Skill Ratio": 5.5,
    "DMG Cap": 64999,
    CD: 30,
    Classification: "Sk",
  },
  {
    Skill: "Energy Destruction",
    Modifier: "0%SBA",
    "Skill Ratio": 17.5,
    "DMG Cap": 299999,
    CD: 60,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "100% SBA",
    "Skill Ratio": 38.3333,
    "DMG Cap": 349999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Rift Divider",
    Modifier: "First Hit",
    "Skill Ratio": 1.5833,
    "DMG Cap": 19999,
    CD: 50,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Hit",
    "Skill Ratio": 6.6667,
    "DMG Cap": 19999,
    CD: "",
    Classification: "Sk",
  },
];

export const vaneSkills = convertSkills(skillsJson);
