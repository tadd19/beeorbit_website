import React from 'react';
import { Logo } from './Logo';
import { ArrowUp } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface FooterProps {
  content: SiteTranslation['footer'];
  nav: SiteTranslation['nav'];
}

export const Footer: React.FC<FooterProps> = ({ content, nav }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F9F6EE] py-14 text-[#57534E] text-xs border-t border-[#E5DEC9]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="space-y-1.5">
            <Logo size="md" />
            <p className="text-xs text-[#78716C] font-light">
              {content.tagline}
            </p>
          </div>

          {/* 4 Menus */}
          <div className="flex items-center gap-7 font-mono text-xs">
            <a href="#home" className="hover:text-[#18181B] transition-colors">
              {nav.home}
            </a>
            <a href="#info" className="hover:text-[#18181B] transition-colors">
              {nav.info}
            </a>
            <a href="#work" className="hover:text-[#18181B] transition-colors">
              {nav.work}
            </a>
            <a href="#contact" className="hover:text-[#18181B] transition-colors">
              {nav.contact}
            </a>
          </div>

          {/* Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#FAF8F5] text-[#18181B] rounded border border-[#E5DEC9] transition-colors font-mono text-xs cursor-pointer shadow-2xs"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-[#E5DEC9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono text-[#78716C]">
          <div>
            {content.company} · Contact:{' '}
            <a href="mailto:tadd@beeorbit.net" className="text-[#18181B] hover:text-[#FF5722]">
              tadd@beeorbit.net
            </a>
          </div>
          <div>
            © {new Date().getFullYear()} {content.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
