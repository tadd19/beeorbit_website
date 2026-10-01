import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface HomeProps {
  content: SiteTranslation['home'];
}

export const HomeSection: React.FC<HomeProps> = ({ content }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] pt-36 pb-24 flex flex-col justify-center bg-ivory-dots overflow-hidden border-b border-[#E5DEC9]"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl space-y-7">
          {/* Studio Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5DEC9] rounded-sm text-xs font-mono tracking-widest text-[#FF5722] uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
            <span>{content.tag}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-[#18181B] leading-[1.12]">
            {content.headlineLine1} <br />
            <span className="text-[#FF5722]">{content.headlineHighlight}</span>
          </h1>

          {/* Concise Studio Pitch */}
          <p className="text-base sm:text-lg text-[#57534E] font-light leading-relaxed">
            {content.description}
          </p>

          {/* Simple Clean CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#work"
              className="px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#FF5722] hover:bg-[#ff6838] rounded-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <span>{content.ctaWork}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 text-xs font-mono font-semibold tracking-wider text-[#18181B] hover:text-black bg-white hover:bg-[#FAF8F5] border border-[#E5DEC9] rounded-sm transition-colors"
            >
              <span>{content.ctaContact}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
