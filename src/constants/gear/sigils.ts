import { SigilTrait, TraitLiterals } from "@/types/traits.types";

export const singleSigils = ["War Elemental", "Stout Heart"];
export const awakeningSigils = ["Awakening"];
export const specialSigils = [
  "Low Profile",
  "Steady Focus",
  "Autorevive",
  "Guts",
  "Potion Hoarder",
];
export const supportSigils = [
  "Quick Cooldown",
  "Cascade",
  "Uplift",
  "Nimble Onslaught",
  "Precise Wrath",
];
export const defensiveSigils = [
  "Aegis",
  "Garrison",
  "Steel Nerves",
  "Firm Stance",
  "Status Resistance",
  "Improved Dodge",
];

export const attackSigils = [
  "Damage Cap",
  "Critical Damage",
  "Stamina",
  "Enmity",
  "Tyranny",
  "Life on the Line",
  "Skilled Assault",
  "Linked Together",
  "Combo Booster",
  "Combo Finisher",
  "Charged Attack",
  "Lucky Charge",
  "Quick Charge",
  "Concentrated Fire",
  "Throw",
  "Injury to Insult",
  "Less is More",
  "Supplementary Damage",
  "Exploiter",
  "Head Start",
  "Dodge Payback",
  "Power Hungry",
  "Glass Cannon",
  "Berserker",
];

export const baseStatSigils = [
  "Attack Power",
  "Stun Power",
  "Critical Hit Rate",
];

export const traitLiterals = [
  "Damage Cap",
  "Critical Damage",
  "Stamina",
  "Enmity",
  "Tyranny",
  "Life on the Line",
  "Skilled Assault",
  "Linked Together",
  "Combo Booster",
  "Combo Finisher",
  "Charged Attack",
  "Lucky Charge",
  "Quick Charge",
  "Concentrated Fire",
  "Throw",
  "Injury to Insult",
  "Less is More",
  "Supplementary Damage",
  "Exploiter",
  "Head Start",
  "Dodge Payback",
  "Power Hungry",
  "Glass Cannon",
  "Berserker",
  "War Elemental",
  "Stout Heart",
  "Awakening",
  "Low Profile",
  "Steady Focus",
  "Autorevive",
  "Guts",
  "Potion Hoarder",
  "Quick Cooldown",
  "Cascade",
  "Uplift",
  "Nimble Onslaught",
  "Precise Wrath",
  "Aegis",
  "Garrison",
  "Steel Nerves",
  "Firm Stance",
  "Status Resistance",
  "Improved Dodge",
  "Alpha",
  "Gamma",
  "Beta",
  "Attack Power",
  "Stun Power",
  "Flight Over Fight",
  "Critical Hit Rate",
  "Warpath",
  "Boundary",
] as const;

export const singleSigilsObject = singleSigils.map((sigil) => {
  return {
    name: sigil as TraitLiterals,
    type: "Single" as const,
  };
});

export const opusSigils = ["Alpha", "Gamma", "Beta"];
export const opusSigilsObjects: SigilTrait[] = opusSigils.map((sigil) => {
  return {
    name: sigil as TraitLiterals,
    type: "Opus" as const,
    allowedSecondaryTraits: ["Damage Cap"],
  };
});

export const baseStatSigilsObjects: SigilTrait[] = baseStatSigils.map(
  (sigil) => {
    const allowedSecondaryTraits = attackSigils.concat(
      defensiveSigils,
      supportSigils,
      specialSigils
    );
    return {
      name: sigil as TraitLiterals,
      type: "BaseStat" as const,
      allowedSecondaryTraits: allowedSecondaryTraits,
    };
  }
);

export const attackSigilsObjects: SigilTrait[] = attackSigils.map((sigil) => {
  const allowedSecondaryTraits = defensiveSigils.concat(
    supportSigils,
    specialSigils
  );
  return {
    name: sigil as TraitLiterals,
    type: "Attack" as const,
    allowedSecondaryTraits: allowedSecondaryTraits,
  };
});

export const defensiveSigilsObjects: SigilTrait[] = defensiveSigils.map(
  (sigil) => {
    const allowedSecondaryTraits = supportSigils.concat(specialSigils);
    return {
      name: sigil as TraitLiterals,
      type: "Defensive" as const,
      allowedSecondaryTraits: allowedSecondaryTraits,
    };
  }
);

export const supportSigilsObjects: SigilTrait[] = supportSigils.map((sigil) => {
  return {
    name: sigil as TraitLiterals,
    type: "Support" as const,
  };
});

export const specialSigilsObjects: SigilTrait[] = specialSigils.map((sigil) => {
  return {
    name: sigil as TraitLiterals,
    type: "Special" as const,
  };
});

export const allSigils = opusSigils.concat(
  singleSigils,
  awakeningSigils,
  baseStatSigils,
  attackSigils,
  defensiveSigils,
  supportSigils,
  specialSigils
);

