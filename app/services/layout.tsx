import ServiceNav from '@/components/service-nav';

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ServiceNav />
      {children}
    </div>
  );
}
