import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Lightstep",
    Modifier: "",
    "Skill Ratio": 0.52,
    "DMG Cap": 19999,
    CD: "",
    Classification: "NoRa",
  },
];

export const sandalphonSkills = convertSkills(skillsJson);
