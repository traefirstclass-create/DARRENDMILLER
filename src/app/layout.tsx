import type { Metadata } from "next";
import { Archivo, Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Darren Dequan Miller — Actor / Entertainer",
  description:
    "Actor and entertainer out of Atlanta, GA. Recurring principal on Kountry Wayne's digital sketch series.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
