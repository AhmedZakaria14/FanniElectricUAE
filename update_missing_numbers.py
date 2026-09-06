import os
import re

files_to_update = [
  "app/blog/electrical-maintenance-company/page.tsx",
  "app/blog/electrical-short-circuit/page.tsx",
  "app/blog/electrical-wiring-technician/page.tsx",
  "app/blog/electrician-in-ajman-guide/page.tsx",
  "app/blog/electrician-in-dubai-services/page.tsx",
  "app/blog/electrician-in-sharjah-services/page.tsx",
  "app/blog/power-outage-reasons/page.tsx",
]

phone = " | +201010742430"

for fname in files_to_update:
    if not os.path.exists(fname):
        continue
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Extract current title
    title_match = re.search(r'(title:\s*)(["`\'])(.*?)\2', content)
    h1_match = re.search(r'(<h1[^>]*>)(.*?)(</h1>)', content, re.DOTALL)
    
    if title_match and h1_match:
        old_title = title_match.group(3)
        old_h1 = h1_match.group(2)
        
        # Don't add if already there
        if "+201010742430" not in old_title and "+201010742430" not in old_title:
            new_title = old_title + phone
            content = content[:title_match.start(3)] + new_title + content[title_match.end(3):]
            
        # Re-search H1 because offsets might have changed
        h1_match = re.search(r'(<h1[^>]*>)(.*?)(</h1>)', content, re.DOTALL)
        old_h1 = h1_match.group(2)
        
        if "+201010742430" not in old_h1 and "+201010742430" not in old_h1:
            new_h1 = old_h1.strip() + phone
            content = content[:h1_match.start(2)] + new_h1 + content[h1_match.end(2):]
            
        with open(fname, "w", encoding="utf-8") as f:
            f.write(content)
            
print("Done!")
