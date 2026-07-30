import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://hpcfl.github.io/Cluster26"
).replace(/\/$/, "");

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: "FPAI-HPC '26 | Federated and Privacy-Preserving AI for HPC",
  description:
    "The 3rd Workshop on Federated and Privacy-Preserving AI for High-Performance Computing at IEEE Cluster 2026.",
  openGraph: {
    title: "FPAI-HPC '26",
    description:
      "Federated and Privacy-Preserving AI for High-Performance Computing.",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1731,
        height: 909,
        alt: "FPAI-HPC '26 workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FPAI-HPC '26",
    description:
      "Federated and Privacy-Preserving AI for High-Performance Computing.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
