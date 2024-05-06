export interface SkillConstant {
  skill: string;
  modifier: string;
  skillRatio: number;
  dmgCap: number;
  cd: number;
  classification: {
    normal?: boolean;
    ranged?: boolean;
    charged?: boolean;
    skill?: boolean;
    skyboundArt?: boolean;
    linkAttack?: boolean;
    finisher?: boolean;
    flat?: boolean;
    //Unique
    //Ferry
    pet?: boolean;
    //Eugen
    throw?: boolean;
    //others:
    special?: boolean;
    //vane:
    sp2?: boolean;
  };
}

export interface SkillCalculatedTable extends SkillConstant {
  // Conditional Multiplier
  multi: number;
  critChance: number;
  totalDamageCap: number;
  nonCrit: number;
  crit: number;
  damagePotential: number;
  overcap: number;
  supplemental: number;
  averageTotalDmg: number;
}

export interface SkillJsonRaw {
  Skill: string;
  Modifier: string;
  "Skill Ratio": number;
  "DMG Cap": number;
  CD: string | number;
  Classification: string;
}
