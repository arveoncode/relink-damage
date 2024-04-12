import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layouts/footer/Footer";
import { Navbar } from "@/components/layouts/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";

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
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
