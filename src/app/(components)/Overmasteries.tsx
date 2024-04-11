"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { safeDecimalMultiplier } from "@/lib/calculators";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";

export const Overmasteries = () => {
  const overmasteriesStore = useOvermasteriesStore((state) => state);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>Overmasteries</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-4">
          <Label className="my-auto">Attack</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={1000}
            step={100}
            onInput={(e) =>
              overmasteriesStore.setAttack(Number(e.currentTarget.value))
            }
            value={overmasteriesStore.attack}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Normal DMG Cap Up (%)</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setNormalDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([
              overmasteriesStore.normalDamageCapUp,
              100,
            ])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Skill DMG Cap Up (%)</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setSkillDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([
              overmasteriesStore.skillDamageCapUp,
              100,
            ])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">SBA DMG Cap Up (%)</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setSbaDamageCapUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([
              overmasteriesStore.sbaDamageCapUp,
              100,
            ])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Skill DMG Up (%)</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setSkillDamageUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([
              overmasteriesStore.skillDamageUp,
              100,
            ])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">SBA Damage Up (%)</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setSbaDamageUp(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([overmasteriesStore.sbaDamageUp, 100])}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Crit Hit Rate</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={20}
            step={4}
            onInput={(e) =>
              overmasteriesStore.setCritHitRate(
                safeDecimalMultiplier([Number(e.currentTarget.value), 0.01])
              )
            }
            value={safeDecimalMultiplier([overmasteriesStore.critHitRate, 100])}
          />
        </div>
      </CardContent>
    </Card>
  );
};
