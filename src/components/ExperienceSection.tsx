import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building2, CheckCircle } from 'lucide-react';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const experiences = PORTFOLIO_DATA.experiences;

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Professional Experience' : 'Expériences Professionnelles'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Operational & Administrative Immersions'
              : 'Immersions Opérationnelles et Pratiques de Gestion'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'Hands-on exposure to organizational routines, customer inquiry handling, contract archiving, and logistical support across financial services and construction.'
              : 'Une confrontation directe aux exigences du monde professionnel : rigueur administrative, relation client, conformité documentaire et appui logistique.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between hover:border-[#A78D72]/40 dark:hover:border-[#A8B7B0]/40 transition-colors"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-1">
                  {exp.company}
                </h3>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#A78D72]" />
                  <span>{exp.role[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{exp.sector[lang]}</span>
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 italic">
                  {exp.description[lang]}
                </p>

                <div className="space-y-2.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'en' ? 'Key Missions & Impact' : 'Missions Réalisées'}
                  </p>
                  <ul className="space-y-2">
                    {exp.tasks[lang].map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#172A3A] dark:text-[#A8B7B0] shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  {exp.sector[lang]}
                </span>
                <span className="font-medium text-emerald-700 dark:text-emerald-400">
                  {lang === 'en' ? 'Verified Internship' : 'Stage Documenté'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
