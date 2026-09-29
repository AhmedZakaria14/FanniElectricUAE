const fs = require('fs');
let code = fs.readFileSync('app/layout.tsx', 'utf8');

const serviceSchemaCode = `
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "إصلاح أعطال كهربائية طارئة",
  "name": "خدمة إصلاح أعطال كهربائية طارئة فورية في دبي، الشارقة وعجمان",
  "description": "نقدم خدمة استجابة سريعة للتعامل مع كافة الحالات الكهربائية الطارئة والمستعجلة. فريقنا من الفنيين المعتمدين والمعدين جيداً يصلون إليك في غضون وقت قصير (30 إلى 45 دقيقة) لتشخيص وإصلاح العطل بأعلى درجات الأمان والاحترافية.",
  "provider": {
    "@type": "Organization",
    "name": "فني كهرباء الامارات",
    "url": "https://www.fannielectricuae.com/"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "دبي"
    },
    {
      "@type": "State",
      "name": "الشارقة"
    },
    {
      "@type": "State",
      "name": "عجمان"
    }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.fannielectricuae.com/services/emergency-repair",
    "priceCurrency": "AED",
    "price": "150",
    "availability": "https://schema.org/InStock"
  }
};
`;

if (!code.includes('const serviceSchema')) {
  code = code.replace('export default function RootLayout', serviceSchemaCode + '\nexport default function RootLayout');
  code = code.replace(
    'dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}\n        />',
    `dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}\n        />\n        <script\n          type="application/ld+json"\n          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}\n        />`
  );
  fs.writeFileSync('app/layout.tsx', code);
  console.log("Updated layout.tsx");
} else {
  console.log("Already updated");
}
