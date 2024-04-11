"use client";
import { Cog, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ExportDialog } from "./ExportDialog";
import { ImportDialog } from "./ImportDialog";

export const Navbar = () => {
  const packageJson = require("@/../../package.json");
  return (
    <nav className="w-full bg-none flex justify-center">
      <div className="flex justify-between align-middle px-8 flex-1 py-2">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref legacyBehavior>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Relink Damage Calculator {packageJson.version}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="relative flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://github.com/arveoncode/relink-damage"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <p>Github</p>
                    <SquareArrowOutUpRight className="h-2 w-2" />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://github.com/false-spring/gbfr-logs"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <p>False Spring&apos;s Damage Parser</p>
                    <SquareArrowOutUpRight className="h-2 w-2" />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  href="https://docs.google.com/spreadsheets/d/1RnNLfdqFCW7zWvfHnQsNRJoi7EtIjdOUg-uYB0xsZHQ"
                  target="_blank"
                >
                  <div className="flex gap-1">
                    <p>Maygi&apos;s Calculator</p>
                    <SquareArrowOutUpRight className="h-2 w-2" />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Cog />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Settings</h4>
                </div>
                {/* <hr /> */}
                {/* <div className="flex justify-between align-middle">
                  <Label className="col-span-2 my-auto">Dark Mode</Label>
                  <ThemeSwitcher />
                </div> */}
                {/* <div className="flex gap-4 justify-between align-middle">
                  <Label className="col-span-2 my-auto">Locale</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Locale" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">En</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                <hr />
                <ImportDialog />
                <ExportDialog />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }
//   return (
//     <Switch
//       checked={theme === "dark" ? true : false}
//       onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
//     />
//   );
// };
