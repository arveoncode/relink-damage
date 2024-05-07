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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { languages } from "@/app/(i18n)/settings";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Suspense } from "react";

export const Navbar = () => {
  const packageJson = require("@/../../package.json");

  return (
    <nav className="w-full bg-none flex justify-center">
      <div className="flex flex-wrap justify-between align-middle px-8 flex-1 py-2">
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
            <NavigationMenuList className="flex-wrap">
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
                <div className="flex gap-4 justify-between align-middle">
                  <Label className="my-auto">Locale</Label>
                  <Suspense>
                    <LocaleSwitcher />
                  </Suspense>
                </div>
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

const LocaleSwitcher = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const lng = params.lng as string;
  const router = useRouter();
  const build = searchParams.get("build");
  function handleLocaleChange(lang: string) {
    router.push(`/${lang}?build=${build}`);
  }
  return (
    <Select
      value={lng.toString()}
      onValueChange={(value) => handleLocaleChange(value)}
    >
      <SelectTrigger value={lng.toString()}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {languages.map((lang) => {
            return (
              <SelectItem value={lang} key={lang.toString()}>
                <Link passHref href={`/${lang}`}>
                  {lang === "en" && "EN"}
                  {lang === "ct" && "繁體中文"}
                  {lang === "cs" && "简体中文"}
                  {lang === "ko" && "한국의"}
                  {lang === "jp" && "日本語"}
                  {lang === "bp" && "BP"}
                  {lang === "es" && "ES"}
                  {lang === "fr" && "FR"}
                  {lang === "ge" && "GE"}
                  {lang === "it" && "IT"}
                </Link>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
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
