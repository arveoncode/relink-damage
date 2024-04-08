"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { safeDecimalMultiplier } from "@/lib/calculators";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";

export const OtherInputs = () => {
  const otherInputsStore = useOtherInputsStore((state) => state);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>Other Inputs</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">Number of Skills</Label>
            <Select
              onValueChange={(value) => {
                // setFirstSigil(value);
                otherInputsStore.setNumberOfSkills(Number(value));
              }}
              value={otherInputsStore.numberOfSkills.toString()}
            >
              <SelectTrigger className="">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"0"}>0</SelectItem>
                  <SelectItem value={"1"}>1</SelectItem>
                  <SelectItem value={"2"}>2</SelectItem>
                  <SelectItem value={"3"}>3</SelectItem>
                  <SelectItem value={"4"}>4</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">Attack Buffs</Label>
            <Input
              type="number"
              className=""
              min={0}
              step={0.01}
              onInput={(e) => {
                otherInputsStore.setAttackBuffs(Number(e.currentTarget.value));
              }}
              value={otherInputsStore.attackBuffs}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">Defense Debuffs</Label>
            <Input
              type="number"
              className=""
              min={0}
              onInput={(e) => {
                otherInputsStore.setDefDebuffs(
                  Number(e.currentTarget.value) / 100
                );
              }}
              value={safeDecimalMultiplier([otherInputsStore.defDebuffs, 100])}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Combo Active?</Label>
            <Switch
              checked={otherInputsStore.comboActive}
              onCheckedChange={(value) =>
                otherInputsStore.setComboActive(value)
              }
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Back Attack?</Label>
            <Switch
              checked={otherInputsStore.backAttack}
              onCheckedChange={(value) => otherInputsStore.setBackAttack(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Weak Point Attack?</Label>
            <Switch
              checked={otherInputsStore.weakPointAttack}
              onCheckedChange={(value) =>
                otherInputsStore.setWeakpointAttack(value)
              }
            />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between align-middle h-8">
              <Label className="my-auto">Current HP</Label>
              <Label className="my-auto">
                {safeDecimalMultiplier([
                  otherInputsStore.currentHp,
                  100,
                ]).toFixed(2)}
                %
              </Label>
            </div>
            <Slider
              max={1}
              step={0.05}
              value={[otherInputsStore.currentHp]}
              onValueChange={(value) => otherInputsStore.setCurrentHp(value[0])}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
