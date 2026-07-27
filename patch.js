const fs = require('fs');
let content = fs.readFileSync('app/layout.tsx', 'utf8');

const replacement = `{/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: \`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2QB76WX');
          \`,
          }}
        />

        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ELG1F3182B"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: \`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ELG1F3182B');
          \`,
          }}
        />`;

content = content.replace(/\{\/\* Google Tag Manager \*\/\}[\s\S]*?\{\/\* JSON-LD Schemas \*\/\}/, replacement + '\n\n        {/* JSON-LD Schemas */}');
fs.writeFileSync('app/layout.tsx', content);
