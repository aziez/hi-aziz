import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import AnimatedCursor from "react-animated-cursor";
import {
  fontBebas,
  fontBreeSerif,
  fontPacifico,
  fontRowdies,
} from "@/styles/font";

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
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontPacifico.variable,
          fontBreeSerif.variable,
          fontBebas.variable
          // fontRowdies.variable
        )}
      >
        {children}
        <AnimatedCursor />
      </body>
    </html>
  );
}
