import { TraitLiterals } from "@/types/traits.types";

export const traitLiterals = [
  "DMG Cap",
  "Critical Hit DMG",
  "Stamina",
  "Enmity",
  "Tyranny",
  "Life on the Line",
  "Skilled Assault",
  "Linked Together",
  "Combo Booster",
  "Combo Finisher DMG",
  "Charged Attack DMG",
  "Lucky Charge",
  "Quick Charge",
  "Concentrated Fire",
  "Throw DMG",
  "Injury to Insult",
  "Less Is More",
  "Supplementary DMG",
  "Weak Point DMG",
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
  "Skill Sealed Resistance",
  "Improved Dodge",
  "Alpha",
  "Gamma",
  "Beta",
  "ATK",
  "Stun Power",
  "Flight over Fight",
  "Critical Hit Rate",
  "Warpath",
  "Boundary/Ain+",
  "Berserker Echo",
] as const;

// export const singleSigilsObject = singleSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Single" as const,
//   };
// });

// export const opusSigils = ["Alpha", "Gamma", "Beta"];
// export const opusSigilsObjects: SigilTrait[] = opusSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Opus" as const,
//     allowedSecondaryTraits: ["Damage Cap"],
//   };
// });

// export const baseStatSigilsObjects: SigilTrait[] = baseStatSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = attackSigils.concat(
//       defensiveSigils,
//       supportSigils,
//       specialSigils
//     );
//     return {
//       name: sigil ,
//       type: "BaseStat" as const,
//       allowedSecondaryTraits: allowedSecondaryTraits,
//     };
//   }
// );

// export const attackSigilsObjects: SigilTrait[] = attackSigils.map((sigil) => {
//   const allowedSecondaryTraits = defensiveSigils.concat(
//     supportSigils,
//     specialSigils
//   );
//   return {
//     name: sigil ,
//     type: "Attack" as const,
//     allowedSecondaryTraits: allowedSecondaryTraits,
//   };
// });

// export const defensiveSigilsObjects: SigilTrait[] = defensiveSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = supportSigils.concat(specialSigils);
//     return {
//       name: sigil ,
//       type: "Defensive" as const,
//       allowedSecondaryTraits: allowedSecondaryTraits,
//     };
//   }
// );

// export const supportSigilsObjects: SigilTrait[] = supportSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Support" as const,
//   };
// });

// export const specialSigilsObjects: SigilTrait[] = specialSigils.map((sigil) => {
//   return {
//     name: sigil ,
//     type: "Special" as const,
//   };
// });

// export const allSigils = opusSigils.concat(
//   singleSigils,
//   awakeningSigils,
//   baseStatSigils,
//   attackSigils,
//   defensiveSigils,
//   supportSigils,
//   specialSigils
// );

// export const awakeningSigilsObjects: SigilTrait[] = awakeningSigils.map(
//   (sigil) => {
//     const allowedSecondaryTraits = attackSigils.concat(
//       baseStatSigils,
//       defensiveSigils,
//       supportSigils,
//       specialSigils
//     );
//     return {
//       name: sigil ,
//       type: "Awakening",
//       allowedSecondaryTraits: allowedSecondaryTraits.concat(["Awakening"]),
//     };
//   }
// );

// export const allSigilObjects = opusSigilsObjects.concat(
//   singleSigilsObject,
//   awakeningSigilsObjects,
//   baseStatSigilsObjects,
//   attackSigilsObjects,
//   defensiveSigilsObjects,
//   supportSigilsObjects,
//   specialSigilsObjects
// );

export const sigilOptions = traitLiterals.map((sigil) => {
  return {
    label: sigil,
    value: sigil,
  };
});

