import { Character } from "@/types/character.types";
import { specialCharacters } from "../character/characters";

export const baseStatsAtLvl100 = (selectedCharacter?: Character) => {
  const isEternal = specialCharacters.includes(selectedCharacter as string);

  return {
    /**
     * @var attack Your total base attack.
    Characters at lv100 have 12396 base attack with a
    +99 Terminus weapon (note that Terminus weapon applies a final +50%,
    bringing it to 18594)
     */
    attack: isEternal ? 10324 : 12396,
    /**
     * @const critHitRate at lvl 100 - 0.5 for base characters, 0.6 for additional characters
     */
    critHitRate: isEternal ? 0.6 : 0.5,
    /**
     * Base (20%) +
     * Mastery (30%) +
     * Weapon Mastery (50%)
     * @const criticalDamage Your total bonus Crit DMG, including all masteries.
     */
    criticalDamage: 1,
  };
};

/**
 * @const masteryCap amount of damage cap gained from masteries
 */
export const masteryCap = 0.54;
