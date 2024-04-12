// import { create } from "zustand";
// import { persist } from "zustand/middleware";

export interface OtherInputsStates {
  numberOfSkills: number;
  attackBuffs: number;
  defDebuffs: number;
  comboActive: boolean;
  currentHp: number;
  backAttack: boolean;
  weakPointAttack: boolean;
}

export interface OtherInputsStore extends OtherInputsStates {
  setNumberOfSkills: (_numberOfSkills: number) => void;
  setAttackBuffs: (_buffs: number) => void;
  setDefDebuffs: (_buffs: number) => void;
  setComboActive: (_comboActive: boolean) => void;
  setCurrentHp: (_hp: number) => void;
  setBackAttack: (_backAttack: boolean) => void;
  setWeakpointAttack: (_weakPointAttack: boolean) => void;
}

// export const useOtherInputsStore = create<OtherInputsStore>()(
//   persist(
//     (set) => ({
//       numberOfSkills: 4,
//       setNumberOfSkills: (_numberOfSkills: number) =>
//         set(() => ({ numberOfSkills: _numberOfSkills })),
//       attackBuffs: 0,
//       setAttackBuffs: (_buffs: number) => set(() => ({ attackBuffs: _buffs })),
//       defDebuffs: 0,
//       setDefDebuffs: (_defDebuffs: number) =>
//         set(() => ({ defDebuffs: _defDebuffs })),
//       comboActive: false,
//       setComboActive: (_comboActive: boolean) =>
//         set(() => ({ comboActive: _comboActive })),
//       currentHp: 1,
//       setCurrentHp: (_hp: number) => set(() => ({ currentHp: _hp })),
//       backAttack: false,
//       setBackAttack: (_backAttack: boolean) =>
//         set(() => ({ backAttack: _backAttack })),
//       weakPointAttack: false,
//       setWeakpointAttack: (_weakPointAttack: boolean) =>
//         set(() => ({ weakPointAttack: _weakPointAttack })),
//     }),
//     {
//       name: "otherInputs",
//     }
//   )
// );
