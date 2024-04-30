"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { baseStatsAtLvl100, masteryCap } from "@/constants/stats/stats";
import { useStatsStore } from "@/stores/useStatsStore";
import { useEffect } from "react";
import { sigilLevelValues } from "@/constants/gear/sigilLevels";
import { safeDecimalAdder, safeDecimalMultiplier } from "@/lib/calculators";
import { CheckCircle, XCircle } from "lucide-react";
import { useBuildStore } from "@/stores/useBuildStore";

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
          <HiddenStats />
          <StatsDebug />
        </div>
      </CardContent>
    </Card>
  );
};

const RawPowerBox = () => {
  // Dependencies for calculation
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const artsLevel = useBuildStore((state) => state.artsLevel);
  const highestLvlRose = useBuildStore((state) => state.highestLvlRose);
  const setRawPower = useStatsStore((state) => state.setRawPower);
  const attackOvermastery = useBuildStore((state) => state.attack);
  const staminaMod = useStatsStore((state) => state.staminaMod);
  const attackBuffs = useBuildStore((state) => state.attackBuffs);
  const defDebuffs = useBuildStore((state) => state.defDebuffs);
  const comboActive = useBuildStore((state) => state.comboActive);
  const numberOfSkills = useBuildStore((state) => state.numberOfSkills);
  const isAwakening = useStatsStore((state) => state.isAwakening);
  const isLinkTime = useBuildStore((state) => state.isLinkTime);
  const rageLevel = useBuildStore((state) => state.rageLevel);
  const isEternal = useStatsStore((state) => state.isEternal);
  const isBoundary = useStatsStore((state) => state.isBoundary);
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
      (trait) => trait.traitName === "Less Is More"
    )?.value;
    console.log(sigilsLessIsMore);
    const sigilsLifeOnTheLine = traitsTable.find(
      (trait) => trait.traitName === "Life on the Line"
    )?.value;

    const sigilsInjury = traitsTable.find(
      (trait) => trait.traitName === "Injury to Insult"
    )?.value;
    const sigilsHeadStart = traitsTable.find(
      (trait) => trait.traitName === "Head Start"
    )?.value;
    const sigilsDodgePayback = traitsTable.find(
      (trait) => trait.traitName === "Dodge Payback"
    )?.value;
    const sigilsPowerHungry = traitsTable.find(
      (trait) => trait.traitName === "Power Hungry"
    )?.value;
    const sigilsGlassCannon = traitsTable.find(
      (trait) => trait.traitName === "Glass Cannon"
    )?.value;
    const sigilsBerserker = traitsTable.find(
      (trait) => trait.traitName === "Berserker"
    )?.value;

    // FoF doesn't contain any useable values in constants
    const sigilsFoF = traitsTable.find(
      (trait) => trait.traitName === "Flight Over Fight"
    )?.actualUseableLevel;

    // as per damage calc 2.6.8
    // raw power =
    //  (attack + base overmastery attack + attack power sigils)
    //  * tyranny
    //  * stamina modifier (based on stamina and enmity sigils and HP)
    //  * Glass Cannon
    //  * Dodge Payback
    //  * Berserker
    //  * Flight over fight
    //  * Injury to Insult
    //  * (
    //    additive modifiers:
    //    Combo Booster
    //    + Less Is More
    //    + Life on the Line
    //    + Quick Charge
    //    + Power Hungry
    //    + Head Start
    //    + Character Specific stuff
    //    )
    //  * terminus
    //  * attack buffs
    //  * defense debuffs
    //  * link time modifier
    // raw power crit = (raw power * (1 + base crit damage(100% at lvl 100 and full masteries + crit damage sigils)))
    // each skill has a skill ratio (constant in the game) that is multiplied by
    // multiplier = skill type specific sigils such as
    //    linked together (for Link attacks and SBA)
    //    concentrated fire (for ranged attacks)
    //    charged attack... etc...
    //  and character specific sigils
    //    then multiplied again to tyranny sigil
    //    and bonus weakpoint (20% for back attacks, 70% for weak point attacks, + exploiter sigil)
    //
    // when a skill doesn't crit, the damage calculation is
    //    noncrit damage = raw power * skill ratio * multiplier * war elemental
    // when a skill crits, the damage calculation is
    //    crit damage = raw power crit * skill ratio * multiplier * war elemental
    // the damage you will do is
    //    skill damage cap = skill's damage cap (another constant in the game multiplied by damage cap sigils)
    // whatever is lower(skill damage cap||(noncrit damage||crit damage))

    setRawPower(
      safeDecimalMultiplier([
        // Attack Power Modifier
        safeDecimalAdder([
          baseStatsAtLvl100(selectedCharacter).attack,
          attackOvermastery,
          sigilsAttack ? sigilsAttack : 0,
        ]),
        // Stamina Modifier
        staminaMod,
        // Tyranny Modifier
        sigilsTyranny ? 1 + sigilsTyranny : 1,
        // Berserker Modifier
        sigilsBerserker ? 1 + sigilsBerserker : 1,
        // Injury to insult modifier
        sigilsInjury ? 1 + sigilsInjury : 1,
        // Glass Cannon Modifier
        sigilsGlassCannon ? 1 + sigilsGlassCannon : 1,
        // Dodge Payback Modifier
        sigilsDodgePayback ? 1 + sigilsDodgePayback : 1,
        // Terminus Modifier
        isEternal && isBoundary ? 1.5 : isTermimus ? 1.5 : 1,
        // Defense Debuffs Modifier
        1 + defDebuffs,
        // Attack buffs Modifier
        1 + attackBuffs,
        // Flight over Fight Modifier
        sigilsFoF ? 0.5 : 1,
        // Link Time Modifier
        isLinkTime ? 1.2 : 1,
        // Aditive Modifiers
        safeDecimalAdder([
          1,
          // Quick Charge Modifier
          sigilsQuickCharge ? sigilsQuickCharge : 0,
          // Combo Booster Modifier
          comboActive ? (sigilsComboBooster ? sigilsComboBooster : 0) : 0,
          // Less Is More Modifier
          sigilsLessIsMore
            ? safeDecimalMultiplier([4 - numberOfSkills, sigilsLessIsMore])
            : 0,
          // Life on the line modifier
          sigilsLifeOnTheLine ? sigilsLifeOnTheLine : 0,
          // Power Hungry Modifier
          sigilsPowerHungry ? sigilsPowerHungry : 0,
          // Head Start Modifier
          sigilsHeadStart ? sigilsHeadStart : 0,
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
          selectedCharacter === "Ghandagoza" && rageLevel >= 1
            ? 1 + Math.min(10, rageLevel) * 0.035
            : 0,
        ]),
      ])
    );
  }, [
    isLinkTime,
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
    rageLevel,
    isBoundary,
    isEternal,
  ]);
  return <StatBox title="Raw Power" value={rawPower} />;
};

