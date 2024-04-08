"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComboBox, SelectOptionsProp } from "@/components/ui/combo-box";
import { Input } from "@/components/ui/input";
import { getSigilImage, sigilConstants } from "@/constants/gear/sigils";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { SigilSet, TraitLiterals } from "@/types/traits.types";
import Image from "next/image";

export const Sigils = () => {
  const sigilsEquipped = useTraitsStore((state) => state.sigilsEquipped);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>Sigils</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {sigilsEquipped.map((sigilSet, i) => {
            return <SigilsPicker key={i} index={i} sigilSet={sigilSet} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

interface SigilsPickerProps {
  index: number;
  sigilSet: SigilSet;
}
const SigilsPicker = ({ index, sigilSet }: SigilsPickerProps) => {
  const updateSigilSet = useTraitsStore((state) => state.updateSigilSet);

  const options: SelectOptionsProp[] = sigilConstants.map((sigil) => {
    return {
      value: sigil.sigilName,
      label: sigil.sigilName,
    };
  });
  return (
    <div className="flex">
      <div className="flex-1 grid grid-cols-7 gap-2">
        <div className="flex col-span-3">
          <div className="aspect-square h-8 bg-black rounded-md relative">
            <Image
              alt=""
              height={32}
              width={32}
              src={getSigilImage(sigilSet.sigil1 as TraitLiterals) as string}
            />
          </div>
          <ComboBox
            commandEmptyText="None"
            options={options}
            placeHolder="Input Sigils"
            value={sigilSet.sigil1}
            setValue={(value) => {
              updateSigilSet(index, {
                ...sigilSet,
                sigil1: value as TraitLiterals,
              });
            }}
          />
        </div>
        <div className="col-span-3 flex">
          <div className="aspect-square h-8 bg-black rounded-md relative">
            <Image
              alt=""
              height={32}
              width={32}
              src={getSigilImage(sigilSet.sigil2 as TraitLiterals) as string}
            />
          </div>
          <ComboBox
            commandEmptyText="None"
            options={options}
            placeHolder="Input Sigils"
            value={sigilSet.sigil2}
            setValue={(value) => {
              updateSigilSet(index, {
                ...sigilSet,
                sigil2: value as TraitLiterals,
              });
            }}
          />
        </div>

        <Input
          type="number"
          value={sigilSet.level}
          min={0}
          max={15}
          onInput={(e) =>
            updateSigilSet(index, {
              ...sigilSet,
              level: Number(e.currentTarget.value),
            })
          }
        />
      </div>
    </div>
  );
};
