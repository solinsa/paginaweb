import React from 'react';
import { cn } from '@/lib/utils';

export interface SpecTableRow {
  label: string;
  values: string[];
}

export interface SpecTableProps {
  rows: SpecTableRow[];
  className?: string;
}

export function SpecTable({ rows, className }: SpecTableProps) {
  const colCount = rows.length > 0 ? rows[0].values.length + 1 : 0;

  return (
    <div className={cn('rounded-2xl overflow-hidden', className)}>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-surface-container-low">
            <th className="px-6 py-4 text-sm font-semibold text-on-surface">
              Especificación
            </th>
            {rows.length > 0 &&
              rows[0].values.map((_, i) => (
                <th
                  key={i}
                  className="px-6 py-4 text-sm font-semibold text-on-surface"
                >
                  Modelo {i + 1}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-surface-container-low/50 transition-colors duration-150"
            >
              <td className="px-6 py-4 text-sm text-on-surface-variant">
                {row.label}
              </td>
              {row.values.map((val, vi) => (
                <td key={vi} className="px-6 py-4 text-sm text-on-surface">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
