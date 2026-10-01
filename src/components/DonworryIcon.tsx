import React from 'react';

interface DonworryIconProps {
  className?: string;
}

export const DonworryIcon: React.FC<DonworryIconProps> = ({ className = 'w-32 h-32' }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-md border border-[#A8947C]/40 ${className}`}>
      <img
        src="/dontworry.png"
        alt="돈워리"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
