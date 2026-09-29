'use client';

import { useState } from 'react';
import Link from 'next/link';

const WA_LINK = 'https://wa.me/522201432743';

const industries = [
  { value: '', label: 'Seleccione industria' },
  { value: 'alimentos', label: 'Alimentos y Bebidas' },
  { value: 'farmaceutica', label: 'Farmacéutica' },
  { value: 'ambiental', label: 'Ambiental' },
  { value: 'petroquimica', label: 'Petroquímica' },
  { value: 'academia', label: 'Academia / Investigación' },
];

const needs = [
  { value: '', label: 'Seleccione una opción' },
  { value: 'equipo', label: 'Comprar equipo nuevo' },
  { value: 'servicio', label: 'Servicio técnico / Mantenimiento' },
  { value: 'calificacion', label: 'IQ/OQ/PQ Calificación' },
  { value: 'consumibles', label: 'Consumibles / Columnas' },
  { value: 'asesoria', label: 'Asesoría en métodos' },
];

const checklistItems = [
  {
    title: 'Recomendación por método',
    description: 'Revisamos muestra, analitos y norma vigente.',
  },
  {
    title: 'Configuración a tu presupuesto',
    description: 'Equipo nuevo o reacondicionado, según tu caso.',
  },
  {
    title: 'Instalación, calificación y soporte',
    description: 'IQ/OQ/PQ y servicio incluidos desde el día uno.',
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      className="w-5 h-5"
    >
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-5 h-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="w-5 h-5"
    >
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
    </svg>
  );
}

export default function ConversionForm() {
  const [name, setName] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [industria, setIndustria] = useState('');
  const [necesidad, setNecesidad] = useState('');
  const [detalles, setDetalles] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hola, soy ${name} de ${empresa}.%0A%0AQuisiera una cotización para:%0A- Industria: ${industria}%0A- Necesito: ${necesidad}%0A- Correo: ${correo}%0A- Teléfono: ${telefono}%0A%0ADetalles:%0A${detalles}`;

    const whatsappUrl = `${WA_LINK}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        {/* LEFT SIDE — Info / Value Proposition */}
        <aside className="flex flex-col gap-8">
          {/* Eyebrow */}
          <span className="eyebrow">Cotizar solución</span>

          {/* Heading */}
          <h2 className="text-headline-lg font-headline text-primary-dark leading-tight">
            Propuesta técnica personalizada en menos de 24 horas.
          </h2>

          {/* Checklist */}
          <ul className="flex flex-col gap-6">
            {checklistItems.map((item) => (
              <li key={item.title} className="flex gap-4 items-start">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-energetic-yellow/20 text-yellow-dark flex items-center justify-center">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary-dark">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-blue-grey">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Response badge */}
          <div className="inline-flex items-center gap-3 px-5 py-4 border-2 border-dashed border-technical-blue bg-technical-blue/5 rounded-2xl max-w-sm">
            <span className="shrink-0 w-10 h-10 rounded-full bg-technical-blue/10 text-technical-blue flex items-center justify-center">
              <ClockIcon />
            </span>
            <div>
              <p className="text-sm font-bold text-primary-dark">
                Respuesta &lt; 24 h
              </p>
              <p className="text-xs text-muted-blue-grey">
                Por un especialista técnico, no un vendedor genérico.
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT SIDE — Form Card */}
        <div className="bg-paper border border-outline rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* 2-column grid for field pairs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre completo */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark placeholder:text-muted-blue-grey/50 focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              {/* Empresa */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  Empresa
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark placeholder:text-muted-blue-grey/50 focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                  placeholder="Nombre de laboratorio"
                />
              </div>

              {/* Correo corporativo */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  Correo corporativo
                </label>
                <input
                  type="email"
                  name="correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark placeholder:text-muted-blue-grey/50 focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                  placeholder="email@empresa.com"
                />
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark placeholder:text-muted-blue-grey/50 focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                  placeholder="10 dígitos"
                />
              </div>

              {/* Industria */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  Industria
                </label>
                <select
                  name="industria"
                  value={industria}
                  onChange={(e) => setIndustria(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                >
                  {industries.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ¿Qué necesitas? */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                  ¿Qué necesitas?
                </label>
                <select
                  name="necesidad"
                  value={necesidad}
                  onChange={(e) => setNecesidad(e.target.value)}
                  required
                  className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all"
                >
                  {needs.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Detalles del requerimiento — full width */}
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-muted-blue-grey">
                Detalles del requerimiento
              </label>
              <textarea
                name="detalles"
                rows={4}
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
                className="border border-outline rounded-xl px-3.5 py-3 text-sm bg-surface text-primary-dark placeholder:text-muted-blue-grey/50 focus:outline-none focus:ring-2 focus:ring-technical-blue/30 focus:border-technical-blue transition-all resize-y"
                placeholder="Describa su método o el problema que busca resolver..."
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-yellow w-full justify-center"
            >
              <SendIcon />
              Solicitar cotización técnica
            </button>

            {/* Legal text */}
            <p className="text-xs text-muted-blue-grey text-center">
              Al enviar aceptas nuestro{' '}
              <Link
                href="/aviso-privacidad"
                className="underline underline-offset-2 hover:text-technical-blue transition-colors"
              >
                Aviso de Privacidad
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
