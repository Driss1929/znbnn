import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, Award } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialDoc?: 'cv' | 'efset';
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialDoc = 'cv',
}) => {
  const [activeDoc, setActiveDoc] = useState<'cv' | 'efset'>(initialDoc);

  if (!isOpen) return null;

  const cvPath = PORTFOLIO_DATA.profile.cvPdfPath;
  const efsetPath = PORTFOLIO_DATA.profile.efsetPdfPath;
  const currentPath = activeDoc === 'cv' ? cvPath : efsetPath;
  const currentTitle =
    activeDoc === 'cv'
      ? lang === 'en'
        ? 'Zainab Zouhair – Erasmus Academic CV (PDF)'
        : 'Zainab Zouhair – CV Académique Erasmus (PDF)'
      : lang === 'en'
      ? 'Official EF SET English Certificate (PDF)'
      : 'Certificat Officiel d’Anglais EF SET (PDF)';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-[#0E1B26] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-[#FAF7F2] dark:bg-slate-900 shrink-0">
          <div className="flex items-center gap-3">
            {/* Segmented Document Switcher */}
            <div className="flex items-center p-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveDoc('cv')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDoc === 'cv'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Academic CV' : 'CV Académique'}</span>
              </button>
              <button
                onClick={() => setActiveDoc('efset')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                  activeDoc === 'efset'
                    ? 'bg-white dark:bg-slate-900 text-[#172A3A] dark:text-white shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'EF SET Certificate' : 'Certificat EF SET'}</span>
              </button>
            </div>

            <div className="hidden sm:block text-xs font-serif font-semibold text-slate-700 dark:text-slate-300 truncate max-w-md">
              {currentTitle}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentPath}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#172A3A] dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'en' ? 'Download PDF' : 'Télécharger'}</span>
            </a>

            <a
              href={currentPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'en' ? 'Open in Tab' : 'Ouvrir'}</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close document viewer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe & Interactive Document View */}
        <div className="flex-1 w-full h-full bg-slate-100 dark:bg-slate-950 flex flex-col md:flex-row overflow-hidden">
          {/* Document Summary Sidebar */}
          <div className="w-full md:w-80 p-5 bg-white dark:bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 overflow-y-auto">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#A78D72] dark:text-[#A8B7B0] mb-2">
                {activeDoc === 'cv'
                  ? lang === 'en' ? 'Erasmus Academic Profile' : 'Dossier Académique Erasmus'
                  : lang === 'en' ? 'CEFR English Proficiency' : 'Évaluation Officielle CECRL'}
              </div>

              <h3 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100 mb-3">
                {activeDoc === 'cv'
                  ? 'Zainab Zouhair – Curriculum Vitae'
                  : 'EF SET English Certificate – Level B2'}
              </h3>

              {activeDoc === 'cv' ? (
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Program:</strong> Master’s in International Management & Trade (Faculty of Taroudant).
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Internships:</strong> WAFA Assurance & LARMOUS Construction.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Club:</strong> Vice President, MCI Conference & Training Club.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Certifications:</strong> Saylor Academy & EF SET B2.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-center">
                    <span className="text-2xl font-serif font-bold text-emerald-800 dark:text-emerald-300 block">
                      52 / 100
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      B2 Upper Intermediate
                    </span>
                  </div>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Awarded:</strong> 08 Nov 2026
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Reading:</strong> 53 (B2) · <strong className="text-slate-900 dark:text-slate-100">Listening:</strong> 48 (B1)
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-slate-100">Writing:</strong> 51 (B2) · <strong className="text-slate-900 dark:text-slate-100">Speaking:</strong> 55 (B2)
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 mt-4">
              <a
                href={currentPath}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] rounded-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Download Document PDF' : 'Télécharger le Document'}</span>
              </a>

              <a
                href={currentPath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Open in Browser Tab' : 'Ouvrir dans un Onglet'}</span>
              </a>
            </div>
          </div>

          {/* Iframe preview container */}
          <div className="flex-1 h-full relative bg-slate-200 dark:bg-slate-950 flex items-center justify-center">
            <iframe
              src={`${currentPath}#view=FitH`}
              title={currentTitle}
              className="w-full h-full border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
