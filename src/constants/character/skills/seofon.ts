import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Basic Attack",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 1 [Avatar Stance]",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2 [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3 [Avatar Stance]",
    "Skill Ratio": 1.2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [1st hit]",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [1st hit] [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [2nd hit]",
    "Skill Ratio": 1.8,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [2nd hit] [Avatar Stance]",
    "Skill Ratio": 2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Avatar Melee",
    Modifier: "Attack 1",
    "Skill Ratio": 0.6,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 0.8,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3",
    "Skill Ratio": 0.5,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4",
    "Skill Ratio": 1.1,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike A",
    "Skill Ratio": 0.6,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike B",
    "Skill Ratio": 0.7,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike C [1st&2nd hit]",
    "Skill Ratio": 0.5,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike C [3rd hit]",
    "Skill Ratio": 1,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Finisher A",
    "Skill Ratio": 0.6,
    "DMG Cap": 5999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher B",
    "Skill Ratio": 2,
    "DMG Cap": 5999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher C",
    "Skill Ratio": 1.2,
    "DMG Cap": 5999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher D",
    "Skill Ratio": 0.8,
    "DMG Cap": 5999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Launch Attack",
    "Skill Ratio": 0.5,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Aerial Barrage",
    "Skill Ratio": 1,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Air Attack 1",
    "Skill Ratio": 0.6,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Air Attack 2",
    "Skill Ratio": 0.8,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Air Attack 3",
    "Skill Ratio": 0.4,
    "DMG Cap": 5999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Air Attack Finisher",
    "Skill Ratio": 1.2,
    "DMG Cap": 5999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Avatar Ranged",
    Modifier: "",
    "Skill Ratio": 0.3,
    "DMG Cap": 2999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Combo A",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 1 [Avatar Stance]",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike",
    "Skill Ratio": 0.7,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [Avatar Stance]",
    "Skill Ratio": 0.85,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st hit]",
    "Skill Ratio": 0.9,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st hit] [Avatar Stance]",
    "Skill Ratio": 1.2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [2nd hit]",
    "Skill Ratio": 1.9,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [2nd hit] [Avatar Stance]",
    "Skill Ratio": 1.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Combo B",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 1 [Avatar Stance]",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2 [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [1st hit]",
    "Skill Ratio": 1.1,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [2nd hit]",
    "Skill Ratio": 1.3,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [1st-3rd hit] [Avatar Stance]",
    "Skill Ratio": 1,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st hit]",
    "Skill Ratio": 1.4,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [2nd hit]",
    "Skill Ratio": 2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st & 2nd hit] [Avatar Stance]",
    "Skill Ratio": 2.2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Combo C",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 1 [Avatar Stance]",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2 [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3 [Avatar Stance]",
    "Skill Ratio": 1.2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [1st & 2nd hit]",
    "Skill Ratio": 1,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [3rd & 4th hit]",
    "Skill Ratio": 1.6,
    "DMG Cap": 34999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Power Strike [1st-3rd hit] [Avatar Stance]",
    "Skill Ratio": 0.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Power Strike [4th&5th hit] [Avatar Stance]",
    "Skill Ratio": 1.2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher",
    "Skill Ratio": 2.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st hit] [Avatar Stance]",
    "Skill Ratio": 2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [2nd hit] [Avatar Stance]",
    "Skill Ratio": 4.35,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Combo D",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 1 [Avatar Stance]",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2 [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3",
    "Skill Ratio": 1.1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3 [Avatar Stance]",
    "Skill Ratio": 1.2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [1st hit]",
    "Skill Ratio": 1.4,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [1st hit] [Avatar Stance]",
    "Skill Ratio": 1.5,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [2nd hit]",
    "Skill Ratio": 1.8,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [2nd hit] [Avatar Stance]",
    "Skill Ratio": 2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st hit]",
    "Skill Ratio": 3.2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [1st & 2nd hit] [Avatar Stance]",
    "Skill Ratio": 2.7,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [2nd hit]",
    "Skill Ratio": 4.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Finisher [3rd hit] [Avatar Stance]",
    "Skill Ratio": 4.8,
    "DMG Cap": 34999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Avatar Finisher",
    Modifier: "1st & 2nd hit",
    "Skill Ratio": 4.5,
    "DMG Cap": 74990,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "3rd & 4th hit",
    "Skill Ratio": 7.95,
    "DMG Cap": 74990,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th hit",
    "Skill Ratio": 10,
    "DMG Cap": 74990,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Launch Attack",
    Modifier: "",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Aerial Barrage",
    Modifier: "",
    "Skill Ratio": 1.7,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Air Combo",
    Modifier: "Attack 1",
    "Skill Ratio": 1,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 2",
    "Skill Ratio": 1.3,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 3",
    "Skill Ratio": 0.8,
    "DMG Cap": 11999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [1st Hit]",
    "Skill Ratio": 1.2,
    "DMG Cap": 11999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Attack 4 [2nd Hit]",
    "Skill Ratio": 1.6,
    "DMG Cap": 11999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Link",
    Modifier: "",
    "Skill Ratio": 6,
    "DMG Cap": 99999,
    CD: "",
    Classification: "NoLi",
  },
  {
    Skill: "SBA",
    Modifier: "Initial hit",
    "Skill Ratio": 1,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "2nd-9th hit",
    "Skill Ratio": 1.2,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Final hit",
    "Skill Ratio": 3,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "Barrido",
    Modifier: "Dash",
    "Skill Ratio": 1.3,
    "DMG Cap": 9999,
    CD: 15,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Slash",
    "Skill Ratio": 1.8,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Explosion",
    "Skill Ratio": 0.55,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Dash [Avatar Stance]",
    "Skill Ratio": 0.66,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Slash [Avatar Stance]",
    "Skill Ratio": 0.9,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Explosion [Avatar Stance]",
    "Skill Ratio": 0.28,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Avatar Attack",
    "Skill Ratio": 0.28,
    "DMG Cap": 9999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Despedazar",
    Modifier: "1st-3rd hit",
    "Skill Ratio": 3.3,
    "DMG Cap": 34999,
    CD: 40,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th hit",
    "Skill Ratio": 4.4,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "5th hit",
    "Skill Ratio": 4.95,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "1st-3rd hit [Avatar Stance]",
    "Skill Ratio": 3.3,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "4th & 5th hit [Avatar Stance]",
    "Skill Ratio": 4.4,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "6th [Avatar Stance]",
    "Skill Ratio": 5.6,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Avatar 1st-3rd hit",
    "Skill Ratio": 1.1,
    "DMG Cap": 12999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Avatar 4th hit",
    "Skill Ratio": 1.4,
    "DMG Cap": 12999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Infinito Creare",
    Modifier: "Swords",
    "Skill Ratio": 2.1,
    "DMG Cap": 19999,
    CD: 30,
    Classification: "SkRa",
  },
  {
    Skill: "",
    Modifier: "Melee slashes",
    "Skill Ratio": 1.65,
    "DMG Cap": 19999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Prision da Armas",
    Modifier: "",
    "Skill Ratio": 1.4,
    "DMG Cap": 29999,
    CD: 120,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Avatar Version",
    "Skill Ratio": 5.6,
    "DMG Cap": 59999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Rotura",
    Modifier: "",
    "Skill Ratio": 4.95,
    "DMG Cap": 44999,
    CD: 20,
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Avatar Attack",
    "Skill Ratio": 2.7,
    "DMG Cap": 29999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Tempesta",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: 100,
    Classification: "",
  },
  {
    Skill: "Ispirazione",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: 80,
    Classification: "",
  },
  {
    Skill: "Seven-Stars' Brilliance",
    Modifier: "",
    "Skill Ratio": 0,
    "DMG Cap": 0,
    CD: 380,
    Classification: "",
  },
];

export const seofonSkills = convertSkills(skillsJson);