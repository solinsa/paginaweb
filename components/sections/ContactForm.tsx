'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Correo electrónico inválido'),
  organizacion: z.string().min(1, 'La organización es requerida'),
  industria: z.string().min(1, 'Seleccione una industria'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  privacidad: z.literal(true, 'Debe aceptar el aviso de privacidad'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const industriaOptions = [
  { value: 'Farmacéutica', label: 'Farmacéutica' },
  { value: 'Alimentos y Bebidas', label: 'Alimentos y Bebidas' },
  { value: 'Medio Ambiente', label: 'Medio Ambiente' },
  { value: 'Petroquímica', label: 'Petroquímica' },
  { value: 'Clínica / Salud', label: 'Clínica / Salud' },
];

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: '',
      email: '',
      organizacion: '',
      industria: '',
      mensaje: '',
      privacidad: undefined as unknown as true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_12px_32px_rgba(0,30,64,0.04)]">
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-secondary text-6xl mb-4 block">
            check_circle
          </span>
          <h3 className="font-heading text-2xl font-bold text-primary mb-2">
            ¡Solicitud Enviada!
          </h3>
          <p className="text-on-surface-variant mb-6">
            Nuestro equipo técnico se pondrá en contacto con usted en las
            próximas 24 horas.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-secondary font-bold hover:underline"
          >
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_12px_32px_rgba(0,30,64,0.04)]">
      <header className="mb-10">
        <h2 className="text-3xl font-heading font-bold text-primary tracking-tight mb-2">
          Solicitud de Consultoría
        </h2>
        <p className="text-on-surface-variant max-w-lg">
          Complete el siguiente formulario para recibir una propuesta técnica
          personalizada basada en sus necesidades de análisis.
        </p>
      </header>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-error-container rounded-lg text-on-error-container text-sm">
          Hubo un error al enviar. Por favor intente de nuevo.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* 2-column grid for inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Nombre Completo
            </label>
            <Input
              placeholder="Juan Pérez"
              error={errors.nombre?.message}
              {...register('nombre')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Correo Electrónico
            </label>
            <Input
              type="email"
              placeholder="juan.p@organizacion.com"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Organización / Empresa
            </label>
            <Input
              placeholder="Nombre de su laboratorio"
              error={errors.organizacion?.message}
              {...register('organizacion')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
              Industria
            </label>
            <Select
              options={industriaOptions}
              placeholder="Seleccione..."
              error={errors.industria?.message}
              {...register('industria')}
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">
            ¿Qué necesita analizar?
          </label>
          <Textarea
            placeholder="Describa brevemente el compuesto, matriz o requerimiento técnico..."
            rows={5}
            error={errors.mensaje?.message}
            {...register('mensaje')}
          />
        </div>

        {/* Privacy checkbox */}
        <div className="flex items-center gap-3 bg-secondary-fixed/30 p-4 rounded-lg">
          <input
            type="checkbox"
            id="privacy"
            {...register('privacidad')}
            className="w-5 h-5 rounded text-secondary border-none bg-white focus:ring-0"
          />
          <label
            htmlFor="privacy"
            className="text-xs text-on-secondary-container font-medium"
          >
            He leído y acepto el{' '}
            <span className="underline cursor-pointer">
              Aviso de Privacidad
            </span>{' '}
            para el manejo de mis datos técnicos.
          </label>
        </div>
        {errors.privacidad && (
          <p className="text-sm text-error -mt-4">
            {errors.privacidad.message}
          </p>
        )}

        {/* Submit button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-gradient-to-r from-primary to-primary-container text-white px-12 py-4 rounded-lg font-heading font-extrabold text-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Solicitud Técnica'}
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
