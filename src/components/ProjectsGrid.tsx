import React, { useState } from 'react';
import { PORTFOLIO_DATA, Language, Project } from '../data/portfolioData';
import { ArrowUpRight, X, Calendar, Layers, CheckCircle2, Lightbulb, Compass, FileCheck } from 'lucide-react';

interface ProjectsGridProps {
  lang: Language;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  const filters = [
    { id: 'all', label: lang === 'en' ? 'All Projects (8)' : 'Tous les Projets (8)' },
    { id: 'logistics', label: lang === 'en' ? 'Logistics & Supply Chain' : 'Logistique & Supply Chain' },
    { id: 'market_research', label: lang === 'en' ? 'Market Intelligence' : 'Veille Commerciale' },
    { id: 'finance', label: lang === 'en' ? 'Financial Risk' : 'Risques Financiers' },
    { id: 'innovation', label: lang === 'en' ? 'Innovation & Feasibility' : 'Innovation & Faisabilité' },
    { id: 'management', label: lang === 'en' ? 'Strategy & Leadership' : 'Stratégie & Leadership' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white/70 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
              {lang === 'en' ? 'Selected Academic Case Studies' : 'Travaux Académiques & Projets'}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100">
              {lang === 'en'
                ? 'Applied Business Research & Conceptual Solutions'
                : 'Études de Cas, Modélisations & Démarches d’Analyse'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
              {lang === 'en'
                ? 'Rigorous investigations into parcel locker automation, consumer streaming analytics, interest rate exposure, and cooperative supply chains.'
                : 'Une galerie de projets démontrant la capacité à diagnostiquer une problématique, structurer une méthodologie et formuler des recommandations actionnables.'}
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/80 dark:border-slate-800 rounded-lg">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#172A3A] text-white dark:bg-[#A8B7B0] dark:text-[#0E1B26] shadow-2xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-xl overflow-hidden bg-[#FAF7F2] dark:bg-[#0E1B26] border border-slate-200/90 dark:border-slate-800/80 hover:border-[#A78D72]/50 dark:hover:border-[#A8B7B0]/50 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Header */}
                <div className="relative overflow-hidden aspect-16/9 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top floating metadata (unboxed clean text) */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium drop-shadow-sm">
                    <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                      {project.categoryLabel[lang]}
                    </span>
                    <span className="bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#172A3A] dark:text-slate-100 group-hover:text-[#A78D72] dark:group-hover:text-[#A8B7B0] transition-colors mb-1.5 leading-snug">
                      {project.title[lang]}
                    </h3>

                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                      {project.subtitle[lang]}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                      {project.summary[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
                    {/* Skills clean unboxed tags */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span>{project.skills[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.skills[1]}</span>
                      {project.skills[2] && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="hidden sm:inline">{project.skills[2]}</span>
                        </>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#172A3A] dark:text-[#A8B7B0] shrink-0">
                      <span>{lang === 'en' ? 'Examine' : 'Examiner'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#0E1B26] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative aspect-16/9 w-full bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title[lang]}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B26] via-transparent to-black/30" />

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-1">
                  <span>{selectedProject.categoryLabel[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{selectedProject.status.replace('_', ' ')}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                  {selectedProject.title[lang]}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A78D72] dark:text-[#A8B7B0] mb-1">
                  {lang === 'en' ? 'Executive Overview' : 'Résumé Exécutif'}
                </p>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                  {selectedProject.summary[lang]}
                </p>
              </div>

              {/* Context & Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#172A3A] dark:text-slate-200 mb-2">
                    <Compass className="w-4 h-4 text-[#A78D72]" />
                    <span>{lang === 'en' ? 'Institutional Context' : 'Contexte Universitaire'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.context[lang]}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#172A3A] dark:text-slate-200 mb-2">
                    <Lightbulb className="w-4 h-4 text-[#A78D72]" />
                    <span>{lang === 'en' ? 'Core Problem' : 'Problématique Traitée'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.problem[lang]}
                  </p>
                </div>
              </div>

              {/* Proposed Solution & Methodology */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    {lang === 'en' ? 'Proposed Concept / Analytical Angle' : 'Angle d’Analyse & Solution'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.solution[lang]}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    {lang === 'en' ? 'Methodology & Data Sources' : 'Méthodologie & Sources'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.methodology[lang]}
                  </p>
                </div>
              </div>

              {/* Key Deliverables & Outcomes */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  {lang === 'en' ? 'Tangible Findings & Deliverables' : 'Résultats & Enseignements'}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes[lang].map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies Acquired */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  {lang === 'en' ? 'Competencies & Frameworks' : 'Compétences Mobilisées'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'en' ? 'Academic Study · Faculty of Taroudant' : 'Travail Universitaire · Faculté de Taroudant'}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                {lang === 'en' ? 'Close Case Study' : 'Fermer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
