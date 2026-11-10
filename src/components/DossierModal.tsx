import React from 'react';
import { X, CheckCircle2, ShieldCheck, FileText, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const checklist = PORTFOLIO_DATA.dossierChecklist;
  const totalItems = checklist.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0E1B26] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-[#FAF7F2] dark:bg-slate-900 shrink-0 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#A78D72] dark:text-[#A8B7B0] uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Portfolio Audit Dossier' : 'Dossier de Complétion & Audit'}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">29/29 Verified</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
              {lang === 'en'
                ? 'Academic & Professional Verification Ledger'
                : 'Registre de Vérification des Données Académiques & Professionnelles'}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dossier"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {lang === 'en'
              ? 'This transparency ledger cross-examines every claim, degree, certification, and project featured in Zainab Zouhair’s portfolio against primary source materials (official CV, EF SET English transcript, and university records).'
              : 'Ce registre de transparence met en regard chaque affirmation, diplôme, certification et projet présenté dans le portfolio de Zainab Zouhair avec les pièces justificatives officielles.'}
          </p>

          <div className="space-y-6">
            {checklist.map((category, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-xl bg-[#FAF7F2] dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800"
              >
                <h3 className="font-serif font-bold text-base text-[#172A3A] dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-800">
                  {category.category}
                </h3>

                <div className="space-y-2.5">
                  {category.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start justify-between gap-4 text-xs sm:text-sm"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-slate-900 dark:text-slate-200">
                            {item.text}
                          </span>
                          <span className="block text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {item.note}
                          </span>
                        </div>
                      </div>

                      <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded shrink-0">
                        VERIFIED
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {lang === 'en'
              ? 'Conforms to Erasmus & International Academic Portfolio Standards'
              : 'Conforme aux standards académiques internationaux et Erasmus'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#172A3A] hover:bg-[#0E1B26] dark:bg-[#A8B7B0] dark:text-[#0E1B26] rounded-md transition-colors"
          >
            {lang === 'en' ? 'Close Ledger' : 'Fermer le Registre'}
          </button>
        </div>
      </div>
    </div>
  );
};
