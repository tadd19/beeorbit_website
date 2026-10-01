import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkTheme?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', darkTheme = false }) => {
  const sizeMap = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  return (
    <div className={`inline-flex items-center select-none font-display leading-none tracking-tight ${className}`}>
      {/* 'bee' in dark charcoal on light background, or white on dark */}
      <span className={`${sizeMap[size]} font-normal tracking-[-0.04em] ${darkTheme ? 'text-white' : 'text-[#18181B]'}`}>
        bee
      </span>
      {/* 'orbit' in bold vibrant orange */}
      <span className={`${sizeMap[size]} font-extrabold text-[#FF5722] tracking-[-0.03em]`}>
        orbit
      </span>
    </div>
  );
};
