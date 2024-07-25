"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { characters } from "@/constants/character/characters";
import { Character } from "@/types/character.types";
import { TabsContent } from "@radix-ui/react-tabs";
import { useTranslation, useTranslationEz } from "../(i18n)/client";
import { useParams } from "next/navigation";
import { recommendedBuilds } from "@/constants/character/skills/recommendedBuilds";
import { StaticBuildView } from "@/components/layouts/navbar/ExportDialog";
import { Button } from "@/components/ui/button";
import { useBuildStore } from "@/stores/useBuildStore";
import { Equipment } from "@/types/app.types";
import { toast } from "sonner";

export const RecommendedBuilds = ({
  defaultCharacter,
}: {
  defaultCharacter: Character;
}) => {
  const params = useParams();
  const lng = params.lng as string;
  const characterTranslate = useTranslation(lng, "characters");
  const t = useTranslationEz("ui/rec-build");
  const setSelectedCharacter = useBuildStore(
    (state) => state.setSelectedCharacter
  );
  const setOvermasteriesStates = useBuildStore(
    (state) => state.setOvermasteriesStates
  );
  const setTraitsStates = useBuildStore((state) => state.setTraitsStates);

  function importData(_equipment: Equipment) {
    setSelectedCharacter(_equipment.selectedCharacter);
    setOvermasteriesStates(_equipment.overmasteries);
    setTraitsStates({
      sigilsEquipped: _equipment.sigilsEquipped,
      isTerminus: _equipment.isTerminus,
      isMaxAwakening: _equipment.isMaxAwakening,
      weaponImbues: _equipment.weaponImbues,
    });
    toast(t("Build loaded."));
  }
  return (
    <div>
      <Tabs
        orientation="vertical"
        defaultValue={defaultCharacter}
        className="flex"
      >
        <TabsList className="flex jusitfy-left h-full max-h-[95vw]">
          <ScrollArea className="h-[40rem] px-4">
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
            <TabsContent
              value={buildItem.character}
              key={buildItem.character}
              className="flex-1"
            >
              {buildItem.builds.length > 0 ? (
                <div className="px-4 flex flex-col gap-4 h-full">
                  <div className="flex-1">
                    <Tabs
                      defaultValue={
                        buildItem.builds.length > 0
                          ? buildItem.builds[0].name
                          : ""
                      }
                      className="h-full"
                    >
                      <div className="flex flex-col h-full">
                        <div>
                          <TabsList className="h-full">
                            {buildItem.builds.map((buildState, i) => {
                              return (
                                <TabsTrigger key={i} value={buildState.name}>
                                  {buildState.name}
                                </TabsTrigger>
                              );
                            })}
                          </TabsList>
                        </div>

                        {buildItem.builds.map((buildState, i) => {
                          return (
                            <TabsContent
                              value={buildState.name}
                              key={i}
                              className="flex flex-col justify-between flex-1 h-full"
                            >
                              <StaticBuildView
                                selectedCharacter={buildState.selectedCharacter}
                                sigilsEquipped={buildState.sigilsEquipped}
                                isTerminus={buildState.isTerminus}
                                isMaxAwakening={buildState.isMaxAwakening}
                                weaponImbues={buildState.weaponImbues}
                                overmasteries={buildState.overmasteries}
                              />
                              <div className="flex justify-end mt-auto">
                                <Button
                                  variant="default"
                                  onClick={() => importData(buildState)}
                                >
                                  {t("Load Build")}
                                </Button>
                              </div>
                            </TabsContent>
                          );
                        })}
                      </div>
                    </Tabs>
                  </div>
                </div>
              ) : (
                <div className="px-4 h-full flex flex-col justify-center gap-4">
                  <div className="text-center my-auto flex flex-col gap-2">
                    <p className="font-bold">
                      {t("No recommended builds for now aside from Tweyen 😢")}
                    </p>
                    <p>
                      {t("Feel free to reach out on Github or on Discord if you want to recommend some builds 🤞")}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};
