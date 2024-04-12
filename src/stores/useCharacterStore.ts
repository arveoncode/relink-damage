import { Character } from "@/types/character.types";
// import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";
// import { persistentStorage } from "./zustandHelpers/persistentUrlStorage";

export interface CharacterStates {
  selectedCharacter: Character;
  gravityWell: boolean;
  arvessFermare: boolean;
  artsLevel: number;
  butterflies: number;
  highestLvlRose: number;
}

export interface CharacterStore extends CharacterStates {
  //   Selected Character
  setSelectedCharacter: (character: Character) => void;
  // Character Specific Criteria
  // Io
  setGravityWell: (gravityWell: boolean) => void;
  // Zeta
  setArvessFermare: (arvessFermare: boolean) => void;
  // Captain
  setArtsLevel: (artsLevel: number) => void;
  // Narmaya
  setButterflies: (butterflies: number) => void;
  //Rosetta
  setHighestLvlRose: (highestLvlRose: number) => void;
  setCharacterStates: ({
    selectedCharacter,
    gravityWell,
    arvessFermare,
    artsLevel,
    butterflies,
    highestLvlRose,
  }: CharacterStates) => void;
}

// migrated to buildstore
// export const useCharacterStore = create(
//   persist<CharacterStore>(
//     (set) => ({
//       selectedCharacter: "Io",
//       setSelectedCharacter: (character: Character) =>
//         set(() => ({ selectedCharacter: character })),
//       gravityWell: false,
//       setGravityWell: (gravityWell: boolean) =>
//         set(() => ({ gravityWell: gravityWell })),
//       arvessFermare: false,
//       setArvessFermare: (arvessFermare: boolean) =>
//         set(() => ({ arvessFermare: arvessFermare })),
//       artsLevel: 0,
//       setArtsLevel: (artsLevel: number) =>
//         set(() => ({ artsLevel: artsLevel })),
//       butterflies: 0,
//       setButterflies: (butterflies: number) =>
//         set(() => ({ butterflies: butterflies })),
//       highestLvlRose: 0,
//       setHighestLvlRose: (highestLvlRose: number) =>
//         set(() => ({ highestLvlRose: highestLvlRose })),
//       setCharacterStates: ({
//         selectedCharacter,
//         gravityWell,
//         arvessFermare,
//         artsLevel,
//         butterflies,
//         highestLvlRose,
//       }: CharacterStates) =>
//         set(() => ({
//           selectedCharacter: selectedCharacter,
//           gravityWell: gravityWell,
//           arvessFermare: arvessFermare,
//           artsLevel: artsLevel,
//           butterflies: butterflies,
//           highestLvlRose: highestLvlRose,
//         })),
//     }),
//     {
//       name: "character",
//       storage: createJSONStorage<CharacterStore>(() => persistentStorage),
//     }
//   )
// );

// export function getCharacterInput(): CharacterInput {
//   const selectedCharacter = useCharacterStore(
//     (state) => state.selectedCharacter
//   );
//   switch (selectedCharacter) {
//     // case "Io":
//     //   const gravityWell = useCharacterStore((state) => state.gravityWell);
//     //   return {
//     //     name: selectedCharacter,
//     //     // gravityWell: gravityWell,
//     //   };
//     case "Zeta":
//       const arvessFermare = useCharacterStore((state) => state.arvessFermare);
//       return {
//         name: selectedCharacter,
//         arvessFermare: arvessFermare,
//       };
//     case "Narmaya":
//       const butterfiles = useCharacterStore((state) => state.butterflies);
//       return {
//         name: selectedCharacter,
//         butterflies: butterfiles,
//       };
//       break;
//     case "Captain":
//       const artsLevel = useCharacterStore((state) => state.artsLevel);
//       return {
//         name: selectedCharacter,
//         artsLevel: artsLevel,
//       };
//     case "Rosetta":
//       const highestLvlRose = useCharacterStore((state) => state.highestLvlRose);
//       return {
//         name: selectedCharacter,
//         highestLvlRose: highestLvlRose,
//       };
//     default:
//       return {
//         name: selectedCharacter,
//       };
//   }
// }
