'use client';

import { useState } from 'react';

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

    const whatsappUrl = `https://wa.me/5218123554766?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 px-margin-desktop bg-light-grey">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden border border-light-grey">
        {/* Header */}
        <div className="bg-primary-blue p-8 text-white relative">
          <div className="absolute top-0 right-0 w-32 h-full bg-corporate-gradient opacity-10" />
          <h2 className="font-headline text-headline-md mb-2">
            Cotizar solución para laboratorio
          </h2>
          <p className="text-white/70">
            Propuesta técnica personalizada en menos de 24 horas.
          </p>
        </div>

        {/* Form */}
        <form className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
          {/* Nombre completo */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Juan Pérez"
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue"
            />
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Empresa
            </label>
            <input
              type="text"
              name="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
              placeholder="Nombre de laboratorio"
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue"
            />
          </div>

          {/* Correo Corporativo */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Correo Corporativo
            </label>
            <input
              type="email"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="email@empresa.com"
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Teléfono
            </label>
            <input
              type="tel"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="10 dígitos"
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue"
            />
          </div>

          {/* Industria */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Industria
            </label>
            <select
              name="industria"
              value={industria}
              onChange={(e) => setIndustria(e.target.value)}
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue bg-white"
            >
              <option value="">Seleccione industria</option>
              <option value="alimentos">Alimentos y Bebidas</option>
              <option value="farmaceutica">Farmacéutica</option>
              <option value="ambiental">Ambiental</option>
              <option value="petroquimica">Petroquímica</option>
              <option value="academia">Academia / Investigación</option>
            </select>
          </div>

          {/* Necesidad */}
          <div className="flex flex-col gap-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              ¿Qué necesitas?
            </label>
            <select
              name="necesidad"
              value={necesidad}
              onChange={(e) => setNecesidad(e.target.value)}
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue bg-white"
            >
              <option value="">Seleccione una opción</option>
              <option value="equipo">Comprar equipo nuevo</option>
              <option value="servicio">Servicio técnico / Mantenimiento</option>
              <option value="calificacion">IQ/OQ/PQ Calificación</option>
              <option value="consumibles">Consumibles / Columnas</option>
              <option value="asesoria">Asesoría en métodos</option>
            </select>
          </div>

          {/* Detalles del requerimiento */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-label-sm text-muted-blue-grey uppercase tracking-wider font-bold">
              Detalles del requerimiento
            </label>
            <textarea
              name="detalles"
              rows={4}
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              placeholder="Describa su método o el problema que busca resolver..."
              className="border border-light-grey rounded px-4 py-3 focus:ring-2 focus:ring-technical-blue focus:outline-none transition-all text-primary-blue resize-y"
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="btn-primary w-full font-bold py-5 rounded uppercase tracking-widest flex items-center justify-center gap-3"
            >
              SOLICITAR COTIZACIÓN TÉCNICA
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
