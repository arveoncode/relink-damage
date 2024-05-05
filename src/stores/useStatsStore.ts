import { CalculatedTrait } from "@/types/traits.types";
import { create } from "zustand";

interface StatsStore {
  // Everything pre-calculated before skill data
  traitsTable: CalculatedTrait[];
  setTraitsTable: (_traitsTable: CalculatedTrait[]) => void;
  rawAttack: number;
  setRawAttack: (_setRawAttack: number) => void;
  damageCap: number;
  setDamageCap: (_setNum: number) => void;
  rawPower: number;
  setRawPower: (_setNum: number) => void;
  rawPowerCrit: number;
  setRawPowerCrit: (_setNum: number) => void;
  linkBonus: number;
  setLinkBonus: (_setNum: number) => void;
  sbaBonus: number;
  setSbaBonus: (_setNum: number) => void;
  rangedBonus: number;
  setRangedBonus: (_setNum: number) => void;
  chargedBonus: number;
  setChargedBonus: (_setNum: number) => void;
  skillBonus: number;
  setSkillBonus: (_setNum: number) => void;
  finisherBonus: number;
  setFinisherBonus: (_setNum: number) => void;
  throwBonus: number;
  setThrowBonus: (_setNum: number) => void;
  staminaMod: number;
  setStaminaMod: (_setNum: number) => void;
  normalDamageCap: number;
  setNormalDamageCap: (_setNum: number) => void;
  skillDamageCap: number;
  setSkillDamageCap: (_setNum: number) => void;
  sbaDamageCap: number;
  setSbaDamageCap: (_setNum: number) => void;
  weakPoint: number;
  setWeakPoint: (_setNum: number) => void;
  isWarElemental: boolean;
  setIsWarElemental: (_warElemental: boolean) => void;
  isAwakening: boolean;
  setIsAwakening: (_awakening: boolean) => void;
  isFoF: boolean;
  setIsFoF: (_fof: boolean) => void;
  //patch 1.2.1
  isEternal: boolean;
  setIsEternal: (_isEternal: boolean) => void;
  isBoundary: boolean;
  setIsBoundary: (_isBoundary: boolean) => void;
}

export const useStatsStore = create<StatsStore>()((set) => ({
  traitsTable: [],
  setTraitsTable: (_traitsTable: CalculatedTrait[]) =>
    set(() => ({ traitsTable: _traitsTable })),
  //stats as shown and calculated on sheets
  rawAttack: 0,
  setRawAttack: (_rawAttack: number) => set(() => ({ rawAttack: _rawAttack })),
  damageCap: 0,
  setDamageCap: (_setNum: number) => set(() => ({ damageCap: _setNum })),
  rawPower: 0,
  setRawPower: (_setNum: number) => set(() => ({ rawPower: _setNum })),
  rawPowerCrit: 0,
  setRawPowerCrit: (_setNum: number) => set(() => ({ rawPowerCrit: _setNum })),
  linkBonus: 0,
  setLinkBonus: (_setNum: number) => set(() => ({ linkBonus: _setNum })),
  sbaBonus: 0,
  setSbaBonus: (_setNum: number) => set(() => ({ sbaBonus: _setNum })),
  rangedBonus: 0,
  setRangedBonus: (_setNum: number) => set(() => ({ rangedBonus: _setNum })),
  chargedBonus: 0,
  setChargedBonus: (_setNum: number) => set(() => ({ chargedBonus: _setNum })),
  skillBonus: 0,
  setSkillBonus: (_setNum: number) => set(() => ({ skillBonus: _setNum })),
  finisherBonus: 0,
  setFinisherBonus: (_setNum: number) =>
    set(() => ({ finisherBonus: _setNum })),
  throwBonus: 0,
  setThrowBonus: (_setNum: number) => set(() => ({ throwBonus: _setNum })),
  staminaMod: 0,
  setStaminaMod: (_setNum: number) => set(() => ({ staminaMod: _setNum })),
  normalDamageCap: 0,
  setNormalDamageCap: (_setNum: number) =>
    set(() => ({ normalDamageCap: _setNum })),
  skillDamageCap: 0,
  setSkillDamageCap: (_setNum: number) =>
    set(() => ({ skillDamageCap: _setNum })),
  sbaDamageCap: 0,
  setSbaDamageCap: (_setNum: number) => set(() => ({ sbaDamageCap: _setNum })),
  weakPoint: 0,
  setWeakPoint: (_setNum: number) => set(() => ({ weakPoint: _setNum })),
  isWarElemental: false,
  setIsWarElemental: (_warElemental: boolean) =>
    set(() => ({ isWarElemental: _warElemental })),
  isAwakening: false,
  setIsAwakening: (_awakening: boolean) =>
    set(() => ({ isAwakening: _awakening })),
  isFoF: false,
  setIsFoF: (_fof: boolean) => set(() => ({ isFoF: _fof })),
  isEternal: false,
  setIsEternal: (_isEternal: boolean) => set(() => ({ isEternal: _isEternal })),
  isBoundary: false,
  setIsBoundary: (_isBoundary: boolean) =>
    set(() => ({ isBoundary: _isBoundary })),
}));
