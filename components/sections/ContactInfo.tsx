export interface ContactInfoProps {
  address?: {
    street: string;
    city: string;
    postalCode: string;
  };
  phone?: string;
  email?: string;
  mapImage?: string;
}

const defaultData: ContactInfoProps = {
  address: {
    street: 'Av. Constitución 2000, Col. Centro',
    city: 'Monterrey, NL.',
    postalCode: 'CP 64000',
  },
  phone: '+52 (81) 8000 0000',
  email: 'contacto@solinsa.com.mx',
  mapImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBzxyJ1m0_d7LHLSDT-SXhjWyNN2-bbs5FrM67KtqlTcBWzPWrfQNZHS7xkyoSC74pHIGqlkoMw-CB6vBAkgUmUhj6sU5bhD_jwrlkNlZwNd6dg0WCtrC_QWhlq-umFrKH14TV8LpUy9UX-QZOET9ZvSuhBg8MH2ygtiZIf1ed3pNmI-HuV_X9vA8OZlnBlermH-H749ZG-SHX3qWfwo7K4YRWu_kn294MwgGm_ZARPDe0bipD7A4ohreVn19gHplZlTiNWMnNK8g',
};

export function ContactInfo(props?: ContactInfoProps) {
  const data = props || defaultData;
  const address = data.address || defaultData.address!;
  const phone = data.phone || defaultData.phone!;
  const email = data.email || defaultData.email!;
  const mapImage = data.mapImage || defaultData.mapImage!;

  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Contact Card */}
      <div className="bg-surface-container-low p-8 rounded-xl space-y-6">
        <div className="space-y-1">
          <h2 className="text-primary font-heading font-bold text-xl uppercase tracking-tighter">
            Sede Monterrey
          </h2>
          <p className="text-secondary font-body text-sm font-semibold">
            Matriz México
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-secondary">
              location_on
            </span>
            <p className="text-on-surface text-sm leading-relaxed">
              {address.street}
              <br />
              {address.city} {address.postalCode}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary">
              call
            </span>
            <p className="text-on-surface text-sm">{phone}</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary">
              mail
            </span>
            <p className="text-on-surface text-sm">{email}</p>
          </div>
        </div>

        {/* Multi-brand support badges */}
        <div className="pt-6 border-t border-outline-variant/20">
          <h3 className="text-on-surface-variant font-body text-xs uppercase tracking-widest mb-4">
            Soporte Multimarca
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-surface-container-lowest px-3 py-2 rounded-lg text-xs font-bold text-primary text-center">
              HPLC
            </div>
            <div className="bg-surface-container-lowest px-3 py-2 rounded-lg text-xs font-bold text-primary text-center">
              GC
            </div>
            <div className="bg-surface-container-lowest px-3 py-2 rounded-lg text-xs font-bold text-primary text-center">
              MS
            </div>
            <div className="bg-surface-container-lowest px-3 py-2 rounded-lg text-xs font-bold text-primary text-center">
              UV-VIS
            </div>
          </div>
        </div>
      </div>

      {/* Map Widget */}
      <div className="rounded-xl overflow-hidden bg-surface-container-high h-64 relative group">
        <img
          className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-700 group-hover:scale-110"
          alt="Ubicación de Solinsa en Monterrey"
          src={mapImage}
        />
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-3 rounded-full shadow-xl">
            <span className="material-symbols-outlined text-primary text-3xl">
              location_away
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
          <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
            Abrir en Maps
          </span>
        </div>
      </div>
    </aside>
  );
}
