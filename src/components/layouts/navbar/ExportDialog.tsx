"use client";
import { DamagePotentialCell } from "@/app/(components)/skills-data-table/SkillsDataColumns";
import { useTranslation } from "@/app/(i18n)/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { convertCalculatorToLogsTrait } from "@/constants/logs/traits";
import { numberWithCommas, safeDecimalMultiplier } from "@/lib/calculators";
import { exportScreenshotToClipboard } from "@/lib/utils";
import { useBuildStore } from "@/stores/useBuildStore";
import { useSelectedRowsStore } from "@/stores/useSelectedRowsStore";
import { Equipment } from "@/types/app.types";
import { Trait, TraitLiterals } from "@/types/traits.types";
import { Check, ClipboardCopy, FolderOutput, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FolderOutput className="mr-2 h-4 w-4" />
          Export Build
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[56rem]">
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
                    <StaticBuildView
                      selectedCharacter={buildState.selectedCharacter}
                      sigilsEquipped={buildState.sigilsEquipped}
                      isTerminus={buildState.isTerminus}
                      isMaxAwakening={buildState.isMaxAwakening}
                      weaponImbues={buildState.weaponImbues}
                      overmasteries={{
                        attack: buildState.attack,
                        normalDamageCapUp: buildState.normalDamageCapUp,
                        skillDamageCapUp: buildState.skillDamageCapUp,
                        sbaDamageCapUp: buildState.sbaDamageCapUp,
                        sbaDamageUp: buildState.sbaDamageUp,
                        skillDamageUp: buildState.skillDamageUp,
                        critHitRate: buildState.critHitRate,
                      }}
                    />
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

const ExportImageButton = ({
  targetElement,
  text,
}: {
  targetElement?: string;
  text?: string;
}) => {
  return (
    <Button
      onClick={() => {
        try {
          exportScreenshotToClipboard(targetElement);
        } catch (e) {
          console.log(e);
        }
      }}
    >
      {text ? text : "Copy Image To Clipboard"}
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
  const params = useParams();
  const lng = params.lng as string;
  const traitsTranslate = useTranslation(lng, "traits");
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
      <p className="my-auto text-xs flex-1">
        {convertCalculatorToLogsTrait(trait.traitName) === undefined
          ? trait.traitName
          : traitsTranslate.t(
              `${convertCalculatorToLogsTrait(trait.traitName)}.text`
            )}
      </p>
    </div>
  );
};

const TraitBox = ({ sigil }: { sigil: TraitLiterals }) => {
  const params = useParams();
  const lng = params.lng as string;
  const traitsTranslate = useTranslation(lng, "traits");
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
      <p className="my-auto text-xs flex-1">
        {convertCalculatorToLogsTrait(sigil) === undefined
          ? sigil
          : traitsTranslate.t(`${convertCalculatorToLogsTrait(sigil)}.text`)}
      </p>
    </div>
  );
};

export const StaticBuildView = ({
  selectedCharacter,
  overmasteries,
  sigilsEquipped,
  weaponImbues,
  isTerminus,
  isMaxAwakening,
}: Equipment) => {
  const params = useParams();
  const lng = params.lng as string;
  const characterTranslate = useTranslation(lng, "characters");
  const omTranslate = useTranslation(lng, "overmasteries");
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <div className="col-span-2 flex flex-col gap-4">
        <div className=" flex flex-col gap-4 my-auto">
          <div className="flex gap-2">
            <hr className="flex-1 my-auto" />
            <p className="font-bold my-auto">
              {characterTranslate.t(selectedCharacter)}
            </p>
            <hr className="flex-1 my-auto" />
          </div>
          <div className="relative aspect-square w-full">
            <div
              style={{
                objectFit: "cover",
                backgroundImage: `url(
              ${getCharacterImage(selectedCharacter) as string}
            )`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
        <Card className="flex flex-col gap-4 p-4">
          <div className="flex gap-4">
            <hr className="flex-1 my-auto" />
            <h6>Overmasteries</h6>
            <hr className="flex-1 my-auto" />
          </div>
          <div>
            {overmasteries.attack !== 0 && (
              <StatBox
                name={omTranslate.t("0cf5d0f3.text")}
                value={overmasteries.attack}
              />
            )}
            {overmasteries.normalDamageCapUp !== 0 && (
              <StatBox
                name={omTranslate.t("06595c52.text")}
                value={safeDecimalMultiplier([
                  overmasteries.normalDamageCapUp,
                  100,
                ])}
                isPercentage
              />
            )}
            {overmasteries.skillDamageCapUp !== 0 && (
              <StatBox
                name={omTranslate.t("0b0e4311.text")}
                value={safeDecimalMultiplier([
                  overmasteries.skillDamageCapUp,
                  100,
                ])}
                isPercentage
              />
            )}
            {overmasteries.sbaDamageCapUp !== 0 && (
              <StatBox
                name={omTranslate.t("149593b8.text")}
                value={safeDecimalMultiplier([
                  overmasteries.sbaDamageCapUp,
                  100,
                ])}
                isPercentage
              />
            )}
            {overmasteries.skillDamageUp !== 0 && (
              <StatBox
                name={omTranslate.t("426b370b.text")}
                value={safeDecimalMultiplier([
                  overmasteries.skillDamageUp,
                  100,
                ])}
                isPercentage
              />
            )}
            {overmasteries.sbaDamageUp !== 0 && (
              <StatBox
                name={omTranslate.t("4e42646b.text")}
                value={safeDecimalMultiplier([overmasteries.sbaDamageUp, 100])}
                isPercentage
              />
            )}
            {overmasteries.critHitRate !== 0 && (
              <StatBox
                name={omTranslate.t("524492e2.text")}
                value={safeDecimalMultiplier([overmasteries.critHitRate, 100])}
                isPercentage
              />
            )}
          </div>
        </Card>
        {/* <div className="flex flex-col gap-4">
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
    </div> */}
      </div>
      <div className="col-span-3 flex flex-col gap-4">
        <Card className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <hr className="flex-1 my-auto" />
              <h6>Weapon</h6>
              <hr className="flex-1 my-auto" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                {weaponImbues.map((trait, i) => {
                  return (
                    <div key={i} className="flex gap-4 justify-between">
                      <WeaponImbueBox trait={trait} />
                      <div className="my-auto">{trait.level}</div>
                    </div>
                  );
                })}
              </div>
              <div>
                <StatBox name="Terminus" value={isTerminus} />
                <StatBox name="Max Awakening" value={isMaxAwakening} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex gap-4">
            <hr className="flex-1 my-auto" />
            <h6>Sigils</h6>
            <hr className="flex-1 my-auto" />
          </div>
          <div>
            {sigilsEquipped.map((sigil, i) => {
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
        </Card>
      </div>
    </div>
  );
};
