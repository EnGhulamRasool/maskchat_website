import React from 'react';
import { Hexagon, Layers, Command, Feather, Zap, Diamond } from 'lucide-react';

const LogoBar = () => {
  // Mock data representing the logos in the image
  const logos = [
    { icon: Hexagon, name: 'FocalPoint' },
    { icon: Command, name: 'Acme Corp' },
    { icon: Layers, name: 'Layers' },
    { icon: Feather, name: 'Catalog' },
    { icon: Zap, name: 'Sisyphus' },
    { icon: Diamond, name: 'Spherule' },
  ];

  return (
    <div className="pt-32 pb-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-12 gap-y-8 opacity-50 grayscale transition-all duration-300">
          {logos.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <item.icon className="w-6 h-6 text-gray-500" strokeWidth={2.5} />
              <span className="text-xl font-bold text-gray-500">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;