const RawPowerCritBox = () => {
  // Dependencies for calculation
  const rawPower = useStatsStore((state) => state.rawPower);
  const setRawPowerCrit = useStatsStore((state) => state.setRawPowerCrit);
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
          baseStatsAtLvl100().criticalDamage,
          sigilsCritDamage ? sigilsCritDamage : 0,
        ]),
      ])
    );
  }, [rawPower, traitsTable, setRawPowerCrit]);
  return <StatBox title="Raw Power Crit" value={rawPowerCrit} />;
};

const DamageCapBox = () => {
  // Dependencies for calculation
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const setDamageCap = useStatsStore((state) => state.setDamageCap);
  const isEternal = useStatsStore((state) => state.isEternal);
  const isBoundary = useStatsStore((state) => state.isBoundary);
  // Value Read in component
  const damageCap = useStatsStore((state) => state.damageCap);
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const isLinkTime = useBuildStore((state) => state.isLinkTime);

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
        isEternal && isBoundary ? 1 : isTermimus ? 1 : 0,
        selectedCharacter === "Vaseraga" && isLinkTime ? 0.6 : 0,
        // selectedCharacter === "Seofon"
      ])
    );
  }, [
    traitsTable,
    isTermimus,
    isEternal,
    isBoundary,
    isLinkTime,
    selectedCharacter,
    setDamageCap,
  ]);

  return <StatBox title="DMG Cap" value={damageCap} percentage />;
};

