"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { baseStatsAtLvl100, masteryCap } from "@/constants/stats/stats";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useStatsStore } from "@/stores/useStatsStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { useEffect } from "react";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";
import { sigilLevelValues } from "@/constants/gear/sigilLevels";
import { safeDecimalAdder, safeDecimalMultiplier } from "@/lib/calculators";
import { CheckCircle, XCircle } from "lucide-react";

// You've heard of monorepos, get ready for the monofile OwO

export const Stats = () => {
  return (
    <Card className="rounded-lg col-span-2 bg-background/50">
      <CardHeader>
        <CardTitle className="flex gap-4">
          <hr className="flex-1 my-auto" />
          <div>Stats</div>
          <hr className="flex-1 my-auto" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            <RawPowerBox />
            <RawPowerCritBox />
            <StaminaModBox />
            {/* <div>Tyranny Mod</div> */}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <WarElementalBox />
            <AwakeningBox />
            <FlightOverFightBox />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <DamageCapBox />
            <NormalDamageCapBox />
            <SkillDamageCapBox />
            <SbaDamageCapBox />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <RangedBonusBox />
            <ChargedBonusBox />
            <SkillBonusBox />
            <SBABonusBox />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <WeakpointBox />
            <FinisherBonusBox />
            <ThrowBonusBox />
            <LinkBonusBox />
          </div>

          {/* <StatsDebug /> */}
        </div>
      </CardContent>
    </Card>
  );
};

const RawPowerBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter
  );
  const artsLevel = useCharacterStore((state) => state.artsLevel);
  const highestLvlRose = useCharacterStore((state) => state.highestLvlRose);
  const setRawPower = useStatsStore((state) => state.setRawPower);
  const attackOvermastery = useOvermasteriesStore((state) => state.attack);
  const staminaMod = useStatsStore((state) => state.staminaMod);
  const attackBuffs = useOtherInputsStore((state) => state.attackBuffs);
  const defDebuffs = useOtherInputsStore((state) => state.defDebuffs);
  const comboActive = useOtherInputsStore((state) => state.comboActive);
  const numberOfSkills = useOtherInputsStore((state) => state.numberOfSkills);
  const isAwakening = useStatsStore((state) => state.isAwakening);
  // Value Read in component
  const rawPower = useStatsStore((state) => state.rawPower);

  // Calculator
  useEffect(() => {
    const sigilsAttack = traitsTable.find(
      (trait) => trait.traitName === "Attack Power"
    )?.value;
    const sigilsTyranny = traitsTable.find(
      (trait) => trait.traitName === "Tyranny"
    )?.value;
    // TODO: Life on the line
    const sigilsComboBooster = traitsTable.find(
      (trait) => trait.traitName === "Combo Booster"
    )?.value;
    const sigilsQuickCharge = traitsTable.find(
      (trait) => trait.traitName === "Quick Charge"
    )?.value;
    const sigilsLessIsMore = traitsTable.find(
      (trait) => trait.traitName === "Less is More"
    )?.value;
    const sigilsLifeOnTheLine = traitsTable.find(
      (trait) => trait.traitName === "Life on the Line"
    )?.value;
    const sigilsInjury = traitsTable.find(
      (trait) => trait.traitName === "Injury to Insult"
    )?.value;
    // TODO: Head Start
    // TODO: Dodge Payback
    // TODO: Power Hungry
    const sigilsGlassCannon = traitsTable.find(
      (trait) => trait.traitName === "Glass Cannon"
    )?.value;
    // TODO: Berserker

    // FoF doesn't contain any useable values in constants
    const sigilsFoF = traitsTable.find(
      (trait) => trait.traitName === "Flight Over Fight"
    )?.actualUseableLevel;

    setRawPower(
      safeDecimalMultiplier([
        // Attack Power Modifier
        safeDecimalAdder([
          baseStatsAtLvl100.attack,
          attackOvermastery,
          sigilsAttack ? sigilsAttack : 0,
        ]),
        // Stamina Modifier
        staminaMod,
        // Tyranny Modifier
        sigilsTyranny ? 1 + sigilsTyranny : 1,
        // Combo Booster Modifier
        comboActive ? (sigilsComboBooster ? sigilsComboBooster : 0) + 1 : 1,
        // Quick Charge Modifier
        sigilsQuickCharge ? 1 + sigilsQuickCharge : 1,
        // Aditive Modifiers
        safeDecimalAdder([
          1,
          // Less Is More Modifier
          sigilsLessIsMore
            ? safeDecimalMultiplier([4 - numberOfSkills, sigilsLessIsMore])
            : 0,
          sigilsLifeOnTheLine ? sigilsLifeOnTheLine : 0,
          // Character specific
          selectedCharacter === "Captain" && isAwakening && artsLevel >= 2
            ? Math.min(artsLevel, 4) * 0.05
            : 0,
          selectedCharacter === "Yodarha" && isAwakening ? 0.3 : 0,
          selectedCharacter === "Rosetta"
            ? safeDecimalAdder([
                isAwakening ? 0.13 : 0.3,
                Math.min(highestLvlRose, 4) * 0.03,
              ])
            : 0,
        ]),
        sigilsInjury ? 1 + sigilsInjury : 1,
        // Glass Cannon Modifier
        sigilsGlassCannon ? 1 + sigilsGlassCannon : 1,
        // Terminus Modifier
        isTermimus ? 1.5 : 1,
        // Defense Debuffs Modifier
        1 + defDebuffs,
        // Attack buffs Modifier
        1 + attackBuffs,
        sigilsFoF ? 0.5 : 1,
      ])
    );
  }, [
    numberOfSkills,
    artsLevel,
    highestLvlRose,
    isAwakening,
    traitsTable,
    attackOvermastery,
    isTermimus,
    selectedCharacter,
    attackBuffs,
    defDebuffs,
    staminaMod,
    comboActive,
    setRawPower,
  ]);
  return <StatBox title="Raw Power" value={rawPower} />;
};

