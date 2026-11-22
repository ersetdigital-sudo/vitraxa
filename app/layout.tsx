import type { Metadata } from "next";
import Script from "next/script";
import { Figtree, Space_Grotesk } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitraxa Globals",
  description:
    "Isi pulsa, bayar tagihan, voucher digital, dan top up game dengan harga yang terlihat sebelum bayar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${figtree.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Script src="/vitraxa.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
