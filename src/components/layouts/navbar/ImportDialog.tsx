import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { getCharacterImage } from "@/constants/character/characters";
import {
  LogsCharacterTypes,
  convertLogsToCalculatorCharacter,
  logsCharacterTypesArray,
} from "@/constants/logs/characters";
import { CharacterStates } from "@/stores/useCharacterStore";
import { LogsData } from "@/types/logs.types";
import { Import } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ImportDialog = () => {
  const [logsInput, setLogsInput] = useState("");
  const [logsInputError, setLogsInputError] = useState<null | string>(null);
  const [logsInputParseError, setLogsInputParseError] = useState<string[]>([]);
  // TBI -> To be imported
  const [characterTBI, setCharacterTBI] = useState<CharacterStates | undefined>(
    undefined
  );
  function importFromLogs() {
    try {
      const logsData = JSON.parse(logsInput) as LogsData;
      setLogsInputError(null);

      // Validators
      if (
        logsCharacterTypesArray.includes(
          logsData.characterType as LogsCharacterTypes
        )
      ) {
        setCharacterTBI({
          selectedCharacter: convertLogsToCalculatorCharacter(
            logsData.characterType as LogsCharacterTypes
          ),
          artsLevel: 4,
          highestLvlRose: 4,
          arvessFermare: true,
          butterflies: 6,
          gravityWell: true,
        });
      } else {
        setLogsInputParseError((curr) => {
          return [...curr, "Invalid Character Type"];
        });
      }
    } catch (e) {
      console.log(e);
      setLogsInputError(JSON.stringify(e));
    }
    return true;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Import className="mr-2 h-4 w-4" />
          Import Build
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="from-logs">
          <DialogHeader>
            <div className="flex">
              <TabsList>
                {/* <TabsTrigger value="from-app">
                  Import from Calculator
                </TabsTrigger> */}
                <TabsTrigger value="from-logs">
                  Import from GBFR-Logs
                </TabsTrigger>
              </TabsList>
            </div>
          </DialogHeader>
          <TabsContent value="from-app"></TabsContent>
          <TabsContent value="from-logs">
            <div className="grid gap-4 grid-cols-2">
              <div className="flex flex-col gap-4 py-4">
                <Textarea
                  className="resize-none flex-1"
                  placeholder="Paste character data from GBFR-Logs"
                  onChange={(e) => setLogsInput(e.currentTarget.value)}
                  value={logsInput}
                />
                <Button onClick={() => importFromLogs()}>
                  Import from Logs
                </Button>
                {logsInputError && (
                  <Alert variant="destructive">Error parsing JSON</Alert>
                )}
              </div>
              <div className="py-4">
                {characterTBI && (
                  <div className="relative aspect-square">
                    <Image
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                      src={
                        getCharacterImage(
                          characterTBI?.selectedCharacter
                        ) as string
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
