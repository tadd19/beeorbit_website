import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../data/translations';

interface NavbarProps {
  activeSection: string;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  language,
  onLanguageChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'info', label: 'INFO', href: '#info' },
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: 'KO' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F6EE]/90 backdrop-blur-md border-b border-[#E5DEC9] py-4 shadow-sm'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark Logo */}
        <a
          href="#home"
          className="flex items-center group focus-visible:outline-none"
          aria-label="beeorbit home"
        >
          <Logo size="md" />
        </a>

        {/* Right side: 4 Menus + Language Switcher */}
        <div className="hidden md:flex items-center gap-8">
          {/* Desktop 4 Menus */}
          <nav className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs font-mono font-bold tracking-widest transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#FF5722]'
                      : 'text-[#57534E] hover:text-[#18181B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF5722] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Language Switcher (KO | EN | JA) */}
          <div className="flex items-center p-0.5 rounded-full bg-white border border-[#E5DEC9] shadow-2xs font-mono text-[11px] font-bold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === lang.code
                    ? 'bg-[#FF5722] text-white shadow-xs'
                    : 'text-[#57534E] hover:text-[#18181B]'
                }`}
                title={`Switch language to ${lang.label}`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language Selector Mobile */}
          <div className="flex items-center p-0.5 rounded-full bg-white border border-[#E5DEC9] font-mono text-[10px] font-bold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === lang.code
                    ? 'bg-[#FF5722] text-white'
                    : 'text-[#57534E]'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#18181B] hover:text-[#FF5722] focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F6EE]/98 border-b border-[#E5DEC9] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-mono font-bold tracking-wider py-2 border-b border-[#EFE9DB] ${
                  activeSection === item.id ? 'text-[#FF5722]' : 'text-[#18181B]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
