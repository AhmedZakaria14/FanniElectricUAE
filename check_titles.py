import os
import re

files = [
  "app/blog/24h-electrician-dubai-sharjah-ajman/page.tsx",
  "app/blog/best-electrician-dubai-sharjah-ajman/page.tsx",
  "app/blog/electrical-maintenance-company/page.tsx",
  "app/blog/electrical-short-circuit/page.tsx",
  "app/blog/electrical-wiring-technician/page.tsx",
  "app/blog/electrician-in-ajman-24h/page.tsx",
  "app/blog/electrician-in-ajman-guide/page.tsx",
  "app/blog/electrician-in-dubai-24h/page.tsx",
  "app/blog/electrician-in-dubai-services/page.tsx",
  "app/blog/electrician-in-sharjah-guide/page.tsx",
  "app/blog/electrician-in-sharjah-services/page.tsx",
  "app/blog/electrician-number-uae/page.tsx",
  "app/blog/get-electrician-number-uae/page.tsx",
  "app/blog/home-electrician-ajman-guide/page.tsx",
  "app/blog/home-electrician-dubai-guide/page.tsx",
  "app/blog/house-electrician-sharjah/page.tsx",
  "app/blog/master-electrician-dubai/page.tsx",
  "app/blog/master-electrician-sharjah/page.tsx",
  "app/blog/master-electrician-uae-guide/page.tsx",
  "app/blog/power-outage-reasons/page.tsx",
  "app/blog/smart-home-electrical-installation-uae/page.tsx",
  "app/blog/top-electrician-sharjah-ajman/page.tsx",
]

for fname in files:
    if not os.path.exists(fname):
        continue
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
    
    title_match = re.search(r'title:\s*(["`\'])(.*?)\1', content)
    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
    
    title = title_match.group(2) if title_match else None
    h1 = h1_match.group(1).strip() if h1_match else None
    
    print(f"File: {fname}")
    print(f"Title: {title}")
    print(f"H1:    {h1}")
    print("-" * 40)
