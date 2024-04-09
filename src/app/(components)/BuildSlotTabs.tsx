"use client";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { BuildSlot, useBuildSlotsStore } from "@/stores/useBuildSlotsStore";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Ellipsis, PencilIcon, Plus, Save, Trash } from "lucide-react";

export const BuildSlotTabs = () => {
  const slots = useBuildSlotsStore((state) => state.slots);
  const setCurrentSlotIndex = useBuildSlotsStore(
    (state) => state.setCurrentSlotIndex
  );
  const addSlot = useBuildSlotsStore((state) => state.addSlot);
  const characterState = useCharacterStore((state) => state);
  const traitsState = useTraitsStore((state) => state);
  const otherInputsState = useOtherInputsStore((state) => state);
  const overmasteriesState = useOvermasteriesStore((state) => state);

  function saveSlot() {
    addSlot({
      name: "Slot 1",
      character: {
        selectedCharacter: characterState.selectedCharacter,
        gravityWell: characterState.gravityWell,
        arvessFermare: characterState.arvessFermare,
        artsLevel: characterState.artsLevel,
        butterflies: characterState.butterflies,
        highestLvlRose: characterState.highestLvlRose,
      },
      traits: {
        sigilsEquipped: traitsState.sigilsEquipped,
        isTerminus: traitsState.isTerminus,
        isMaxAwakening: traitsState.isMaxAwakening,
        weaponImbues: traitsState.weaponImbues,
        traitsTable: traitsState.traitsTable,
      },
      otherInputs: {
        numberOfSkills: otherInputsState.numberOfSkills,
        attackBuffs: otherInputsState.attackBuffs,
        defDebuffs: otherInputsState.defDebuffs,
        comboActive: otherInputsState.comboActive,
        currentHp: otherInputsState.currentHp,
        backAttack: otherInputsState.backAttack,
        weakPointAttack: otherInputsState.weakPointAttack,
      },
      overmasteries: {
        attack: overmasteriesState.attack,
        normalDamageCapUp: overmasteriesState.normalDamageCapUp,
        skillDamageCapUp: overmasteriesState.skillDamageCapUp,
        sbaDamageCapUp: overmasteriesState.sbaDamageCapUp,
        skillDamageUp: overmasteriesState.skillDamageUp,
        sbaDamageUp: overmasteriesState.sbaDamageUp,
        critHitRate: overmasteriesState.critHitRate,
      },
    });
  }
  return (
    <div className="flex gap-4">
      {slots.map((slot, i) => {
        return <BuildSlotTab key={i} buildSlot={slot} index={i} />;
      })}

      <Button size="icon" variant="outline" onClick={() => saveSlot()}>
        <Plus />
      </Button>
    </div>
  );
};

const BuildSlotTab = ({
  buildSlot,
  index,
}: {
  buildSlot: BuildSlot;
  index: number;
}) => {
  const currentSlotIndex = useBuildSlotsStore(
    (state) => state.currentSlotIndex
  );
  const characterState = useCharacterStore((state) => state);
  const traitsState = useTraitsStore((state) => state);
  const otherInputsState = useOtherInputsStore((state) => state);
  const overmasteriesState = useOvermasteriesStore((state) => state);
  const deleteSlot = useBuildSlotsStore((state) => state.deleteSlot);
  function loadSlot() {
    characterState.setSelectedCharacter(buildSlot.character.selectedCharacter);
  }
  return (
    <div className="flex">
      <Button
        className="rounded-r-none"
        variant="outline"
        disabled={currentSlotIndex === index}
        onClick={() => loadSlot()}
      >
        {buildSlot.name}
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-l-none" variant="outline" size="icon">
            <Ellipsis />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-2">
            <Button variant="ghost" className="flex gap-2">
              <Save />
              <div>Save Build</div>
            </Button>
            <Button variant="ghost" className="flex gap-2">
              <PencilIcon />
              Rename Slot
            </Button>
            <Button
              variant="ghost"
              className="flex gap-2"
              onClick={() => deleteSlot(index)}
            >
              <Trash />
              Delete Slot
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
