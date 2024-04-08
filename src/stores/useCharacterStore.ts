import { Character } from "@/types/character.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CharacterStore {
  //   Selected Character
  selectedCharacter: Character;
  setSelectedCharacter: (character: Character) => void;

  // Character Specific Criteria
  // Io
  gravityWell: boolean;
  setGravityWell: (gravityWell: boolean) => void;
  // Zeta
  arvessFermare: boolean;
  setArvessFermare: (arvessFermare: boolean) => void;
  // Captain
  artsLevel: number;
  setArtsLevel: (artsLevel: number) => void;
  // Narmaya
  butterflies: number;
  setButterflies: (butterflies: number) => void;
  //Rosetta
  highestLvlRose: number;
  setHighestLvlRose: (highestLvlRose: number) => void;
}

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      selectedCharacter: "Io",
      setSelectedCharacter: (character: Character) =>
        set(() => ({ selectedCharacter: character })),
      gravityWell: false,
      setGravityWell: (gravityWell: boolean) =>
        set(() => ({ gravityWell: gravityWell })),
      arvessFermare: false,
      setArvessFermare: (arvessFermare: boolean) =>
        set(() => ({ arvessFermare: arvessFermare })),
      artsLevel: 0,
      setArtsLevel: (artsLevel: number) =>
        set(() => ({ artsLevel: artsLevel })),
      butterflies: 0,
      setButterflies: (butterflies: number) =>
        set(() => ({ butterflies: butterflies })),
      highestLvlRose: 0,
      setHighestLvlRose: (highestLvlRose: number) =>
        set(() => ({ highestLvlRose: highestLvlRose })),
    }),
    {
      name: "character",
    }
  )
);

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
