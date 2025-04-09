// src/app/components/StackLabels.tsx
import React from 'react';

export const StackLabels = () => {
  return (
    <div className="flex flex-col gap-2 absolute bottom-4 right-4 pb-4">
      
      {/* Tailwind Label */}
      <div className="px-3 py-2 bg-teal-600/60 text-white text-sm font-medium rounded-full w-30">
        Tailwind
      </div>

      {/* tRPC Label */}
      <div className="px-3 py-2 bg-sky-500/70 text-white text-sm font-medium rounded-full">
        tRPC
      </div>

      {/* TypeScript Label */}
      <div className="px-3 py-2 bg-indigo-600/70 text-white text-sm font-medium rounded-full">
        TypeScript
      </div>
    </div>
  );
};