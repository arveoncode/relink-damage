"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Circle, SquareArrowOutUpRight } from "lucide-react";
import { useParams } from "next/navigation";

const changelogs: ChangeLogItem[] = [
  {
    version: "1.0.0",
    changelogs: [
      "Calculations running as per Maygi's calculator 2.9.4. Thanks, Maygi!",
      "All game version 1.2.x characters included!",
      "GBFR-Logs integration to copy build implemented. Thanks, False-spring!",
      "Translation files for traits, overmasteries, and characters added. Thanks, False-spring!",
    ],
  },
  {
    version: "1.0.1",
    changelogs: [
      "Changed the image export layout.",
      "Removed row selection on skills table. Maybe a future update to optionally include skills on export of image?",
    ],
  },
  {
    version: "1.0.2",
    changelogs: [
      "Fixed Combo Finisher DMG sigil not providing a finisher bonus.",
    ],
  },
  {
    version: "1.1.0",
    changelogs: [
      "Added recommended builds on the Import Build dialog.",
      "Added Default Tweyen build.",
    ],
  },
  {
    version: "1.1.1",
    changelogs: ["Fixed Weakpoint DMG not adding to the weakpoint stat."],
  },
  {
    version: "1.1.2",
    changelogs: [
      "Fixed Charlotta's warpath not being added to skills calculations.",
      `Fixed skills table not showing "Special".`,
      `Fixed export image not showing weapon imbues.`,
      "Added enhanced DMG Buff on other inputs.",
    ],
  },
];

export const BannerNotif = () => {
  return (
    <div className="w-full bg-slate-200/20 lg:px-8 px-4 py-4 mb-4">
      <div>
        <div className="flex align-middle">
          <h6 className="font-bold my-auto">
            Calculator is still being updated!{" "}
          </h6>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="link" className="text-xs">
                See Changelog
              </Button>
            </SheetTrigger>
            <SheetContent>
              <Tabs defaultValue="changelog">
                <div className="flex flex-col gap-4">
                  <div>
                    <TabsList>
                      <TabsTrigger value="changelog">Changelog</TabsTrigger>
                      <TabsTrigger value="announcements">
                        Announcements
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <hr />
                  <TabsContent value="changelog">
                    <ScrollArea className="h-full">
                      <div className="flex flex-col-reverse gap-2">
                        {changelogs.map((log, i) => {
                          return (
                            <ChangeLogItem
                              key={log.version}
                              version={log.version}
                              changelogs={log.changelogs}
                              isCurrent={i === changelogs.length - 1}
                            />
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="announcements">
                    <Card>
                      <CardHeader className="p-4">
                        <CardTitle className="text-left text-sm">
                          Thank you for ~1,400 visitors! 🎉
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-4 pb-4">
                        <p className="text-xs">
                          Thank you so much to the ~1,400 Granblue Fantasy:
                          Relink players who accessed the site since it was
                          integrated to GBFR-logs. This application has garnered
                          over ~3600 page views from over 40 countries. If you
                          wish to contribute to translations, please reach out
                          on Github (link on navbar) or on discord: @arveonuwu!
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </SheetContent>
          </Sheet>
        </div>

        <hr />
        <div className="flex align-middle">
          <p className="text-xs my-auto">
            Found something wrong? Want new features? Please raise it here:
          </p>
          <Button asChild variant="link" className="text-xs">
            <a
              href="https://github.com/arveoncode/relink-damage/issues"
              className="flex gap-1"
              target="_blank"
            >
              <p>Github Issues</p>
              <SquareArrowOutUpRight className="h-2 w-2" />
            </a>
          </Button>
        </div>
      </div>
      <LanguageEasterEgg />
    </div>
  );
};

interface ChangeLogItem {
  version: string;
  changelogs: string[] | { log: string; credits: string }[];
}

interface ChangeLogItemProps extends ChangeLogItem {
  isCurrent: boolean;
}

const ChangeLogItem = ({
  version,
  changelogs,
  isCurrent,
}: ChangeLogItemProps) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-left text-sm flex justify-between">
          <h6>Version: {version}</h6>
          {isCurrent && (
            <div className="text-foreground/50 flex gap-2 text-xs">
              <p className="my-auto"> Current</p>

              <Circle className="fill-green-300 border-none my-auto h-4 w-4" />
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <ul>
          {changelogs.map((log, i) => {
            return (
              <li key={i} className="text-xs flex gap-2">
                {/* <Circle className="h-2 w-2 my-auto" /> */}
                <p>-</p>
                <p>{log as string}</p>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

const LanguageEasterEgg = () => {
  const params = useParams();
  const lng = params.lng as string;
  return (
    <div>
      {lng === "jp" && (
        <p>
          多くの日本のユーザーがこの電卓を使用していることに気づきました。さらに翻訳を追加するには、Github
          でご連絡いただくか、twitter
          <Button variant="link" asChild>
            <a href="https://twitter.com/arveon_uwu" target="_blank">
              @arveon_uwu
            </a>
          </Button>
          でメッセージをお送りください。 Google
          を使用して翻訳したため、申し訳ありません 😅
        </p>
      )}
      {lng === "ko" && (
        <p>
          나는 많은 한국 사용자들이 이 계산기를 사용한다는 것을 알았습니다. 더
          많은 번역을 추가하려면 Github에 문의하거나 Twitter{" "}
          <Button variant="link" asChild>
            <a href="https://twitter.com/arveon_uwu" target="_blank">
              @arveon_uwu
            </a>
          </Button>
          로 메시지를 보내주세요. Google을 사용하여 번역되었으므로 사과드립니다
          😅
        </p>
      )}
    </div>
  );
};
