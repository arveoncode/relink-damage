"use client";
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
import { useBuildStore } from "@/stores/useBuildStore";
import { CharacterStates } from "@/stores/useCharacterStore";
import { TraitsStates } from "@/stores/useTraitsStore";
import { LogsData } from "@/types/logs.types";
import { Overmasteries } from "@/types/overmasteries.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const JSURL = require("jsurl");

export const LogsImporter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const logsdata = searchParams.get("logsdata");
  const build = searchParams.get("build");
  const [characterTBI, setCharacterTBI] = useState<CharacterStates | undefined>(
    undefined
  );
  const [overmasteriesTBI, setOvermasteriesTBI] = useState<
    Overmasteries | undefined
  >(undefined);
  const [traitsTBI, setTraitsTBI] = useState<TraitsStates | undefined>(
    undefined
  );
  const setCharacterStates = useBuildStore((state) => state.setCharacterStates);
  const setOvermasteriesStates = useBuildStore(
    (state) => state.setOvermasteriesStates
  );
  const setTraitsStates = useBuildStore((state) => state.setTraitsStates);

  useEffect(() => {
    if (logsdata && searchParams.has("logsdata")) {
      try {
        const logsData = JSURL.parse(logsdata) as LogsData;

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
            rageLevel: 0,
          });
          setTraitsTBI({
            sigilsEquipped: logsData.sigils.map((ldSigils) => {
              return {
                sigil1: convertLogsToCalculatorTrait(
                  ldSigils.firstTraitId.toString(16).length === 8
                    ? (ldSigils.firstTraitId.toString(16) as LogsTraitsIDs)
                    : (`0${ldSigils.firstTraitId.toString(
                        16
                      )}` as LogsTraitsIDs)
                ),
                sigil2: convertLogsToCalculatorTrait(
                  ldSigils.secondTraitId.toString(16).length === 8
                    ? (ldSigils.secondTraitId.toString(16) as LogsTraitsIDs)
                    : (`0${ldSigils.secondTraitId.toString(
                        16
                      )}` as LogsTraitsIDs)
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
          const sbaDamageCapUp = logsOMToCalculator(
            "Skybound Art Damage Cap Up"
          );
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
      }
    }
    //   const sampleJSON: Partial<typeof sampleImport> = sampleImport;
    //   //   delete sampleJSON["displayName"];
    //   //   delete sampleJSON["characterName"];
    //   const jsonstring = JSURL.stringify(sampleJSON);
    //   console.log(jsonstring);
    //   const jsonified = JSURL.parse(jsonstring);
    //   console.log(jsonified);
  }, [searchParams, logsdata]);

  useEffect(() => {
    if (characterTBI && overmasteriesTBI && traitsTBI) {
      setCharacterStates(characterTBI);
      setTraitsStates(traitsTBI);
      setOvermasteriesStates(overmasteriesTBI);
    }
  }, [
    characterTBI,
    overmasteriesTBI,
    traitsTBI,
    setCharacterStates,
    setTraitsStates,
    setOvermasteriesStates,
  ]);

  // useEffect(() => {
  //   if (build !== null && logsdata !== null) {
  //     // remove logsdata search params after build search params has been set
  //     console.log(build);
  //     console.log(logsdata);
  //     console.log("search params cleared");
  //     router.replace(pathname);
  //   }
  // }, [build, logsdata, router, pathname]);

  return <></>;
};

// sample
// http://localhost:3000/?logsdata=~(actorIndex~4801~displayName~'**3042**306e**5922**3092**306a**305e**3063**3066~characterName~'Narmaya~characterType~'Pl1400~sigils~(~(firstTraitId~699431915~firstTraitLevel~15~secondTraitId~3696775008~secondTraitLevel~15~sigilId~2974014182~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~9993~notificationEnum~3)~(firstTraitId~2788919757~firstTraitLevel~15~secondTraitId~4051194041~secondTraitLevel~15~sigilId~2826510479~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~6483~notificationEnum~3)~(firstTraitId~1280871463~firstTraitLevel~15~secondTraitId~2289754288~secondTraitLevel~15~sigilId~3666949793~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~963~notificationEnum~3)~(firstTraitId~1552297491~firstTraitLevel~14~secondTraitId~3696775008~secondTraitLevel~14~sigilId~1144547182~equippedCharacter~3875879193~sigilLevel~14~acquisitionCount~16398~notificationEnum~3)~(firstTraitId~1552297491~firstTraitLevel~14~secondTraitId~3696775008~secondTraitLevel~14~sigilId~1144547182~equippedCharacter~3875879193~sigilLevel~14~acquisitionCount~17042~notificationEnum~3)~(firstTraitId~3696775008~firstTraitLevel~15~secondTraitId~612907763~secondTraitLevel~15~sigilId~1423501828~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~6785~notificationEnum~3)~(firstTraitId~1470847760~firstTraitLevel~15~secondTraitId~2335962636~secondTraitLevel~15~sigilId~56249821~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~7117~notificationEnum~3)~(firstTraitId~1470847760~firstTraitLevel~15~secondTraitId~2515794566~secondTraitLevel~15~sigilId~56249821~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~3962~notificationEnum~3)~(firstTraitId~1470847760~firstTraitLevel~15~secondTraitId~831329001~secondTraitLevel~15~sigilId~56249821~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~7184~notificationEnum~3)~(firstTraitId~2373493147~firstTraitLevel~15~secondTraitId~801700863~secondTraitLevel~15~sigilId~1167971010~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~1909~notificationEnum~3)~(firstTraitId~1911626395~firstTraitLevel~15~secondTraitId~99806428~secondTraitLevel~15~sigilId~2761097132~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~3399~notificationEnum~3)~(firstTraitId~3940753899~firstTraitLevel~15~secondTraitId~3868870292~secondTraitLevel~15~sigilId~713401538~equippedCharacter~3875879193~sigilLevel~15~acquisitionCount~2421~notificationEnum~3))~isOnline~false~weaponInfo~(weaponId~2756620724~starLevel~6~plusMarks~99~awakeningLevel~10~trait1Id~2373493147~trait1Level~10~trait2Id~99806428~trait2Level~6~trait3Id~3231160855~trait3Level~5~wrightstoneId~1756474947~weaponLevel~150~weaponHp~99~weaponAttack~2285)~overmasteryInfo~(overmasteries~(~(id~1136089117~flags~64~value~10)~(id~2622837811~flags~512~value~20)~(id~1170626407~flags~512~value~20)~(id~2593636425~flags~512~value~20)))~playerStats~(level~100~totalHp~30152~totalAttack~25288~stunPower~13~criticalRate~100~totalPower~22154))
