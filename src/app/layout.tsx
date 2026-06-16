import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.telephone,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.telephone
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "QevixAi - AI Receptionist That Books Appointments & Automates Follow-Ups",
    template: "%s | QevixAi"
  },
  description: siteConfig.description,
  applicationName: "QevixAi",
  openGraph: {
    title: "QevixAi - AI Receptionist That Books Appointments & Automates Follow-Ups",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "QevixAi",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "QevixAi AI receptionist landing page"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "QevixAi - AI Receptionist That Books Appointments & Automates Follow-Ups",
    description: siteConfig.description,
    images: ["/opengraph-image.png"]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd)
          }}
        />
        {children}
      </body>
    </html>
  );
}
