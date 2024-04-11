import { Overmasteries } from "@/types/overmasteries.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface OvermasteriesStore extends Overmasteries {
  setAttack: (attack: number) => void;
  setNormalDamageCapUp: (normalDamageCapUp: number) => void;
  setSkillDamageCapUp: (skillDamageCapUp: number) => void;
  setSbaDamageCapUp: (sbaDamageCapUp: number) => void;
  setSkillDamageUp: (skillDamage: number) => void;
  setSbaDamageUp: (sbaDamage: number) => void;
  setCritHitRate: (critHitRate: number) => void;
  setOvermasteriesStates: ({
    attack,
    normalDamageCapUp,
    skillDamageCapUp,
    sbaDamageCapUp,
    skillDamageUp,
    sbaDamageUp,
    critHitRate,
  }: Overmasteries) => void;
}

export const useOvermasteriesStore = create<OvermasteriesStore>()(
  persist(
    (set) => ({
      attack: 0,
      setAttack: (attack: number) => set(() => ({ attack: attack })),
      normalDamageCapUp: 0.2,
      setNormalDamageCapUp: (normalDamageCapUp: number) =>
        set(() => ({ normalDamageCapUp: normalDamageCapUp })),
      skillDamageCapUp: 0.2,
      setSkillDamageCapUp: (skillDamageCapUp: number) =>
        set(() => ({ skillDamageCapUp: skillDamageCapUp })),
      sbaDamageCapUp: 0,
      setSbaDamageCapUp: (sbaDamageCapUp: number) =>
        set(() => ({ sbaDamageCapUp: sbaDamageCapUp })),
      skillDamageUp: 0,
      setSkillDamageUp: (skillDamage: number) =>
        set(() => ({ skillDamageUp: skillDamage })),
      sbaDamageUp: 0,
      setSbaDamageUp: (sbaDamage: number) =>
        set(() => ({ sbaDamageUp: sbaDamage })),
      critHitRate: 0.2,
      setCritHitRate: (critHitRate: number) =>
        set(() => ({ critHitRate: critHitRate })),
      setOvermasteriesStates: ({
        attack,
        normalDamageCapUp,
        skillDamageCapUp,
        sbaDamageCapUp,
        skillDamageUp,
        sbaDamageUp,
        critHitRate,
      }: Overmasteries) =>
        set(() => ({
          attack: attack,
          normalDamageCapUp: normalDamageCapUp,
          skillDamageCapUp: skillDamageCapUp,
          sbaDamageCapUp: sbaDamageCapUp,
          skillDamageUp: skillDamageUp,
          sbaDamageUp: sbaDamageUp,
          critHitRate: critHitRate,
        })),
    }),
    { name: "overmasteries" }
  )
);
