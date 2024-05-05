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
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Ellipsis, PencilIcon, Plus, Save, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useBuildStore } from "@/stores/useBuildStore";
var hash = require("object-hash");
export const BuildSlotTabs = () => {
  const slots = useBuildSlotsStore((state) => state.slots);
  // const setCurrentSlotIndex = useBuildSlotsStore(
  //   (state) => state.setCurrentSlotIndex
  // );
  const addSlot = useBuildSlotsStore((state) => state.addSlot);
  const buildState = useBuildStore((state) => state);

  function saveSlot() {
    addSlot({
      name: `Slot ${slots.length + 1}`,
      character: {
        selectedCharacter: buildState.selectedCharacter,
        gravityWell: buildState.gravityWell,
        arvessFermare: buildState.arvessFermare,
        artsLevel: buildState.artsLevel,
        butterflies: buildState.butterflies,
        highestLvlRose: buildState.highestLvlRose,
        rageLevel: buildState.rageLevel,
        avatarActive: buildState.avatarActive,
        uniqueSigilActive: buildState.uniqueSigilActive,
      },
      traits: {
        sigilsEquipped: buildState.sigilsEquipped,
        isTerminus: buildState.isTerminus,
        isMaxAwakening: buildState.isMaxAwakening,
        weaponImbues: buildState.weaponImbues,
      },
      otherInputs: {
        numberOfSkills: buildState.numberOfSkills,
        attackBuffs: buildState.attackBuffs,
        defDebuffs: buildState.defDebuffs,
        comboActive: buildState.comboActive,
        currentHp: buildState.currentHp,
        backAttack: buildState.backAttack,
        weakPointAttack: buildState.weakPointAttack,
        isLinkTime: buildState.isLinkTime,
        isWarpathActive: buildState.isWarpathActive,
      },
      overmasteries: {
        attack: buildState.attack,
        normalDamageCapUp: buildState.normalDamageCapUp,
        skillDamageCapUp: buildState.skillDamageCapUp,
        sbaDamageCapUp: buildState.sbaDamageCapUp,
        skillDamageUp: buildState.skillDamageUp,
        sbaDamageUp: buildState.sbaDamageUp,
        critHitRate: buildState.critHitRate,
      },
    });
  }
  return (
    <div className="flex gap-4 flex-wrap">
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
  return (
    <div className="flex">
      <LoadSlotAlertDialog buildSlot={buildSlot} />
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-l-none" variant="outline" size="icon">
            <Ellipsis />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48">
          <div className="flex flex-col gap-2">
            <SaveSlotAlertDialog index={index} slotName={buildSlot.name} />
            <RenameSlotDialog index={index} slot={buildSlot} />
            <DeleteSlotAlertDialog index={index} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const LoadSlotAlertDialog = ({ buildSlot }: { buildSlot: BuildSlot }) => {
  const buildStore = useBuildStore((state) => state);
  function loadSlot() {
    //slected character
    buildStore.setCharacterStates({
      selectedCharacter: buildSlot.character.selectedCharacter,
      gravityWell: buildSlot.character.gravityWell,
      arvessFermare: buildSlot.character.arvessFermare,
      artsLevel: buildSlot.character.artsLevel,
      butterflies: buildSlot.character.butterflies,
      highestLvlRose: buildSlot.character.highestLvlRose,
      rageLevel: buildSlot.character.rageLevel,
      avatarActive: buildSlot.character.avatarActive,
      uniqueSigilActive: buildSlot.character.uniqueSigilActive,
    });
    //sigils && weapons
    buildStore.setTraitsStates({
      sigilsEquipped: buildSlot.traits.sigilsEquipped,
      isTerminus: buildSlot.traits.isTerminus,
      isMaxAwakening: buildSlot.traits.isMaxAwakening,
      weaponImbues: buildSlot.traits.weaponImbues,
    });
    //other inputs
    buildStore.setNumberOfSkills(buildSlot.otherInputs.numberOfSkills);
    buildStore.setAttackBuffs(buildSlot.otherInputs.attackBuffs);
    buildStore.setDefDebuffs(buildSlot.otherInputs.defDebuffs);
    buildStore.setComboActive(buildSlot.otherInputs.comboActive);
    buildStore.setCurrentHp(buildSlot.otherInputs.currentHp);
    buildStore.setBackAttack(buildSlot.otherInputs.backAttack);
    buildStore.setWeakpointAttack(buildSlot.otherInputs.weakPointAttack);
    //overmasteries
    buildStore.setOvermasteriesStates({
      attack: buildSlot.overmasteries.attack,
      normalDamageCapUp: buildSlot.overmasteries.normalDamageCapUp,
      skillDamageCapUp: buildSlot.overmasteries.skillDamageCapUp,
      sbaDamageCapUp: buildSlot.overmasteries.sbaDamageCapUp,
      skillDamageUp: buildSlot.overmasteries.skillDamageUp,
      sbaDamageUp: buildSlot.overmasteries.sbaDamageUp,
      critHitRate: buildSlot.overmasteries.critHitRate,
    });
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="rounded-r-none" variant="outline">
          {buildSlot.name}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>Load Slot</AlertDialogHeader>
        <AlertDialogDescription>
          Do you want to load build slot: {buildSlot.name}?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => loadSlot()}>
            Load Slot
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const SaveSlotAlertDialog = ({
  index,
  slotName,
}: {
  index: number;
  slotName: string;
}) => {
  const updateSlot = useBuildSlotsStore((state) => state.updateSlot);
  const buildState = useBuildStore((state) => state);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" className="flex gap-2">
          <Save className="my-auto h-4 w-4" />
          <div>Save Build</div>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Overwrite Slot</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Do you wish to overwrite this slot with the current build?
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              className="flex gap-2"
              onClick={() =>
                updateSlot(index, {
                  name: slotName,
                  character: {
                    selectedCharacter: buildState.selectedCharacter,
                    gravityWell: buildState.gravityWell,
                    arvessFermare: buildState.arvessFermare,
                    artsLevel: buildState.artsLevel,
                    butterflies: buildState.butterflies,
                    highestLvlRose: buildState.highestLvlRose,
                    rageLevel: buildState.rageLevel,
                    avatarActive: buildState.avatarActive,
                    uniqueSigilActive: buildState.uniqueSigilActive,
                  },
                  traits: {
                    sigilsEquipped: buildState.sigilsEquipped,
                    isTerminus: buildState.isTerminus,
                    isMaxAwakening: buildState.isMaxAwakening,
                    weaponImbues: buildState.weaponImbues,
                  },
                  otherInputs: {
                    numberOfSkills: buildState.numberOfSkills,
                    attackBuffs: buildState.attackBuffs,
                    defDebuffs: buildState.defDebuffs,
                    comboActive: buildState.comboActive,
                    currentHp: buildState.currentHp,
                    backAttack: buildState.backAttack,
                    weakPointAttack: buildState.weakPointAttack,
                    isLinkTime: buildState.isLinkTime,
                    isWarpathActive: buildState.isWarpathActive,
                  },
                  overmasteries: {
                    attack: buildState.attack,
                    normalDamageCapUp: buildState.normalDamageCapUp,
                    skillDamageCapUp: buildState.skillDamageCapUp,
                    sbaDamageCapUp: buildState.sbaDamageCapUp,
                    skillDamageUp: buildState.skillDamageUp,
                    sbaDamageUp: buildState.sbaDamageUp,
                    critHitRate: buildState.critHitRate,
                  },
                })
              }
            >
              <Save className="my-auto h-4 w-4" />
              Save Slot
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
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
