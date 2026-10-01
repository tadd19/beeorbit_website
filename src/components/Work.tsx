import React from 'react';
import { DonworryIcon } from './DonworryIcon';
import { Smartphone, CheckCircle2, Camera } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface WorkProps {
  content: SiteTranslation['work'];
  gameIconUrl?: string;
  onOpenEditor?: () => void;
}

export const WorkSection: React.FC<WorkProps> = ({
  content,
  gameIconUrl,
  onOpenEditor,
}) => {
  return (
    <section id="work" className="py-24 bg-ivory-dots relative border-b border-[#E5DEC9]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF5722] uppercase">
            {content.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#18181B]">
            {content.title}
          </h2>
          <p className="text-[#57534E] text-base font-light leading-relaxed pt-2">
            {content.subtitle}
          </p>
        </div>

        {/* Featured Game Card */}
        <div className="bg-white border border-[#E5DEC9] rounded-sm p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Game Character Icon */}
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <div className="relative group">
                {gameIconUrl ? (
                  <img
                    src={gameIconUrl}
                    alt={content.gameTitle}
                    className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-2xl shadow-md border border-[#E5DEC9] bg-[#FAF8F5]"
                  />
                ) : (
                  <DonworryIcon className="w-44 h-44 sm:w-52 sm:h-52" />
                )}

                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-[#18181B] text-white text-[11px] font-mono rounded shadow-xs">
                  MOBILE
                </div>

                {/* Direct Icon Change Button Trigger */}
                {onOpenEditor && (
                  <button
                    onClick={onOpenEditor}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/95 hover:bg-white text-[#18181B] hover:text-[#FF5722] border border-[#E5DEC9] shadow-sm transition-all opacity-80 group-hover:opacity-100 flex items-center gap-1 text-[11px] font-mono font-bold cursor-pointer"
                    title={content.changeIconBtn}
                  >
                    <Camera className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span className="hidden sm:inline">{content.changeIconBtn}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Game Info & Description */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#FF5722]/10 text-[#FF5722] text-xs font-mono font-bold border border-[#FF5722]/20">
                  {content.gameGenre}
                </span>
                <span className="text-xs font-mono text-[#57534E]">
                  {content.gameGenreEn}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-[#18181B] tracking-tight">
                {content.gameTitle}
              </h3>

              <p className="text-[#57534E] text-sm sm:text-base leading-relaxed font-light">
                {content.gameDescription}
              </p>

              {/* Feature Tags */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#57534E]">
                {content.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5722] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Status / Platforms */}
              <div className="pt-4 border-t border-[#EFE9DB] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#57534E]">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#FF5722]" />
                  <span>
                    {content.platformLabel}: {content.platform}
                  </span>
                </div>
                <span className="font-semibold text-[#18181B]">
                  {content.developerLabel}: {content.developer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
