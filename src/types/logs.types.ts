export interface LogsData {
  actorIndex: number;
  displayName: string;
  characterName: string;
  characterType: string;
  sigils: Sigil[];
  isOnline: boolean;
  weaponInfo: WeaponInfo;
  overmasteryInfo: OvermasteryInfo;
  playerStats: PlayerStats;
}
interface PlayerStats {
  level: number;
  totalHp: number;
  totalAttack: number;
  stunPower: number;
  criticalRate: number;
  totalPower: number;
}
interface OvermasteryInfo {
  overmasteries: Overmastery[];
}
interface Overmastery {
  id: number;
  flags: number;
  value: number;
}
interface WeaponInfo {
  weaponId: number;
  starLevel: number;
  plusMarks: number;
  awakeningLevel: number;
  trait1Id: number;
  trait1Level: number;
  trait2Id: number;
  trait2Level: number;
  trait3Id: number;
  trait3Level: number;
  wrightstoneId: number;
  weaponLevel: number;
  weaponHp: number;
  weaponAttack: number;
}
interface Sigil {
  firstTraitId: number;
  firstTraitLevel: number;
  secondTraitId: number;
  secondTraitLevel: number;
  sigilId: number;
  equippedCharacter: number;
  sigilLevel: number;
  acquisitionCount: number;
  notificationEnum: number;
}
