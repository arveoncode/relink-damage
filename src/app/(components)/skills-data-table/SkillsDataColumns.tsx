"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { numberWithCommas, safeDecimalMultiplier } from "@/lib/calculators";
import { SkillCalculatedTable } from "@/types/skill.types";
import { ColumnDef } from "@tanstack/react-table";

export const skillsDataColumns: ColumnDef<SkillCalculatedTable>[] = [
  {
    id: "calculations",
    header: () => <div className="px-2">Calculations</div>,
    columns: [
      {
        id: "select",
        header: ({ table }) => (
          <div className="w-full px-2 flex flex-col justify-center">
            <Checkbox
              className="my-auto"
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className="w-full px-2 flex flex-col justify-center">
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          </div>
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "skill",
        header: "Skill",
        cell: ({ row }) => row.original.skill,
      },
      {
        accessorKey: "modifier",
        header: "Modifier",
        cell: ({ row }) => <>{row.original.modifier}</>,
      },
      {
        accessorKey: "skillRatio",
        header: "Skill Ratio",
        cell: ({ row }) => (
          <>
            {safeDecimalMultiplier([row.original.skillRatio, 100]).toFixed(2)}%
          </>
        ),
      },
      {
        accessorKey: "dmgCap",
        header: "Damage Cap",
        cell: ({ row }) => (
          <div className="">
            <div className="">{numberWithCommas(row.original.dmgCap)}</div>
          </div>
        ),
      },
      {
        accessorKey: "classification",
        header: "Classification",
        cell: ({ row }) => (
          <div className="flex gap-1">
            {/* No = Normal
                Ra = Ranged
                Ch = Charged
                Sk = Skill
                Sb = Skybound Art
                Li = Link Attack */}
            {row.original.classification.normal && (
              <SkillClassificationBadge abrv="No" full="Normal" />
            )}
            {row.original.classification.ranged && (
              <SkillClassificationBadge abrv="Ra" full="Ranged" />
            )}
            {row.original.classification.charged && (
              <SkillClassificationBadge abrv="Ch" full="Charged" />
            )}
            {row.original.classification.skill && (
              <SkillClassificationBadge abrv="Sk" full="Skill" />
            )}
            {row.original.classification.skyboundArt && (
              <SkillClassificationBadge abrv="Sb" full="SBA" />
            )}
            {row.original.classification.linkAttack && (
              <SkillClassificationBadge abrv="Li" full="Link Attack" />
            )}
            {row.original.classification.finisher && (
              <SkillClassificationBadge abrv="Fi" full="Combo Finisher" />
            )}
            {row.original.classification.pet && (
              <SkillClassificationBadge abrv="Pe" full="Pet" />
            )}
          </div>
        ),
      },
      {
        accessorKey: "multi",
        header: "Multiplier",
        cell: ({ row }) => (
          <div>
            {safeDecimalMultiplier([row.original.multi, 100]).toFixed(2)}%
          </div>
        ),
      },
      {
        accessorKey: "critChance",
        header: "Crit Chance",
        cell: ({ row }) => (
          <div>
            {safeDecimalMultiplier([row.original.critChance, 100]).toFixed(2)}%
          </div>
        ),
      },
      {
        accessorKey: "totalDamageCap",
        header: "Total Damage Cap",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.totalDamageCap))}</div>
        ),
      },
      {
        accessorKey: "nonCrit",
        header: "Non Crit",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.nonCrit))}</div>
        ),
      },
      {
        accessorKey: "crit",
        header: "Crit",
        cell: ({ row }) => (
          <div>{numberWithCommas(Math.round(row.original.crit))}</div>
        ),
      },
      {
        accessorKey: "damagePotential",
        header: "Damage Potential",
        cell: ({ row }) => (
          <div
            className={`h-full ${
              row.original.damagePotential === 100
                ? "bg-green-200"
                : row.original.damagePotential > 85
                ? "bg-lime-200"
                : row.original.damagePotential > 65
                ? "bg-yellow-200"
                : row.original.damagePotential > 50
                ? "bg-amber-200"
                : row.original.damagePotential > 35
                ? "bg-orange-200"
                : row.original.damagePotential > 20
                ? "bg-red-200"
                : "bg-rose-200"
            }`}
          >
            {row.original.damagePotential.toFixed(2)}%
          </div>
        ),
      },
      {
        accessorKey: "overcap",
        header: "Overcap",
        cell: ({ row }) => <div>{row.original.overcap.toFixed(2)}%</div>,
      },
      {
        accessorKey: "supplemental",
        header: "Supplemental",
        cell: ({ row }) => <div>{row.original.supplemental}</div>,
      },
      {
        accessorKey: "averageTotalDmg",
        header: "Average Total Damage",
        cell: ({ row }) => <div>{row.original.averageTotalDmg}</div>,
      },
    ],
    meta: { colspan: 15 },
  },
  {
    id: "runSpecific",
    header: "Run Specific",
    columns: [
      {
        id: "weight",
        header: "Weight",
        cell: () => <div>0</div>,
      },
    ],
  },
];

const SkillClassificationBadge = ({
  abrv,
  full,
}: {
  abrv: string;
  full: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Badge variant="outline">{abrv}</Badge>
      </HoverCardTrigger>
      <HoverCardContent className="w-full">
        <p>{full}</p>
      </HoverCardContent>
    </HoverCard>
  );
};
