import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "QevixAi | AI automation for calls, follow-up, booking, and CRM",
    template: "%s | QevixAi"
  },
  description: siteConfig.description,
  applicationName: "QevixAi",
  openGraph: {
    title: "QevixAi | Automate calls, follow-up, booking, and CRM",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "QevixAi",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "QevixAi automation landing page"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "QevixAi | Automate calls, follow-up, booking, and CRM",
    description: siteConfig.description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('qevix-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}"
          }}
        />
        {children}
      </body>
    </html>
  );
}
