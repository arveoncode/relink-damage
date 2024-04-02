import { CharacterPicker } from "./(components)/CharacterPicker";
import { Overmasteries } from "./(components)/Overmasteries";
import { Traits } from "./(components)/Traits";
import { Weapon } from "./(components)/Weapon";
import { Sigils } from "./(components)/Sigils";
import { Stats } from "./(components)/Stats";
import { OtherInputs } from "./(components)/OtherInputs";
import { SkillsTable } from "./(components)/SkillsTable";

export default function Home() {
  return (
    <main className="flex flex-col relative">
      <div className="grid grid-cols-10 gap-4 p-8">
        <div className="flex flex-col gap-4 col-span-2">
          <CharacterPicker />
          <Overmasteries />
          <OtherInputs />
        </div>
        <div className="col-span-4 flex gap-4 flex-col">
          <Sigils />
          <Weapon />
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <Traits />
          <Stats />
        </div>
      </div>
      <div className="p-8 bg-white">
        <SkillsTable />
      </div>
    </main>
  );
}
