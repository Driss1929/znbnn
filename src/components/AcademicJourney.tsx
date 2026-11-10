import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { GraduationCap, BookOpen, MapPin, Calendar, Award } from 'lucide-react';

interface AcademicJourneyProps {
  lang: Language;
}

export const AcademicJourney: React.FC<AcademicJourneyProps> = ({ lang }) => {
  const journey = PORTFOLIO_DATA.academicJourney;

  return (
    <section id="academic" className="py-16 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Education & Curricula' : 'Formation Universitaire'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Academic Journey in Economics & International Trade'
              : 'Parcours d’Excellence en Économie, Gestion & Commerce International'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'A progressive and structured curriculum at Ibn Zohr University spanning foundational economic theory, management science, and international trade specialization.'
              : 'Une trajectoire universitaire cohérente au sein de l’Université Ibn Zohr, alliant fondamentaux de la gestion, analyse quantitative et spécialisation en commerce international.'}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-700 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {journey.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#172A3A] dark:bg-[#A8B7B0] border-4 border-[#FAF7F2] dark:border-[#0E1B26]" />

              <div className="p-6 sm:p-7 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:border-[#A78D72]/40 dark:hover:border-[#A8B7B0]/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-1">
                  {item.degree[lang]}
                </h3>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#A78D72] dark:text-[#A8B7B0] shrink-0" />
                  <span>{item.institution}</span>
                </p>

                <div className="border-t border-slate-200/70 dark:border-slate-800/70 pt-4 mt-2">
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {item.highlights[lang].map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="text-[#A78D72] dark:text-[#A8B7B0] mt-1 shrink-0 font-bold">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
