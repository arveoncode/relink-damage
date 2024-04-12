"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GridSmallBackground } from "@/components/ui/small-grid-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCharacterImage } from "@/constants/character/characters";
import { getSigilImage } from "@/constants/gear/sigils";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { useOtherInputsStore } from "@/stores/useOtherInputsStore";
import { useOvermasteriesStore } from "@/stores/useOvermasteriesStore";
import { useTraitsStore } from "@/stores/useTraitsStore";
import { buildShareableUrl } from "@/stores/zustandHelpers/buildURLSuffix";
import { TraitLiterals } from "@/types/traits.types";
import { FolderOutput } from "lucide-react";
import Image from "next/image";

export const ExportDialog = () => {
  const characterState = useCharacterStore((state) => state);
  const traits = useTraitsStore((state) => state);
  const overmasteries = useOvermasteriesStore((state) => state);
  const otherInputs = useOtherInputsStore((state) => state);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FolderOutput className="mr-2 h-4 w-4" />
          Export Build
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[72rem]">
        <Tabs defaultValue="link">
          <DialogHeader>
            <div className="flex">
              <TabsList>
                <TabsTrigger value="link">Link</TabsTrigger>
                {/* <TabsTrigger value="image">Image</TabsTrigger>
                <TabsTrigger value="json">JSON</TabsTrigger> */}
              </TabsList>
            </div>
          </DialogHeader>
          <TabsContent value="link">
            <Input type="text" value="" />
          </TabsContent>
          <TabsContent value="image">
            <div className="shadow-inner rounded-md overflow-hidden">
              <GridSmallBackground>
                <div className="grid grid-cols-4 gap-4 p-4">
                  <div className=" flex flex-col gap-4">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt=""
                        fill
                        src={
                          getCharacterImage(
                            characterState.selectedCharacter
                          ) as string
                        }
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex gap-2">
                      <hr className="flex-1 my-auto" />
                      <p className="font-bold">
                        {characterState.selectedCharacter}
                      </p>
                      <hr className="flex-1 my-auto" />
                    </div>
                  </div>
                  <div></div>
                  <div className="col-span-2">
                    <h6>Sigils</h6>
                    {traits.sigilsEquipped.map((sigil, i) => {
                      return (
                        <div key={i} className="flex justify-between">
                          <div className="grid grid-cols-2 flex-1 gap-2">
                            <TraitBox sigil={sigil.sigil1 as TraitLiterals} />
                            <TraitBox sigil={sigil.sigil2 as TraitLiterals} />
                          </div>
                          <div className="my-auto">{sigil.level}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GridSmallBackground>
            </div>
          </TabsContent>
          <TabsContent value="data">data</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const TraitBox = ({ sigil }: { sigil: TraitLiterals }) => {
  return (
    <div className="flex gap-2">
      <div className="aspect-square h-8 bg-black rounded-md relative">
        <Image
          alt=""
          height={32}
          width={32}
          src={getSigilImage(sigil as TraitLiterals) as string}
        />
      </div>
      <p className="my-auto">{sigil}</p>
    </div>
  );
};
