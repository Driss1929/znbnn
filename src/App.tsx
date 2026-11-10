import React, { useState, useEffect } from 'react';
import { Language } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { ErasmusSection } from './components/ErasmusSection';
import { AboutSection } from './components/AboutSection';
import { AcademicJourney } from './components/AcademicJourney';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { LeadershipSection } from './components/LeadershipSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PdfViewerModal } from './components/PdfViewerModal';
import { DossierModal } from './components/DossierModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfInitialDoc, setPdfInitialDoc] = useState<'cv' | 'efset'>('cv');
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);

  // Sync dark class on document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenCvModal = () => {
    setPdfInitialDoc('cv');
    setIsPdfModalOpen(true);
  };

  const handleOpenCertificateModal = () => {
    setPdfInitialDoc('efset');
    setIsPdfModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#0E1B26] text-slate-900 dark:text-slate-100 transition-colors selection:bg-[#172A3A] selection:text-white dark:selection:bg-[#A8B7B0] dark:selection:text-[#0E1B26]">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCvModal={handleOpenCvModal}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Split Hero with Editorial Portrait */}
        <Hero
          lang={lang}
          onOpenCvModal={handleOpenCvModal}
          onOpenCertificateModal={handleOpenCertificateModal}
        />

        {/* 3 Strategic Pillars */}
        <Pillars lang={lang} />

        {/* Erasmus+ Mobility Candidacy: WSB Merito University in Poznań, Poland */}
        <ErasmusSection
          lang={lang}
          onOpenCvModal={handleOpenCvModal}
          onOpenCertificateModal={handleOpenCertificateModal}
        />

        {/* About Section with Interactive Bio Switcher */}
        <AboutSection lang={lang} />

        {/* Academic Journey Timeline */}
        <AcademicJourney lang={lang} />

        {/* Professional Experience & Internships */}
        <ExperienceSection lang={lang} />

        {/* Bento Grid Case Studies & Research */}
        <ProjectsGrid lang={lang} />

        {/* Student Club Vice Presidency & Leadership */}
        <LeadershipSection lang={lang} />

        {/* Categorized Skills Matrix & CEFR Languages */}
        <SkillsSection lang={lang} />

        {/* Verified Credentials & EF SET Spotlight */}
        <CertificationsSection
          lang={lang}
          onOpenCertificateModal={handleOpenCertificateModal}
        />

        {/* Academic Insights & Essays with Reader */}
        <InsightsSection lang={lang} />

        {/* Contact, Inquiries & Live Local Time */}
        <ContactSection lang={lang} />
      </main>

      {/* Editorial Footer */}
      <Footer
        lang={lang}
        onOpenCvModal={handleOpenCvModal}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
      />

      {/* Official PDF Document Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        lang={lang}
        initialDoc={pdfInitialDoc}
      />

      {/* Portfolio Audit & Verification Dossier Modal */}
      <DossierModal
        isOpen={isDossierModalOpen}
        onClose={() => setIsDossierModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
