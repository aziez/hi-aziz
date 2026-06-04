import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import {
  fontBebas,
  fontBreeSerif,
  fontPacifico,
  fontRowdies,
  fontJakarta,
} from "@/styles/font";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/custom-cursor";
import ProgressBar from "@/components/ui/progress-bar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hi-Aziz",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-foreground selection:text-background",
          fontSans.variable,
          fontPacifico.variable,
          fontBreeSerif.variable,
          fontBebas.variable,
          fontJakarta.variable
        )}
      >
        <SmoothScrollProvider>
          <ProgressBar />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