// const TyrannyModBox = () => {
//   // Dependencies for calculation
//   const traitsTable = useStatsStore((state) => state.traitsTable);
//   const setDamageCap = useStatsStore((state) => state.setDamageCap);
// };

const StaminaModBox = () => {
  // Dependencies for calculation
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const setStaminaMod = useStatsStore((state) => state.setStaminaMod);
  const currentHp = useBuildStore((state) => state.currentHp);
  // Value read in component
  const staminaMod = useStatsStore((state) => state.staminaMod);
  useEffect(() => {
    const sigilsStamina = traitsTable.find(
      (trait) => trait.traitName === "Stamina"
    )?.value;
    const sigilsEnmity = traitsTable.find(
      (trait) => trait.traitName === "Enmity"
    )?.value;

    setStaminaMod(
      safeDecimalMultiplier([
        safeDecimalAdder([
          1,
          sigilsStamina //stamina multiplier based on level
            ? safeDecimalMultiplier([
                sigilsStamina,
                Math.max(0.15, (currentHp - 0.25) / 0.75),
              ])
            : 0,
        ]),
        safeDecimalAdder([
          1,
          sigilsEnmity //enmity multiplier based on level
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const overmasteryNormalCapUp = useBuildStore(
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const setSkillDamageCap = useStatsStore((state) => state.setSkillDamageCap);
  const overmasterySkillCapUp = useBuildStore(
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
  const isTermimus = useBuildStore((state) => state.isTerminus);
  const setSbaDamageCap = useStatsStore((state) => state.setSbaDamageCap);
  const overmasterySbaCapUp = useBuildStore((state) => state.sbaDamageCapUp);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const setChargedBonus = useStatsStore((state) => state.setChargedBonus);
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  // Value Read in component
  const chargedBonus = useStatsStore((state) => state.chargedBonus);
  useEffect(() => {
    const sigilsCharged = traitsTable.find(
      (sigil) => sigil.traitName === "Charged Attack"
    )?.value;

    setChargedBonus(
      safeDecimalAdder([
        sigilsCharged ? sigilsCharged : 0,
        selectedCharacter === "Tweyen" ? 0.2 : 0,
      ])
    );
  }, [traitsTable, setChargedBonus, selectedCharacter]);

  return <StatBox title="Charged Bonus" value={chargedBonus} percentage />;
};

const RangedBonusBox = () => {
  // Dependencies for calculation
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const sbaDamageUp = useBuildStore((state) => state.sbaDamageUp);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const skillDamageUp = useBuildStore((state) => state.skillDamageUp);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const skillDamageUp = useBuildStore((state) => state.skillDamageUp);
  const setWeakpoint = useStatsStore((state) => state.setWeakPoint);
  const backAttack = useBuildStore((state) => state.backAttack);
  const weakpointAttack = useBuildStore((state) => state.weakPointAttack);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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
  const traitsTable = useStatsStore((state) => state.traitsTable);
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

const HiddenStats = () => {
  const traitsTable = useStatsStore((state) => state.traitsTable);
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const setIsBoundary = useStatsStore((state) => state.setIsBoundary);
  const setIsEternal = useStatsStore((state) => state.setIsEternal);
  useEffect(() => {
    const sigilsBoundary = traitsTable.find(
      (trait) => trait.traitName === "Boundary"
    )?.actualUseableLevel;
    const isEternal = selectedCharacter === "Tweyen" ? true : false;

    setIsBoundary(sigilsBoundary ? true : false);
    setIsEternal(isEternal);
    console.log();
  }, [traitsTable, selectedCharacter, setIsBoundary, setIsEternal]);
  return <></>;
};

const StatsDebug = () => {
  // for debugging purposes

  // const stats = useStatsStore((state) => state);
  // const build = useBuildStore((state) => state);
  // useEffect(() => {
  //   console.log(stats);
  //   console.log(build);
  // }, [stats, build]);
  return <></>;
};
