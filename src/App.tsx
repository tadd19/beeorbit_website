import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/Home';
import { InfoSection } from './components/Info';
import { WorkSection } from './components/Work';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { translations, Language, SiteTranslation } from './data/translations';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Language state (ko, en, ja)
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('beeorbit_lang') as Language;
      if (savedLang && (savedLang === 'ko' || savedLang === 'en' || savedLang === 'ja')) {
        return savedLang;
      }
    } catch {
      // ignore
    }
    return 'ko';
  });

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('beeorbit_lang', newLang);
    } catch {
      // ignore
    }
  };

  // Lock in the custom game icon confirmed by the user
  const [customGameIconUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('beeorbit_game_icon') || '';
    } catch {
      return '';
    }
  });

  // Keep any text edits made by the user
  const [customContentMap] = useState<Record<string, Partial<SiteTranslation>>>(() => {
    try {
      const saved = localStorage.getItem('beeorbit_custom_content_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Base translation for active language
  const baseT = translations[language];

  // Effective translation merged with any confirmed custom edits for this language
  const currentT: SiteTranslation = {
    ...baseT,
    ...(customContentMap[language] || {}),
    home: {
      ...baseT.home,
      ...(customContentMap[language]?.home || {}),
    },
    info: {
      ...baseT.info,
      ...(customContentMap[language]?.info || {}),
    },
    work: {
      ...baseT.work,
      ...(customContentMap[language]?.work || {}),
    },
    contact: {
      ...baseT.contact,
      ...(customContentMap[language]?.contact || {}),
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'info', 'work', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F6EE] text-[#18181B] font-sans selection:bg-[#FF5722] selection:text-white">
      {/* 4-Item Navigation with beeorbit Logo & KO/EN/JA Switcher */}
      <Navbar
        activeSection={activeSection}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* 4 Core Sections */}
      <main id="main-content">
        <HomeSection content={currentT.home} />
        <InfoSection content={currentT.info} />
        <WorkSection
          content={currentT.work}
          gameIconUrl={customGameIconUrl}
        />
        <ContactSection content={currentT.contact} />
      </main>

      {/* Minimalist Footer */}
      <Footer content={currentT.footer} nav={currentT.nav} />
    </div>
  );
}
