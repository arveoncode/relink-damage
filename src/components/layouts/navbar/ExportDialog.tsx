"use client";
import { DamagePotentialCell } from "@/app/(components)/skills-data-table/SkillsDataColumns";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GridSmallBackground } from "@/components/ui/small-grid-background";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCharacterImage } from "@/constants/character/characters";
import { getSigilImage } from "@/constants/gear/sigils";
import { numberWithCommas, safeDecimalMultiplier } from "@/lib/calculators";
import { exportScreenshotToClipboard } from "@/lib/utils";
import { useBuildStore } from "@/stores/useBuildStore";
import { useSelectedRowsStore } from "@/stores/useSelectedRowsStore";
import { Trait, TraitLiterals } from "@/types/traits.types";
import { Check, ClipboardCopy, FolderOutput, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const ExportDialog = ({
  defaultTab = "link",
}: {
  defaultTab?: string;
}) => {
  const buildState = useBuildStore((state) => state);
  const [url, setUrl] = useState("");
  const selectedSkills = useSelectedRowsStore((state) => state.selectedSkills);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  useEffect(() => {
    console.log(selectedSkills);
  }, [selectedSkills]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FolderOutput className="mr-2 h-4 w-4" />
          Export Build
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[72rem]">
        <Tabs defaultValue={defaultTab}>
          <DialogHeader>
            <div className="flex">
              <TabsList>
                <TabsTrigger value="link">Link</TabsTrigger>
                <TabsTrigger value="image">Image</TabsTrigger>
              </TabsList>
            </div>
          </DialogHeader>
          <TabsContent value="link">
            <div className="flex gap-4">
              <Input type="text" value={url} readOnly />
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  toast("Link has been copied.");
                }}
              >
                <ClipboardCopy className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="image">
            <div className="flex flex-col gap-4">
              <div
                className="shadow-inner rounded-md overflow-hidden"
                id="build"
              >
                <GridSmallBackground>
                  <div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="col-span-2 flex flex-col gap-4">
                        <div className=" grid grid-cols-3 gap-4 my-auto">
                          <div className="relative aspect-square w-full">
                            <div
                              style={{
                                objectFit: "cover",
                                backgroundImage: `url(
                                  ${
                                    getCharacterImage(
                                      buildState.selectedCharacter
                                    ) as string
                                  }
                                )`,
                                width: "100%",
                                height: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                          </div>
                          <div className="flex gap-2 col-span-2">
                            <hr className="flex-1 my-auto" />
                            <p className="font-bold my-auto">
                              {buildState.selectedCharacter}
                            </p>
                            <hr className="flex-1 my-auto" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <hr className="flex-1 my-auto" />
                            <h6>Overmasteries</h6>
                            <hr className="flex-1 my-auto" />
                          </div>
                          <div>
                            {buildState.attack !== 0 && (
                              <StatBox
                                name="Attack"
                                value={buildState.attack}
                              />
                            )}
                            {buildState.normalDamageCapUp !== 0 && (
                              <StatBox
                                name="Normal Damage Cap Up"
                                value={safeDecimalMultiplier([
                                  buildState.normalDamageCapUp,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                            {buildState.skillDamageCapUp !== 0 && (
                              <StatBox
                                name="Skill Damage Cap Up"
                                value={safeDecimalMultiplier([
                                  buildState.skillDamageCapUp,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                            {buildState.sbaDamageCapUp !== 0 && (
                              <StatBox
                                name="SBA Damage Cap Up"
                                value={safeDecimalMultiplier([
                                  buildState.sbaDamageCapUp,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                            {buildState.skillDamageUp !== 0 && (
                              <StatBox
                                name="Skill Damage Up"
                                value={safeDecimalMultiplier([
                                  buildState.skillDamageUp,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                            {buildState.sbaDamageUp !== 0 && (
                              <StatBox
                                name="SBA Damage Up"
                                value={safeDecimalMultiplier([
                                  buildState.sbaDamageUp,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                            {buildState.critHitRate !== 0 && (
                              <StatBox
                                name="Crit Hit Rate"
                                value={safeDecimalMultiplier([
                                  buildState.critHitRate,
                                  100,
                                ])}
                                isPercentage
                              />
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <hr className="flex-1 my-auto" />
                            <h6>Other Inputs</h6>
                            <hr className="flex-1 my-auto" />
                          </div>
                          <div>
                            <StatBox
                              name="Number Of Skills"
                              value={buildState.numberOfSkills}
                            />
                            <StatBox
                              name="Attack Buffs"
                              value={safeDecimalMultiplier([
                                buildState.attackBuffs,
                                100,
                              ])}
                              isPercentage
                            />
                            <StatBox
                              name="Defense Debuffs"
                              value={safeDecimalMultiplier([
                                buildState.defDebuffs,
                                100,
                              ])}
                              isPercentage
                            />
                            <StatBox
                              name="Combo Active"
                              value={buildState.comboActive}
                            />
                            <StatBox
                              name="Back Attack"
                              value={buildState.backAttack}
                            />
                            <StatBox
                              name="Weak Point Attack"
                              value={buildState.weakPointAttack}
                            />
                            <StatBox
                              name="Link Time"
                              value={buildState.isLinkTime}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-4">
                            <hr className="flex-1 my-auto" />
                            <h6>Weapon</h6>
                            <hr className="flex-1 my-auto" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              {buildState.weaponImbues.map((trait, i) => {
                                return <WeaponImbueBox key={i} trait={trait} />;
                              })}
                            </div>
                            <div>
                              <StatBox
                                name="Terminus"
                                value={buildState.isTerminus}
                              />
                              <StatBox
                                name="Max Awakening"
                                value={buildState.isMaxAwakening}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <hr className="flex-1 my-auto" />
                          <h6>Sigils</h6>
                          <hr className="flex-1 my-auto" />
                        </div>
                        <div>
                          {buildState.sigilsEquipped.map((sigil, i) => {
                            return (
                              <div key={i} className="flex justify-between">
                                <div className="grid grid-cols-2 flex-1 gap-2">
                                  <TraitBox
                                    sigil={sigil.sigil1 as TraitLiterals}
                                  />
                                  <TraitBox
                                    sigil={sigil.sigil2 as TraitLiterals}
                                  />
                                </div>
                                <div className="my-auto">{sigil.level}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    {selectedSkills.length !== 0 && (
                      <div className="p-4">
                        {/* selected skills */}
                        <Table className="bg-white">
                          <TableHeader>
                            <TableRow className="text-xs">
                              <TableHead>Skill</TableHead>
                              <TableHead>Modifier</TableHead>
                              <TableHead>Crit Chance</TableHead>
                              <TableHead>Total Damage Cap</TableHead>
                              <TableHead>NonCrit</TableHead>
                              <TableHead>Crit</TableHead>
                              <TableHead>Damage Potential</TableHead>
                              <TableHead>Overcap</TableHead>
                              <TableHead>Supplemental</TableHead>
                              <TableHead>AVG Total Damage</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {selectedSkills.map((row, i) => {
                              return (
                                <TableRow key={i} className="text-xs">
                                  <TableCell>{row.skill}</TableCell>
                                  <TableCell>{row.modifier}</TableCell>
                                  <TableCell>
                                    {safeDecimalMultiplier([
                                      row.critChance,
                                      100,
                                    ]).toFixed(2)}
                                    %
                                  </TableCell>
                                  <TableCell>
                                    {numberWithCommas(
                                      Math.round(row.totalDamageCap)
                                    )}
                                  </TableCell>
                                  <TableCell>
                                    {numberWithCommas(Math.round(row.nonCrit))}
                                  </TableCell>
                                  <TableCell>
                                    {numberWithCommas(Math.round(row.crit))}
                                  </TableCell>
                                  <TableCell>
                                    <DamagePotentialCell
                                      damagePotential={row.damagePotential}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    {row.overcap.toFixed(2)}%
                                  </TableCell>
                                  <TableCell>
                                    {numberWithCommas(row.supplemental)}
                                  </TableCell>
                                  <TableCell>
                                    {numberWithCommas(row.averageTotalDmg)}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                </GridSmallBackground>
              </div>
              <div className="flex justify-end">
                <ExportImageButton />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="data">data</TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const ExportImageButton = () => {
  return (
    <Button
      onClick={() => {
        try {
          exportScreenshotToClipboard();
        } catch (e) {
          console.log(e);
        }
      }}
    >
      Copy Image To Clipboard
    </Button>
  );
};

const StatBox = ({
  name,
  value,
  isPercentage,
}: {
  name: string;
  value: number | boolean;
  isPercentage?: boolean;
}) => {
  return (
    <div className="flex gap-2">
      <div className="text-sm">
        <p>{name}</p>
      </div>
      <hr className="flex-1 my-auto" />
      <div>
        {typeof value === "boolean" ? (
          value ? (
            <Check className="h-6 w-6" />
          ) : (
            <X className="h-6 w-6" />
          )
        ) : (
          value
        )}{" "}
        {isPercentage && typeof value === "number" ? "%" : ""}
      </div>
    </div>
  );
};

const WeaponImbueBox = ({ trait }: { trait: Trait }) => {
  return (
    <div className="flex gap-2">
      <div className="aspect-square h-6 w-6 bg-black rounded-md relative">
        <Image
          alt=""
          height={24}
          width={24}
          src={getSigilImage(trait.traitName as TraitLiterals) as string}
        />
      </div>
      <p className="my-auto text-xs flex-1">{trait.traitName}</p>
    </div>
  );
};

const TraitBox = ({ sigil }: { sigil: TraitLiterals }) => {
  return (
    <div className="flex gap-2">
      <div className="aspect-square h-6 w-6 bg-black rounded-md relative">
        <Image
          alt=""
          height={24}
          width={24}
          src={getSigilImage(sigil as TraitLiterals) as string}
        />
      </div>
      <p className="my-auto text-xs flex-1">{sigil}</p>
    </div>
  );
};
