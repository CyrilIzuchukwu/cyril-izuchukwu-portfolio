import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3, Syne } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.pitch,
  metadataBase: new URL("https://cyril-izuchukwu-portfolio.vercel.app"),
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: site.pitch,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.pitch,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
