"use client";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { charlottaSkills } from "@/constants/character/skills/charlotta";
import { ioSkills } from "@/constants/character/skills/io";
import { baseStatsAtLvl100 } from "@/constants/stats/stats";
import {
  numberWithCommas,
  safeDecimalAdder,
  safeDecimalMultiplier,
} from "@/lib/calculators";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useStatsStore } from "@/stores/useStatsStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { SkillCalculatedTable, SkillConstant } from "@/types/skill.types";
import { useEffect, useState } from "react";
import { SkillsDataTable } from "./skills-data-table/SkillsDataTable";
import { skillsDataColumns } from "./skills-data-table/SkillsDataColumns";

export const SkillsTable = () => {
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
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
        setCharData([]);
        break;
      case "Captain":
      case "Narmaya":
      case "Rosetta":
      case "Cagliostro":
      case "Ferry":
      case "Lancelot":
      case "Rackam":
      case "Vaseraga":
      case "Siegfried":
      case "Vane":
      case "Id":
      case "Charlotta":
        setCharData(calculateSkills(charlottaSkills));
        break;
      case "Ghandagoza":
      case "Percival":
      case "Katalina":
      case "Eugen":
      case "Yodarha":
    }
  }, [selectedCharacter, statsStore, traitsTable, overmasteryCrit]);
  return (
    <SkillsDataTable data={charData} columns={skillsDataColumns} />
    // <Table>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="font-bold">Skill</TableHead>
    //       <TableHead className="font-bold">Modifier</TableHead>
    //       <TableHead className="font-bold text-right">Skill Ratio</TableHead>
    //       <TableHead className="font-bold text-right">DMG Cap</TableHead>
    //       <TableHead className="font-bold text-center">
    //         Classification
    //       </TableHead>
    //       <TableHead className="font-bold text-right">Multi</TableHead>
    //       <TableHead className="font-bold text-right">Crit Chance</TableHead>
    //       <TableHead className="font-bold text-right">
    //         Total Damage Cap
    //       </TableHead>
    //       <TableHead className="font-bold text-right">Non Crit</TableHead>
    //       <TableHead className="font-bold text-right">Crit</TableHead>
    //       <TableHead className="font-bold text-right">
    //         Damage Potential
    //       </TableHead>
    //       <TableHead className="font-bold text-right">Overcap</TableHead>
    //       <TableHead className="font-bold text-right">Supplemental</TableHead>
    //       <TableHead className="font-bold text-right">
    //         Average Total Damage
    //       </TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {charData.map((skill, i) => {
    //       return (
    //         <TableRow key={i}>
    //           <TableCell>{skill.skill}</TableCell>
    //           <TableCell>{skill.modifier}</TableCell>
    //           <TableCell className="text-right">
    //             {safeDecimalMultiplier([skill.skillRatio, 100]).toFixed(2)}%
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {numberWithCommas(skill.dmgCap)}
    //           </TableCell>
    //           <TableCell className="flex gap-1 px-2">
    //             {/* No = Normal
    //                 Ra = Ranged
    //                 Ch = Charged
    //                 Sk = Skill
    //                 Sb = Skybound Art
    //                 Li = Link Attack */}
    //             {skill.classification.normal && (
    //               <SkillClassificationBadge abrv="No" full="Normal" />
    //             )}
    //             {skill.classification.ranged && (
    //               <SkillClassificationBadge abrv="Ra" full="Ranged" />
    //             )}
    //             {skill.classification.charged && (
    //               <SkillClassificationBadge abrv="Ch" full="Charged" />
    //             )}
    //             {skill.classification.skill && (
    //               <SkillClassificationBadge abrv="Sk" full="Skill" />
    //             )}
    //             {skill.classification.skyboundArt && (
    //               <SkillClassificationBadge abrv="Sb" full="SBA" />
    //             )}
    //             {skill.classification.linkAttack && (
    //               <SkillClassificationBadge abrv="Li" full="Link Attack" />
    //             )}
    //             {skill.classification.finisher && (
    //               <SkillClassificationBadge abrv="Fi" full="Combo Finisher" />
    //             )}
    //             {skill.classification.pet && (
    //               <SkillClassificationBadge abrv="Pe" full="Pet" />
    //             )}
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {safeDecimalMultiplier([skill.multi, 100]).toFixed(2)}%
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {safeDecimalMultiplier([skill.critChance, 100]).toFixed(2)}%
    //           </TableCell>
    //           <TableCell className="text-right bg-green-50">
    //             {numberWithCommas(Math.round(skill.totalDamageCap))}
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {numberWithCommas(skill.nonCrit)}
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {numberWithCommas(skill.crit)}
    //           </TableCell>
    //           <TableCell
    //             className={`text-right ${
    //               skill.damagePotential === 100
    //                 ? "bg-green-200"
    //                 : skill.damagePotential > 85
    //                 ? "bg-lime-200"
    //                 : skill.damagePotential > 65
    //                 ? "bg-yellow-200"
    //                 : skill.damagePotential > 50
    //                 ? "bg-amber-200"
    //                 : skill.damagePotential > 35
    //                 ? "bg-orange-200"
    //                 : skill.damagePotential > 20
    //                 ? "bg-red-200"
    //                 : ""
    //             }`}
    //           >
    //             {skill.damagePotential.toFixed(2)}%
    //           </TableCell>
    //           <TableCell className="text-right">
    //             {skill.overcap.toFixed(2)}%
    //           </TableCell>
    //           <TableCell className="text-right">{skill.supplemental}</TableCell>
    //           <TableCell className="text-right">
    //             {skill.averageTotalDmg}
    //           </TableCell>
    //         </TableRow>
    //       );
    //     })}
    //   </TableBody>
    // </Table>
  );
};
