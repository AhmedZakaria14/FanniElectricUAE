import { MapPin, Truck, CheckCircle2, Navigation } from 'lucide-react';

const regions = [
  {
    name: 'دبي (Dubai)',
    description: 'تغطية طوارئ شاملة واستجابة سريعة في أقل من 45 دقيقة لكافة أحياء ومناطق دبي.',
    areas: ['ديرة', 'بر دبي', 'جميرا', 'البرشاء', 'دبي مارينا', 'السطوة', 'القوز', 'الكرامة', 'نخلة جميرا', 'المرابع العربية'],
    color: 'blue'
  },
  {
    name: 'الشارقة (Sharjah)',
    description: 'خدمات كهربائية معتمدة ومتوفرة على مدار الساعة في مختلف ضواحي مدينة الشارقة.',
    areas: ['المجاز', 'التعاون', 'الخان', 'مويلح', 'النهضة', 'القاسمية', 'اليرموك', 'الرحمانية', 'القرائن', 'الصناعية'],
    color: 'orange'
  },
  {
    name: 'عجمان (Ajman)',
    description: 'أفضل فنيين الكهرباء في عجمان للصيانة المنزلية بكافة المناطق السكنية والتجارية.',
    areas: ['الرميلة', 'النعيمية', 'الراشدية', 'الروضة', 'الجرف', 'المويهات', 'الحميدية', 'البستان', 'الخيل', 'المنامة'],
    color: 'emerald'
  }
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="px-4 pb-16 max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="bg-white p-6 md:p-8 shadow-sm border border-gray-200 rounded-sm">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-amazon-blue px-3 py-1 rounded-full text-xs font-bold mb-4">
            <Navigation className="w-3.5 h-3.5" />
            <span>نصلك أينما كنت في الإمارات الشمالية</span>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl mb-4 text-amazon-blue">نطاق خدماتنا ونقاط التغطية</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            تم توزيع فرقنا الفنية بشكل استراتيجي في مدن دبي، الشارقة، وعجمان لضمان سرعة الاستجابة في حالات الطوارئ وتقديم الخدمات الروتينية بكفاءة عالية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div 
              key={region.name} 
              className="flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors
                    ${region.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 
                      region.color === 'orange' ? 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white' : 
                      'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'}`}
                  >
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    نشط الآن
                  </div>
                </div>
                
                <h3 className="font-bold text-2xl mb-3 text-amazon-blue">{region.name}</h3>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {region.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    الأحياء المغطاة بالكامل:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.areas.map((area) => (
                      <span 
                        key={area} 
                        className="text-xs font-medium bg-gray-50 text-gray-700 px-3 py-2 rounded border border-gray-100 hover:bg-white hover:border-amazon-orange hover:text-amazon-orange transition-all cursor-default"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-bold text-amazon-blue">
                <Truck className="w-4 h-4 text-amazon-orange" />
                متوسط وقت الوصول: 30 - 45 دقيقة
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 bg-blue-50 border border-blue-100 rounded-lg text-center">
          <p className="text-sm md:text-base text-amazon-blue font-medium">
            * إذا لم تجد منطقتك مذكورة أعلاه، يرجى التواصل معنا عبر <a href="https://wa.me/971502067679" className="font-bold underline">الواتساب</a> للتحقق من إمكانية التغطية.
          </p>
        </div>
      </div>
    </section>
  );
}
