import React from 'react';
import { FileText, Globe, Moon, Sun, ShieldCheck } from 'lucide-react';
import { Language } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCvModal: () => void;
  onOpenDossierModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  onOpenCvModal,
  onOpenDossierModal,
}) => {
  const navLinks = [
    { href: '#erasmus', label: 'Erasmus+ 🇵🇱' },
    { href: '#about', label: lang === 'en' ? 'About' : 'À Propos' },
    { href: '#academic', label: lang === 'en' ? 'Academic' : 'Parcours' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Projets' },
    { href: '#certifications', label: lang === 'en' ? 'Credentials' : 'Certificats' },
    { href: '#insights', label: lang === 'en' ? 'Insights' : 'Analyses' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 dark:bg-[#0E1B26]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="group flex items-baseline gap-2 text-xl font-serif font-bold tracking-tight text-[#172A3A] dark:text-slate-100 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span>Zainab Zouhair</span>
            <span className="hidden sm:inline text-xs font-sans font-medium text-[#A78D72] dark:text-[#A8B7B0] tracking-normal">
              Portfolio
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#172A3A] dark:hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#172A3A] dark:after:bg-[#A8B7B0] hover:after:w-full after:transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Dossier Audit Quick Button */}
            <button
              onClick={onOpenDossierModal}
              title={lang === 'en' ? 'Portfolio Audit Dossier' : 'Dossier de Vérification'}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#172A3A] dark:text-[#A8B7B0]" />
              <span>{lang === 'en' ? 'Audit Dossier' : 'Dossier'}</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center p-0.5 bg-slate-200/60 dark:bg-slate-800 rounded-md text-xs font-medium">
              <button
                onClick={() => setLang('en')}
                className={`px-2 sm:px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'en'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2 sm:px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  lang === 'fr'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                FR
              </button>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle color theme"
              className="p-1.5 sm:p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenCvModal}
              title={lang === 'en' ? 'View Curriculum Vitae' : 'Consulter le CV'}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] dark:hover:bg-[#BAC6C0] rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'en' ? 'View CV' : 'Consulter le CV'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
