import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layouts/footer/Footer";
import { Navbar } from "@/components/layouts/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { languages } from "../(i18n)/settings";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
  title: "Granblue Fantasy Relink Damage Calculator",
  description:
    "Web-app version of Maygi's Granblue Fantasy Relink Damage Calculator",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
        <>
          <AuroraBackground>
            <Navbar />

            {children}
          </AuroraBackground>
          <Footer />
        </>
        {/* </ThemeProvider> */}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
