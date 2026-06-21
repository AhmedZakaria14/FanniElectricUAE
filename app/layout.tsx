import type {Metadata} from 'next';
import {Tajawal} from 'next/font/google';
import {Toaster} from 'sonner';
import Script from 'next/script';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import './globals.css'; // Global styles

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'فني كهرباء الامارات | أفضل فني كهرباء في دبي، الشارقة وعجمان',
  description: 'أفضل خدمات الكهرباء المنزلية والتجارية (fannielectricuae) في دبي، عجمان، والشارقة. طوارئ 24 ساعة، إصلاح التماسات، تمديدات، وصيانة دورية مع نموذج حجز سريع.',
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png',
  },
  openGraph: {
    title: 'فني كهرباء الامارات',
    description: 'أفضل خدمات الكهرباء المنزلية والتجارية (fannielectricuae) في دبي، عجمان، والشارقة.',
    url: 'https://fannielectricuae.com',
    siteName: 'فني كهرباء الامارات',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ar_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فني كهرباء الامارات',
    description: 'أفضل خدمات الكهرباء المنزلية والتجارية في الإمارات.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18257755118"
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18257755118');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="font-arabic bg-amazon-light text-amazon-blue antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="bottom-left" richColors />
      </body>
    </html>
  );
}
