import re

files = [
  "app/blog/24h-electrician-dubai-sharjah-ajman/page.tsx",
  "app/blog/best-electrician-dubai-sharjah-ajman/page.tsx",
  "app/blog/electrician-in-ajman-24h/page.tsx",
  "app/blog/electrician-in-dubai-24h/page.tsx",
  "app/blog/electrician-in-sharjah-guide/page.tsx",
  "app/blog/electrician-number-uae/page.tsx",
  "app/blog/get-electrician-number-uae/page.tsx",
  "app/blog/home-electrician-ajman-guide/page.tsx",
  "app/blog/home-electrician-dubai-guide/page.tsx",
  "app/blog/house-electrician-sharjah/page.tsx",
  "app/blog/master-electrician-dubai/page.tsx",
  "app/blog/master-electrician-sharjah/page.tsx",
  "app/blog/master-electrician-uae-guide/page.tsx",
  "app/blog/smart-home-electrical-installation-uae/page.tsx",
  "app/blog/top-electrician-sharjah-ajman/page.tsx",
]

links = [
    ("/blog/electrician-in-dubai-24h", "كهربائي منازل في دبي متاح 24 ساعة", "لحل مشاكلك في دبي، تواصل مع "),
    ("/blog/electrician-in-sharjah-guide", "خدمات صيانة الأعطال الكهربائية في الشارقة", "إذا كنت تسكن في الشارقة، نقدم لك "),
    ("/blog/home-electrician-ajman-guide", "فني كهربائي متخصص في عجمان", "نوفر أيضاً "),
    ("/blog/power-outage-reasons", "أسباب انقطاع الكهرباء في المنزل", "اكتشف أهم "),
    ("/blog/smart-home-electrical-installation-uae", "تأسيس كهرباء المنازل الذكية", "تعرف على خطوات "),
    ("/blog/master-electrician-uae-guide", "معلم كهربائي محترف في الإمارات", "للمشاريع الكبيرة، استعن بـ "),
]

for fname in files:
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()

    # Select 3 links that are not pointing to the current file
    selected_links = []
    for l_url, l_anchor, l_prefix in links:
        if l_url not in fname:
            selected_links.append((l_url, l_anchor, l_prefix))
        if len(selected_links) == 3:
            break

    # Build the HTML
    html_to_add = '<h2 dir="rtl" class="text-2xl font-bold text-amazon-blue mt-8 mb-4">خدمات ومقالات ذات صلة</h2><ul class="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">'
    for l_url, l_anchor, l_prefix in selected_links:
        html_to_add += f'<li dir="rtl">{l_prefix}<a href="{l_url}" class="text-[#007185] hover:underline font-bold">{l_anchor}</a>.</li>'
    html_to_add += '</ul>'

    # We need to insert this right before the final closing of the string.
    # The string is closed with ` }} />
    # Let's find ` }} />` and replace it
    if "` }} />" in content:
        content = content.replace("` }} />", html_to_add + "` }} />")
    elif "` }}" in content:
        # just in case it doesn't have />
        # we will do a regex to replace `\s*\}\}
        content = re.sub(r'(`\s*\}\}(?:>|(?!\s*/>)))', html_to_add + r'\1', content)
        
    with open(fname, "w", encoding="utf-8") as f:
        f.write(content)

print("Links added successfully!")
