import { create } from "zustand";
import { CharacterStates, useCharacterStore } from "./useCharacterStore";
import { TraitsStates } from "./useTraitsStore";
import { OtherInputsStates } from "./useOtherInputsStore";
import { persist } from "zustand/middleware";
import { Overmasteries } from "@/types/overmasteries.types";

export interface BuildSlot {
  name: string;
  character: CharacterStates;
  traits: TraitsStates;
  otherInputs: OtherInputsStates;
  overmasteries: Overmasteries;
}

interface BuildSlotsStore {
  slots: BuildSlot[];
  currentSlotIndex: number;
  updateSlot: (_index: number, _buildSlot: BuildSlot) => void;
  addSlot: (_buildSlot: BuildSlot) => void;
  deleteSlot: (_index: number) => void;
  setCurrentSlotIndex: (_index: number) => void;
}

export const useBuildSlotsStore = create<BuildSlotsStore>()(
  persist(
    (set) => ({
      slots: [],
      currentSlotIndex: 0,
      updateSlot: (_index: number, _buildSlot: BuildSlot) =>
        set((state) => {
          const slotsCopy = [...state.slots];
          slotsCopy[_index] = _buildSlot;
          return { slots: slotsCopy };
        }),
      addSlot: (_buildSlot: BuildSlot) =>
        set((state) => ({ slots: [...state.slots, _buildSlot] })),
      deleteSlot: (_index: number) =>
        set((state) => {
          let slotsCopy = [...state.slots];
          slotsCopy.splice(_index, 1);
          return { slots: slotsCopy };
        }),
      setCurrentSlotIndex: (_index: number) =>
        set(() => ({ currentSlotIndex: _index })),
    }),
    {
      name: "slots",
    }
  )
);
