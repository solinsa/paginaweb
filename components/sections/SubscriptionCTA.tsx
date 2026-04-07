'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export interface SubscriptionCTAProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
}

export function SubscriptionCTA({
  title = 'Manténgase a la Vanguardia Analítica',
  description = 'Reciba mensualmente nuestras últimas notas de aplicación y calendarios de webinars técnicos.',
  placeholder = 'Tu correo electrónico profesional',
  buttonText = 'Suscribirse',
}: SubscriptionCTAProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="mt-20 bg-primary-container rounded-2xl p-12 relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-heading text-3xl font-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-blue-100 text-lg opacity-80">
            {description}
          </p>
        </div>
        <div>
          {submitted ? (
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <span className="material-symbols-outlined text-secondary-container text-4xl mb-2 block">
                check_circle
              </span>
              <p className="text-white font-bold">
                ¡Gracias por suscribirse!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-none rounded-lg px-6 py-4 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-secondary-container outline-none transition-all"
                placeholder={placeholder}
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="uppercase tracking-wider text-sm"
              >
                {buttonText}
              </Button>
            </form>
          )}
        </div>
      </div>

      {/* Abstract Lab-like background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,77.4,-44.7C85.5,-31.3,90.8,-15.7,91.3,0.3C91.9,16.2,87.7,32.4,79.5,45.8C71.3,59.2,59.1,69.9,45.1,77.5C31.1,85.1,15.6,89.7,0.3,89.2C-15,88.7,-29.9,83,-43.3,75.1C-56.7,67.1,-68.5,56.8,-76.8,44.1C-85,31.4,-89.7,16.2,-90.4,-0.4C-91.1,-17.1,-87.8,-35.1,-79.1,-49.2C-70.4,-63.3,-56.3,-73.4,-41.7,-79.9C-27.1,-86.4,-12,-89.3,2.4,-93.4C16.8,-97.5,31.3,-83.6,44.7,-76.4Z"
            fill="#FFFFFF"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
}
