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
import { useTranslationEz } from "../(i18n)/client";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const OtherInputs = () => {
  const t = useTranslationEz("ui/other-inputs");
  const numberOfSkills = useBuildStore((state) => state.numberOfSkills);
  const attackBuffs = useBuildStore((state) => state.attackBuffs);
  const defDebuffs = useBuildStore((state) => state.defDebuffs);
  const comboActive = useBuildStore((state) => state.comboActive);
  const currentHp = useBuildStore((state) => state.currentHp);
  const backAttack = useBuildStore((state) => state.backAttack);
  const weakPointAttack = useBuildStore((state) => state.weakPointAttack);
  const isLinkTime = useBuildStore((state) => state.isLinkTime);
  const isWarpathActive = useBuildStore((state) => state.isWarpathActive);

  const setNumberOfSkills = useBuildStore((state) => state.setNumberOfSkills);
  const setAttackBuffs = useBuildStore((state) => state.setAttackBuffs);
  const setDefDebuffs = useBuildStore((state) => state.setDefDebuffs);
  const setComboActive = useBuildStore((state) => state.setComboActive);
  const setCurrentHp = useBuildStore((state) => state.setCurrentHp);
  const setBackAttack = useBuildStore((state) => state.setBackAttack);
  const setWeakpointAttack = useBuildStore((state) => state.setWeakpointAttack);
  const setIsLinkTime = useBuildStore((state) => state.setIsLinkTime);
  const setIsWarpathActive = useBuildStore((state) => state.setIsWarpathActive);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>{t("Other Inputs")}</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">{t("Number of Skills")}</Label>
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
            <Label className="my-auto">{t("Attack Buffs (%)")}</Label>
            <Input
              type="number"
              className=""
              min={0}
              onInput={(e) => {
                setAttackBuffs(Number(e.currentTarget.value) / 100);
              }}
              value={safeDecimalMultiplier([attackBuffs, 100])}
            />
          </div>
          <EnhancedDmgInput />
          <div className="grid grid-cols-2 gap-4">
            <Label className="my-auto">{t("Defense Debuffs (%)")}</Label>
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
            <Label className="my-auto">{t("Combo Active?")}</Label>
            <Switch
              checked={comboActive}
              onCheckedChange={(value) => setComboActive(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">{t("Back Attack?")}</Label>
            <Switch
              checked={backAttack}
              onCheckedChange={(value) => setBackAttack(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">{t("Weak Point Attack?")}</Label>
            <Switch
              checked={weakPointAttack}
              onCheckedChange={(value) => setWeakpointAttack(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">{t("Link Time?")}</Label>
            <Switch
              checked={isLinkTime}
              onCheckedChange={(value) => setIsLinkTime(value)}
            />
          </div>
          <div className="flex justify-between">
            <Label className="my-auto">{t("Warpath Active?")}</Label>
            <Switch
              checked={isWarpathActive}
              onCheckedChange={(value) => setIsWarpathActive(value)}
            />
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between align-middle h-8">
              <Label className="my-auto">{t("Current HP")}</Label>
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

const EnhancedDmgInput = () => {
  const t = useTranslationEz("ui/other-inputs");
  const enhancedDmgBuff = useBuildStore((state) => state.enhancedDmgBuff);
  const setEnhancedDmgBuff = useBuildStore((state) => state.setEnhancedDmgBuff);
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  function toggleKatalinaPartyBuff() {
    switch (selectedCharacter) {
      case "Captain":
      case "Eugen":
      case "Rosetta":
      case "Charlotta":
      case "Ghandagoza":
      case "Vane":
      case "Percival":
      case "Siegfried":
      case "Yodarha":
      case "Zeta":
      case "Katalina":
        setEnhancedDmgBuff(0.25);
        break;
      case "Lancelot":
      case "Cagliostro":
      case "Id":
      case "Tweyen":
        setEnhancedDmgBuff(0.15);
        break;
      case "Io":
      case "Seofon":
      case "Narmaya":
      case "Ferry":
        setEnhancedDmgBuff(0.1);
        break;
      case "Rackam":
        setEnhancedDmgBuff(0.05);
        break;
      case "Vaseraga":
        setEnhancedDmgBuff(0);
        break;
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="link" className="px-0">
            <div className="flex gap-2">
              <Circle className="h-1 w-1 my-auto" />
              <p>{t("Enhanced DMG (%)")}</p>
            </div>
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <div className="text-xs flex justify-between gap-4">
            <p className="my-auto">{t("Katalina SBA Enhanced DMG")}</p>
            <Button variant="outline" onClick={() => toggleKatalinaPartyBuff()}>
              {t("Buff")}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <Input
        type="number"
        className=""
        min={0}
        onInput={(e) => {
          setEnhancedDmgBuff(Number(e.currentTarget.value) / 100);
        }}
        value={safeDecimalMultiplier([enhancedDmgBuff, 100])}
      />
    </div>
  );
};
