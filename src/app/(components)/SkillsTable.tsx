"use client";

import { charlottaSkills } from "@/constants/character/skills/charlotta";
import { ioSkills } from "@/constants/character/skills/io";
import { baseStatsAtLvl100 } from "@/constants/stats/stats";
import { safeDecimalAdder, safeDecimalMultiplier } from "@/lib/calculators";
import { useStatsStore } from "@/stores/useStatsStore";
import { SkillCalculatedTable, SkillConstant } from "@/types/skill.types";
import { useEffect, useState } from "react";
import { SkillsDataTable } from "./skills-data-table/SkillsDataTable";
import { skillsDataColumns } from "./skills-data-table/SkillsDataColumns";
import { lancelotSkills } from "@/constants/character/skills/lancelot";
import { cagliostroSkills } from "@/constants/character/skills/cagliostro";
import { zetaSkills } from "@/constants/character/skills/zeta";
import { narmayaSkills } from "@/constants/character/skills/narmaya";
import { useBuildStore } from "@/stores/useBuildStore";
import { captainSkills } from "@/constants/character/skills/captain";
import { ferrySkills } from "@/constants/character/skills/ferry";
import { rosettaSkills } from "@/constants/character/skills/rosetta";
import { katalinaSkills } from "@/constants/character/skills/katalina";
import { eugenSkills } from "@/constants/character/skills/eugen";
import { yordarhaSkills } from "@/constants/character/skills/yodarha";
import { ghandagozaSkills } from "@/constants/character/skills/ghandagoza";
import { vaneSkills } from "@/constants/character/skills/vane";
import { percivalSkills } from "@/constants/character/skills/percival";
import { idSkills } from "@/constants/character/skills/id";
import { rackamSkills } from "@/constants/character/skills/rackam";
import { vaseragaSkills } from "@/constants/character/skills/vaseraga";
import { siegfriedSkills } from "@/constants/character/skills/siegfried";
import { useSelectedRowsStore } from "@/stores/useSelectedRowsStore";
import { ExportDialog } from "@/components/layouts/navbar/ExportDialog";
import { tweyenSkills } from "@/constants/character/skills/tweyen";
import { seofonSkills } from "@/constants/character/skills/seofon";
import { characterConstants } from "@/constants/character/characters";
import { sandalphonSkills } from "@/constants/character/skills/sandalphon";

