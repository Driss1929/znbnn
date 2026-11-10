import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Check, Laptop, Shield, Sparkles, MessageSquare, Languages } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const { management, logistics, digital, soft, languages } = PORTFOLIO_DATA.skillsData;

  const categories = [
    {
      data: management,
      icon: <Shield className="w-4 h-4 text-[#A78D72]" />,
    },
    {
      data: logistics,
      icon: <Sparkles className="w-4 h-4 text-[#A78D72]" />,
    },
    {
      data: digital,
      icon: <Laptop className="w-4 h-4 text-[#A78D72]" />,
    },
    {
      data: soft,
      icon: <MessageSquare className="w-4 h-4 text-[#A78D72]" />,
    },
  ];

  return (
    <section className="py-16 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Competency Matrix' : 'Matrice de Compétences'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Verifiable Skills & Applied Methodologies'
              : 'Compétences Vérifiables & Maîtrise des Outils'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'Categorized by operational domain with contextual notes—avoiding arbitrary numerical percentages in favor of concrete academic and internship backing.'
              : 'Une présentation honnête et contextualisée des savoir-faire, adossée aux réalisations académiques et aux immersions en entreprise.'}
          </p>
        </div>

        {/* 4 Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/90 dark:border-slate-800/80 shadow-2xs"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-200 dark:border-slate-800">
                {cat.icon}
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#172A3A] dark:text-slate-100">
                  {cat.data.categoryName[lang]}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.data.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.name[lang]}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.note[lang]}
                      </div>
                    </div>
                    <Check className="w-4 h-4 text-[#A78D72] dark:text-[#A8B7B0] shrink-0 mt-1" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Strip */}
        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-6">
            <Languages className="w-5 h-5 text-[#A78D72]" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#172A3A] dark:text-slate-100">
              {lang === 'en' ? 'Language Proficiencies (CEFR Aligned)' : 'Profil Linguistique (Cadre Européen CECRL)'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((l, lIdx) => (
              <div
                key={lIdx}
                className="p-4 rounded-lg bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between"
              >
                <div>
                  <div className="text-base font-serif font-bold text-[#172A3A] dark:text-slate-100">
                    {l.name[lang]}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {l.level[lang]}
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 bg-white dark:bg-slate-800 text-[#172A3A] dark:text-[#A8B7B0] border border-slate-200 dark:border-slate-700 rounded">
                  {l.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
