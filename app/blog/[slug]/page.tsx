import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import TableOfContents from '@/components/table-of-contents';
import articles from '@/lib/new-articles.json';

type Article = {
  slug: string;
  title: string;
  description: string;
  toc: { id: string; title: string }[];
  faq: { question: string; answer: string }[];
  html: string;
  source: string;
};

const newArticles = articles as Article[];
const siteUrl = 'https://www.fannielectricuae.com';

function findArticle(slug: string) {
  return newArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return newArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: [article.title.split('|')[0].trim(), 'فني كهرباء الامارات', 'كهربائي دبي', 'كهربائي الشارقة', 'كهربائي عجمان'],
    alternates: { canonical: `${siteUrl}/blog/${article.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      locale: 'ar_AE',
      url: `${siteUrl}/blog/${article.slug}`,
      title: article.title,
      description: article.description,
      siteName: 'فني كهرباء الامارات',
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.description,
    },
  };
}

function RelatedLinks({ currentSlug }: { currentSlug: string }) {
  const related = newArticles.filter((article) => article.slug !== currentSlug).slice(0, 3);
  return (
    <section className="mt-10 border-t border-gray-200 pt-6" aria-labelledby="related-articles-title">
      <h2 id="related-articles-title" className="text-xl font-bold text-amazon-blue mb-4">مقالات وخدمات ذات صلة</h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {related.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm font-bold text-[#007185] hover:border-amazon-orange hover:text-amazon-orange transition-colors"
          >
            {article.title.split('|')[0].trim()}
          </a>
        ))}
        <a
          href="/services/emergency-repair"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm font-bold text-[#007185] hover:border-amazon-orange hover:text-amazon-orange transition-colors"
        >
          خدمة إصلاح الأعطال الطارئة
        </a>
      </div>
    </section>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const articleUrl = `${siteUrl}/blog/${article.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    inLanguage: 'ar-AE',
    mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
    author: { '@type': 'Organization', name: 'فني كهرباء الامارات', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'فني كهرباء الامارات', url: siteUrl },
    datePublished: '2026-08-24',
    dateModified: '2026-08-24',
    articleSection: 'نصائح وخدمات الكهرباء',
    about: ['خدمات الكهرباء المنزلية', 'إصلاح الأعطال الكهربائية', 'تمديدات الكهرباء'],
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqLd = article.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Script id={`article-schema-${article.slug}`} type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      {faqLd && (
        <Script id={`faq-schema-${article.slug}`} type="application/ld+json">
          {JSON.stringify(faqLd)}
        </Script>
      )}
      <Script id={`breadcrumb-schema-${article.slug}`} type="application/ld+json">
        {JSON.stringify(breadcrumbLd)}
      </Script>
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-amazon-orange hover:text-orange-600 transition-colors mb-4">
            <span className="ml-1" aria-hidden="true">←</span>
            العودة للمدونة
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-amazon-blue leading-tight mb-4">{article.title}</h1>
          <p className="text-gray-600 leading-relaxed">{article.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8" id="article-content">
            <div className="prose prose-lg max-w-none prose-headings:text-amazon-blue prose-a:text-amazon-orange hover:prose-a:text-orange-600 prose-img:rounded-xl">
              <div dangerouslySetInnerHTML={{ __html: article.html }} />
              <RelatedLinks currentSlug={article.slug} />
            </div>
          </main>

          <aside className="lg:w-1/3 space-y-6">
            <div className="sticky top-24">
              <TableOfContents items={article.toc} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
