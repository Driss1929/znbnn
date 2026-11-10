import React from 'react';
import { Globe, Truck, Cpu, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface PillarsProps {
  lang: Language;
}

export const Pillars: React.FC<PillarsProps> = ({ lang }) => {
  const pillars = PORTFOLIO_DATA.pillars;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-12 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Core Capabilities' : 'Piliers Stratégiques'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Three Pillars of Modern Business Management'
              : 'Trois Piliers pour Comprendre et Transformer l’Entreprise'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="relative p-6 sm:p-7 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/80 dark:border-slate-800/80 hover:border-[#A78D72]/40 dark:hover:border-[#A8B7B0]/40 transition-all group shadow-2xs"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 shadow-2xs group-hover:scale-105 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <span className="font-serif text-sm font-semibold text-slate-400 dark:text-slate-600">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-1">
                {pillar.title[lang]}
              </h3>

              <p className="text-xs font-medium text-[#A78D72] dark:text-[#A8B7B0] mb-3">
                {pillar.tagline[lang]}
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {pillar.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
