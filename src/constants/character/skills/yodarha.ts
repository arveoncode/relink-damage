import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Basic Attack",
    Modifier: "1st Attack",
    "Skill Ratio": 0.5,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd Attack",
    "Skill Ratio": 0.8,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Attack",
    "Skill Ratio": 1.1,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "4th Attack (1/2)",
    "Skill Ratio": 0.45,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "4th Attack (2/2)",
    "Skill Ratio": 1,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th Attack (Spin)",
    "Skill Ratio": 0.5,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th Attack (Slam)",
    "Skill Ratio": 2.2,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Launch",
    Modifier: "1st Hit",
    "Skill Ratio": 1.01,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd Hit",
    "Skill Ratio": 0.9,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Aerial Attack",
    Modifier: "1st Attack",
    "Skill Ratio": 1.1,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd Attack",
    "Skill Ratio": 1.65,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Attack (Spin)",
    "Skill Ratio": 0.5,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Attack (Slam)",
    "Skill Ratio": 1.4,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Lunge",
    Modifier: "No Counter",
    "Skill Ratio": 1.71,
    "DMG Cap": 9999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "With Counter",
    "Skill Ratio": 4.2,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Combo Finisher",
    Modifier: "1st Attack",
    "Skill Ratio": 0.8,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "2nd Attack",
    "Skill Ratio": 0.9,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "3rd Attack",
    "Skill Ratio": 1,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "4th Attack",
    "Skill Ratio": 1.2,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th Attack",
    "Skill Ratio": 1.3,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "6th Attack",
    "Skill Ratio": 1.4,
    "DMG Cap": 9999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "7th Attack",
    "Skill Ratio": 4.65,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Aerial Barrage",
    Modifier: "",
    "Skill Ratio": 1.65,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
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
    Modifier: "Activation Hit",
    "Skill Ratio": 0.5,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "1st-15th Hit",
    "Skill Ratio": 0.4,
    "DMG Cap": 19999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "16th Hit",
    "Skill Ratio": 1,
    "DMG Cap": 19999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "17th Hit",
    "Skill Ratio": 3,
    "DMG Cap": 19999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "Empty Mist",
    Modifier: "Flurry",
    "Skill Ratio": 0.61,
    "DMG Cap": 7999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Hit I",
    "Skill Ratio": 2.5,
    "DMG Cap": 7999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Hit II",
    "Skill Ratio": 1.54,
    "DMG Cap": 7999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Hit III",
    "Skill Ratio": 3.66,
    "DMG Cap": 7999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Sky Shatter",
    Modifier: "1st Hit",
    "Skill Ratio": 3.79,
    "DMG Cap": 69999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit(0 Shroud)",
    "Skill Ratio": 5.57,
    "DMG Cap": 69999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit(1 Shroud)",
    "Skill Ratio": 8.52,
    "DMG Cap": 69999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit(2 Shroud)",
    "Skill Ratio": 11.24,
    "DMG Cap": 69999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit(3 Shroud)",
    "Skill Ratio": 14.16,
    "DMG Cap": 69999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "Awakening",
    Modifier: "1st Attack",
    "Skill Ratio": 1.08,
    "DMG Cap": 14999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack",
    "Skill Ratio": 1.34,
    "DMG Cap": 14999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack",
    "Skill Ratio": 1.63,
    "DMG Cap": 14999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack",
    "Skill Ratio": 2.74,
    "DMG Cap": 14999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Flashing Void",
    Modifier: "1st Attack(0 Shroud)",
    "Skill Ratio": 2.65,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit(0 Shroud)",
    "Skill Ratio": 1.32,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack(0 Shroud)",
    "Skill Ratio": 0.99,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack(0 Shroud)",
    "Skill Ratio": 1.53,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th Attack(0 Shroud)",
    "Skill Ratio": 2.74,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Attack(0 Shroud)",
    "Skill Ratio": 5.23,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "1st Attack(1 Shroud)",
    "Skill Ratio": 3.75,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack(1 Shroud)",
    "Skill Ratio": 1.87,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack(1 Shroud)",
    "Skill Ratio": 1.31,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack(1 Shroud)",
    "Skill Ratio": 1.96,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th Attack(1 Shroud)",
    "Skill Ratio": 3.52,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Attack(1 Shroud)",
    "Skill Ratio": 7.07,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "1st Attack(2 Shroud)",
    "Skill Ratio": 4.65,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack(2 Shroud)",
    "Skill Ratio": 2.31,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack(2 Shroud)",
    "Skill Ratio": 1.65,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack(2 Shroud)",
    "Skill Ratio": 2.76,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th Attack(2 Shroud)",
    "Skill Ratio": 4.7,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Attack(2 Shroud)",
    "Skill Ratio": 8.93,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "1st Attack(3 Shroud)",
    "Skill Ratio": 6.34,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack(3 Shroud)",
    "Skill Ratio": 3.17,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack(3 Shroud)",
    "Skill Ratio": 2.35,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack(3 Shroud)",
    "Skill Ratio": 3.54,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th Attack(3 Shroud)",
    "Skill Ratio": 6.24,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Final Attack(3 Shroud)",
    "Skill Ratio": 12.36,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Tit For Tat",
    Modifier: "1st Attack",
    "Skill Ratio": 1.58,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack",
    "Skill Ratio": 1.42,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "3rd Attack",
    "Skill Ratio": 1.68,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th Attack",
    "Skill Ratio": 2,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th Attack",
    "Skill Ratio": 3.96,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "1st Attack(Failed)",
    "Skill Ratio": 0.8,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Attack(Failed)",
    "Skill Ratio": 1.99,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
];

export const yordarhaSkills = convertSkills(skillsJson);
