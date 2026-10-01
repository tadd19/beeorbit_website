import React from 'react';
import { SiteTranslation } from '../data/translations';

interface InfoProps {
  content: SiteTranslation['info'];
}

export const InfoSection: React.FC<InfoProps> = ({ content }) => {
  return (
    <section id="info" className="py-24 bg-ivory-dots relative border-b border-[#E5DEC9]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#18181B]">
            {content.title}
          </h2>
          <p className="text-[#57534E] text-base sm:text-lg font-light leading-relaxed pt-2">
            {content.subtitle}
          </p>
        </div>

        {/* Minimalist 3 Simple Value Statements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card, idx) => (
            <div key={idx} className="p-7 rounded-sm bg-white border border-[#E5DEC9] space-y-3 shadow-2xs">
              <span className="font-mono text-xs font-bold text-[#FF5722]">{card.num}</span>
              <h3 className="text-base font-bold font-display text-[#18181B]">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