const RawPowerCritBox = () => {
  // Dependencies for calculation
  const rawPower = useStatsStore((state) => state.rawPower);
  const setRawPowerCrit = useStatsStore((state) => state.setRawPowerCrit);
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  // Value Read in component
  const rawPowerCrit = useStatsStore((state) => state.rawPowerCrit);
  useEffect(() => {
    const sigilsCritDamage = traitsTable.find(
      (trait) => trait.traitName === "Critical Damage"
    )?.value;
    setRawPowerCrit(
      safeDecimalMultiplier([
        rawPower,
        safeDecimalAdder([
          1,
          baseStatsAtLvl100.criticalDamage,
          sigilsCritDamage ? sigilsCritDamage : 0,
        ]),
      ])
    );
  }, [rawPower, traitsTable, setRawPowerCrit]);
  return <StatBox title="Raw Power Crit" value={rawPowerCrit} />;
};

const DamageCapBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const setDamageCap = useStatsStore((state) => state.setDamageCap);

  // Value Read in component
  const damageCap = useStatsStore((state) => state.damageCap);

  useEffect(() => {
    // Damage Cap
    const sigilsDmgCap = traitsTable.find(
      (trait) => trait.traitName === "Damage Cap"
    )?.value;
    const gammaDmgCap = traitsTable.find(
      (trait) => trait.traitName === "Gamma"
    )?.value;
    const glassCannonDmgCap = traitsTable.find(
      (trait) => trait.traitName === "Glass Cannon"
    )?.value;

    setDamageCap(
      safeDecimalAdder([
        sigilsDmgCap ? sigilsDmgCap : 0,
        gammaDmgCap ? gammaDmgCap : 0,
        glassCannonDmgCap ? glassCannonDmgCap : 0,
        isTermimus ? 1 : 0,
      ])
    );
  }, [traitsTable, isTermimus, setDamageCap]);

  return <StatBox title="DMG Cap" value={damageCap} percentage />;
};

// const TyrannyModBox = () => {
//   // Dependencies for calculation
//   const traitsTable = useTraitsStore((state) => state.traitsTable);
//   const setDamageCap = useStatsStore((state) => state.setDamageCap);
// };

const StaminaModBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setStaminaMod = useStatsStore((state) => state.setStaminaMod);
  const currentHp = useOtherInputsStore((state) => state.currentHp);
  // Value read in component
  const staminaMod = useStatsStore((state) => state.staminaMod);
  useEffect(() => {
    const sigilsStamina = traitsTable.find(
      (trait) => trait.traitName === "Stamina"
    )?.value;
    const sigilsEnmity = traitsTable.find(
      (trait) => trait.traitName === "Enmity"
    )?.value;

    // This needs to be fixed
    setStaminaMod(
      safeDecimalMultiplier([
        safeDecimalAdder([
          1,
          sigilsStamina
            ? safeDecimalMultiplier([
                sigilsStamina,
                Math.max(0.15, (currentHp - 0.25) / 0.75),
              ])
            : 0,
        ]),
        safeDecimalAdder([
          1,
          sigilsEnmity
            ? safeDecimalMultiplier([sigilsEnmity, 1 - currentHp])
            : 0,
        ]),
      ])
    );
  }, [traitsTable, currentHp, setStaminaMod]);
  return <StatBox title="Stamina Mod" value={staminaMod} percentage />;
};

const NormalDamageCapBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const overmasteryNormalCapUp = useOvermasteriesStore(
    (state) => state.normalDamageCapUp
  );
  const setNormalDamageCap = useStatsStore((state) => state.setNormalDamageCap);

  // Value Read in component
  const normalDamageCap = useStatsStore((state) => state.normalDamageCap);

  useEffect(() => {
    const alphaDmgCap = traitsTable.find(
      (trait) => trait.traitName === "Alpha"
    )?.value;
    setNormalDamageCap(
      safeDecimalAdder([
        alphaDmgCap ? alphaDmgCap : 0,
        isTermimus ? 0.2 : 0,
        overmasteryNormalCapUp,
        masteryCap,
      ])
    );
  }, [traitsTable, isTermimus, overmasteryNormalCapUp, setNormalDamageCap]);
  return <StatBox title="Normal DMG Cap" value={normalDamageCap} percentage />;
};

const SkillDamageCapBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const setSkillDamageCap = useStatsStore((state) => state.setSkillDamageCap);
  const overmasterySkillCapUp = useOvermasteriesStore(
    (state) => state.skillDamageCapUp
  );
  // Value Read in component
  const skillDamageCap = useStatsStore((state) => state.skillDamageCap);
  useEffect(() => {
    const betaDmgCap = traitsTable.find(
      (trait) => trait.traitName === "Beta"
    )?.value;
    setSkillDamageCap(
      safeDecimalAdder([
        betaDmgCap ? betaDmgCap : 0,
        isTermimus ? 0.2 : 0,
        overmasterySkillCapUp,
        masteryCap,
      ])
    );
  }, [traitsTable, isTermimus, overmasterySkillCapUp, setSkillDamageCap]);
  return <StatBox title="Skill DMG Cap" value={skillDamageCap} percentage />;
};

const SbaDamageCapBox = () => {
  // Dependencies for calculation
  const isTermimus = useTraitsStore((state) => state.isTerminus);
  const setSbaDamageCap = useStatsStore((state) => state.setSbaDamageCap);
  const overmasterySbaCapUp = useOvermasteriesStore(
    (state) => state.sbaDamageCapUp
  );
  // Value Read in component
  const sbaDamageCap = useStatsStore((state) => state.sbaDamageCap);
  useEffect(() => {
    setSbaDamageCap(
      safeDecimalAdder([isTermimus ? 0.2 : 0, overmasterySbaCapUp, masteryCap])
    );
  }, [isTermimus, overmasterySbaCapUp, setSbaDamageCap]);
  return <StatBox title="SBA DMG Cap" value={sbaDamageCap} percentage />;
};

const LinkBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setLinkBonus = useStatsStore((state) => state.setLinkBonus);
  // Value Read in component
  const linkBonus = useStatsStore((state) => state.linkBonus);
  useEffect(() => {
    const sigilsLTLinkLevel = traitsTable.find(
      (trait) => trait.traitName === "Linked Together"
    )?.actualUseableLevel;

    const sigilsLTValue =
      sigilLevelValues["LT Link"][sigilsLTLinkLevel ? sigilsLTLinkLevel : 0];

    setLinkBonus(sigilsLTValue);
  }, [traitsTable, setLinkBonus]);

  return <StatBox title="Link Bonus" value={linkBonus} percentage />;
};

const ThrowBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setThrowBonus = useStatsStore((state) => state.setThrowBonus);
  // Value Read in component
  const throwBonus = useStatsStore((state) => state.throwBonus);
  useEffect(() => {
    const sigilsThrow = traitsTable.find(
      (sigil) => sigil.traitName === "Throw"
    )?.value;

    setThrowBonus(sigilsThrow ? sigilsThrow : 0);
  }, [traitsTable, setThrowBonus]);

  return <StatBox title="Throw Bonus" value={throwBonus} percentage />;
};

const FinisherBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setFinisherBonus = useStatsStore((state) => state.setFinisherBonus);
  // Value Read in component
  const finisherBonus = useStatsStore((state) => state.finisherBonus);
  useEffect(() => {
    const sigilsFinisher = traitsTable.find(
      (sigil) => sigil.traitName === "Combo Finisher"
    )?.value;

    setFinisherBonus(sigilsFinisher ? sigilsFinisher : 0);
  }, [traitsTable, setFinisherBonus]);

  return <StatBox title="Finisher Bonus" value={finisherBonus} percentage />;
};

const ChargedBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setChargedBonus = useStatsStore((state) => state.setChargedBonus);
  // Value Read in component
  const chargedBonus = useStatsStore((state) => state.chargedBonus);
  useEffect(() => {
    const sigilsCharged = traitsTable.find(
      (sigil) => sigil.traitName === "Charged Attack"
    )?.value;

    setChargedBonus(sigilsCharged ? sigilsCharged : 0);
  }, [traitsTable, setChargedBonus]);

  return <StatBox title="Charged Bonus" value={chargedBonus} percentage />;
};

const RangedBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setRangedBonus = useStatsStore((state) => state.setRangedBonus);
  // Value Read in component
  const rangedBonus = useStatsStore((state) => state.rangedBonus);
  useEffect(() => {
    const sigilsRanged = traitsTable.find(
      (sigil) => sigil.traitName === "Concentrated Fire"
    )?.value;

    setRangedBonus(sigilsRanged ? sigilsRanged : 0);
  }, [traitsTable, setRangedBonus]);

  return <StatBox title="Ranged Bonus" value={rangedBonus} percentage />;
};

const SBABonusBox = () => {
  // NEED TO FIX THIS
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const sbaDamageUp = useOvermasteriesStore((state) => state.sbaDamageUp);
  const setSbaBonus = useStatsStore((state) => state.setSbaBonus);
  // Value Read in component
  const sbaBonus = useStatsStore((state) => state.sbaBonus);
  useEffect(() => {
    const sigilsLTLinkLevel = traitsTable.find(
      (trait) => trait.traitName === "Linked Together"
    )?.actualUseableLevel;

    const sigilsLTValue =
      sigilLevelValues["LT SBA"][sigilsLTLinkLevel ? sigilsLTLinkLevel : 0];

    setSbaBonus(
      safeDecimalAdder([
        safeDecimalMultiplier([
          1 + sigilsLTValue,
          safeDecimalAdder([1, sbaDamageUp, 0.2]),
        ]),
        -1,
      ])
    );
  }, [traitsTable, sbaDamageUp, setSbaBonus]);

  return <StatBox title="SBA Bonus" value={sbaBonus} percentage />;
};

const SkillBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const skillDamageUp = useOvermasteriesStore((state) => state.skillDamageUp);
  const setSkillBonus = useStatsStore((state) => state.setSkillBonus);
  // Value Read in component
  const skillBonus = useStatsStore((state) => state.skillBonus);
  useEffect(() => {
    const sigilsSkilledAssault = traitsTable.find(
      (trait) => trait.traitName === "Skilled Assault"
    )?.value;
    setSkillBonus(
      safeDecimalMultiplier([
        sigilsSkilledAssault ? 1 + sigilsSkilledAssault : 1,
        safeDecimalAdder([1, skillDamageUp, 0.2]),
      ]) - 1
    );
  }, [traitsTable, skillDamageUp, setSkillBonus]);

  return <StatBox title="Skill Bonus" value={skillBonus} percentage />;
};

const WeakpointBox = () => {
  // Dependencies for calculation
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const skillDamageUp = useOvermasteriesStore((state) => state.skillDamageUp);
  const setWeakpoint = useStatsStore((state) => state.setWeakPoint);
  const backAttack = useOtherInputsStore((state) => state.backAttack);
  const weakpointAttack = useOtherInputsStore((state) => state.weakPointAttack);
  // Value Read in component
  const weakpointBonus = useStatsStore((state) => state.weakPoint);
  useEffect(() => {
    const traitsExploiter = traitsTable.find(
      (trait) => trait.traitName === "Exploiter"
    )?.value;
    const traitsExploiterValue = traitsExploiter ? traitsExploiter : 0;
    const backAttackBase = 0.2;
    const weakpointAttackBase = 0.7;
    setWeakpoint(
      safeDecimalAdder([
        backAttack ? backAttackBase + traitsExploiterValue : 0,
        weakpointAttack ? weakpointAttackBase + traitsExploiterValue : 0,
      ])
    );
  }, [traitsTable, skillDamageUp, setWeakpoint, backAttack, weakpointAttack]);

  return <StatBox title="Weakpoint" value={weakpointBonus} percentage />;
};

const WarElementalBox = () => {
  const isWarElemental = useStatsStore((state) => state.isWarElemental);
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setIsWarElemental = useStatsStore((state) => state.setIsWarElemental);
  useEffect(() => {
    const sigilLvl = traitsTable.find(
      (sigil) => sigil.traitName === "War Elemental"
    )?.actualUseableLevel;
    setIsWarElemental(sigilLvl ? true : false);
  }, [setIsWarElemental, traitsTable]);
  return (
    <TraitBooleanBox
      traitTitle="War Elemental"
      traitIsActive={isWarElemental}
    />
  );
};

const AwakeningBox = () => {
  const isAwakening = useStatsStore((state) => state.isAwakening);
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setIsAwakening = useStatsStore((state) => state.setIsAwakening);
  useEffect(() => {
    const sigilLvl = traitsTable.find(
      (sigil) => sigil.traitName === "Awakening"
    )?.actualUseableLevel;
    setIsAwakening(sigilLvl ? true : false);
  }, [setIsAwakening, traitsTable]);
  return <TraitBooleanBox traitTitle="Awakening" traitIsActive={isAwakening} />;
};

const FlightOverFightBox = () => {
  const isFoF = useStatsStore((state) => state.isFoF);
  const traitsTable = useTraitsStore((state) => state.traitsTable);
  const setIsFoF = useStatsStore((state) => state.setIsFoF);
  useEffect(() => {
    const sigilLvl = traitsTable.find(
      (sigil) => sigil.traitName === "Flight Over Fight"
    )?.actualUseableLevel;
    setIsFoF(sigilLvl ? true : false);
  }, [setIsFoF, traitsTable]);
  return (
    <TraitBooleanBox traitTitle="Flight Over Fight" traitIsActive={isFoF} />
  );
};

const TraitBooleanBox = ({
  traitTitle,
  traitIsActive,
}: {
  traitTitle: string;
  traitIsActive: boolean;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 justify-center text-sm">
          {traitTitle}{" "}
          {traitIsActive ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <XCircle className="h-4 w-4" />
          )}
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

const StatBox = ({
  title,
  value,
  percentage,
}: {
  title: string;
  value: number;
  percentage?: boolean;
}) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-sm text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg font-bold text-center pb-4">
        {percentage ? `${Math.round(value * 10000) / 100}%` : value}
      </CardContent>
    </Card>
  );
};
