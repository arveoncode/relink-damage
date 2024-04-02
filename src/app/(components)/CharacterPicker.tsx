"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { Character } from "@/types/character.types";
import { Switch } from "@/components/ui/switch";
import {
  characters,
  getCharacterImage,
} from "@/constants/character/characters";
import Image from "next/image";

export const CharacterPicker = () => {
  const characterStoreState = useCharacterStore((state) => state);
  function characterSpecificRenderSwitch() {
    switch (characterStoreState.selectedCharacter) {
      // case "Io":
      //
      //   );
      case "Zeta":
        return (
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Arvess Fermare</p>
              <p className="text-sm text-muted-foreground">
                Does 25% more damage
              </p>
            </div>
            <Switch
              checked={characterStoreState.arvessFermare}
              onCheckedChange={(value) =>
                characterStoreState.setArvessFermare(value as boolean)
              }
            />
          </div>
        );
      case "Narmaya":
        return <div></div>;
      case "Io":
        return (
          <></>
          // <div className=" flex items-center space-x-4 rounded-md border p-4">
          //   <div className="flex-1 space-y-1">
          //     <p className="text-sm font-medium leading-none">Gravity Well</p>
          //     <p className="text-sm text-muted-foreground">
          //       idk what gravity well does uwu
          //     </p>
          //   </div>
          //   <Switch
          //     checked={characterStoreState.gravityWell}
          //     onCheckedChange={(value) =>
          //       characterStoreState.setGravityWell(value as boolean)
          //     }
          //   />
          // </div>
        );
      case "Captain":
      case "Rosetta":
      case "Cagliostro":
      case "Ferry":
      case "Lancelot":
      case "Rackam":
      case "Vaseraga":
      case "Siegfried":
      case "Vane":
      case "Id":
      case "Charlotta":
      case "Ghandagoza":
      case "Percival":
      case "Katalina":
      case "Eugen":
      case "Yodarha":
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-4">
            <hr className="flex-1 my-auto" />
            <div>Character</div>
            <hr className="flex-1 my-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Select
            onValueChange={(value) =>
              characterStoreState.setSelectedCharacter(value as Character)
            }
            value={characterStoreState.selectedCharacter}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Character" />
            </SelectTrigger>
            <SelectContent>
              {characters.map((character) => {
                return (
                  <SelectItem value={character} key={character}>
                    {character}
                  </SelectItem>
                );
              })}
            </SelectContent>
            <div className="aspect-square w-full bg-black relative">
              <Image
                alt=""
                fill
                src={
                  getCharacterImage(
                    characterStoreState.selectedCharacter
                  ) as string
                }
                objectFit="cover"
              />
            </div>
          </Select>
          {/* {characterStoreState.selectedCharacter !== undefined &&
            (characterStoreState.selectedCharacter === "Zeta" ||
              characterStoreState.selectedCharacter === "Captain" ||
              characterStoreState.selectedCharacter === "Io" ||
              characterStoreState.selectedCharacter === "Narmaya" ||
              characterStoreState.selectedCharacter === "Rosetta") && ( */}
          <>{characterSpecificRenderSwitch()}</>
          {/* // )} */}
        </CardContent>
      </Card>
    </div>
  );
};
