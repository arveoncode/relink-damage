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

export const SkillsTable = () => {
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const arvessFermare = useBuildStore((state) => state.arvessFermare);
  const butterflies = useBuildStore((state) => state.butterflies);
  const comboActive = useBuildStore((state) => state.comboActive);
  const statsStore = useStatsStore((state) => state);
  const overmasteryCrit = useBuildStore((state) => state.critHitRate);
  // const traitsTable = useStatsStore((state) => state.traitsTable);
  const [charData, setCharData] = useState<SkillCalculatedTable[]>([]);

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
        (sigil) => sigil.traitName === "Supplementary Damage"
      )?.actualUseableLevel;

      return _skills.map((skill) => {
        const multi = safeDecimalAdder([
          // 1,
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
            selectedCharacter === "Yodarha" &&
            statsStore.isAwakening &&
            comboActive
              ? 1.3
              : 1,
            selectedCharacter === "Zeta" && arvessFermare
              ? safeDecimalAdder([1.3, statsStore.isAwakening ? 0.25 : 0])
              : 1,
            selectedCharacter === "Narmaya" &&
            butterflies >= 1 &&
            skill.classification.special
              ? safeDecimalMultiplier([1.05 ^ Math.min(butterflies, 5)])
              : 1,
          ]),
        ]);

        const nonCrit = Math.floor(
          safeDecimalMultiplier([
            multi,
            skill.skillRatio,
            statsStore.rawPower,
            statsStore.isWarElemental ? 1.2 : 1,
          ])
        );

        const crit = Math.floor(
          safeDecimalMultiplier([
            multi,
            skill.skillRatio,
            statsStore.rawPowerCrit,
            statsStore.isWarElemental ? 1.2 : 1,
          ])
        );

        const critChance = safeDecimalAdder([
          baseStatsAtLvl100.critHitRate,
          overmasteryCrit,
          sigilsCrit ? sigilsCrit : 0,
          skill.classification.charged
            ? sigilsLuckyCharge
              ? sigilsLuckyCharge
              : 0
            : 0,
        ]);

        const totalDamageCap = safeDecimalMultiplier([
          skill.dmgCap,
          safeDecimalAdder([
            1,
            statsStore.damageCap,
            skill.classification.normal || skill.classification.linkAttack
              ? statsStore.normalDamageCap
              : 0,
            skill.classification.skill ? statsStore.skillDamageCap : 0,
            skill.classification.skyboundArt ? statsStore.sbaDamageCap : 0,
          ]),
          statsStore.isWarElemental ? 1.2 : 1,
        ]);

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
                        baseStatsAtLvl100.critHitRate +
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
                            baseStatsAtLvl100.critHitRate +
                              overmasteryCrit +
                              (sigilsCrit ? sigilsCrit : 0)
                          )),
                    0.2,
                    Math.min(1, 0.12 + sigilsSupplementary * 0.2),
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
        setCharData([]);
        break;
      case "Narmaya":
        setCharData(calculateSkills(narmayaSkills));
        break;
      case "Rosetta":
        setCharData([]);
        break;
      case "Cagliostro":
        setCharData(calculateSkills(cagliostroSkills));
        break;
      case "Ferry":
        setCharData([]);
        break;
      case "Lancelot":
        setCharData(calculateSkills(lancelotSkills));
        break;
      case "Rackam":
        setCharData([]);
        break;
      case "Vaseraga":
        setCharData([]);
        break;
      case "Siegfried":
        setCharData([]);
        break;
      case "Vane":
        setCharData([]);
        break;
      case "Id":
        setCharData([]);
        break;
      case "Charlotta":
        setCharData(calculateSkills(charlottaSkills));
        break;
      case "Ghandagoza":
        setCharData([]);
        break;
      case "Percival":
        setCharData([]);
        break;
      case "Katalina":
        setCharData([]);
        break;
      case "Eugen":
        setCharData([]);
        break;
      case "Yodarha":
        setCharData([]);
        break;
    }
  }, [
    selectedCharacter,
    statsStore,
    overmasteryCrit,
    arvessFermare,
    butterflies,
    comboActive,
  ]);
  return <SkillsDataTable data={charData} columns={skillsDataColumns} />;
};
