import React, { useState } from 'react';
import { ArrowRight, Download, ExternalLink, MapPin, Award, CheckCircle2, Camera } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onOpenCvModal: () => void;
  onOpenCertificateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenCvModal,
  onOpenCertificateModal,
}) => {
  const [activePhoto, setActivePhoto] = useState<'studio' | 'authentic'>('authentic');
  const { profile, tagline, valueProposition } = {
    profile: PORTFOLIO_DATA.profile,
    tagline: PORTFOLIO_DATA.profile.tagline[lang],
    valueProposition: PORTFOLIO_DATA.valueProposition[lang],
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker (NO PILL BOX) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#A78D72] dark:text-[#A8B7B0] mb-4">
              <span>{profile.title[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>Ibn Zohr University</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold tracking-tight text-[#172A3A] dark:text-slate-100 leading-[1.15] text-balance mb-6">
              {tagline}
            </h1>

            {/* Sub-role description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-6">
              {valueProposition}
            </p>

            {/* Quiet metadata line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-slate-400 mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A78D72]" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#172A3A] dark:text-[#A8B7B0]" />
                {lang === 'en' ? 'EF SET English B2 Certified' : 'Certifiée Anglais EF SET B2'}
              </span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Seeking Master PFE & Logistics Immersion' : 'En recherche de PFE & Stage'}
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] dark:hover:bg-[#BAC6C0] rounded-md transition-all shadow-xs whitespace-nowrap"
              >
                <span>{lang === 'en' ? 'Explore Case Studies' : 'Découvrir les Projets'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#A78D72]" />
                <span>{lang === 'en' ? 'Curriculum Vitae' : 'Télécharger le CV'}</span>
              </button>

              <button
                onClick={onOpenCertificateModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md transition-colors whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4 text-[#A78D72]" />
                <span>{lang === 'en' ? 'EF SET Certificate' : 'Certificat EF SET'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Natural Light Portrait / Authentic Event Photo with Editorial Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle architectural frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-md">
                <img
                  src={activePhoto === 'authentic' ? profile.authenticPhoto : profile.avatar}
                  alt={
                    activePhoto === 'authentic'
                      ? "Zainab Zouhair - Vice-Présidente Club MCI lors de la Journée d'Intégration"
                      : "Zainab Zouhair - Master's Student in International Management and Trade"
                  }
                  className="w-full h-auto aspect-3/4 object-cover object-top transition-all duration-300"
                  referrerPolicy="no-referrer"
                />

                {/* Editorial caption overlay with Photo Switcher */}
                <div className="p-4 bg-white/95 dark:bg-[#0E1B26]/95 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-serif font-bold text-[#172A3A] dark:text-slate-100">
                        {profile.name}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {activePhoto === 'authentic'
                          ? (lang === 'en' ? 'Authentic Campus Photo · VP Club MCI Taroudant' : 'Photo Campus Authentique · VP Club MCI Taroudant')
                          : profile.subRole[lang]}
                      </p>
                    </div>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#172A3A] dark:text-[#A8B7B0] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Switcher Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                    <span className="text-slate-400">
                      {lang === 'en' ? 'Verified Photos:' : 'Photos Vérifiées :'}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setActivePhoto('authentic')}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                          activePhoto === 'authentic'
                            ? 'bg-[#172A3A] text-white dark:bg-[#A8B7B0] dark:text-[#0E1B26] font-semibold'
                            : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {lang === 'en' ? 'Campus Event (2026)' : 'Événement Campus'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePhoto('studio')}
                        className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                          activePhoto === 'studio'
                            ? 'bg-[#172A3A] text-white dark:bg-[#A8B7B0] dark:text-[#0E1B26] font-semibold'
                            : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                        }`}
                      >
                        {lang === 'en' ? 'Studio' : 'Studio'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent geometry */}
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-2xl border border-[#A78D72]/30 dark:border-[#A8B7B0]/20 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Credential Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lang === 'en' ? 'Academic Program' : 'Formation Master'}
            </div>
            <div className="text-sm font-semibold text-[#172A3A] dark:text-slate-100 mt-1">
              {lang === 'en' ? 'MCI Master’s (Year 2)' : 'Master 2e Année MCI'}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              Ibn Zohr University
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lang === 'en' ? 'Leadership Role' : 'Engagement Associatif'}
            </div>
            <div className="text-sm font-semibold text-[#172A3A] dark:text-slate-100 mt-1">
              {lang === 'en' ? 'Vice President' : 'Vice-Présidente'}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              MCI Conference & Training Club
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lang === 'en' ? 'Language Proficiency' : 'Niveau de Langue'}
            </div>
            <div className="text-sm font-semibold text-[#172A3A] dark:text-slate-100 mt-1">
              CEFR B2 Upper-Int.
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              EF SET Official 52/100
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {lang === 'en' ? 'Operational Practice' : 'Expérience Terrain'}
            </div>
            <div className="text-sm font-semibold text-[#172A3A] dark:text-slate-100 mt-1">
              2 Documented Internships
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              WAFA Assurance & LARMOUS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