export const awakeningSigilsObjects: SigilTrait[] = awakeningSigils.map(
  (sigil) => {
    const allowedSecondaryTraits = attackSigils.concat(
      baseStatSigils,
      defensiveSigils,
      supportSigils,
      specialSigils
    );
    return {
      name: sigil as TraitLiterals,
      type: "Awakening",
      allowedSecondaryTraits: allowedSecondaryTraits.concat(["Awakening"]),
    };
  }
);

export const allSigilObjects = opusSigilsObjects.concat(
  singleSigilsObject,
  awakeningSigilsObjects,
  baseStatSigilsObjects,
  attackSigilsObjects,
  defensiveSigilsObjects,
  supportSigilsObjects,
  specialSigilsObjects
);

export const sigilOptions = allSigils.map((sigil) => {
  return {
    label: sigil,
    value: sigil,
  };
});

export const sigilConstants = [
  {
    sigilName: "None" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ymvvOeh.png",
    sigilColor: "None",
    sigilSeconds: "None",
    sigilMaxLevel: 0,
  },
  {
    sigilName: "Damage Cap" as TraitLiterals,
    sigilImage: "https://i.imgur.com/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 65,
  },
  {
    sigilName: "Attack Power" as TraitLiterals,
    sigilImage: "https://i.imgur.com/qKjRxGQ.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 50,
  },
  {
    sigilName: "Stun Power" as TraitLiterals,
    sigilImage: "https://i.imgur.com/cl9Yjci.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Hit Rate" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ATzn4B3.png",
    sigilColor: "Crit",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Damage" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Linked Together" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Stamina" as TraitLiterals,
    sigilImage: "https://i.imgur.com/aWX0IAj.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Enmity" as TraitLiterals,
    sigilImage: "https://i.imgur.com/FHrM7Hr.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Tyranny" as TraitLiterals,
    sigilImage: "https://i.imgur.com/FPRMU3t.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Concentrated Fire" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Quick Charge" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Charged Attack" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Lucky Charge" as TraitLiterals,
    sigilImage: "https://i.imgur.com/HUDS9kJ.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Skilled Assault" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Life on the Line" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Injury to Insult" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Booster" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Finisher" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Throw" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Exploiter" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Dodge Payback" as TraitLiterals,
    sigilImage: "https://i.imgur.com/7HKGnqu.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Power Hungry" as TraitLiterals,
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Less is More" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Supplementary Damage" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Glass Cannon" as TraitLiterals,
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Head Start" as TraitLiterals,
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Berserker" as TraitLiterals,
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "War Elemental" as TraitLiterals,
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Quick Cooldown" as TraitLiterals,
    sigilImage: "https://i.imgur.com/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Cascade" as TraitLiterals,
    sigilImage: "https://i.imgur.com/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Uplift" as TraitLiterals,
    sigilImage: "https://i.imgur.com/EJYhNo7.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Nimble Onslaught" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Precise Wrath" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Autorevive" as TraitLiterals,
    sigilImage: "https://i.imgur.com/2qKcEOx.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Guts" as TraitLiterals,
    sigilImage: "https://i.imgur.com/D5ySGCd.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Potion Hoarder" as TraitLiterals,
    sigilImage: "https://i.imgur.com/uhELCWH.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Low Profile" as TraitLiterals,
    sigilImage: "https://i.imgur.com/rSpaDyN.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Crabvestment Returns" as TraitLiterals,
    sigilImage: "https://i.imgur.com/kZ4liwS.png",
    sigilColor: "Unique",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Stout Heart" as TraitLiterals,
    sigilImage: "https://i.imgur.com/pSxX0U6.png",
    sigilColor: "Unique",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Steady Focus" as TraitLiterals,
    sigilImage: "https://i.imgur.com/pSxX0U6.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Nimble Defense" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ybPyQwu.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Aegis" as TraitLiterals,
    sigilImage: "https://i.imgur.com/gj1GNUU.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Garrison" as TraitLiterals,
    sigilImage: "https://i.imgur.com/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Steel Nerves" as TraitLiterals,
    sigilImage: "https://i.imgur.com/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Firm Stance" as TraitLiterals,
    sigilImage: "https://i.imgur.com/gFXAGMY.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Status Resistance" as TraitLiterals,
    sigilImage: "https://i.imgur.com/JGgx4Xw.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Stronghold" as TraitLiterals,
    sigilImage: "https://i.imgur.com/egexYSS.png",
    sigilColor: "Blu_Exclusive",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Improved Dodge" as TraitLiterals,
    sigilImage: "https://i.imgur.com/kFd60c3.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Flight Over Fight" as TraitLiterals,
    sigilImage: "https://i.imgur.com/kFd60c3.png",
    sigilColor: "Blu_Exclusive",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Alpha" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Beta" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Gamma" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Awakening" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique",
    sigilSeconds: "OrangeGrayCritRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Warpath" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Boundary" as TraitLiterals,
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
];

export function getSigilImage(_sigil: TraitLiterals) {
  if (_sigil === "Awakening") return "https://i.imgur.com/jnMUx4D.png";
  return sigilConstants.find((sigil) => sigil.sigilName === _sigil) ===
    undefined
    ? "https://i.imgur.com/ymvvOeh.png"
    : sigilConstants.find((sigil) => sigil.sigilName === _sigil)?.sigilImage;
}
