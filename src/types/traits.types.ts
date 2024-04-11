import { traitLiterals } from "@/constants/gear/sigils";

export type SigilTrait =
  | {
      name: TraitLiterals;
      type: "Opus" | "BaseStat" | "Attack" | "Defensive" | "Awakening";
      allowedSecondaryTraits: string[];
    }
  | {
      name: TraitLiterals;
      type: "Support" | "Special" | "Single";
    };

export interface SigilSet {
  sigil1: SigilTrait["name"] | "None";
  sigil2: SigilTrait["name"] | "None";
  level: number;
}

export interface Trait {
  traitName: TraitLiterals | "None";
  level: number;
}

export interface CalculatedTrait {
  traitName: TraitLiterals;
  calculatedLevel: number;
  actualUseableLevel: number;
  maxLevel: number;
  value: number;
}

export type TraitLiterals = (typeof traitLiterals)[number];
