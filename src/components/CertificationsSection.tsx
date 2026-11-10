import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Award, CheckCircle2, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

interface CertificationsSectionProps {
  lang: Language;
  onOpenCertificateModal: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  lang,
  onOpenCertificateModal,
}) => {
  const certifications = PORTFOLIO_DATA.certifications;
  const efset = certifications.find((c) => c.id === 'ef-set-english')!;
  const saylorCerts = certifications.filter((c) => c.id !== 'ef-set-english');

  return (
    <section id="certifications" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Verified Credentials' : 'Certifications & Formations'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'International Certification & Continuous Learning'
              : 'Attestations Officielles & Perfectionnement Continu'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'Verified language competence aligned with the CEFR standard, paired with accredited online executive courses in artificial intelligence, globalization, and organizational communication.'
              : 'Des attestations vérifiables en langue anglaise (norme CECRL) et des formations certifiantes en intelligence artificielle, management international et communication.'}
          </p>
        </div>

        {/* Featured EF SET Spotlight Card */}
        <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-[#F2EDE4] dark:from-[#0E1B26] dark:to-[#172A3A] border border-slate-200/90 dark:border-slate-800 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200/80 dark:border-slate-700/80">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{lang === 'en' ? 'Official Language Certificate' : 'Certificat Officiel de Langue'}</span>
                <span aria-hidden="true">·</span>
                <span>{efset.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-2">
                {efset.name[lang]}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {efset.description[lang]}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                <span>{lang === 'en' ? 'Verification Code:' : 'Code de Vérification :'}</span>
                <code className="font-mono font-bold px-2 py-0.5 bg-white dark:bg-slate-800 text-[#172A3A] dark:text-[#A8B7B0] rounded border border-slate-300 dark:border-slate-700">
                  {efset.verificationCode}
                </code>
              </div>
            </div>

            {/* Score Showcase */}
            <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs text-center shrink-0 min-w-[200px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                EF SET Score
              </span>
              <span className="text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100 my-1 tabular-nums">
                52<span className="text-base font-normal text-slate-400">/100</span>
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded">
                B2 Upper Intermediate
              </span>
            </div>
          </div>

          {/* Skill Breakdown Radar Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {efset.breakdown?.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center"
              >
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {skill.skill[lang]}
                </div>
                <div className="text-xl font-serif font-bold text-[#172A3A] dark:text-slate-100 my-1 tabular-nums">
                  {skill.score}
                </div>
                <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>

          {/* Action links */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {lang === 'en'
                ? 'Standardized CEFR evaluation administered by EF Standard English Test'
                : 'Évaluation standardisée administrée par EF Standard English Test'}
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCertificateModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] dark:hover:bg-[#BAC6C0] rounded-md transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Inspect Original PDF' : 'Voir le Certificat PDF'}</span>
              </button>

              <a
                href={efset.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#A78D72]" />
                <span>{lang === 'en' ? 'Online Verification' : 'Vérification en Ligne'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Saylor Academy Online Executive Certificates */}
        <div className="mb-4">
          <h3 className="text-lg font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-6">
            {lang === 'en' ? 'Saylor Academy Certifications' : 'Certifications Saylor Academy'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saylorCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between hover:border-[#A78D72]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span>{cert.issuer}</span>
                  <span className="font-semibold text-[#A78D72]">{cert.date}</span>
                </div>

                <h4 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100 mb-2 leading-snug">
                  {cert.name[lang]}
                </h4>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {cert.score}
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
