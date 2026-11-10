import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Users, Calendar, MapPin, Award, ArrowUpRight } from 'lucide-react';

interface LeadershipSectionProps {
  lang: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ lang }) => {
  const leadership = PORTFOLIO_DATA.leadership;

  return (
    <section id="leadership" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Student Leadership & Community' : 'Engagement Associatif & Vie Universitaire'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Vice Presidency & Academic Event Coordination'
              : 'Leadership Étudiant, Séminaires et Visites de Terrain'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'Active engagement within the university community fostering knowledge sharing, cross-cohort mentoring, and industry immersion.'
              : 'Un investissement actif au sein du Club MCI pour stimuler les échanges scientifiques, l’intégration des promotions et le contact direct avec le tissu économique régional.'}
          </p>
        </div>

        {/* Club VP Banner Card */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/90 dark:border-slate-800/80 mb-10 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs text-[#172A3A] dark:text-[#A8B7B0]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#A78D72] dark:text-[#A8B7B0]">
                  {leadership.role[lang]}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
                  {leadership.organization[lang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{leadership.location}</span>
                  <span aria-hidden="true">·</span>
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{leadership.period}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-200 dark:border-emerald-900 w-fit">
              <Award className="w-4 h-4 shrink-0" />
              <span>{lang === 'en' ? 'Elected by Cohort Peers' : 'Élue par ses Pairs'}</span>
            </div>
          </div>

          {/* Photo & Mandate Showcase Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            {/* Left/Top: Authentic On-Site Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-md">
                <img
                  src={PORTFOLIO_DATA.profile.authenticPhoto}
                  alt="Zainab Zouhair - Vice-Présidente du Club MCI lors de la Journée d'Intégration"
                  className="w-full h-auto aspect-4/5 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-3.5 bg-white/95 dark:bg-[#0E1B26]/95 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-serif font-bold text-[#172A3A] dark:text-slate-100">
                        {lang === 'en' ? 'Integration Day 2026' : 'Journée d’Intégration 2026'}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {lang === 'en' ? 'FPT Conference Hall · Taroudant' : 'Salle des Conférences FPT · Taroudant'}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                      {lang === 'en' ? 'Verified Badge' : 'Badge Officiel'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Impact */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#A78D72] dark:text-[#A8B7B0]">
                {lang === 'en' ? 'Leadership Mandate & Vision' : 'Mandat & Vision Associative'}
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {leadership.description[lang]}
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                <h4 className="text-xs font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-1">
                  {lang === 'en' ? 'Key Governance Responsibilities:' : 'Responsabilités Clés au Bureau :'}
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>
                    {lang === 'en'
                      ? 'Spearheading event logistics, institutional sponsorships, and guest speaker hosting for Master’s conferences.'
                      : 'Gestion de la logistique événementielle, des partenariats et de l’accueil des intervenants professionnels.'}
                  </li>
                  <li>
                    {lang === 'en'
                      ? 'Liaison with university administration and economics faculty professors for student integration initiatives.'
                      : 'Coordination étroite avec l’administration universitaire et le corps professoral de la FPT.'}
                  </li>
                  <li>
                    {lang === 'en'
                      ? 'Organizing industrial field visits (including COPAG dairy & citrus export complex in Taroudant).'
                      : 'Organisation des visites d’entreprises sur site (notamment le complexe agro-industriel COPAG).'}
                  </li>
                </ul>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                {lang === 'en'
                  ? '« Solid integration towards excellence » — Official Club Motto 2026'
                  : '« Intégration solide vers l’excellence » — Devise officielle du Club 2026'}
              </div>
            </div>
          </div>

          {/* 3 Key Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            {leadership.initiatives.map((init, iIdx) => (
              <div
                key={iIdx}
                className="p-5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#A78D72]/40 transition-colors"
              >
                <div className="text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] mb-1">
                  {init.date}
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#172A3A] dark:text-slate-100 mb-2">
                  {init.title[lang]}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {init.desc[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
