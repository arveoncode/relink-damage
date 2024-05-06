"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { SquareArrowOutUpRight } from "lucide-react";

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
];

export const BannerNotif = () => {
  return (
    <div className="w-full bg-slate-200/20 p-8 mb-4">
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
                    {changelogs.map((log) => {
                      return (
                        <ChangeLogItem
                          key={log.version}
                          version={log.version}
                          changelogs={log.changelogs}
                        />
                      );
                    })}
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
            Found something wrong? Please raise it here:
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

const ChangeLogItem = ({ version, changelogs }: ChangeLogItem) => {
  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-left text-sm">Version: {version}</CardTitle>
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
