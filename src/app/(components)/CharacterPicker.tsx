"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Character } from "@/types/character.types";
import { Switch } from "@/components/ui/switch";
import {
  characters,
  getCharacterImage,
} from "@/constants/character/characters";
import Image from "next/image";
import { ComboBox, SelectOptionsProp } from "@/components/ui/combo-box";
import { useBuildStore } from "@/stores/useBuildStore";
import { useTranslation } from "../(i18n)/client";
import { useParams } from "next/navigation";

export const CharacterPicker = () => {
  const params = useParams();
  const lng = params.lng as string;
  const uiTranslate = useTranslation(lng, "ui");
  const characterTranslate = useTranslation(lng, "characters");
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const setSelectedCharacter = useBuildStore(
    (state) => state.setSelectedCharacter
  );
  const arvessFermare = useBuildStore((state) => state.arvessFermare);
  const setArvessFermare = useBuildStore((state) => state.setArvessFermare);

  function characterSpecificRenderSwitch() {
    switch (selectedCharacter) {
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
              checked={arvessFermare}
              onCheckedChange={(value) => setArvessFermare(value as boolean)}
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

  const options: SelectOptionsProp[] = characters.map((character) => {
    return {
      value: character,
      label: characterTranslate.t(character),
    };
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-4">
            <hr className="flex-1 my-auto" />
            <div>{uiTranslate.t("Character")}</div>
            <hr className="flex-1 my-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ComboBox
            commandEmptyText="None"
            options={options}
            placeHolder="Input Character"
            value={selectedCharacter as string}
            setValue={(value) => {
              setSelectedCharacter(value as Character);
            }}
          />
          <div className="relative aspect-square">
            <Image
              alt=""
              fill
              style={{ objectFit: "cover" }}
              src={getCharacterImage(selectedCharacter as Character) as string}
            />
          </div>
          <>{characterSpecificRenderSwitch()}</>
        </CardContent>
      </Card>
    </div>
  );
};
