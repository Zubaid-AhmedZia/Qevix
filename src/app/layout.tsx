import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "QevixAi | AI receptionist for businesses that cannot afford missed calls",
    template: "%s | QevixAi"
  },
  description: siteConfig.description,
  applicationName: "QevixAi",
  openGraph: {
    title: "QevixAi | Answer every call",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "QevixAi",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "QevixAi AI receptionist landing page"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "QevixAi | Answer every call",
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
