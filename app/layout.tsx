import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = "https://dobeu.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dobeu AI Tutor / Coach Connect",
    template: "%s · Dobeu",
  },
  description:
    "Hybrid AI + human coaching. Practice with a 24/7 AI coach and book time with a real coach when it counts.",
  openGraph: {
    title: "Dobeu AI Tutor / Coach Connect",
    description:
      "Hybrid AI + human coaching. Practice with a 24/7 AI coach and book a real coach when it counts.",
    url: siteUrl,
    siteName: "Dobeu",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
