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
import { useTraitsStore } from "@/stores/useTraitsStore";
import { CalculatedTrait, Trait, TraitLiterals } from "@/types/traits.types";
import { Eye, EyeOff } from "lucide-react";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const Traits = () => {
  const sigilsEquipped = useTraitsStore((state) => state.sigilsEquipped);
  const weaponImbues = useTraitsStore((state) => state.weaponImbues);
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const isMaxAwakening = useTraitsStore((state) => state.isMaxAwakening);

  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setTraitsTable = useTraitsStore((state) => state.setTraitsTable);

  const [showZeroLvlTraits, setShowZeroLvlTraits] = useState(false);

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
    // O^n FUNCTION LETS GOOOOOOOOOO >W<
    const calculatedTraits: CalculatedTrait[] = sigilConstants.map((sigil) => {
      const levels: number[] = selectedTraits.map((trait) => {
        if (trait.traitName === sigil.sigilName) {
          return trait.level as number;
        } else {
          return 0;
        }
      });
      // special case for damage cap +5 when max ascension
      const level =
        isMaxAwakening && sigil.sigilName === "Damage Cap"
          ? levels.reduce((partialSum, lvl) => partialSum + lvl, 0) + 5
          : levels.reduce((partialSum, lvl) => partialSum + lvl, 0);
      // prevent actualUseableLevel from exceeding maximum allowed level
      const actualUseableLevel =
        level >= sigil.sigilMaxLevel ? sigil.sigilMaxLevel : level;
      // returns value from sigilLevels taken from maygi's sheet. Also prevents non-sigils from having a value added to it
      const traitValue = sigilLevelLiteral.includes(
        sigil.sigilName as SigilLevelLiteral
      )
        ? sigilLevelValues[`${sigil.sigilName as SigilLevelLiteral}`][
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
  ]);
  return (
    <Card className="rounded-lg col-span-2 bg-background/50">
      <CardHeader className="">
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div className="my-auto">Traits</div>
          <hr className="flex-1 my-auto" />
          <ShowButton
            isShowing={showZeroLvlTraits}
            setIsShowing={setShowZeroLvlTraits}
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <h6 className="font-bold">Damage Sigils</h6>
          <TraitsTable
            // slice operation because traitsTable is based on var sigilConstants. Starts at 1 because index 0 is "None"
            traitsTable={traitsTable.slice(1, 29)}
            showZeroLvlTraits={showZeroLvlTraits}
          />
        </div>
        <div>
          <h6 className="font-bold">Utility/Other Sigils</h6>
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
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Trait</TableHead>
          <TableHead className="text-center">Lvl / Max Lvl</TableHead>
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
                <TableCell>{trait.traitName}</TableCell>
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
