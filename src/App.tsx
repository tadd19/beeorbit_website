import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/Home';
import { InfoSection } from './components/Info';
import { WorkSection } from './components/Work';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickEditorModal } from './components/QuickEditorModal';
import { translations, Language, SiteTranslation } from './data/translations';
import { SiteContent, defaultSiteContent } from './data/siteContent';
import { Edit3 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

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

  // Custom game icon URL uploaded by the user
  const [customGameIconUrl, setCustomGameIconUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('beeorbit_game_icon') || '';
    } catch {
      return '';
    }
  });

  // User custom edited content per language if any
  const [customContentMap, setCustomContentMap] = useState<Record<string, Partial<SiteTranslation>>>(() => {
    try {
      const saved = localStorage.getItem('beeorbit_custom_content_map');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Base translation for active language
  const baseT = translations[language];

  // Effective translation merged with any custom edits for this language
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

  // Bridge to QuickEditor format
  const editorContent: SiteContent = {
    home: {
      tag: currentT.home.tag,
      headlineLine1: currentT.home.headlineLine1,
      headlineHighlight: currentT.home.headlineHighlight,
      description: currentT.home.description,
    },
    info: {
      tag: currentT.info.tag,
      title: currentT.info.title,
      subtitle: currentT.info.subtitle,
      cards: currentT.info.cards,
    },
    work: {
      tag: currentT.work.tag,
      title: currentT.work.title,
      subtitle: currentT.work.subtitle,
      gameTitle: currentT.work.gameTitle,
      gameGenre: currentT.work.gameGenre,
      gameGenreEn: currentT.work.gameGenreEn,
      gameDescription: currentT.work.gameDescription,
      features: currentT.work.features,
      platform: currentT.work.platform,
      developer: currentT.work.developer,
      gameIconUrl: customGameIconUrl,
    },
    contact: {
      tag: currentT.contact.tag,
      title: currentT.contact.title,
      subtitle: currentT.contact.subtitle,
      email: currentT.contact.email,
      description: currentT.contact.description,
    },
  };

  const handleUpdateEditorContent = (updated: SiteContent) => {
    // 1. Update custom game icon
    if (updated.work.gameIconUrl !== undefined) {
      setCustomGameIconUrl(updated.work.gameIconUrl);
      try {
        localStorage.setItem('beeorbit_game_icon', updated.work.gameIconUrl);
      } catch {
        // ignore
      }
    }

    // 2. Update custom content for the current language
    const updatedLangContent: Partial<SiteTranslation> = {
      home: {
        ...currentT.home,
        tag: updated.home.tag,
        headlineLine1: updated.home.headlineLine1,
        headlineHighlight: updated.home.headlineHighlight,
        description: updated.home.description,
      },
      info: {
        ...currentT.info,
        tag: updated.info.tag,
        title: updated.info.title,
        subtitle: updated.info.subtitle,
        cards: updated.info.cards,
      },
      work: {
        ...currentT.work,
        tag: updated.work.tag,
        title: updated.work.title,
        subtitle: updated.work.subtitle,
        gameTitle: updated.work.gameTitle,
        gameGenre: updated.work.gameGenre,
        gameGenreEn: updated.work.gameGenreEn,
        gameDescription: updated.work.gameDescription,
        features: updated.work.features,
        platform: updated.work.platform,
        developer: updated.work.developer,
      },
      contact: {
        ...currentT.contact,
        tag: updated.contact.tag,
        title: updated.contact.title,
        subtitle: updated.contact.subtitle,
        email: updated.contact.email,
        description: updated.contact.description,
      },
    };

    const newMap = {
      ...customContentMap,
      [language]: updatedLangContent,
    };
    setCustomContentMap(newMap);
    try {
      localStorage.setItem('beeorbit_custom_content_map', JSON.stringify(newMap));
    } catch {
      // ignore
    }
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
          onOpenEditor={() => setIsEditorOpen(true)}
        />
        <ContactSection content={currentT.contact} />
      </main>

      {/* Minimalist Footer */}
      <Footer content={currentT.footer} nav={currentT.nav} />

      {/* Floating Live Edit Trigger Button */}
      <aside
        aria-label="Content Editor Controls"
        className="fixed bottom-5 right-5 z-40"
      >
        <button
          onClick={() => setIsEditorOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#18181B] border border-[#E5DEC9] shadow-md hover:shadow-lg transition-all text-xs font-mono font-bold group cursor-pointer"
          title={currentT.editor.title}
        >
          <div className="w-5 h-5 rounded-full bg-[#FF5722] text-white flex items-center justify-center">
            <Edit3 className="w-3 h-3" />
          </div>
          <span>{currentT.editor.editBtn}</span>
        </button>
      </aside>

      {/* Real-time Content Quick Editor Modal */}
      <QuickEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        content={editorContent}
        onUpdateContent={handleUpdateEditorContent}
      />
    </div>
  );
}
