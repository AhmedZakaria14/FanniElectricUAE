const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const docs = [
  { id: '1CWRgHvOmEUWpr_6EqrDn8gANez_MnwgdmClpZcjpGcM', slug: 'electrician-in-ajman-guide' },
  { id: '1BhU_AaJm9Pt95TEGarNnp2wdD0atnvrsrSkSp8-m45k', slug: 'electrical-wiring-technician' },
  { id: '1hbcMrjd-dAIb8x2jwocbVNSjiWHHWKdbXt-kTkfyHsU', slug: 'electrical-short-circuit' },
  { id: '10uBy8z5Y74PROAw4eKI1kgvxhQsCcCiCbQ7FfvxJpeQ', slug: 'electrician-in-sharjah-services' },
  { id: '19p0pX87pPG5w70dLa7N-zuWjCtHBZRwNMi0Nc5XernE', slug: 'electrician-in-dubai-services' },
  { id: '1Z9hIorluKxLax1nj8Td5zaZwaO-_dLWjTA0ey_s4kvw', slug: 'electrical-maintenance-company' },
  { id: '1_luUc4ioSdGo7CGH85besZubnM_yYe1SKG3UsSYibuw', slug: 'power-outage-reasons' }
];

async function processDoc(docInfo) {
  console.log(`Processing ${docInfo.slug}...`);
  const response = await fetch(`https://docs.google.com/document/export?format=html&id=${docInfo.id}`);
  const html = await response.text();
  const $ = cheerio.load(html);

  // Extract meta title and description if available in the first few lines
  let metaTitle = "";
  let metaDescription = "";
  
  // Google Docs HTML has all text inside <p>, <span>, etc.
  // We'll iterate through body elements.
  let contentHtml = [];
  let tocItems = [];
  let isCapturingContent = false;
  
  const bodyChildren = $('body').children();
  
  let currentSectionId = '';
  
  bodyChildren.each((i, el) => {
    const tagName = el.tagName.toLowerCase();
    const text = $(el).text().trim();
    if (!text) return; // skip empty elements
    
    // Check for title or meta
    if (!isCapturingContent && tagName === 'p' && text.includes('Meta description:')) {
       metaDescription = text.replace('Meta description:'الموقع متاح للإيجار. للتواصل: +201010742430. , '').replace(/"/g, '').trim();
       return;
    }
    if (!isCapturingContent && tagName === 'p' && text.includes('وصف الميتا:')) {
       metaDescription = text.replace('وصف الميتا:', '').replace(/"/g, '').trim();
       return;
    }
    if (!isCapturingContent && tagName === 'p' && (text.includes('مفتاحية:') || text.includes('كلمات مفتاحية:'))) {
       return;
    }
    
    if (!metaTitle) {
      if (tagName === 'h1' || (tagName === 'p' && i < 5 && text.length < 100 && !text.includes('Meta'))) {
         metaTitle = text.replace('مفتاحية:', '').trim();
         isCapturingContent = true;
         return;
      }
    }
    
    isCapturingContent = true;
    
    // Convert <a> tags
    $(el).find('a').each((_, a) => {
      let href = $(a).attr('href') || '';
      if (href.startsWith('https://www.google.com/url?q=')) {
        try {
          const urlObj = new URL(href);
          const q = urlObj.searchParams.get('q');
          if (q) href = q;
        } catch (e) {}
      }
      $(a).attr('href', href);
      $(a).attr('target', '_blank');
      $(a).attr('rel', 'noopener noreferrer');
      $(a).addClass('text-[#007185] hover:underline font-bold');
      $(a).removeAttr('style');
      $(a).removeAttr('class');
      $(a).addClass('text-[#007185] hover:underline font-bold');
    });
    
    // Process headings for TOC
    if (tagName === 'h2' || tagName === 'h3') {
      const id = 'section-' + i;
      $(el).attr('id', id);
      tocItems.push({ id, title: text });
      $(el).addClass(tagName === 'h2' ? 'text-2xl font-bold text-amazon-blue mt-8 mb-4' : 'text-xl font-bold text-amazon-blue mt-6 mb-3');
    } else if (tagName === 'p') {
      $(el).addClass('text-gray-700 leading-relaxed mb-6');
    } else if (tagName === 'ul') {
      $(el).addClass('list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4');
    } else if (tagName === 'ol') {
      $(el).addClass('list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4');
    }
    
    // Remove all style attributes from children
    $(el).find('*').removeAttr('style').removeAttr('class');
    // Restore link classes
    $(el).find('a').addClass('text-[#007185] hover:underline font-bold');
    
    // Handle strong
    $(el).find('strong, b').addClass('font-bold');
    
    // Remove span tags but keep their contents
    $(el).find('span').each(function() {
      $(this).replaceWith($(this).html());
    });
    
    // Remove inline styles from the element itself
    $(el).removeAttr('style');
    $(el).removeAttr('class');
    
    // Re-apply block classes
    if (tagName === 'h2') $(el).addClass('text-2xl font-bold text-amazon-blue mt-8 mb-4');
    if (tagName === 'h3') $(el).addClass('text-xl font-bold text-amazon-blue mt-6 mb-3');
    if (tagName === 'p') $(el).addClass('text-gray-700 leading-relaxed mb-6');
    if (tagName === 'ul') $(el).addClass('list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4');
    if (tagName === 'ol') $(el).addClass('list-decimal list-inside text-gray-700 space-y-2 mb-6 ml-4');
    
    // Convert a to Link or standard a
    // In React we can use standard <a> if it's opening in _blank, or <Link>
    // We'll leave it as <a> for simplicity since it's opening in a new tab.
    
    // We will render this HTML string into JSX.
    // Replace internal tags with raw HTML.
    contentHtml.push($.html(el));
  });

  // Now create the Next.js page content
  const pagePath = path.join(__dirname, 'app/blog', docInfo.slug, 'page.tsx');
  
  if (!metaTitle) metaTitle = docInfo.slug;
  if (!metaDescription) metaDescription = "مقالات ونصائح حول صيانة الكهرباء، التمديدات الكهربائية، والتعامل مع الأعطال في منازل دبي والشارقة وعجمان.";
  
  const fileContent = `
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import TableOfContents from '@/components/table-of-contents';

export const metadata: Metadata = {
  title: \`${metaTitle} | فني كهرباء الامارات\`,
  description: \`${metaDescription.replace(/\n/g, ' ')}\`,
  alternates: {
    canonical: "https://www.fannielectricuae.com/blog/${docInfo.slug}",
  },
};

const tocItems = ${JSON.stringify(tocItems, null, 2)};

export default function BlogPost() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-amazon-orange hover:text-orange-600 transition-colors mb-4">
            <ChevronRight className="w-5 h-5 ml-1" />
            العودة للمدونة
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-amazon-blue leading-tight mb-4">
            ${metaTitle}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="prose prose-lg max-w-none prose-headings:text-amazon-blue prose-a:text-amazon-orange hover:prose-a:text-orange-600 prose-img:rounded-xl">
              <div dangerouslySetInnerHTML={{ __html: \`${contentHtml.join('').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
            </div>
          </main>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
`;
  
  fs.mkdirSync(path.dirname(pagePath), { recursive: true });
  fs.writeFileSync(pagePath, fileContent.trim());
  console.log(`Successfully written to ${pagePath}`);
}

async function main() {
  for (const doc of docs) {
    await processDoc(doc);
  }
}

main().catch(console.error);
