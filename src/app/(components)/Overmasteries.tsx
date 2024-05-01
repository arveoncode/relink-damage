"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { safeDecimalMultiplier } from "@/lib/calculators";
import { useBuildStore } from "@/stores/useBuildStore";
import { useTranslation } from "../i18n/client";
import { useParams } from "next/navigation";

export const Overmasteries = () => {
  const params = useParams();
  const lng = params.lng as string;
  const uiTranslate = useTranslation(lng, "ui");
  const omTranslate = useTranslation(lng, "overmasteries");
  const attack = useBuildStore((state) => state.attack);
  const normalDamageCapUp = useBuildStore((state) => state.normalDamageCapUp);
  const skillDamageCapUp = useBuildStore((state) => state.skillDamageCapUp);
  const sbaDamageCapUp = useBuildStore((state) => state.sbaDamageCapUp);
  const skillDamageUp = useBuildStore((state) => state.skillDamageUp);
  const sbaDamageUp = useBuildStore((state) => state.sbaDamageUp);
  const critHitRate = useBuildStore((state) => state.critHitRate);
  const setAttack = useBuildStore((state) => state.setAttack);
  const setNormalDamageCapUp = useBuildStore(
    (state) => state.setNormalDamageCapUp
  );
  const setSkillDamageCapUp = useBuildStore(
    (state) => state.setSkillDamageCapUp
  );
  const setSbaDamageCapUp = useBuildStore((state) => state.setSbaDamageCapUp);
  const setSkillDamageUp = useBuildStore((state) => state.setSkillDamageUp);
  const setSbaDamageUp = useBuildStore((state) => state.setSbaDamageUp);
  const setCritHitRate = useBuildStore((state) => state.setCritHitRate);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>{uiTranslate.t("Overmasteries")}</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
          <Label className="my-auto">{omTranslate.t("0cf5d0f3.text")}</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={1000}
            step={100}
            onInput={(e) => setAttack(Number(e.currentTarget.value))}
            value={attack}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("06595c52.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setNormalDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([normalDamageCapUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("0b0e4311.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setSkillDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([skillDamageCapUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("149593b8.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setSbaDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([sbaDamageCapUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("426b370b.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setSkillDamageUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([skillDamageUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("4e42646b.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setSbaDamageUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([sbaDamageUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">
            {omTranslate.t("524492e2.text")}
          </Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={1}
            onInput={(e) =>
              setCritHitRate(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([critHitRate, 100])}
          />
        </div>
      </CardContent>
    </Card>
  );
};
