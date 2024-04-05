"use client";

import { charlottaSkills } from "@/constants/character/skills/charlotta";
import { ioSkills } from "@/constants/character/skills/io";
import { baseStatsAtLvl100 } from "@/constants/stats/stats";
import { safeDecimalAdder, safeDecimalMultiplier } from "@/lib/calculators";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useStatsStore } from "@/stores/useStatsStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { SkillCalculatedTable, SkillConstant } from "@/types/skill.types";
import { useEffect, useState } from "react";
import { SkillsDataTable } from "./skills-data-table/SkillsDataTable";
import { skillsDataColumns } from "./skills-data-table/SkillsDataColumns";
import { lancelotSkills } from "@/constants/character/skills/lancelot";
import { cagliostroSkills } from "@/constants/character/skills/cagliostro";
import { zetaSkills } from "@/constants/character/skills/zeta";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";

export const SkillsTable = () => {
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const arvessFermare = useCharacterStore((state) => state.arvessFermare);
  const butterflies = useCharacterStore((state) => state.butterflies);
  const comboActive = useOtherInputsStore((state) => state.comboActive);
  const statsStore = useStatsStore((state) => state);
  const overmasteryCrit = useOvermasteriesStore((state) => state.critHitRate);
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const [charData, setCharData] = useState<SkillCalculatedTable[]>([]);

  useEffect(() => {
    function calculateSkills(_skills: SkillConstant[]): SkillCalculatedTable[] {
      return _skills.map((skill) => {
        const sigilsCrit = traitsTable.find(
          (sigil) => sigil.traitName === "Critical Hit Rate"
        )?.value;
        const sigilsLuckyCharge = traitsTable.find(
          (sigil) => sigil.traitName === "Lucky Charge"
        )?.value;
        const sigilsTyranny = traitsTable.find(
          (sigil) => sigil.traitName === "Tyranny"
        )?.value as number;
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
          supplemental: 0,
          averageTotalDmg: 0,
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
        setCharData([]);
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
    traitsTable,
    overmasteryCrit,
    arvessFermare,
    butterflies,
    comboActive,
  ]);
  return <SkillsDataTable data={charData} columns={skillsDataColumns} />;
};
