import { SkillConstant, SkillJsonRaw } from "@/types/skill.types";

export const convertSkills = (
  _skillsJson: SkillJsonRaw[]
) => {
  const convertedSkills: SkillConstant[] = _skillsJson.map((sk) => {
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
      ...(sk.Classification.includes("Sp") && {special: true}),
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

  return convertedSkills;
};
