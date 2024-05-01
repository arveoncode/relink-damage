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
import { useBuildStore } from "@/stores/useBuildStore";
import { useTranslation } from "../i18n/client";
import { useParams } from "next/navigation";

export const OtherInputs = () => {
  const params = useParams();
  const lng = params.lng as string;
  const uiTranslate = useTranslation(lng, "ui");
  const numberOfSkills = useBuildStore((state) => state.numberOfSkills);
  const attackBuffs = useBuildStore((state) => state.attackBuffs);
  const defDebuffs = useBuildStore((state) => state.defDebuffs);
  const comboActive = useBuildStore((state) => state.comboActive);
  const currentHp = useBuildStore((state) => state.currentHp);
  const backAttack = useBuildStore((state) => state.backAttack);
  const weakPointAttack = useBuildStore((state) => state.weakPointAttack);
  const isLinkTime = useBuildStore((state) => state.isLinkTime);
  const setNumberOfSkills = useBuildStore((state) => state.setNumberOfSkills);
  const setAttackBuffs = useBuildStore((state) => state.setAttackBuffs);
  const setDefDebuffs = useBuildStore((state) => state.setDefDebuffs);
  const setComboActive = useBuildStore((state) => state.setComboActive);
  const setCurrentHp = useBuildStore((state) => state.setCurrentHp);
  const setBackAttack = useBuildStore((state) => state.setBackAttack);
  const setWeakpointAttack = useBuildStore((state) => state.setWeakpointAttack);
  const setIsLinkTime = useBuildStore((state) => state.setIsLinkTime);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>{uiTranslate.t("Other Inputs")}</div>
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
                setNumberOfSkills(Number(value));
              }}
              value={numberOfSkills.toString()}
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
            <Label className="my-auto">Attack Buffs (%)</Label>
            <Input
              type="number"
              className=""
              min={0}
              step={0.01}
              onInput={(e) => {
                setAttackBuffs(Number(e.currentTarget.value) / 100);
              }}
              value={safeDecimalMultiplier([attackBuffs, 100])}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">Defense Debuffs (%)</Label>
            <Input
              type="number"
              className=""
              min={0}
              onInput={(e) => {
                setDefDebuffs(Number(e.currentTarget.value) / 100);
              }}
              value={safeDecimalMultiplier([defDebuffs, 100])}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Combo Active?</Label>
            <Switch
              checked={comboActive}
              onCheckedChange={(value) => setComboActive(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Back Attack?</Label>
            <Switch
              checked={backAttack}
              onCheckedChange={(value) => setBackAttack(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Weak Point Attack?</Label>
            <Switch
              checked={weakPointAttack}
              onCheckedChange={(value) => setWeakpointAttack(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">Link Time?</Label>
            <Switch
              checked={isLinkTime}
              onCheckedChange={(value) => setIsLinkTime(value)}
            />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between align-middle h-8">
              <Label className="my-auto">Current HP</Label>
              <Label className="my-auto">
                {safeDecimalMultiplier([currentHp, 100]).toFixed(2)}%
              </Label>
            </div>
            <Slider
              max={1}
              step={0.05}
              value={[currentHp]}
              onValueChange={(value) => setCurrentHp(value[0])}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
