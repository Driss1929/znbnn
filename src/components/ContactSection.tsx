import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { Mail, Linkedin, MapPin, Clock, Copy, Check, Phone } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [moroccoTime, setMoroccoTime] = useState('');
  const [poznanTime, setPoznanTime] = useState('');

  // Live Morocco & Poland local time
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setMoroccoTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
      setPoznanTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Warsaw',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A78D72] dark:text-[#A8B7B0] mb-2">
            {lang === 'en' ? 'Get In Touch' : 'Me Contacter'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#172A3A] dark:text-slate-100 mb-4">
            {lang === 'en'
              ? 'Direct Institutional & Professional Inquiries'
              : 'Candidature Erasmus+ & Échanges Professionnels'}
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {lang === 'en'
              ? 'Open to Erasmus+ study exchange communications with WSB Merito University in Poznań, academic coordinators, Master graduation internships (PFE), and research collaborations.'
              : 'À disposition des coordinateurs Erasmus+ de l’Université WSB Merito à Poznań, des responsables académiques de l’Université Ibn Zohr et des recruteurs en logistique et commerce international.'}
          </p>
        </div>

        {/* 4 Direct Contact & Coordination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-slate-700 text-[#172A3A] dark:text-[#A8B7B0]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {lang === 'en' ? 'Direct Email' : 'Email Direct'}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-bold text-[#172A3A] dark:text-slate-100 hover:underline break-all"
              >
                {profile.email}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Response within 24 hours' : 'Réponse sous 24h'}
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-slate-700 text-[#0A66C2]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-md transition-colors"
                >
                  {lang === 'en' ? 'Connect' : 'Voir'}
                </a>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {lang === 'en' ? 'Professional Network' : 'Réseau Professionnel'}
              </div>
              <div className="text-sm font-bold text-[#172A3A] dark:text-slate-100 break-all">
                linkedin.com/in/zainab-zouhair-687592387
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Verified student profile' : 'Profil étudiant vérifié'}
            </div>
          </div>

          {/* Telephone / Direct Line Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-slate-700 text-[#172A3A] dark:text-[#A8B7B0]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                {lang === 'en' ? 'Direct Line / Mobile' : 'Ligne Directe / Mobile'}
              </div>
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="text-sm font-bold text-[#172A3A] dark:text-slate-100 hover:underline"
              >
                {profile.phone}
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Phone & WhatsApp available' : 'Téléphone & WhatsApp'}
            </div>
          </div>

          {/* Dual Local Time Zone Clocks */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] dark:bg-slate-700 text-[#A78D72] dark:text-[#A8B7B0]">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                  Live Sync
                </span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                {lang === 'en' ? 'Bilateral Time Zones' : 'Fuseaux Horaires'}
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">Taroudant (MA)</span>
                  </div>
                  <div className="font-mono font-bold text-[#172A3A] dark:text-slate-200">
                    {moroccoTime || '15:00:00'} <span className="text-[10px] font-sans text-slate-400">GMT+1</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 dark:border-slate-700/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="font-medium text-slate-700 dark:text-slate-300">Poznań (PL)</span>
                  </div>
                  <div className="font-mono font-bold text-[#172A3A] dark:text-slate-200">
                    {poznanTime || '16:00:00'} <span className="text-[10px] font-sans text-slate-400">CET</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Synchronized mobility tracking' : 'Suivi bilatéral actif'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
