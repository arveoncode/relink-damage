"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
          <Label className="my-auto col-span-2">Normal DMG Cap Up</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setNormalDamageCapUp(
                Number(e.currentTarget.value)
              )
            }
            value={overmasteriesStore.normalDamageCapUp}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Skill DMG Cap Up</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setSkillDamageCapUp(
                Number(e.currentTarget.value)
              )
            }
            value={overmasteriesStore.skillDamageCapUp}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">SBA DMG Cap Up</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setSbaDamageCapUp(
                Number(e.currentTarget.value)
              )
            }
            value={overmasteriesStore.sbaDamageCapUp}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Skill DMG Up</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setSkillDamageUp(Number(e.currentTarget.value))
            }
            value={overmasteriesStore.skillDamageUp}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">SBA Damage Up</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setSbaDamageUp(Number(e.currentTarget.value))
            }
            value={overmasteriesStore.sbaDamageUp}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Label className="my-auto col-span-2">Crit Hit Rate</Label>
          <Input
            type="number"
            className=""
            min={0}
            max={0.2}
            step={0.04}
            onInput={(e) =>
              overmasteriesStore.setCritHitRate(Number(e.currentTarget.value))
            }
            value={overmasteriesStore.critHitRate}
          />
        </div>
      </CardContent>
    </Card>
  );
};
