const schema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://www.fannielectricuae.com/",
  "name": "فني كهرباء الامارات",
  "url": "https://www.fannielectricuae.com/",
  "logo": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png",
  "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1781707687/%D9%81%D9%86%D9%8A_%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1_%D8%AF%D8%A8%D9%8A_ufefpo.png",
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
