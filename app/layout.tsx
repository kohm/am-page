import "./globals.css";
import type { Metadata } from "next";
import { Baskervville, Nunito_Sans } from "next/font/google";

const baskervville = Baskervville({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-copy",
  weight: ["400"],
});

export const metadata: Metadata = {
  alternates: {
    canonical: "https://luciopoveda.com",
  },
  description:
    "Hello there! I'm a Front-end Engineer based in Spain, and I've been fortunate to work extensively with Adobe Experience Manager (AEM) and various other content management systems (CMS) as well as a wide range of technologies. I've gained over a decade of valuable experience in this exciting field!",
  manifest: "site.webmanifest",
  title: "Lucio Poveda - Front-end Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${baskervville.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
