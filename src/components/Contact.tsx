import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { SiteTranslation } from '../data/translations';

interface ContactProps {
  content: SiteTranslation['contact'];
}

export const ContactSection: React.FC<ContactProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);
  const email = content.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-ivory-dots relative border-b border-[#E5DEC9]">
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

        {/* Clean Central Contact Card */}
        <div className="bg-white border border-[#E5DEC9] rounded-sm p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-7 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#FF5722]/10 text-[#FF5722] flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-[#57534E] uppercase block">
              {content.inboxLabel}
            </span>
            <a
              href={`mailto:${email}`}
              className="text-2xl sm:text-4xl font-extrabold font-display text-[#18181B] hover:text-[#FF5722] transition-colors tracking-tight block"
            >
              {email}
            </a>
          </div>

          <p className="text-sm text-[#57534E] font-light leading-relaxed max-w-md mx-auto">
            {content.description}
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider bg-white hover:bg-[#FAF8F5] text-[#18181B] rounded-sm border border-[#E5DEC9] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#FF5722]" />
                  <span className="text-[#FF5722]">{content.copiedBtn}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#57534E]" />
                  <span>{content.copyBtn}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider bg-[#FF5722] hover:bg-[#ff6838] text-white rounded-sm transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>{content.sendBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
