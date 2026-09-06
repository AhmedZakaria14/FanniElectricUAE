const schema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://www.fannielectricuae.com/",
  "name": "فني كهرباء الامارات",
  "url": "https://www.fannielectricuae.com/",
  "logo": "https://www.fannielectricuae.com/logo.svg",
  "image": "https://www.fannielectricuae.com/logo.svg",
  "priceRange": "$$",
  "description": "أفضل وأسرع خدمات الكهرباء المنزلية والتجارية في دبي، عجمان، والشارقة. فنيين خبراء وشغل يبيض الوجه!",
  "telephone": "+971502067679",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "دبي",
    "addressRegion": "الإمارات العربية المتحدة",
    "addressCountry": "AE"
  },
  "areaServed": [
    { "@type": "State", "name": "دبي" },
    { "@type": "State", "name": "الشارقة" },
    { "@type": "State", "name": "عجمان" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ]
};
console.log(JSON.stringify(schema, null, 2));
