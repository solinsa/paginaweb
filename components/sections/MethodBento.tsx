import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface MethodStat {
  label: string;
  value: string;
}

export interface EquipmentItem {
  title: string;
  description: string;
}

export interface ConsumableItem {
  name: string;
}

export interface MethodBentoProps {
  methodDescription: string;
  methodStats: MethodStat[];
  equipmentItems: EquipmentItem[];
  consumables: ConsumableItem[];
  visualImage: string;
  visualTitle: string;
  visualDescription: string;
  multimarcaText?: string | React.ReactNode;
  className?: string;
}

export function MethodBento({
  methodDescription,
  methodStats,
  equipmentItems,
  consumables,
  visualImage,
  visualTitle,
  visualDescription,
  multimarcaText = <span key="compatibility" className="invisible whitespace-nowrap">Compatible con Agilent, Shimadzu y Thermo Scientific.</span>,
  className,
}: MethodBentoProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-3", className)}>
      {/* Method Overview — 2 cols */}
      <div className="rounded-2xl bg-surface-container-low p-10 md:col-span-2">
        <h3 className="mb-8 flex items-center gap-3 font-heading text-2xl font-bold text-on-surface">
          <span className="material-symbols-outlined text-secondary">
            biotech
          </span>
          Resumen del Método
        </h3>
        <div className="space-y-6 text-on-surface-variant">
          <p className="leading-relaxed">{methodDescription}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {methodStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-surface-container-lowest p-4"
              >
                <p className="label mb-2 text-secondary">{stat.label}</p>
                <p className="text-2xl font-black text-primary">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Card — dark bg-primary */}
      <div className="flex flex-col rounded-2xl bg-primary p-10 text-white">
        <h3 className="mb-8 flex items-center gap-3 font-heading text-2xl font-bold">
          <span className="material-symbols-outlined text-secondary-container">
            inventory_2
          </span>
          Equipo Sugerido
        </h3>
        <ul className="flex-1 space-y-4">
          {equipmentItems.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary-container">
                check_circle
              </span>
              <div>
                <p className="font-bold">{item.title}</p>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="mb-2 text-xs font-bold uppercase opacity-50">
            Soporte Multimarca
          </p>
          <p className="text-sm">{multimarcaText}</p>
        </div>
      </div>

      {/* Consumables */}
      <div className="rounded-2xl bg-surface-container-high p-8">
        <h3 className="mb-6 font-heading text-xl font-bold text-on-surface">
          Consumibles Críticos
        </h3>
        <div className="space-y-4">
          {consumables.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-lg bg-white/50 p-3"
            >
              <span className="text-sm font-medium">{item.name}</span>
              <span className="material-symbols-outlined text-secondary">
                chevron_right
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Data — 2 cols */}
      <div className="relative aspect-video h-[400px] overflow-hidden rounded-2xl bg-slate-900 md:col-span-2 md:aspect-auto" aria-hidden="true">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity"
          src={visualImage}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/90 to-transparent p-10">
          <div className="glass inline-block max-w-sm rounded-xl p-6">
            <h4 className="mb-2 font-bold text-white">{visualTitle}</h4>
            <p className="text-sm text-on-surface-variant">
              {visualDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
