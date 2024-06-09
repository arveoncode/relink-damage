import { Character } from "@/types/character.types";
import { specialCharacters } from "../character/characters";

//
export const baseStatsAtLvl100 = (selectedCharacter?: Character) => {
  const isEternal = specialCharacters.includes(selectedCharacter as string);
  /* Your total base attack.
    Characters at lv100 have 12396 base attack with a
    +99 Terminus weapon (note that Terminus weapon applies a final +50%,
    bringing it to 18594) */
  return {
    attack: isEternal ? 10324 : 12396,
    /* Your base crit rate. Should be 50%. */
    critHitRate: isEternal ? 0.6 : 0.5,
    /* Your total bonus Crit DMG, including all masteries.
    Base = 20%
    Mastery = 30%
    Weapon Mastery = 50% */
    criticalDamage: 1,
  };
};

// amount of damage cap gained from masteries
export const masteryCap = 0.54;
