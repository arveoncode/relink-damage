"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComboBox, SelectOptionsProp } from "@/components/ui/combo-box";
import { Input } from "@/components/ui/input";
import { getSigilImage, sigilConstants } from "@/constants/gear/sigils";
import { useBuildStore } from "@/stores/useBuildStore";
import { SigilSet, TraitLiterals } from "@/types/traits.types";
import Image from "next/image";
import { useTranslation } from "../(i18n)/client";
import { useParams } from "next/navigation";
import { convertCalculatorToLogsTrait } from "@/constants/logs/traits";

export const Sigils = () => {
  const params = useParams();
  const lng = params.lng as string;
  const uiTranslate = useTranslation(lng, "ui");
  const sigilsEquipped = useBuildStore((state) => state.sigilsEquipped);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>{uiTranslate.t("Sigils")}</div>
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
  const params = useParams();
  const lng = params.lng as string;
  const traitsTranslate = useTranslation(lng, "traits");
  const updateSigilSet = useBuildStore((state) => state.updateSigilSet);

  const options: SelectOptionsProp[] = sigilConstants.map((sigil) => {
    return {
      value: sigil.sigilName,
      label:
        convertCalculatorToLogsTrait(sigil.sigilName) === undefined
          ? sigil.sigilName
          : traitsTranslate.t(
              `${convertCalculatorToLogsTrait(sigil.sigilName)}.text`
            ),
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