export const SkillsTable = () => {
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const arvessFermare = useBuildStore((state) => state.arvessFermare);
  const butterflies = useBuildStore((state) => state.butterflies);
  const artsLevel = useBuildStore((state) => state.artsLevel);
  const comboActive = useBuildStore((state) => state.comboActive);
  const uniqueSigilActive = useBuildStore((state) => state.uniqueSigilActive);
  const statsStore = useStatsStore((state) => state);
  const overmasteryCrit = useBuildStore((state) => state.critHitRate);
  const isWarpathActive = useBuildStore((state) => state.isWarpathActive);
  const isLinkTime = useBuildStore((state) => state.isLinkTime);
  const enhancedDmgBuff = useBuildStore((state) => state.enhancedDmgBuff);
  const [charData, setCharData] = useState<SkillCalculatedTable[]>([]);
  const echoDmg = useStatsStore((state) => state.echoDmg);
  const setSelectedSkills = useSelectedRowsStore(
    (state) => state.setSelectedSkills
  );

  useEffect(() => {
    function calculateSkills(_skills: SkillConstant[]): SkillCalculatedTable[] {
      const sigilsCrit = statsStore.traitsTable.find(
        (sigil) => sigil.traitName === "Critical Hit Rate"
      )?.value;
      const sigilsLuckyCharge = statsStore.traitsTable.find(
        (sigil) => sigil.traitName === "Lucky Charge"
      )?.value;
      const sigilsTyranny = statsStore.traitsTable.find(
        (sigil) => sigil.traitName === "Tyranny"
      )?.value as number;
      const sigilsSupplementary = statsStore.traitsTable.find(
        (sigil) => sigil.traitName === "Supplementary DMG"
      )?.actualUseableLevel;
      const warpathEquipped = statsStore.traitsTable.find(
        (sigil) => sigil.traitName === "Warpath"
      )?.actualUseableLevel;

      const baseEnhancedDamageModifier: number = safeDecimalAdder([
        enhancedDmgBuff,
        selectedCharacter === "Tweyen" &&
        statsStore.isAwakening &&
        uniqueSigilActive
          ? 0.1
          : 0,
        selectedCharacter === "Captain" &&
        statsStore.isAwakening &&
        artsLevel >= 2
          ? artsLevel >= 4
            ? 0.1
            : artsLevel === 3
            ? 0.075
            : 0.05
          : 0,
        selectedCharacter === "Zeta" && arvessFermare ? 0.0625 : 0,
      ]);

      const charHasWarpathCondition = characterConstants.find(
        (character) => character.characterName === selectedCharacter
      )?.warpathCondition
        ? true
        : false;

      return _skills.map((skill) => {
        //warpath stuff
        const warpathModifier = characterConstants.find(
          (character) => character.characterName === selectedCharacter
        )?.warpathEnhancement as number;
        const warpathCondition = ():
          | string
          | undefined
          | keyof typeof skill.classification => {
          const condition = characterConstants.find(
            (character) => character.characterName === selectedCharacter
          )?.warpathCondition;
          if (skill.skill === condition) {
            return condition;
          } else if (condition?.length === 2) {
            //returns key of skill.classification
            switch (condition) {
              case "Sp":
                return "special";
              case "S2":
                return "sp2";
              case "Ch":
                return "charged";
            }
          } else {
            return undefined;
          }
        };

        const enhancedDamageModifier = safeDecimalAdder([
          baseEnhancedDamageModifier,
          charHasWarpathCondition
            ? skill.skill === warpathCondition() ||
              (skill.classification[
                warpathCondition() as keyof typeof skill.classification
              ] === true &&
                isWarpathActive)
              ? warpathModifier
              : 0
            : isWarpathActive
            ? warpathModifier
            : 0,
        ]);

        const multi = safeDecimalAdder([
          safeDecimalMultiplier([
            skill.classification.linkAttack ? statsStore.linkBonus + 1 : 1,
            skill.classification.skyboundArt
              ? (1 + statsStore.sbaBonus) * (1 + sigilsTyranny)
              : 1,
            skill.classification.ranged ? statsStore.rangedBonus + 1 : 1,
            skill.classification.charged ? statsStore.chargedBonus + 1 : 1,
            skill.classification.skill ? statsStore.skillBonus + 1 : 1,
            skill.classification.finisher ? statsStore.finisherBonus + 1 : 1,
            !skill.classification.skyboundArt ? statsStore.weakPoint + 1 : 1,
            skill.classification.throw ? statsStore.throwBonus + 1 : 1,
            //Character specific multipliers
            selectedCharacter === "Ferry" &&
            statsStore.isAwakening &&
            skill.classification.pet
              ? 1.3
              : 1,
            selectedCharacter === "Lancelot" &&
            statsStore.isAwakening &&
            skill.skill === "Twin Blade Dance"
              ? safeDecimalMultiplier([1.5, 1 + (comboActive ? 0.5 : 0)])
              : 1,
            selectedCharacter === "Zeta" && arvessFermare
              ? safeDecimalAdder([1.3, statsStore.isAwakening ? 0.25 : 0])
              : 1,
            selectedCharacter === "Narmaya" &&
            butterflies >= 1 &&
            skill.classification.special
              ? safeDecimalMultiplier([1.05 ^ Math.min(butterflies, 5)])
              : 1,
            selectedCharacter === "Eugen" &&
            statsStore.isAwakening &&
            skill.skill === "Grenade"
              ? 2
              : 1,
          ]),
        ]);

        const nonCrit = Math.floor(
          statsStore.rawPower *
            (skill.skillRatio +
              (selectedCharacter === "Yodarha" &&
              statsStore.isAwakening &&
              comboActive
                ? 0.3
                : 0)) *
            multi *
            (statsStore.isWarElemental ? 1.2 : 1) *
            (enhancedDamageModifier + 1)
        );

        const crit = Math.floor(
          statsStore.rawPowerCrit *
            (skill.skillRatio +
              (selectedCharacter === "Yodarha" &&
              statsStore.isAwakening &&
              comboActive
                ? 0.3
                : 0)) *
            multi *
            (statsStore.isWarElemental ? 1.2 : 1) *
            (enhancedDamageModifier + 1)
        );

        const critChance =
          (selectedCharacter === "Zeta" &&
            warpathEquipped &&
            (arvessFermare || isWarpathActive)) ||
          skill.classification.oc
            ? 1
            : safeDecimalAdder([
                baseStatsAtLvl100(selectedCharacter).critHitRate,
                overmasteryCrit,
                sigilsCrit ? sigilsCrit : 0,
                skill.classification.charged
                  ? sigilsLuckyCharge
                    ? sigilsLuckyCharge
                    : 0
                  : 0,
              ]);

        const totalDamageCap = Math.floor(
          safeDecimalMultiplier([
            skill.dmgCap,
            statsStore.isWarElemental ? 1.2 : 1,
            enhancedDamageModifier + 1,
            safeDecimalAdder([
              1,
              statsStore.damageCap,
              skill.classification.normal || skill.classification.linkAttack
                ? statsStore.normalDamageCap
                : 0,
              skill.classification.skill ? statsStore.skillDamageCap : 0,
              skill.classification.skyboundArt ? statsStore.sbaDamageCap : 0,
              selectedCharacter === "Percival" &&
              statsStore.isAwakening &&
              skill.skill === "Schlacht"
                ? 0.5
                : 0,
              selectedCharacter === "Ghandagoza" &&
              statsStore.isAwakening &&
              skill.skill === "Raging Fist"
                ? 0.5
                : 0,
              selectedCharacter === "Katalina" &&
              statsStore.isAwakening &&
              skill.classification.special
                ? 0.15
                : 0,
              selectedCharacter === "Ferry" &&
              statsStore.isAwakening &&
              skill.skill === "Onslaught" &&
              skill.modifier === "Release"
                ? 0.45
                : 0,
              selectedCharacter === "Id" &&
              statsStore.isAwakening &&
              skill.classification.special
                ? 0.3
                : 0,
              selectedCharacter === "Zeta" && skill.classification.special
                ? 0.18
                : 0,
              selectedCharacter === "Siegfried" && skill.modifier === "timed"
                ? 0.2
                : 0,
              selectedCharacter === "Rackam" &&
              statsStore.isAwakening &&
              skill.skill === "Bull's Eye Blast"
                ? 0.25
                : 0,
              selectedCharacter === "Io" &&
              skill.skill === "Stargaze" &&
              statsStore.isAwakening &&
              skill.modifier === "I"
                ? 0.5
                : 0,
              selectedCharacter === "Vane" &&
              isLinkTime &&
              skill.classification.sp2
                ? 0.8
                : 0,
            ]),
          ])
        );

        const damagePotential =
          skill.skillRatio <= 0
            ? 0
            : crit >= totalDamageCap
            ? nonCrit >= totalDamageCap
              ? 1
              : critChance < 1
              ? (critChance * Math.min(crit, totalDamageCap) +
                  (1 - critChance) * Math.min(totalDamageCap, nonCrit)) /
                totalDamageCap
              : 1
            : (critChance * Math.min(totalDamageCap, crit) +
                (1 - critChance) * Math.min(totalDamageCap, nonCrit)) /
              totalDamageCap;

        const overcap =
          damagePotential === 1
            ? (critChance * crit + (1 - critChance) * nonCrit) /
                totalDamageCap -
              1
            : 0;

        const supplemental =
          skill.classification.normal || skill.classification.skill
            ? sigilsSupplementary
              ? //(MIN(rawPowerCrit*$C35*$H35*IF(warElemental,1.2,1),$J35)*MIN(1,crit+masteryCrit+INDIRECT("Sigils!$D"&(offset+levelCrit)))+MIN(rawPower*$C35*$H35*IF(warElemental,1.2,1),$J35)*(1-MIN(1,crit+masteryCrit+INDIRECT("Sigils!$D"&(offset+levelCrit)))))*0.2*MIN(1,0.12+levelSupplementary*0.02)
                Math.round(
                  safeDecimalMultiplier([
                    Math.min(
                      statsStore.rawPowerCrit *
                        skill.skillRatio *
                        multi *
                        (statsStore.isWarElemental ? 1.2 : 1),
                      totalDamageCap
                    ) *
                      Math.min(
                        1,
                        baseStatsAtLvl100(selectedCharacter).critHitRate +
                          overmasteryCrit +
                          (sigilsCrit ? sigilsCrit : 0)
                      ) +
                      Math.min(
                        totalDamageCap,
                        statsStore.rawPower *
                          skill.skillRatio *
                          multi *
                          (statsStore.isWarElemental ? 1.2 : 1)
                      ) *
                        (1 -
                          Math.min(
                            1,
                            baseStatsAtLvl100(selectedCharacter).critHitRate +
                              overmasteryCrit +
                              (sigilsCrit ? sigilsCrit : 0)
                          )),
                    0.2 *
                      (echoDmg +
                        (sigilsSupplementary > 0
                          ? Math.min(1, 0.12 + sigilsSupplementary * 0.2)
                          : 0)),
                  ])
                )
              : 0
            : 0;

        const avgTotalDmg = Math.round(
          critChance * Math.min(totalDamageCap, crit) +
            (1 - critChance) * Math.min(totalDamageCap, nonCrit) +
            supplemental
        );
        return {
          skill: skill.skill,
          modifier: skill.modifier,
          skillRatio: skill.skillRatio,
          dmgCap: skill.dmgCap,
          cd: skill.cd,
          classification: skill.classification,
          multi: multi,
          critChance: critChance >= 1 ? 1 : critChance,
          totalDamageCap: totalDamageCap,
          nonCrit: nonCrit,
          crit: crit,
          damagePotential: Math.round(damagePotential * 10000) / 100,
          overcap: Math.round(overcap * 10000) / 100,
          supplemental: supplemental,
          averageTotalDmg: avgTotalDmg,
        };
      });
    }
    switch (selectedCharacter) {
      case "Io":
        setCharData(calculateSkills(ioSkills));
        break;
      case "Zeta":
        setCharData(calculateSkills(zetaSkills));
        break;
      case "Captain":
        setCharData(calculateSkills(captainSkills));
        break;
      case "Narmaya":
        setCharData(calculateSkills(narmayaSkills));
        break;
      case "Rosetta":
        setCharData(calculateSkills(rosettaSkills));
        break;
      case "Cagliostro":
        setCharData(calculateSkills(cagliostroSkills));
        break;
      case "Ferry":
        setCharData(calculateSkills(ferrySkills));
        break;
      case "Lancelot":
        setCharData(calculateSkills(lancelotSkills));
        break;
      case "Rackam":
        setCharData(calculateSkills(rackamSkills));
        break;
      case "Vaseraga":
        setCharData(calculateSkills(vaseragaSkills));
        break;
      case "Siegfried":
        setCharData(calculateSkills(siegfriedSkills));
        break;
      case "Vane":
        setCharData(calculateSkills(vaneSkills));
        break;
      case "Id":
        setCharData(calculateSkills(idSkills));
        break;
      case "Charlotta":
        setCharData(calculateSkills(charlottaSkills));
        break;
      case "Ghandagoza":
        setCharData(calculateSkills(ghandagozaSkills));
        break;
      case "Percival":
        setCharData(calculateSkills(percivalSkills));
        break;
      case "Katalina":
        setCharData(calculateSkills(katalinaSkills));
        break;
      case "Eugen":
        setCharData(calculateSkills(eugenSkills));
        break;
      case "Yodarha":
        setCharData(calculateSkills(yordarhaSkills));
        break;
      case "Tweyen":
        setCharData(calculateSkills(tweyenSkills));
        break;
      case "Seofon":
        setCharData(calculateSkills(seofonSkills));
        break;
      case "Sandalphon":
        setCharData(calculateSkills(sandalphonSkills));
        break;
    }
  }, [
    selectedCharacter,
    statsStore,
    overmasteryCrit,
    arvessFermare,
    butterflies,
    comboActive,
    artsLevel,
    isWarpathActive,
    uniqueSigilActive,
    isLinkTime,
    enhancedDmgBuff,
    echoDmg,
  ]);
  return (
    <div className="flex flex-col gap-4">
      <div>
        <ExportDialog defaultTab="image" />
      </div>
      <SkillsDataTable
        data={charData}
        columns={skillsDataColumns}
        setRowSelectionsForExport={setSelectedSkills}
      />
    </div>
  );
};
