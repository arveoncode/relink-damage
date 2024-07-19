"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComboBox, SelectOptionsProp } from "@/components/ui/combo-box";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { getSigilImage, sigilConstants } from "@/constants/gear/sigils";
import { convertCalculatorToLogsTrait } from "@/constants/logs/traits";
import { useBuildStore } from "@/stores/useBuildStore";
import { TraitLiterals } from "@/types/traits.types";
import Image from "next/image";
import { useTranslation, useTranslationEz } from "../(i18n)/client";
import { useParams } from "next/navigation";
import { useStatsStore } from "@/stores/useStatsStore";
import { useEffect } from "react";

export const Weapon = () => {
  const params = useParams();
  const lng = params.lng as string;
  const traitsTranslate = useTranslation(lng, "traits");
  const t = useTranslationEz("ui/weapon");
  const isTerminus = useBuildStore((state) => state.isTerminus);
  const isMaxAwakening = useBuildStore((state) => state.isMaxAwakening);
  const setIsTerminus = useBuildStore((state) => state.setIsTerminus);
  const setisMaxAwakening = useBuildStore((state) => state.setisMaxAwakening);
  const isEternal = useStatsStore((state) => state.isEternal);

  const weaponImbues = useBuildStore((state) => state.weaponImbues);
  const updateWeaponImbues = useBuildStore((state) => state.updateWeaponImbues);

  const allOptions: SelectOptionsProp[] = sigilConstants.map((sigil) => {
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

  useEffect(() => {
    setIsTerminus(!isEternal);
  }, [isEternal, setIsTerminus]);

  // const wrightstoneMainTraitOptions = sigilConstants.filter((sigil) => {
  //   sigil.sigilName === "Critical Hit Rate" || sigil.sigilName === "Exploiter";
  // });
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>{t("Weapon")}</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {weaponImbues.map((weaponImbue, index) => {
            return (
              <div className="flex gap-2" key={index}>
                <div
                  className={`aspect-square h-8 bg-black rounded-md relative1 ${
                    index !== 0 && "ml-4"
                  }`}
                >
                  <Image
                    alt=""
                    height={32}
                    width={32}
                    src={
                      getSigilImage(
                        weaponImbue.traitName as TraitLiterals
                      ) as string
                    }
                  />
                </div>
                <div className="flex-1 flex gap-2">
                  <div className="flex-1">
                    <ComboBox
                      commandEmptyText="None"
                      options={allOptions}
                      placeHolder="Input Sigils"
                      value={weaponImbues[index].traitName}
                      setValue={(value) => {
                        updateWeaponImbues(index, {
                          ...weaponImbues[index],
                          traitName: value as TraitLiterals,
                        });
                      }}
                    />
                  </div>

                  <Input
                    className="w-16"
                    type="number"
                    value={weaponImbues[index].level}
                    onChange={(e) =>
                      updateWeaponImbues(index, {
                        ...weaponImbues[index],
                        level: Number(e.currentTarget.value),
                      })
                    }
                    min={0}
                    max={20}
                  />
                </div>
              </div>
            );
          })}

          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{t("Terminus")}</p>
              <p className="text-sm text-muted-foreground">
                {t("TerminusDesc")}
              </p>
            </div>
            <Switch
              checked={isTerminus}
              onCheckedChange={(value) => setIsTerminus(value as boolean)}
              disabled={isEternal}
            />
          </div>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {t("Max Awakening Level")}
              </p>
              <p className="text-sm text-muted-foreground">
                {t("MALDesc")}
              </p>
            </div>
            <Switch
              checked={isMaxAwakening}
              onCheckedChange={(value) => setisMaxAwakening(value as boolean)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
