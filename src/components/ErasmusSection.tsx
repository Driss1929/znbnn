import React, { useState } from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Globe2, BookOpen, GraduationCap, ArrowRight, ShieldCheck, MapPin, Building, Sparkles, ExternalLink, FileText } from 'lucide-react';

interface ErasmusSectionProps {
  lang: Language;
  onOpenCvModal: () => void;
  onOpenCertificateModal: () => void;
}

export const ErasmusSection: React.FC<ErasmusSectionProps> = ({
  lang,
  onOpenCvModal,
  onOpenCertificateModal,
}) => {
  const erasmus = PORTFOLIO_DATA.erasmusExchange;
  const [selectedTrack, setSelectedTrack] = useState<number>(0);

  return (
    <section id="erasmus" className="py-16 md:py-24 bg-gradient-to-b from-[#F2EDE4]/60 via-[#FAF7F2] to-white/80 dark:from-[#0A141D] dark:via-[#0E1B26] dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Kicker & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
              <Globe2 className="w-4 h-4 text-[#172A3A] dark:text-[#A8B7B0]" />
              <span>{lang === 'en' ? 'Erasmus+ Mobility Candidacy' : 'Candidature Mobilité Erasmus+'}</span>
              <span aria-hidden="true">·</span>
              <span>2026/2027</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
              {lang === 'en'
                ? 'Target Exchange: WSB Merito University in Poznań, Poland'
                : 'Projet de Mobilité : Université WSB Merito à Poznań, Pologne'}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {erasmus.learningObjectives[lang]}
            </p>
          </div>

          {/* Quick Institutional Badges */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {lang === 'en' ? 'Host University' : 'Université d’Accueil'}
              </span>
              <span className="text-xs font-bold text-[#172A3A] dark:text-slate-100">
                WSB Merito Poznań (Poland)
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                {lang === 'en' ? 'Sending Institution' : 'Université d’Origine'}
              </span>
              <span className="text-xs font-bold text-[#172A3A] dark:text-slate-100">
                Ibn Zohr University (Taroudant)
              </span>
            </div>
          </div>
        </div>

        {/* 3 Strategic Why Poland / Why WSB Merito Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {erasmus.strategicPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:border-[#A78D72]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-sm text-[#A78D72] dark:text-[#A8B7B0]">
                    0{idx + 1}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#A78D72] dark:text-[#A8B7B0]" />
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#172A3A] dark:text-slate-100 mb-2 leading-snug">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.desc[lang]}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] font-semibold text-[#172A3A] dark:text-[#A8B7B0]">
                {idx === 0 && (lang === 'en' ? 'Berlin-Warsaw Logistics Corridor' : 'Axe Logistique Berlin-Varsovie')}
                {idx === 1 && (lang === 'en' ? 'InPost Smart Locker Pioneer' : 'Pionnier Mondial des Consignes')}
                {idx === 2 && (lang === 'en' ? 'EF SET B2 Upper-Intermediate' : 'Attestation B2 Vérifiée')}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Agreement Curriculum Plan (30 ECTS Semester Allocation) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'en' ? 'Proposed Learning Agreement' : 'Contrat d’Études Prévisionnel'}</span>
                <span aria-hidden="true">·</span>
                <span>30 ECTS Credits</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
                {lang === 'en'
                  ? 'Master-Level Curriculum Alignment at WSB Merito Poznań'
                  : 'Harmonisation Pédagogique au Niveau Master à WSB Merito Poznań'}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium bg-[#FAF7F2] dark:bg-slate-900 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shrink-0">
              <GraduationCap className="w-4 h-4 text-[#A78D72]" />
              <span>{lang === 'en' ? 'Language of Instruction: English' : 'Langue d’Enseignement : Anglais'}</span>
            </div>
          </div>

          {/* Curriculum Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {erasmus.curriculumTracks.map((track, tIdx) => (
              <div
                key={tIdx}
                className="p-5 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#172A3A] text-white dark:bg-[#A8B7B0] dark:text-[#0E1B26]">
                      {track.ects} ECTS
                    </span>
                    <span className="text-xs text-slate-400">Track 0{tIdx + 1}</span>
                  </div>

                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#172A3A] dark:text-slate-100 mb-2 leading-snug">
                    {track.course[lang]}
                  </h4>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {track.description[lang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  {lang === 'en' ? 'Fully recognized in Moroccan Master MCI' : 'Reconnaissance académique ECTS intégrale'}
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>
                {lang === 'en'
                  ? 'All formal documents prepared in Erasmus Europass 2026 format.'
                  : 'Tous les documents préparés au format officiel Erasmus Europass 2026.'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] rounded-md transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Inspect Erasmus CV' : 'Consulter le CV Erasmus'}</span>
              </button>

              <button
                onClick={onOpenCertificateModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#A78D72]" />
                <span>{lang === 'en' ? 'EF SET English Proof' : 'Preuve d’Anglais EF SET'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
