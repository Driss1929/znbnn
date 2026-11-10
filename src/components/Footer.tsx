import React from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenCvModal: () => void;
  onOpenDossierModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenCvModal,
  onOpenDossierModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#172A3A] dark:bg-[#070D13] text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif font-bold text-2xl text-white">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-xs text-[#A8B7B0]">
                {PORTFOLIO_DATA.profile.initials}
              </span>
            </div>
            <p className="text-sm font-serif italic text-slate-300">
              "{PORTFOLIO_DATA.profile.tagline[lang]}"
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {PORTFOLIO_DATA.profile.title[lang]} · {PORTFOLIO_DATA.profile.university}
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDossierModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/15 rounded-md transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#A8B7B0]" />
              <span>{lang === 'en' ? 'Audit Dossier' : 'Dossier de Vérification'}</span>
            </button>

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0E1B26] bg-[#A8B7B0] hover:bg-[#BAC6C0] rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Download CV (PDF)' : 'Télécharger le CV'}</span>
            </button>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-md transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-md transition-colors ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Taroudant & Agadir, Morocco</span>
            <span aria-hidden="true">·</span>
            <span>EF SET B2 Verified</span>
            <span aria-hidden="true">·</span>
            <span>MCI Master's Club</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
