import type { Metadata } from "next";
import { Jost, Outfit, } from "next/font/google";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";
import PBFooter from "../modules/public/shared/PBFooter";
import PBHeader from "../modules/public/shared/PBHeader";

const jost = Jost({
  variable: "--font-secondary",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-primary",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Doc&Doc :: Home",
  description: "Maximize your marketing with human and algorithm-compliant contents that outperforms the competition in your niche, every time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${outfit.variable} antialiased font-secondary`}
      >
        <NextTopLoader color="#3e75f7" showSpinner={false} />
        <PBHeader />
        {children}
        <PBFooter />
      </body>
    </html>
  );
}
