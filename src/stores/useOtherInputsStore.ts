import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OtherInputsStore {
  numberOfSkills: number;
  setNumberOfSkills: (_numberOfSkills: number) => void;
  attackBuffs: number;
  setAttackBuffs: (_buffs: number) => void;
  defDebuffs: number;
  setDefDebuffs: (_buffs: number) => void;
  comboActive: boolean;
  setComboActive: (_comboActive: boolean) => void;
  currentHp: number;
  setCurrentHp: (_hp: number) => void;
  backAttack: boolean;
  setBackAttack: (_backAttack: boolean) => void;
  weakPointAttack: boolean;
  setWeakpointAttack: (_weakPointAttack: boolean) => void;
}

export const useOtherInputsStore = create<OtherInputsStore>()(
  persist(
    (set) => ({
      numberOfSkills: 4,
      setNumberOfSkills: (_numberOfSkills: number) =>
        set(() => ({ numberOfSkills: _numberOfSkills })),
      attackBuffs: 0,
      setAttackBuffs: (_buffs: number) => set(() => ({ attackBuffs: _buffs })),
      defDebuffs: 0,
      setDefDebuffs: (_defDebuffs: number) =>
        set(() => ({ defDebuffs: _defDebuffs })),
      comboActive: false,
      setComboActive: (_comboActive: boolean) =>
        set(() => ({ comboActive: _comboActive })),
      currentHp: 1,
      setCurrentHp: (_hp: number) => set(() => ({ currentHp: _hp })),
      backAttack: false,
      setBackAttack: (_backAttack: boolean) =>
        set(() => ({ backAttack: _backAttack })),
      weakPointAttack: false,
      setWeakpointAttack: (_weakPointAttack: boolean) =>
        set(() => ({ weakPointAttack: _weakPointAttack })),
    }),
    {
      name: "otherInputs",
    }
  )
);
