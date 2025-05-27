import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import type React from "react"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "شركة ألفا لإدارة المشروعات التجارية | Alpha Company",
  description:
    "شركة ألفا لإدارة المشروعات التجارية - شريكك الموثوق في إدارة وتطوير المشاريع التجارية منذ عام 2015. نقدم خدمات شاملة في إدارة المشاريع، تطوير الأعمال، والاستشارات الإدارية.",
  keywords: "إدارة المشاريع, المشروعات التجارية, استشارات إدارية, تطوير الأعمال, دراسات الجدوى, شركة ألفا",
  authors: [{ name: "Alpha Company" }],
  creator: "Alpha Company",
  publisher: "Alpha Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alfacompany.com"),
  alternates: {
    canonical: "/",
    languages: {
      "ar-EG": "/ar",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "شركة ألفا لإدارة المشروعات التجارية",
    description: "شريكك الموثوق في إدارة وتطوير المشاريع التجارية منذ عام 2015",
    url: "https://alfacompany.com",
    siteName: "Alpha Company",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "شركة ألفا لإدارة المشروعات التجارية",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة ألفا لإدارة المشروعات التجارية",
    description: "شريكك الموثوق في إدارة وتطوير المشاريع التجارية منذ عام 2015",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "شركة ألفا لإدارة المشروعات التجارية",
              alternateName: "Alpha Company",
              url: "https://alfacompany.com",
              logo: "https://alfacompany.com/logo.jpeg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-127-168-0007",
                contactType: "customer service",
                areaServed: "EG",
                availableLanguage: ["ar", "en"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "82 عباس العقاد أمام بنك الـ CIB",
                addressLocality: "القاهرة",
                addressCountry: "EG",
              },
              foundingDate: "2015",
              description: "شركة متخصصة في إدارة وتطوير المشاريع التجارية",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
