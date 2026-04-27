import { ContactInfo } from '@/components/sections/ContactInfo';
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactoPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[409px] w-full flex items-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
          <img
            className="w-full h-full object-cover"
            alt="Laboratorio profesional con equipos de cromatografía de alta precisión"
            src="/images/heroes/contacto-hero.jpg"
          />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-8 w-full">
          <span className="text-secondary-fixed font-body text-xs uppercase tracking-[0.2em] mb-4 block">
            Contacto Especializado
          </span>
          <h1 className="text-[3.5rem] text-white font-heading font-extrabold tracking-tight max-w-2xl leading-none">
            Precisión Analítica a su{' '}
            <span className="text-secondary-container">Servicio.</span>
          </h1>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24">
        {/* Side Information */}
        <ContactInfo />

        {/* Form Section */}
        <section className="lg:col-span-8">
          <ContactForm />
        </section>
      </div>
    </>
  );
}
