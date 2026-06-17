'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

const bookingSchema = z.object({
  name: z.string().min(2, 'الاسم مطلوب'),
  phone: z.string().min(9, 'رقم الجوال غير صحيح'),
  emirate: z.string().min(1, 'يرجى اختيار الإمارة'),
  service: z.string().min(1, 'يرجى اختيار الخدمة'),
  date: z.string().min(1, 'يرجى تحديد التاريخ'),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `طلب حجز خدمة كهرباء:
- الاسم: ${data.name}
- الهاتف: ${data.phone}
- الإمارة: ${data.emirate}
- الخدمة: ${data.service}
- التاريخ المفضل: ${data.date}
- ملاحظات: ${data.notes || 'لا يوجد'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971551050478?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    toast.success('تم تجهيز طلبك! يرجى إرسال الرسالة في واتساب.');
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-4 shadow-sm border border-gray-200" id="booking-form-section">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-bold text-amazon-blue mb-1">نموذج الحجز</h3>
        <p className="text-xs text-gray-600">طلب موعد الآن ونوفر لك أفضل فني.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-600">الاسم الكريم</label>
          <input
            type="text"
            {...register('name')}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50"
            placeholder="مثال: محمد"
          />
          {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-600">رقم التواصل</label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50 text-right"
            placeholder="055xxxxxxx"
            dir="ltr"
          />
          {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-gray-600">الإمارة</label>
            <select
              {...register('emirate')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50"
            >
              <option value="">اختار الإمارة...</option>
              <option value="dubai">دبي</option>
              <option value="sharjah">الشارقة</option>
              <option value="ajman">عجمان</option>
            </select>
            {errors.emirate && <p className="text-red-500 text-[10px] mt-1">{errors.emirate.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-bold text-gray-600">نوع الخدمة</label>
            <select
              {...register('service')}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50"
            >
              <option value="">شو نوع المشكلة؟</option>
              <option value="repair">انقطاع مفاجئ</option>
              <option value="wiring">تركيبات جديدة</option>
              <option value="maintenance">صيانة وقائية</option>
              <option value="other">أخرى</option>
            </select>
            {errors.service && <p className="text-red-500 text-[10px] mt-1">{errors.service.message}</p>}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-600">تاريخ الزيارة المفضل</label>
          <input
            type="date"
            {...register('date')}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50"
          />
          {errors.date && <p className="text-red-500 text-[10px] mt-1">{errors.date.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[11px] font-bold text-gray-600">ملاحظات إضافية (اختياري)</label>
          <textarea
            {...register('notes')}
            rows={2}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-amazon-orange focus:border-transparent outline-none text-xs bg-gray-50"
            placeholder="اكتب تفاصيل المشكلة هني..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-amazon-blue font-medium py-2.5 rounded-lg border border-[#F2C200] shadow-sm transition duration-200 mt-2 text-sm"
        >
          {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الحجز الفوري'}
        </button>
      </form>
    </div>
  );
}
