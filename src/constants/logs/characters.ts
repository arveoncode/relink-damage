import { Character } from "@/types/character.types";

// Taken from https://github.com/false-spring/gbfr-resources/blob/main/en/characters.json
export const logsCharacters = {
  Pl0000: "Gran",
  Pl0100: "Djeeta",
  Pl0200: "Katalina",
  Pl0300: "Rackam",
  Pl0400: "Io",
  Pl0500: "Eugen",
  Pl0600: "Rosetta",
  Pl0700: "Ferry",
  Pl0800: "Lancelot",
  Pl0900: "Vane",
  Pl1000: "Percival",
  Pl1100: "Siegfried",
  Pl1200: "Charlotta",
  Pl1300: "Yodarha",
  Pl1400: "Narmaya",
  Pl1500: "Ghandagoza",
  Pl1600: "Zeta",
  Pl1700: "Vaseraga",
  Pl1800: "Cagliostro",
  Pl1900: "Id",
  Pl2000: "",
  Pl2100: "Sandalphon",
  Pl2200: "",
  Pl2300: "",
  Pl2400: "",
};

export function convertLogsToCalculatorCharacter(
  _characterType: LogsCharacterTypes
) {
  console.log(_characterType);
  console.log(logsCharacters[_characterType]);
  switch (_characterType) {
    case "Pl0000":
    case "Pl0100":
      return "Captain" as Character;
    case "Pl0200":
    case "Pl0300":
    case "Pl0400":
    case "Pl0500":
    case "Pl0600":
    case "Pl0700":
    case "Pl0800":
    case "Pl0900":
    case "Pl1000":
    case "Pl1100":
    case "Pl1200":
    case "Pl1300":
    case "Pl1400":
    case "Pl1500":
    case "Pl1600":
    case "Pl1700":
    case "Pl1800":
    case "Pl1900":
      return logsCharacters[_characterType] as Character;
    case "Pl2000":
    case "Pl2100":
    case "Pl2200":
    case "Pl2300":
    case "Pl2400":
      return "Io" as Character;
    default:
      return "Io" as Character;
  }
}

export const logsCharacterTypes = [
  "Pl0000",
  "Pl0100",
  "Pl0200",
  "Pl0300",
  "Pl0400",
  "Pl0500",
  "Pl0600",
  "Pl0700",
  "Pl0800",
  "Pl0900",
  "Pl1000",
  "Pl1100",
  "Pl1200",
  "Pl1300",
  "Pl1400",
  "Pl1500",
  "Pl1600",
  "Pl1700",
  "Pl1800",
  "Pl1900",
  "Pl2000",
  "Pl2100",
  "Pl2200",
  "Pl2300",
  "Pl2400",
] as const;

//for data validation shit man idk what im doing here
export const logsCharacterTypesArray = Object.keys(logsCharacters);

export type LogsCharacterTypes = (typeof logsCharacterTypes)[number];
