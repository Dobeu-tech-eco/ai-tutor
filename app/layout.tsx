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
    default: "Dobeu AI Coaching — 1-on-1 help setting up AI for your business",
    template: "%s · Dobeu",
  },
  description:
    "Personalized 1-on-1 coaching on putting AI to work: pick the right tools, build real automations, and learn workflows that stick. Book a session.",
  openGraph: {
    title: "Dobeu AI Coaching — 1-on-1 help setting up AI",
    description:
      "Hands-on, personalized coaching on setting up AI for your business. We build it together on your actual stack. Book a 1-on-1 session.",
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
