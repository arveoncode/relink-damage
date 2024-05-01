import { CharacterPicker } from "../(components)/CharacterPicker";
import { Overmasteries } from "../(components)/Overmasteries";
import { Traits } from "../(components)/Traits";
import { Weapon } from "../(components)/Weapon";
import { Sigils } from "../(components)/Sigils";
import { Stats } from "../(components)/Stats";
import { OtherInputs } from "../(components)/OtherInputs";
import { SkillsTable } from "../(components)/SkillsTable";
import { ImportDialog } from "@/components/layouts/navbar/ImportDialog";
import { BuildSlotTabs } from "../(components)/BuildSlotTabs";
import { ExportDialog } from "@/components/layouts/navbar/ExportDialog";
import { LogsImporter } from "../(components)/LogsImporter";
import { Suspense } from "react";
import { fallbackLng, languages } from "../i18n/settings";
import { BannerNotif } from "../(components)/BannerNotif";

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  return (
    <main className="flex flex-col relative">
      <BannerNotif />
      <div className="px-8 flex justify-between">
        <Suspense>
          <BuildSlotTabs />
        </Suspense>

        <div className="flex gap-4">
          <Suspense>
            <ExportDialog defaultTab="link" />
          </Suspense>
          <Suspense>
            <ImportDialog />
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4 p-8">
        <div className="flex flex-col gap-4 col-span-2">
          <Suspense>
            <CharacterPicker />
          </Suspense>
          <Suspense>
            <Overmasteries />
          </Suspense>
          <Suspense>
            <OtherInputs />
          </Suspense>
        </div>
        <div className="col-span-4 flex gap-4 flex-col">
          <Suspense>
            <Sigils />
          </Suspense>
          <Suspense>
            <Weapon />
          </Suspense>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <Suspense>
            <Traits />
          </Suspense>
          <Suspense>
            <Stats />
          </Suspense>
        </div>
      </div>
      <div className="p-8 bg-white">
        <Suspense>
          <SkillsTable />
        </Suspense>
      </div>
      <Suspense>
        <LogsImporter />
      </Suspense>
    </main>
  );
}
