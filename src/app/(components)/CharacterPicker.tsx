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
import { Input } from "@/components/ui/input";

export const CharacterPicker = () => {
  const params = useParams();
  const lng = params.lng as string;
  const uiTranslate = useTranslation(lng, "ui");
  const characterTranslate = useTranslation(lng, "characters");
  const selectedCharacter = useBuildStore((state) => state.selectedCharacter);
  const setSelectedCharacter = useBuildStore(
    (state) => state.setSelectedCharacter
  );
  // char specific bools
  const arvessFermare = useBuildStore((state) => state.arvessFermare);
  const setArvessFermare = useBuildStore((state) => state.setArvessFermare);
  const uniqueSigilActive = useBuildStore((state) => state.uniqueSigilActive);
  const setUniqueSigilActive = useBuildStore(
    (state) => state.setUniqueSigilActive
  );
  const avatarActive = useBuildStore((state) => state.avatarActive);
  const setAvatarActive = useBuildStore((state) => state.setAvatarActive);
  // char specific numbers
  const butterflies = useBuildStore((state) => state.butterflies);
  const setButterflies = useBuildStore((state) => state.setButterflies);
  const artsLevel = useBuildStore((state) => state.artsLevel);
  const setArtsLevel = useBuildStore((state) => state.setArtsLevel);
  const highestLvlRose = useBuildStore((state) => state.highestLvlRose);
  const setHighestLvlRose = useBuildStore((state) => state.setHighestLvlRose);
  const rageLevel = useBuildStore((state) => state.rageLevel);
  const setRageLevel = useBuildStore((state) => state.setRageLevel);

  function characterSpecificRenderSwitch() {
    switch (selectedCharacter) {
      case "Zeta":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={arvessFermare}
            setCharacterSpecificVariable={setArvessFermare}
            title="Arvess Fermare"
            description=""
          />
        );
      case "Tweyen":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={uniqueSigilActive}
            setCharacterSpecificVariable={setUniqueSigilActive}
            title="Unique Sigil Active"
            description=""
          />
        );
      case "Seofon":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={avatarActive}
            setCharacterSpecificVariable={setAvatarActive}
            title="Avatar Active"
            description=""
          />
        );
      case "Narmaya":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={butterflies}
            setCharacterSpecificVariable={setButterflies}
            title="Butterflies"
            description=""
          />
        );
      case "Captain":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={artsLevel}
            setCharacterSpecificVariable={setArtsLevel}
            title="Arts Level"
            description=""
          />
        );
      case "Ghandagoza":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={rageLevel}
            setCharacterSpecificVariable={setRageLevel}
            title="Rage Level"
            description=""
          />
        );
      case "Rosetta":
        return (
          <CharacterSpecificInput
            characterSpecificVariable={highestLvlRose}
            setCharacterSpecificVariable={setHighestLvlRose}
            title="Highest Level Rose"
            description=""
          />
        );
      default:
        return <></>;
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

interface CharacterSpecificInputProps {
  characterSpecificVariable: boolean | number;
  setCharacterSpecificVariable: (_input: any) => void;
  title: string;
  description?: string;
}

const CharacterSpecificInput = ({
  characterSpecificVariable,
  setCharacterSpecificVariable,
  title,
  description,
}: CharacterSpecificInputProps) => {
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      {typeof characterSpecificVariable === "boolean" ? (
        <Switch
          checked={characterSpecificVariable as boolean}
          onCheckedChange={(value) =>
            setCharacterSpecificVariable(value as boolean)
          }
        />
      ) : (
        <Input
          value={characterSpecificVariable as number}
          onChange={(e) => setCharacterSpecificVariable(e.currentTarget.value)}
          type="number"
        />
      )}
    </div>
  );
};
