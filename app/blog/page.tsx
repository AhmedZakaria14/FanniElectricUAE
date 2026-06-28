import Link from 'next/link';
import { Metadata } from 'next';
import { Calendar, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'المدونة | فني كهرباء الامارات',
  description: 'مقالات ونصائح حول صيانة الكهرباء، التمديدات الكهربائية، والتعامل مع الأعطال في منازل دبي والشارقة وعجمان.',
};

const posts = [
  {
    title: 'شركة صيانة كهرباء توفر كهربائي منازل وخدمات الكهرباء الاحترافية في الإمارات',
    slug: 'electrical-maintenance-company',
    excerpt: 'شركة صيانة كهرباء معتمدة في دبي والشارقة وعجمان توفر لكم كهربائي منازل متاح 24 ساعة لإصلاح الأعطال والتمديدات الكهربائية.',
  },
  {
    title: 'سبب انقطاع الكهرباء في المنزل وكيفية التعامل مع هذه المشكلة',
    slug: 'power-outage-reasons',
    excerpt: 'تعرف على سبب انقطاع الكهرباء في المنزل وأبرز الأعطال الكهربائية الشائعة، مع حلول فنية سريعة.',
  },
  {
    title: 'كهربائي منازل في عجمان: دليلك الشامل لخدمات كهربائية موثوقة',
    slug: 'electrician-in-ajman-guide',
    excerpt: 'كهربائي منازل في عجمان يقدم خدمات سريعة وموثوقة لجميع أعمال التمديدات والصيانة والإصلاح.',
  },
  {
    title: 'كهربائي منازل في دبي خدمات موثوقة على مدار الساعة',
    slug: 'electrician-in-dubai-services',
    excerpt: 'كهربائي منازل في دبي متخصص في إصلاح الأعطال والتمديدات الكهربائية، تواصل مع فني كهرباء معتمد في الإمارات الآن.',
  },
  {
    title: 'كهربائي منازل في الشارقة: خدمات احترافية وطوارئ 24 ساعة',
    slug: 'electrician-in-sharjah-services',
    excerpt: 'كهربائي منازل في الشارقة يقدم خدمات احترافية تشمل الصيانة والتركيب والإصلاح، مع سرعة استجابة وضمان جودة العمل.',
  },
  {
    title: 'فني تمديدات كهربائية متخصص في تركيب وصيانة الشبكات',
    slug: 'electrical-wiring-technician',
    excerpt: 'فني تمديدات كهربائية متخصص في تركيب وصيانة الشبكات الكهربائية داخل المنازل، يضمن توزيع الأحمال بشكل آمن.',
  },
  {
    title: 'التماس كهربائي: أسبابه ومخاطره وكيفية التعامل معه',
    slug: 'electrical-short-circuit',
    excerpt: 'يحدث التماس كهربائي عند تلامس الأسلاك بشكل خاطئ، مما يسبب شررًا أو حرارة عالية وقد يؤدي إلى تلف الأجهزة أو نشوب حرائق خطيرة.',
  }
];

export default function BlogIndex() {
  return (
    <>
      <div className="bg-[#F3F3F3] text-sm py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:underline hover:text-amazon-orange">الرئيسية</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-bold">المدونة</span>
        </div>
      </div>

      <div className="bg-amazon-light py-10">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-amazon-blue mb-8 border-b border-gray-200 pb-4">
            المدونة والنصائح الكهربائية
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full group"
              >
                <h2 className="text-xl font-bold text-amazon-blue mb-3 group-hover:text-amazon-orange transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-amazon-orange font-bold text-sm flex items-center gap-1 mt-auto">
                  اقرأ المزيد <ChevronRight className="w-4 h-4 rotate-180" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
