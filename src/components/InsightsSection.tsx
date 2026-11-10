import React, { useState } from 'react';
import { PORTFOLIO_DATA, Language, InsightArticle } from '../data/portfolioData';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';

interface InsightsSectionProps {
  lang: Language;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ lang }) => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const articles = PORTFOLIO_DATA.articles;

  return (
    <section id="insights" className="py-16 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Reflections & Thought Leadership' : 'Analyses & Perspectives'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
            {lang === 'en'
              ? 'Academic Perspectives on Management & Logistics'
              : 'Réflexions sur le Management International, la Logistique & l’IA'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
            {lang === 'en'
              ? 'Short analytical essays bridging university coursework, field observations, and modern business challenges in Morocco and global markets.'
              : 'Des textes courts nourris par la recherche académique, les études de cas d’entreprises et l’observation des mutations économiques.'}
          </p>
        </div>

        {/* Articles 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-7 rounded-xl bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/90 dark:border-slate-800/80 shadow-2xs hover:border-[#A78D72]/50 dark:hover:border-[#A8B7B0]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-[#A78D72] dark:text-[#A8B7B0]">
                    {article.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#172A3A] dark:text-slate-100 group-hover:text-[#A78D72] dark:group-hover:text-[#A8B7B0] transition-colors mb-3 leading-snug">
                  {article.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {article.summary[lang]}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#172A3A] dark:text-[#A8B7B0] group-hover:underline flex items-center gap-1.5">
                  <span>{lang === 'en' ? 'Read Full Essay' : 'Lire l’Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs text-slate-400">
                  {PORTFOLIO_DATA.profile.name}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Reading Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl my-8 bg-white dark:bg-[#0E1B26] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-[#FAF7F2] dark:bg-slate-900">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <span className="text-[#A78D72] dark:text-[#A8B7B0] font-semibold">
                    {selectedArticle.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Close article"
                  className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#172A3A] dark:text-slate-100 leading-snug">
                {selectedArticle.title[lang]}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                By {PORTFOLIO_DATA.profile.name} · {PORTFOLIO_DATA.profile.title[lang]}
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {selectedArticle.content[lang].map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'en' ? 'MCI Master’s Academic Perspectives' : 'Perspectives Académiques Master MCI'}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {lang === 'en' ? 'Done Reading' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