export const sigilConstants: {
  sigilName: TraitLiterals;
  sigilImage: string;
  sigilColor: string;
  sigilSeconds: string;
  sigilMaxLevel: number;
}[] = [
  {
    sigilName: "None" as TraitLiterals,
    sigilImage: "https://i.imgur.com/ymvvOeh.png",
    sigilColor: "None",
    sigilSeconds: "None",
    sigilMaxLevel: 0,
  },
  {
    sigilName: "DMG Cap",
    sigilImage: "https://i.imgur.com/3lmC4aG.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 65,
  },
  {
    sigilName: "ATK",
    sigilImage: "https://i.imgur.com/qKjRxGQ.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 50,
  },
  {
    sigilName: "Stun Power",
    sigilImage: "https://i.imgur.com/cl9Yjci.png",
    sigilColor: "Gray",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Hit Rate",
    sigilImage: "https://i.imgur.com/ATzn4B3.png",
    sigilColor: "Crit",
    sigilSeconds: "OrangeRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Critical Hit DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Linked Together",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Stamina",
    sigilImage: "https://i.imgur.com/aWX0IAj.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Enmity",
    sigilImage: "https://i.imgur.com/FHrM7Hr.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Tyranny",
    sigilImage: "https://i.imgur.com/FPRMU3t.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Concentrated Fire",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Quick Charge",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Charged Attack DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Lucky Charge",
    sigilImage: "https://i.imgur.com/HUDS9kJ.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Skilled Assault",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Life on the Line",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Injury to Insult",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Booster",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Combo Finisher DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Throw DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Weak Point DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Dodge Payback",
    sigilImage: "https://i.imgur.com/7HKGnqu.png",
    sigilColor: "Orange",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Power Hungry",
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Less Is More",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Supplementary DMG",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Glass Cannon",
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Head Start",
    sigilImage: "https://i.imgur.com/H0Vk2z3.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Berserker",
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "GrayRedPurpleBlueNone",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "War Elemental",
    sigilImage: "https://i.imgur.com/F1sxTGy.png",
    sigilColor: "Orang_Exclusive",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Quick Cooldown",
    sigilImage: "https://i.imgur.com/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Cascade",
    sigilImage: "https://i.imgur.com/wGc0qLp.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Uplift",
    sigilImage: "https://i.imgur.com/EJYhNo7.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Nimble Onslaught",
    sigilImage: "https://i.imgur.com/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Precise Wrath",
    sigilImage: "https://i.imgur.com/ZIDWafk.png",
    sigilColor: "Red",
    sigilSeconds: "None",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Autorevive",
    sigilImage: "https://i.imgur.com/2qKcEOx.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Guts",
    sigilImage: "https://i.imgur.com/D5ySGCd.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 20,
  },
  {
    sigilName: "Potion Hoarder",
    sigilImage: "https://i.imgur.com/uhELCWH.png",
    sigilColor: "Purple",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Low Profile",
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
    sigilName: "Stout Heart",
    sigilImage: "https://i.imgur.com/pSxX0U6.png",
    sigilColor: "Unique",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Steady Focus",
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
    sigilName: "Aegis",
    sigilImage: "https://i.imgur.com/gj1GNUU.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Garrison",
    sigilImage: "https://i.imgur.com/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 45,
  },
  {
    sigilName: "Steel Nerves",
    sigilImage: "https://i.imgur.com/egexYSS.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Firm Stance",
    sigilImage: "https://i.imgur.com/gFXAGMY.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Skill Sealed Resistance",
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
    sigilName: "Improved Dodge",
    sigilImage: "https://i.imgur.com/kFd60c3.png",
    sigilColor: "Blue",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Flight over Fight",
    sigilImage: "https://i.imgur.com/kFd60c3.png",
    sigilColor: "Blu_Exclusive",
    sigilSeconds: "PurpleRedNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Alpha",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Beta",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Gamma",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Opus",
    sigilSeconds: "Damage Cap",
    sigilMaxLevel: 30,
  },
  {
    sigilName: "Awakening",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique",
    sigilSeconds: "OrangeGrayCritRedPurpleBlueNone",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Warpath",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  {
    sigilName: "Boundary/Ain+",
    sigilImage: "https://i.imgur.com/jnMUx4D.png",
    sigilColor: "Unique_New",
    sigilSeconds: "None",
    sigilMaxLevel: 15,
  },
  // {
  //   sigilName: "Berserker Echo",
  //   sigilImage: "https://i.imgur.com/3lmC4aG.png",
  //   sigilColor: "Orange",
  //   sigilSeconds: "GrayRedPurpleBlueNone",
  //   sigilMaxLevel: 15,
  // },
];

export function getSigilImage(_sigil: TraitLiterals) {
  if (_sigil === "Awakening") return "https://i.imgur.com/jnMUx4D.png";
  return sigilConstants.find((sigil) => sigil.sigilName === _sigil) ===
    undefined
    ? "https://i.imgur.com/ymvvOeh.png"
    : sigilConstants.find((sigil) => sigil.sigilName === _sigil)?.sigilImage;
}
