import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import "./globals.css"; // Global styles

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "فني كهرباء الإمارات | شركة صيانة وتأسيس كهرباء معتمدة | الموقع متاح للإيجار",
  description:
    "الموقع متاح للإيجار. للتواصل: +201010742430. أفضل شركة صيانة كهرباء في الإمارات (دبي، الشارقة، عجمان). خدمات تأسيس، إصلاح أعطال، تركيب لوحات ذكية، وصيانة طوارئ 24/7 بواسطة فني كهرباء معتمد.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        {/* Schema.org Markup for Local Business */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              name: "فني كهرباء الإمارات",
              image: "https://fannielectricuae.com/logo.png",
              "@id": "",
              url: "https://fannielectricuae.com",
              telephone: "+201010742430",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "الشارقة",
                addressLocality: "الشارقة",
                addressRegion: "الشارقة",
                postalCode: "00000",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.3463,
                longitude: 55.4209,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/fannielectricuae",
                "https://www.instagram.com/fannielectricuae",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-arabic bg-amazon-light text-amazon-blue antialiased flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
