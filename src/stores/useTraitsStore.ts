import { CalculatedTrait, Trait, SigilSet } from "@/types/traits.types";
import { create } from "zustand";
// interface TraitTableData {
//   // icon: string;
//   traitName: TraitLiterals;
//   derivedLevel: number;
//   maxLevel: number;
// }

interface TraitsStore {
  sigilsEquipped: SigilSet[];
  isTerminus: boolean;
  isMaxAwakening: boolean;
  weaponImbues: Trait[];
  updateSigilSet: (_index: number, _sigilSet: SigilSet) => void;
  updateWeaponImbues: (_index: number, _weaponImbues: Trait) => void;
  setisMaxAwakening: (_isMaxAwakening: boolean) => void;
  setIsTerminus: (_isTerminus: boolean) => void;
  traitsTable: CalculatedTrait[];
  setTraitsTable: (_traitsTable: CalculatedTrait[]) => void;
}
export const useTraitsStore = create<TraitsStore>()((set) => ({
  traitsTable: [],
  setTraitsTable: (_traitsTable: CalculatedTrait[]) =>
    set(() => ({ traitsTable: _traitsTable })),
  isMaxAwakening: true,
  setisMaxAwakening: (_isMaxAwakening: boolean) =>
    set(() => ({ isMaxAwakening: _isMaxAwakening })),
  isTerminus: true,
  setIsTerminus: (_isTerminus: boolean) =>
    set(() => ({ isTerminus: _isTerminus })),
  weaponImbues: [
    {
      traitName: "Critical Hit Rate",
      level: 10,
    },
    {
      traitName: "Linked Together",
      level: 7,
    },
    {
      traitName: "Cascade",
      level: 5,
    },
  ],
  updateWeaponImbues: (_index: number, _weaponImbues: Trait) =>
    set((state) => {
      const weaponImbuesCopy = [...state.weaponImbues];
      weaponImbuesCopy[_index] = _weaponImbues;
      return { weaponImbues: weaponImbuesCopy };
    }),
  sigilsEquipped: [
    {
      sigil1: "Alpha",
      sigil2: "Damage Cap",
      level: 15,
    },
    {
      sigil1: "Gamma",
      sigil2: "Damage Cap",
      level: 15,
    },
    {
      sigil1: "Gamma",
      sigil2: "Damage Cap",
      level: 15,
    },
    {
      sigil1: "Beta",
      sigil2: "Damage Cap",
      level: 15,
    },
    {
      sigil1: "Supplementary Damage",
      sigil2: "None",
      level: 15,
    },
    {
      sigil1: "Supplementary Damage",
      sigil2: "None",
      level: 15,
    },
    {
      sigil1: "Supplementary Damage",
      sigil2: "None",
      level: 15,
    },
    {
      sigil1: "War Elemental",
      sigil2: "None",
      level: 15,
    },
    {
      sigil1: "Critical Hit Rate",
      sigil2: "Stamina",
      level: 15,
    },
    {
      sigil1: "Glass Cannon",
      sigil2: "None",
      level: 15,
    },
    {
      sigil1: "Awakening",
      sigil2: "Quick Charge",
      level: 15,
    },
    {
      sigil1: "Awakening",
      sigil2: "Quick Charge",
      level: 15,
    },
  ],
  updateSigilSet: (_index: number, _sigilSet: SigilSet) =>
    set((state) => {
      const sigilsEquippedCopy = [...state.sigilsEquipped];
      sigilsEquippedCopy[_index] = _sigilSet;
      return { sigilsEquipped: sigilsEquippedCopy };
    }),
}));





// Maygi example:
// const sigilsEquipped: [
//   {
//     sigil1: "Alpha",
//     sigil2: "Damage Cap",
//     level: 15,
//   },
//   {
//     sigil1: "Gamma",
//     sigil2: "Damage Cap",
//     level: 15,
//   },
//   {
//     sigil1: "Gamma",
//     sigil2: "Damage Cap",
//     level: 15,
//   },
//   {
//     sigil1: "Beta",
//     sigil2: "Damage Cap",
//     level: 15,
//   },
//   {
//     sigil1: "Supplementary Damage",
//     sigil2: "None",
//     level: 15,
//   },
//   {
//     sigil1: "Supplementary Damage",
//     sigil2: "None",
//     level: 15,
//   },
//   {
//     sigil1: "Supplementary Damage",
//     sigil2: "None",
//     level: 15,
//   },
//   {
//     sigil1: "War Elemental",
//     sigil2: "None",
//     level: 15,
//   },
//   {
//     sigil1: "Critical Hit Rate",
//     sigil2: "Stamina",
//     level: 15,
//   },
//   {
//     sigil1: "Glass Cannon",
//     sigil2: "None",
//     level: 15,
//   },
//   {
//     sigil1: "Awakening",
//     sigil2: "Quick Charge",
//     level: 15,
//   },
//   {
//     sigil1: "Awakening",
//     sigil2: "Quick Charge",
//     level: 15,
//   },
// ],