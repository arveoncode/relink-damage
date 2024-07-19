"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SigilLevelLiteral,
  sigilLevelLiteral,
  sigilLevelValues,
} from "@/constants/gear/sigilLevels";
import { getSigilImage, sigilConstants } from "@/constants/gear/sigils";
import { useBuildStore } from "@/stores/useBuildStore";
import { useStatsStore } from "@/stores/useStatsStore";
import { CalculatedTrait, Trait, TraitLiterals } from "@/types/traits.types";
import { Eye, EyeOff } from "lucide-react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTranslation, useTranslationEz } from "../(i18n)/client";
import { convertCalculatorToLogsTrait } from "@/constants/logs/traits";

export const Traits = () => {
  const sigilsEquipped = useBuildStore((state) => state.sigilsEquipped);
  const weaponImbues = useBuildStore((state) => state.weaponImbues);
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const isMaxAwakening = useBuildStore((state) => state.isMaxAwakening);

  const traitsTable = useStatsStore((state) => state.traitsTable);
  const setTraitsTable = useStatsStore((state) => state.setTraitsTable);
  const isEternal = useStatsStore((state) => state.isEternal);

  const [showZeroLvlTraits, setShowZeroLvlTraits] = useState(false);
  const uiTranslate = useTranslationEz("ui");

  useEffect(() => {
    //Need to make this sooper dooper faster >W< *starts twerking*
    let selectedTraits: Trait[] = [];
    sigilsEquipped.map((sigil) => {
      selectedTraits.push({
        traitName: sigil.sigil1 as TraitLiterals,
        level: isMaxAwakening ? sigil.level + 1 : sigil.level,
      });
      selectedTraits.push({
        traitName: sigil.sigil2 as TraitLiterals,
        level: isMaxAwakening ? sigil.level + 1 : sigil.level,
      });
    });
    weaponImbues.map((trait) => {
      selectedTraits.push({
        traitName: trait.traitName as TraitLiterals,
        level: trait.level,
      });
    });
    const calculatedTraits: CalculatedTrait[] = sigilConstants.map((sigil) => {
      const levels: number[] = selectedTraits.map((trait) => {
        if (trait.traitName === sigil.sigilName) {
          return trait.level as number;
        } else {
          return 0;
        }
      });
      // special case for damage cap +5 when max ascension
      let level =
        isMaxAwakening && sigil.sigilName === "DMG Cap"
          ? levels.reduce((partialSum, lvl) => partialSum + lvl, 0) + 5
          : levels.reduce((partialSum, lvl) => partialSum + lvl, 0);
      // special case for Eternals having +25 attack and +15 supp damage levels
      level = isEternal && sigil.sigilName === "ATK" ? level + 25 : level;
      level =
        isEternal && sigil.sigilName === "Supplementary DMG"
          ? level + 15
          : level;
      // prevent actualUseableLevel from exceeding maximum allowed level
      const actualUseableLevel = Math.min(level, sigil.sigilMaxLevel);
      // returns value from sigilLevels taken from maygi's sheet. Also prevents non-sigils from having a value added to it

      const traitValue = sigilLevelLiteral.includes(
        sigil.sigilName as SigilLevelLiteral
      )
        ? // @ts-ignore: Unreachable code error
          sigilLevelValues[`${sigil.sigilName as SigilLevelLiteral}`][
            actualUseableLevel
          ]
        : 0;

      return {
        traitName: sigil.sigilName as TraitLiterals,
        calculatedLevel: level,
        actualUseableLevel: actualUseableLevel,
        maxLevel: sigil.sigilMaxLevel,
        value: traitValue,
      };
    });

    setTraitsTable(calculatedTraits);
  }, [
    sigilsEquipped,
    weaponImbues,
    isTermimus,
    isMaxAwakening,
    setTraitsTable,
    isEternal,
  ]);
  return (
    <Card className="rounded-lg bg-background/50">
      <CardHeader className="">
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div className="my-auto">{uiTranslate("Traits")}</div>
          <hr className="flex-1 my-auto" />
          <ShowButton
            isShowing={showZeroLvlTraits}
            setIsShowing={setShowZeroLvlTraits}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-4">
        <div>
          <h6 className="font-bold">{uiTranslate("Damage Sigils")}</h6>
          <TraitsTable
            // slice operation because traitsTable is based on var sigilConstants. Starts at 1 because index 0 is "None"
            traitsTable={traitsTable.slice(1, 29)}
            showZeroLvlTraits={showZeroLvlTraits}
          />
        </div>
        <div>
          <h6 className="font-bold">{uiTranslate("Utility/Other Sigils")}</h6>
          <TraitsTable
            // Starts at 29 to split attack from other utility sigils"
            traitsTable={traitsTable.slice(29, sigilConstants.length)}
            showZeroLvlTraits={showZeroLvlTraits}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const ShowButton = ({
  isShowing,
  setIsShowing,
}: {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" onClick={() => setIsShowing(!isShowing)}>
            {isShowing ? <EyeOff /> : <Eye />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Show/hide level 0 traits</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TraitsTable = ({
  traitsTable,
  showZeroLvlTraits,
}: {
  traitsTable: CalculatedTrait[];
  showZeroLvlTraits: boolean;
}) => {
  const params = useParams();
  const lng = params.lng as string;
  const traitsTranslate = useTranslation(lng, "traits");
  const uiTranslate = useTranslationEz("ui");
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>{uiTranslate("Trait")}</TableHead>
          <TableHead className="text-center">{uiTranslate("Lvl / Max Lvl")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {traitsTable.map((trait, i) => {
          if (showZeroLvlTraits || trait.calculatedLevel !== 0) {
            return (
              <TableRow key={i}>
                <TableCell className="pr-2">
                  <div className="aspect-square h-8 bg-black rounded-md relative">
                    <Image
                      alt=""
                      height={32}
                      width={32}
                      src={
                        getSigilImage(
                          trait.traitName as TraitLiterals
                        ) as string
                      }
                    />
                  </div>
                </TableCell>
                <TableCell>
                  {convertCalculatorToLogsTrait(trait.traitName) === undefined
                    ? trait.traitName
                    : traitsTranslate.t(
                        `${convertCalculatorToLogsTrait(trait.traitName)}.text`
                      )}
                </TableCell>
                <TableCell
                  className={`text-right px-4 ${
                    trait.actualUseableLevel === trait.maxLevel &&
                    "bg-green-200"
                  }`}
                >
                  <div className=" flex gap-1 justify-center">
                    <div className="font-bold">{trait.actualUseableLevel}</div>
                    <div>/</div>
                    <div>{trait.maxLevel}</div>
                  </div>
                </TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    </Table>
  );
};
