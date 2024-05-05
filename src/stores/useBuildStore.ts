import { create } from "zustand";
import { CharacterStates, CharacterStore } from "./useCharacterStore";
import { Character } from "@/types/character.types";
import { OtherInputsStore } from "./useOtherInputsStore";
import { OvermasteriesStore } from "./useOvermasteriesStore";
import { Overmasteries } from "@/types/overmasteries.types";
import { createJSONStorage, persist } from "zustand/middleware";
import { TraitsStates, TraitsStore } from "./useTraitsStore";
import { SigilSet, Trait } from "@/types/traits.types";
import { persistentStorage } from "./zustandHelpers/persistentUrlStorage";

interface BuildStore
  extends CharacterStore,
    OtherInputsStore,
    OvermasteriesStore,
    TraitsStore {}

export const useBuildStore = create(
  persist<BuildStore>(
    (set) => ({
      // Character state default
      selectedCharacter: "Io",
      setSelectedCharacter: (character: Character) =>
        set(() => ({ selectedCharacter: character })),
      gravityWell: false,
      setGravityWell: (gravityWell: boolean) =>
        set(() => ({ gravityWell: gravityWell })),
      arvessFermare: false,
      setArvessFermare: (arvessFermare: boolean) =>
        set(() => ({ arvessFermare: arvessFermare })),
      artsLevel: 0,
      setArtsLevel: (artsLevel: number) =>
        set(() => ({ artsLevel: artsLevel })),
      butterflies: 0,
      setButterflies: (butterflies: number) =>
        set(() => ({ butterflies: butterflies })),
      highestLvlRose: 0,
      setHighestLvlRose: (highestLvlRose: number) =>
        set(() => ({ highestLvlRose: highestLvlRose })),
      rageLevel: 0,
      setRageLevel: (rageLevel: number) =>
        set(() => ({ rageLevel: rageLevel })),
      avatarActive: false,
      setAvatarActive: (_avatarActive: boolean) =>
        set(() => ({ avatarActive: _avatarActive })),
      uniqueSigilActive: false,
      setUniqueSigilActive: (_uniqueSigilActive: boolean) =>
        set(() => ({ uniqueSigilActive: _uniqueSigilActive })),
      setCharacterStates: ({
        selectedCharacter,
        gravityWell,
        arvessFermare,
        artsLevel,
        butterflies,
        highestLvlRose,
        rageLevel,
        avatarActive,
        uniqueSigilActive,
      }: CharacterStates) =>
        set(() => ({
          selectedCharacter: selectedCharacter,
          gravityWell: gravityWell,
          arvessFermare: arvessFermare,
          artsLevel: artsLevel,
          butterflies: butterflies,
          highestLvlRose: highestLvlRose,
          rageLevel: rageLevel,
          avatarActive: avatarActive,
          uniqueSigilActive: uniqueSigilActive,
        })),
      // Other Inputs State
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
      isLinkTime: false,
      setIsLinkTime: (_isLinkTime: boolean) =>
        set(() => ({ isLinkTime: _isLinkTime })),
      // Overmasteries State
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
      // Traits States

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
          sigil2: "DMG Cap",
          level: 15,
        },
        {
          sigil1: "Gamma",
          sigil2: "DMG Cap",
          level: 15,
        },
        {
          sigil1: "Gamma",
          sigil2: "DMG Cap",
          level: 15,
        },
        {
          sigil1: "Beta",
          sigil2: "DMG Cap",
          level: 15,
        },
        {
          sigil1: "Supplementary DMG",
          sigil2: "None",
          level: 15,
        },
        {
          sigil1: "Supplementary DMG",
          sigil2: "None",
          level: 15,
        },
        {
          sigil1: "Supplementary DMG",
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
      setTraitsStates: ({
        sigilsEquipped,
        isTerminus,
        isMaxAwakening,
        weaponImbues,
      }: TraitsStates) =>
        set(() => ({
          sigilsEquipped: sigilsEquipped,
          isTerminus: isTerminus,
          isMaxAwakening: isMaxAwakening,
          weaponImbues: weaponImbues,
        })),
      isWarpathActive: false,
      setIsWarpathActive: (_isWarpathActive) =>
        set(() => ({ isWarpathActive: _isWarpathActive })),
    }),
    {
      name: "build",
      storage: createJSONStorage<BuildStore>(() => persistentStorage),
    }
  )
);
