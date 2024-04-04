import { SkillConstant } from "@/types/skill.types";

const skillsConverted = [
  {
    Skill: "Auto Attack",
    Modifier: "1st Auto",
    "Skill Ratio": 0.5,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd Auto",
    "Skill Ratio": 0.6,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Auto",
    "Skill Ratio": 0.7,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Infinite (0 Ice)",
    "Skill Ratio": 0.3,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Infinite (Max Ice)",
    "Skill Ratio": 0.39,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Launch",
    Modifier: "",
    "Skill Ratio": 0.6,
    "DMG Cap": 3849,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Aerial Attack",
    Modifier: "1st Auto",
    "Skill Ratio": 0.6,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd Auto",
    "Skill Ratio": 0.7,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Auto",
    "Skill Ratio": 1,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Twin Blade Dance",
    Modifier: "Back/Forward  (0 Ice)",
    "Skill Ratio": 0.7,
    "DMG Cap": 9999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Twin Blade Dance",
    Modifier: "Left/Right (0 Ice)",
    "Skill Ratio": 1.4,
    "DMG Cap": 9999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Twin Blade Dance",
    Modifier: "Back/Forward (Max Ice)",
    "Skill Ratio": 0.91,
    "DMG Cap": 9999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Twin Blade Dance",
    Modifier: "Left/Right (Max Ice)",
    "Skill Ratio": 1.82,
    "DMG Cap": 9999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Combo Finisher",
    Modifier: "1st and 2nd Hit (No Ice)",
    "Skill Ratio": 2.5,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "1st and 2nd Hit (Max Ice)",
    "Skill Ratio": 3.25,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Hit (No Ice)",
    "Skill Ratio": 4,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd Hit (Max Ice)",
    "Skill Ratio": 5.2,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Aerial Barrage",
    Modifier: "",
    "Skill Ratio": 0.8,
    "DMG Cap": 3999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Link Attack",
    Modifier: "No Ice",
    "Skill Ratio": 6,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Li",
  },
  {
    Skill: "",
    Modifier: "Max Ice",
    "Skill Ratio": 7.8,
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
    Modifier: "1st Hit",
    "Skill Ratio": 0.5,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "2nd Hit",
    "Skill Ratio": 0.75,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "3rd Hit",
    "Skill Ratio": 0.79,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "4th Hit",
    "Skill Ratio": 1.04,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "5th Hit",
    "Skill Ratio": 1.13,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "6th Hit",
    "Skill Ratio": 2.71,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "7th Hit",
    "Skill Ratio": 3.25,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "Turbulenz",
    Modifier: "",
    "Skill Ratio": 9.59,
    "DMG Cap": 89999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Blade Impulse",
    Modifier: "1st Hit",
    "Skill Ratio": 1.65,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "2nd Hit",
    "Skill Ratio": 4.63,
    "DMG Cap": 34999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Kaltzwinger",
    Modifier: "Total",
    "Skill Ratio": 4.8,
    "DMG Cap": 39996,
    CD: "",
    Classification: "SkCh",
  },
  {
    Skill: "Lawinensturm",
    Modifier: "",
    "Skill Ratio": 1.76,
    "DMG Cap": 14999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "Southern Cross",
    Modifier: "1st -5th Hit",
    "Skill Ratio": 4.4,
    "DMG Cap": 49999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "6th Hit",
    "Skill Ratio": 5.54,
    "DMG Cap": 49999,
    CD: "",
    Classification: "Sk",
  },
];

export const lancelotSkills: SkillConstant[] = skillsConverted.map((sk) => {
    // classification: {
    //     normal: true,
    //     ranged: true,
    //     charged: true,
    //     skill: false,
    //     skyboundArt: false,
    //     linkAttack: false,
    //     finisher: false,
    //   },
  const classification: SkillConstant["classification"] = {
    ...(sk.Classification.includes("No") && { normal: true }),
    ...(sk.Classification.includes("Ra") && { ranged: true }),
    ...(sk.Classification.includes("Ch") && { charged: true }),
    ...(sk.Classification.includes("Sk") && { skill: true }),
    ...(sk.Classification.includes("Sb") && { skyboundArt: true }),
    ...(sk.Classification.includes("Li") && { linkAttack: true }),
    ...(sk.Classification.includes("Fi") && { finisher: true }),
    ...(sk.Classification.includes("Pe") && { pet: true }),
    ...(sk.Classification.includes("Th") && { throw: true }),
  };
  return {
    skill: sk.Skill,
    modifier: sk.Modifier,
    dmgCap: sk["DMG Cap"],
    skillRatio: sk["Skill Ratio"],
    cd: 0,
    classification: classification,
  };
});




