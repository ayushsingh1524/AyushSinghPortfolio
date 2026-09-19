import type { Metadata } from "next";
import { Geist, Geist_Mono, Special_Elite, Cinzel, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const specialElite = Special_Elite({
  weight: "400",
  variable: "--font-special-elite",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  weight: ["400", "600", "800"],
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AyushSinghPortfolio",
  description: "Portfolio of Ayush Singh - Software & Data Engineer",
};

import { CircularNav } from "@/components/CircularNav";
import { Preloader } from "@/components/Preloader";
import { LenisScroll } from "@/components/LenisScroll";
import { CommandPalette } from "@/components/CommandPalette";
import { GlobalThemeColor } from "@/components/GlobalThemeColor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${specialElite.variable} ${cinzel.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="min-h-full flex flex-col relative">
        <GlobalThemeColor />
        <LenisScroll>
          <Preloader />
          {children}
          
          {/* Global Persistent Navigation */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-[9999] flex justify-center pb-4">
            <CircularNav />
          </div>

          <CommandPalette />
        </LenisScroll>
      </body>
    </html>
  );
}
