"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Circle, SquareArrowOutUpRight } from "lucide-react";

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
