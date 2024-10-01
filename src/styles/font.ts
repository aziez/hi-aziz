import {
  Bebas_Neue,
  Bree_Serif,
  Pacifico,
  Plus_Jakarta_Sans,
  Rowdies,
} from "next/font/google";

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const fontRowdies = Rowdies({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-rowdies",
  weight: "300",
});

export const fontPacifico = Pacifico({
  variable: "--font-pasifico",
  weight: "400",
  subsets: ["latin"],
  display: "auto",
});
export const fontBreeSerif = Bree_Serif({
  variable: "--font-bree-serif",
  weight: "400",
  subsets: ["latin"],
  display: "auto",
});

export const fontBebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});
