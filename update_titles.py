import re

updates = {
  "app/blog/24h-electrician-dubai-sharjah-ajman/page.tsx": "فني كهربائي 24 ساعة في دبي والشارقة وعجمان | +201010742430",
  "app/blog/best-electrician-dubai-sharjah-ajman/page.tsx": "دليل أفضل كهربائي في دبي والشارقة وعجمان | +201010742430",
  "app/blog/electrician-in-ajman-24h/page.tsx": "أفضل كهربائي في عجمان | +201010742430",
  "app/blog/electrician-in-dubai-24h/page.tsx": "أفضل كهربائي في دبي متاح 24 ساعة | +201010742430",
  "app/blog/electrician-in-sharjah-guide/page.tsx": "كهربائي محترف في الشارقة | +201010742430",
  "app/blog/electrician-number-uae/page.tsx": "رقم كهربائي منازل موثوق في الإمارات دليل شامل | +201010742430",
  "app/blog/get-electrician-number-uae/page.tsx": "احصل على رقم فني كهربائي سريع في الإمارات +201010742430",
  "app/blog/home-electrician-ajman-guide/page.tsx": "متخصص كهربائي منازل في عجمان: دليلك الشامل لخدمة سريعة وآمنة +201010742430",
  "app/blog/home-electrician-dubai-guide/page.tsx": "خدمات كهربائي منازل بدبي: دليلك لخدمة كهربائية سريعة +201010742430",
  "app/blog/house-electrician-sharjah/page.tsx": "أفضل كهربائي منازل بالشارقة: دليلك لأفضل خدمة صيانة سريعة +201010742430",
  "app/blog/master-electrician-dubai/page.tsx": "خدمات معلم كهرباء بدبي: دليلك لاختيار الأفضل بثقة وأمان +201010742430",
  "app/blog/master-electrician-sharjah/page.tsx": "خدمات معلم كهرباء الشارقة: دليلك لاختيار الأفضل بثقة +201010742430",
  "app/blog/master-electrician-uae-guide/page.tsx": "الدليل الشامل لأفضل معلم كهربائي محترف في الإمارات +201010742430",
  "app/blog/smart-home-electrical-installation-uae/page.tsx": "خدمات تأسيس كهرباء المنازل الذكية في الإمارات | +201010742430",
  "app/blog/top-electrician-sharjah-ajman/page.tsx": "دليل أفضل كهربائي منازل في الشارقة وعجمان | +201010742430",
}

for fname, new_title in updates.items():
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace title
    content = re.sub(r'(title:\s*)(["`\'])(.*?)\2', rf'\1\2{new_title}\2', content, count=1)
    
    with open(fname, "w", encoding="utf-8") as f:
        f.write(content)

print("Titles updated!")
