import { Metadata } from "next";
import { Manrope } from "next/font/google"; // 661 (gzipped: 384)
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Manuel De La Cruz Ledesma - Mi Portafolio Web",
  description: "Portafolio Personal - Desarrollador Luis Manuel De La Cruz L.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        {/* Next top loader*/}
        <NextTopLoader color="5700FF" showSpinner={false} />
        {/*  INit aos */}
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
