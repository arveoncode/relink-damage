"use client";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { getCharacterImage } from "@/constants/character/characters";
import {
  LogsCharacterTypes,
  convertLogsToCalculatorCharacter,
  logsCharacterTypesArray,
} from "@/constants/logs/characters";
import { logsOvermasteries } from "@/constants/logs/overmasteries";
import {
  LogsTraitsIDs,
  convertLogsToCalculatorTrait,
} from "@/constants/logs/traits";
import { safeDecimalAdder, safeDecimalMultiplier } from "@/lib/calculators";
import { CharacterStates, useCharacterStore } from "@/stores/useCharacterStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { TraitsStates, useTraitsStore } from "@/stores/useTraitsStore";
import { LogsData } from "@/types/logs.types";
import { Overmasteries } from "@/types/overmasteries.types";
import { Import } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImportDialog = () => {
  const setCharacterStates = useCharacterStore(
    (state) => state.setCharacterStates
  );
  const setOvermasteriesStates = useOvermasteriesStore(
    (state) => state.setOvermasteriesStates
  );
  const setTraitsStates = useTraitsStore((state) => state.setTraitsStates);
  const [logsInput, setLogsInput] = useState("");
  const [logsInputError, setLogsInputError] = useState<null | string>(null);
  // TBI -> To be imported
  const [characterTBI, setCharacterTBI] = useState<CharacterStates | undefined>(
    undefined
  );
  const [overmasteriesTBI, setOvermasteriesTBI] = useState<
    Overmasteries | undefined
  >(undefined);

  const [traitsTBI, setTraitsTBI] = useState<TraitsStates | undefined>(
    undefined
  );

  function validateFromLogs() {
    try {
      const logsData = JSON.parse(logsInput) as LogsData;
      setLogsInputError(null);

      // Validators
      if (
        logsCharacterTypesArray.includes(
          logsData.characterType as LogsCharacterTypes
        )
      ) {
        setCharacterTBI({
          selectedCharacter: convertLogsToCalculatorCharacter(
            logsData.characterType as LogsCharacterTypes
          ),
          artsLevel: 4,
          highestLvlRose: 4,
          arvessFermare: true,
          butterflies: 6,
          gravityWell: true,
        });
        setTraitsTBI({
          sigilsEquipped: logsData.sigils.map((ldSigils) => {
            return {
              sigil1: convertLogsToCalculatorTrait(
                ldSigils.firstTraitId.toString(16) as LogsTraitsIDs
              ),
              sigil2: convertLogsToCalculatorTrait(
                ldSigils.secondTraitId.toString(16) as LogsTraitsIDs
              ),
              level: ldSigils.sigilLevel,
            };
          }),
          isTerminus: true,
          isMaxAwakening: true,
          weaponImbues: [
            {
              traitName: convertLogsToCalculatorTrait(
                logsData.weaponInfo.trait1Id.toString(16) as LogsTraitsIDs
              ),
              level: logsData.weaponInfo.trait1Level,
            },
            {
              traitName: convertLogsToCalculatorTrait(
                logsData.weaponInfo.trait2Id.toString(16) as LogsTraitsIDs
              ),
              level: logsData.weaponInfo.trait2Level,
            },
            {
              traitName: convertLogsToCalculatorTrait(
                logsData.weaponInfo.trait3Id.toString(16) as LogsTraitsIDs
              ),
              level: logsData.weaponInfo.trait3Level,
            },
          ],
        });

        const logsOMToCalculator = (_text: string) => {
          return safeDecimalAdder(
            logsData.overmasteryInfo.overmasteries.map((ldom) => {
              if (
                // @ts-ignore: Not gonna typesafe this thing anymore lmao
                logsOvermasteries[ldom.id.toString(16)].text === _text
              ) {
                return ldom.value;
              } else {
                return 0;
              }
            })
          );
        };

        const attack = logsOMToCalculator("Attack Power Up");
        const normalDamageCapUp = logsOMToCalculator(
          "Normal Attack Damage Cap Up"
        );
        const skillDamageCapUp = logsOMToCalculator("Skill Damage Cap Up");
        const sbaDamageCapUp = logsOMToCalculator("Skybound Art Damage Cap Up");
        const skillDamageUp = logsOMToCalculator("Skill Damage Up");
        const sbaDamageUp = logsOMToCalculator("Skybound Art Damage Up");
        const critHitRate = logsOMToCalculator("Critical Hit Rate Up");
        setOvermasteriesTBI({
          attack: attack,
          normalDamageCapUp: safeDecimalMultiplier([normalDamageCapUp, 0.01]),
          skillDamageCapUp: safeDecimalMultiplier([skillDamageCapUp, 0.01]),
          sbaDamageCapUp: safeDecimalMultiplier([sbaDamageCapUp, 0.01]),
          skillDamageUp: safeDecimalMultiplier([skillDamageUp, 0.01]),
          sbaDamageUp: safeDecimalMultiplier([sbaDamageUp, 0.01]),
          critHitRate: safeDecimalMultiplier([critHitRate, 0.01]),
        });
      }
    } catch (e) {
      console.log(e);
      setLogsInputError(JSON.stringify(e));
    }
  }

  function importData() {
    if (characterTBI && overmasteriesTBI && traitsTBI) {
      setCharacterStates(characterTBI);
      setTraitsStates(traitsTBI);
      setOvermasteriesStates(overmasteriesTBI);
    }
  }

  useEffect(() => {
    console.log(traitsTBI);
  }, [traitsTBI]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Import className="mr-2 h-4 w-4" />
          Import Build
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <Tabs defaultValue="from-logs">
          <DialogHeader>
            <div className="flex">
              <TabsList>
                {/* <TabsTrigger value="from-app">
                  Import from Calculator
                </TabsTrigger> */}
                <TabsTrigger value="from-logs">
                  Import from GBFR-Logs
                </TabsTrigger>
              </TabsList>
            </div>
          </DialogHeader>
          <TabsContent value="from-app"></TabsContent>
          <TabsContent value="from-logs">
            <div className="grid gap-4 grid-cols-2">
              <div className="flex flex-col gap-4 py-4">
                <div className="text-xs ">
                  Import character, sigils, and overmasteries from logs. Note
                  that not all sigils and overmasteries will be imported.
                </div>
                <Textarea
                  className="resize-none flex-1"
                  placeholder="Paste character data from GBFR-Logs"
                  onChange={(e) => setLogsInput(e.currentTarget.value)}
                  value={logsInput}
                />
                {logsInputError && (
                  <Alert variant="destructive">Error parsing JSON</Alert>
                )}
                <Button onClick={() => validateFromLogs()}>
                  Validate Data
                </Button>
              </div>
              <div className="py-4 flex flex-col gap-4">
                <div className="text-xs ">
                  If the correct character image appears here, it means the data
                  has been validated lol.
                </div>
                {characterTBI ? (
                  <div className="relative aspect-square">
                    <Image
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                      src={
                        getCharacterImage(
                          characterTBI?.selectedCharacter
                        ) as string
                      }
                    />
                  </div>
                ) : (
                  <Skeleton className="aspect-square h-full w-full bg-slate-50" />
                )}
                <Button
                  disabled={!characterTBI || !overmasteriesTBI || !traitsTBI}
                  onClick={() => importData()}
                >
                  Import
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
