import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./(components)/layouts/navbar/Navbar";
// import { ThemeProvider } from "./(providers)/theme-provider";
// import { GridSmallBackground } from "@/components/ui/small-grid-background";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "./(components)/layouts/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Granblue Fantasy Relink Damage Calculator",
  description:
    "Web-app version of Maygi's Granblue Fantasy Relink Damage Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <Analytics />
      </body>
    </html>
  );
}
