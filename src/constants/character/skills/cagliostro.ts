
import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter"


const skillsJson: SkillJsonRaw[] = [
    {
      "Skill": "Attack",
      "Modifier": "1st",
      "Skill Ratio": 1,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Attack",
      "Modifier": "2nd",
      "Skill Ratio": 1.4,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Attack",
      "Modifier": "3rd [1st Hit]",
      "Skill Ratio": 1.2,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Attack",
      "Modifier": "3rd [2nd Hit]",
      "Skill Ratio": 1.5,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Attack",
      "Modifier": "4th",
      "Skill Ratio": 1.8,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Collapse",
      "Modifier": "No Charge",
      "Skill Ratio": 2.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoRa"
    },
    {
      "Skill": "Collapse",
      "Modifier": "+ [1st Hit]",
      "Skill Ratio": 3.3,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoRaCh"
    },
    {
      "Skill": "Collapse",
      "Modifier": "+ [4 Hits]",
      "Skill Ratio": 0.5,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoRaCh"
    },
    {
      "Skill": "Collapse",
      "Modifier": "++ [1st Hit]",
      "Skill Ratio": 4.9,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoRaCh"
    },
    {
      "Skill": "Collapse",
      "Modifier": "++ [5 Hits]",
      "Skill Ratio": 0.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoRaCh"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 1",
      "Skill Ratio": 0.5,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 2",
      "Skill Ratio": 0.6,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 3",
      "Skill Ratio": 0.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 4",
      "Skill Ratio": 0.8,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 5",
      "Skill Ratio": 0.9,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Power Strike 1",
      "Modifier": "Spear 6",
      "Skill Ratio": 1,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 1",
      "Skill Ratio": 1.5,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 2",
      "Skill Ratio": 1.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 3",
      "Skill Ratio": 1.9,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 4",
      "Skill Ratio": 2.1,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 5",
      "Skill Ratio": 2.3,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Combo Finisher 1",
      "Modifier": "Spear 6",
      "Skill Ratio": 2.5,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Power Strike 2",
      "Modifier": "",
      "Skill Ratio": 1.2,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Combo Finisher 2",
      "Modifier": "",
      "Skill Ratio": 2,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Power Strike 3",
      "Modifier": "",
      "Skill Ratio": 0.25,
      "DMG Cap": 1999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Combo Finisher 3",
      "Modifier": "",
      "Skill Ratio": 0.12,
      "DMG Cap": 1999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Power Strike 4",
      "Modifier": "",
      "Skill Ratio": 3.2,
      "DMG Cap": 14999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Combo Finisher 4",
      "Modifier": "",
      "Skill Ratio": 3.9,
      "DMG Cap": 14999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Link Attack",
      "Modifier": "",
      "Skill Ratio": 6,
      "DMG Cap": 99999,
      "CD": 0,
      "Classification": "NoLiRa"
    },
    {
      "Skill": "Link Attack",
      "Modifier": "Monument",
      "Skill Ratio": 24,
      "DMG Cap": 99999,
      "CD": 0,
      "Classification": "NoLiRa"
    },
    {
      "Skill": "SBA",
      "Modifier": "Opener",
      "Skill Ratio": 1,
      "DMG Cap": 99999,
      "CD": 0,
      "Classification": "SbNc"
    },
    {
      "Skill": "SBA",
      "Modifier": "15 Hits",
      "Skill Ratio": 0.6,
      "DMG Cap": 19999,
      "CD": 0,
      "Classification": "Sb"
    },
    {
      "Skill": "SBA",
      "Modifier": "Last Hit",
      "Skill Ratio": 4.6,
      "DMG Cap": 19999,
      "CD": 0,
      "Classification": "Sb"
    },
    {
      "Skill": "Mimic Doll",
      "Modifier": "",
      "Skill Ratio": 10.1,
      "DMG Cap": 69999,
      "CD": 29.55,
      "Classification": "Sk"
    },
    {
      "Skill": "Alexandria",
      "Modifier": "1st Hit",
      "Skill Ratio": 4.4,
      "DMG Cap": 34999,
      "CD": 30,
      "Classification": "Sk"
    },
    {
      "Skill": "Alexandria",
      "Modifier": "2nd Hit",
      "Skill Ratio": 8.8,
      "DMG Cap": 34999,
      "CD": 30,
      "Classification": "Sk"
    },
    {
      "Skill": "Pain Train",
      "Modifier": "5 Hits",
      "Skill Ratio": 1.1,
      "DMG Cap": 44999,
      "CD": 15,
      "Classification": "Sk"
    },
    {
      "Skill": "Pain Train",
      "Modifier": "Last Hit",
      "Skill Ratio": 2.2,
      "DMG Cap": 44999,
      "CD": 15,
      "Classification": "Sk"
    },
    {
      "Skill": "Mehen",
      "Modifier": "",
      "Skill Ratio": 3.3,
      "DMG Cap": 39999,
      "CD": 10,
      "Classification": "Sk"
    },
    {
      "Skill": "Mehen",
      "Modifier": "Empowered",
      "Skill Ratio": 9.9,
      "DMG Cap": 39999,
      "CD": 10,
      "Classification": "Sk"
    },
    {
      "Skill": "Disruption",
      "Modifier": "",
      "Skill Ratio": 2.2,
      "DMG Cap": 19999,
      "CD": 60,
      "Classification": "SkRa"
    },
    {
      "Skill": "Launch",
      "Modifier": "3 Hits",
      "Skill Ratio": 0.2,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Launch",
      "Modifier": "Last Hit",
      "Skill Ratio": 0.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Aerial Barrage",
      "Modifier": "3 Hits",
      "Skill Ratio": 0.4,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Aerial Barrage",
      "Modifier": "Last Hit",
      "Skill Ratio": 0.8,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Jump",
      "Modifier": "1st",
      "Skill Ratio": 1,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Jump",
      "Modifier": "2nd",
      "Skill Ratio": 1.3,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "No"
    },
    {
      "Skill": "Jump",
      "Modifier": "Finisher [1st Hit]",
      "Skill Ratio": 0.7,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Jump",
      "Modifier": "Finisher [2nd Hit]",
      "Skill Ratio": 1.1,
      "DMG Cap": 9999,
      "CD": 0,
      "Classification": "NoFi"
    },
    {
      "Skill": "Phantasmagoria",
      "Modifier": "",
      "Skill Ratio": 0,
      "DMG Cap": 0,
      "CD": 83,
      "Classification": ""
    },
    {
      "Skill": "Reinforce",
      "Modifier": "",
      "Skill Ratio": 0,
      "DMG Cap": 0,
      "CD": 38.64,
      "Classification": ""
    },
    {
      "Skill": "Rhizomata",
      "Modifier": "",
      "Skill Ratio": 0,
      "DMG Cap": 0,
      "CD": 163.64,
      "Classification": ""
    }
  ]

  export const cagliostroSkills = convertSkills(skillsJson);