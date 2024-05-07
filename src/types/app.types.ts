import { Character } from "./character.types";
import { Overmasteries } from "./overmasteries.types";
import { SigilSet, Trait } from "./traits.types";

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export interface Equipment {
  selectedCharacter: Character;
  overmasteries: Overmasteries;
  sigilsEquipped: SigilSet[];
  weaponImbues: Trait[];
  isTerminus: boolean;
  isMaxAwakening: boolean;
}
