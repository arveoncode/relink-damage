"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { characters } from "@/constants/character/characters";
import { Character } from "@/types/character.types";
import { TabsContent } from "@radix-ui/react-tabs";
import { useTranslation } from "../(i18n)/client";
import { useParams } from "next/navigation";
import { recommendedBuilds } from "@/constants/character/skills/recommendedBuilds";

export const RecommendedBuilds = ({
  defaultCharacter,
}: {
  defaultCharacter: Character;
}) => {
  const params = useParams();
  const lng = params.lng as string;
  //   const uiTranslate = useTranslation(lng, "ui");
  const characterTranslate = useTranslation(lng, "characters");
  return (
    <div>
      <Tabs
        orientation="vertical"
        defaultValue={defaultCharacter}
        className="flex"
      >
        <TabsList className="flex jusitfy-left h-full">
          <ScrollArea className="h-96 px-4">
            <div className="flex flex-col gap-2">
              {characters.map((character) => {
                return (
                  <TabsTrigger key={character} value={character}>
                    {characterTranslate.t(character)}
                  </TabsTrigger>
                );
              })}
            </div>
          </ScrollArea>
        </TabsList>
        {recommendedBuilds.map((buildItem) => {
          return (
            <TabsContent value={buildItem.character} key={buildItem.character}>
              <div className="p-4">
                <h6 className="font-bold">
                  {characterTranslate.t(buildItem.character)}
                </h6>
                <div></div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};
