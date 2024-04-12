"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { BuildSlot, useBuildSlotsStore } from "@/stores/useBuildSlotsStore";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Ellipsis, PencilIcon, Plus, Save, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
var hash = require("object-hash");
export const BuildSlotTabs = () => {
  const slots = useBuildSlotsStore((state) => state.slots);
  // const setCurrentSlotIndex = useBuildSlotsStore(
  //   (state) => state.setCurrentSlotIndex
  // );
  const addSlot = useBuildSlotsStore((state) => state.addSlot);
  const characterState = useCharacterStore((state) => state);
  const traitsState = useTraitsStore((state) => state);
  const otherInputsState = useOtherInputsStore((state) => state);
  const overmasteriesState = useOvermasteriesStore((state) => state);

  function saveSlot() {
    addSlot({
      name: `Slot ${slots.length + 1}`,
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
        return <BuildSlotTab key={hash(slot)} buildSlot={slot} index={i} />;
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
  // const traitsState = useTraitsStore((state) => state);
  // const otherInputsState = useOtherInputsStore((state) => state);
  // const overmasteriesState = useOvermasteriesStore((state) => state);

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
        <PopoverContent className="w-48">
          <div className="flex flex-col gap-2">
            <Button variant="default" className="flex gap-2">
              <Save className="my-auto h-4 w-4" />
              <div>Save Build</div>
            </Button>
            <RenameSlotDialog index={index} slot={buildSlot} />
            <DeleteSlotAlertDialog index={index} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const RenameSlotDialog = ({
  index,
  slot,
}: {
  index: number;
  slot: BuildSlot;
}) => {
  const updateSlot = useBuildSlotsStore((state) => state.updateSlot);
  const [newName, setNewName] = useState(slot.name);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <PencilIcon className="my-auto h-4 w-4" />
          Rename Slot
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Rename Slot {`"`}
            {slot.name}
            {`"`}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label>Slot Name</Label>
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.currentTarget.value)}
          />
        </div>
        <DialogFooter>
          <Button
            variant="default"
            onClick={() => updateSlot(index, { ...slot, name: newName })}
          >
            Rename Slot
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const DeleteSlotAlertDialog = ({ index }: { index: number }) => {
  const deleteSlot = useBuildSlotsStore((state) => state.deleteSlot);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="flex gap-2">
          <Trash className="my-auto h-4 w-4" />
          Delete Slot
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Slot</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to delete this slot?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="flex gap-2"
              onClick={() => deleteSlot(index)}
            >
              <Trash className="my-auto h-4 w-4" />
              Delete Slot
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
