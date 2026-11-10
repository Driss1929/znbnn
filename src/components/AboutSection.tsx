import React, { useState } from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Quote, Sparkles, Compass, Target } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const [bioMode, setBioMode] = useState<'short' | 'medium' | 'full'>('medium');
  const bios = PORTFOLIO_DATA.bios;

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, Bio switch, Narrative */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-3">
              <span>{lang === 'en' ? 'About My Approach' : 'Qui Suis-Je ?'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-6">
              {lang === 'en'
                ? 'Connecting Academic Knowledge with Operational Reality'
                : 'Relier les Savoirs Académiques aux Réalités du Terrain'}
            </h2>

            {/* Interactive Bio Length Switcher */}
            <div className="flex items-center gap-2 mb-8 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-lg w-fit text-xs font-medium">
              <span className="px-2 text-slate-500 dark:text-slate-400">
                {lang === 'en' ? 'Format:' : 'Format :'}
              </span>
              <button
                onClick={() => setBioMode('short')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  bioMode === 'short'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Brief (50 words)' : 'Synthèse (50 mots)'}
              </button>
              <button
                onClick={() => setBioMode('medium')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  bioMode === 'medium'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Standard (150 words)' : 'Standard (150 mots)'}
              </button>
              <button
                onClick={() => setBioMode('full')}
                className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  bioMode === 'full'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang === 'en' ? 'Detailed (300 words)' : 'Détaillé (300 mots)'}
              </button>
            </div>

            {/* Dynamic Bio Prose */}
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed text-base space-y-4">
              {bios[bioMode][lang].split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Value Proposition Callout Card */}
            <div className="mt-8 p-6 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/90 dark:border-slate-800/80">
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-[#A78D72] dark:text-[#A8B7B0] shrink-0 opacity-70" />
                <div>
                  <p className="font-serif italic text-base text-[#172A3A] dark:text-slate-200 leading-snug">
                    "{PORTFOLIO_DATA.valueProposition[lang]}"
                  </p>
                  <p className="text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] mt-3">
                    — {PORTFOLIO_DATA.profile.name} · {PORTFOLIO_DATA.profile.tagline[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Commitments & Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />
                <h3 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100">
                  {lang === 'en' ? 'Methodological Rigor' : 'Rigueur Méthodologique'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'Grounded in verifiable facts, transparent research data, and direct operational engagement. Every academic claim is backed by case observation or quantitative inquiry.'
                  : 'Une démarche ancrée dans les faits, des données d’enquête transparentes et une confrontation permanente avec le terrain.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />
                <h3 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100">
                  {lang === 'en' ? 'Practical Curiosity' : 'Pragmatisme & Curiosité'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'Exploring practical technology integration—from intelligent parcel lockers to AI-assisted research—with a focus on tangible organizational outcomes.'
                  : 'Curiosité pour les innovations numériques et l’IA appliquée, toujours orientée vers l’amélioration concrète des processus de travail.'}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[#172A3A] dark:text-[#A8B7B0]" />
                <h3 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100">
                  {lang === 'en' ? 'Multicultural Adaptability' : 'Ouverture Internationale'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {lang === 'en'
                  ? 'Trilingual communication (Arabic native, French fluent, English B2 certified) combined with academic training in cross-cultural negotiation and European trade.'
                  : 'Maîtrise trilingue (Arabe maternel, Français bilingue, Anglais B2 certifié) et sensibilité confirmée aux relations d’affaires multiculturelles.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
