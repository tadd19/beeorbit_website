import React from 'react';

interface DonworryIconProps {
  className?: string;
}

export const DonworryIcon: React.FC<DonworryIconProps> = ({ className = 'w-32 h-32' }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-md border border-[#A8947C]/40 ${className}`}>
      <svg
        viewBox="0 0 512 512"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background tan color matching play_store_512.png */}
        <rect width="512" height="512" fill="#BFA992" />

        {/* Character Group */}
        <g transform="translate(10, 10)">
          {/* Blue Shield in background (Right side) */}
          <g>
            <path
              d="M 310,250 C 310,250 405,255 410,260 C 415,310 405,370 310,380 Z"
              fill="#5299D3"
              stroke="#111111"
              strokeWidth="16"
              strokeLinejoin="round"
            />
            {/* Flower / Sun Emblem on Shield */}
            <circle cx="375" cy="325" r="28" fill="#F49D1A" stroke="#111" strokeWidth="8" />
            <path
              d="M 375,285 L 375,300 M 375,350 L 375,365 M 340,325 L 355,325 M 395,325 L 410,325"
              stroke="#91D2FF"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </g>

          {/* Blue Body / Torso */}
          <path
            d="M 210,270 L 320,270 L 310,350 L 210,350 Z"
            fill="#2670E8"
            stroke="#111111"
            strokeWidth="16"
            strokeLinejoin="round"
          />
          {/* Yellow strap on armor */}
          <line x1="250" y1="280" x2="265" y2="340" stroke="#F5B027" strokeWidth="16" strokeLinecap="round" />

          {/* Cute Head & Peach Skin */}
          <ellipse
            cx="270"
            cy="240"
            rx="105"
            ry="75"
            fill="#F7C8A0"
            stroke="#111111"
            strokeWidth="18"
          />
          {/* Cute round left ear */}
          <circle cx="170" cy="235" r="25" fill="#F7C8A0" stroke="#111111" strokeWidth="16" />

          {/* Blue Beret & Hair */}
          <path
            d="M 180,210 C 180,120 230,80 340,90 C 390,95 400,140 375,180 C 350,195 320,185 300,190 C 270,190 230,210 180,210 Z"
            fill="#2670E8"
            stroke="#111111"
            strokeWidth="18"
            strokeLinejoin="round"
          />
          {/* Hair strands */}
          <path
            d="M 215,150 L 175,200 L 230,225 Z"
            fill="#1D4E9E"
            stroke="#111111"
            strokeWidth="16"
          />
          <path
            d="M 220,120 C 240,140 250,150 255,165"
            stroke="#111111"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M 290,120 C 310,135 320,150 325,160"
            stroke="#111111"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Goggles / Eye Mask Frame */}
          <g>
            {/* Thick black goggle outline enclosing both eyes */}
            <path
              d="M 230,215 C 230,190 295,190 295,215 C 295,240 230,240 230,215 Z"
              fill="#111111"
            />
            <path
              d="M 285,215 C 285,190 355,190 355,215 C 355,240 285,240 285,215 Z"
              fill="#111111"
            />
            {/* Mask Bridge & Outer Rim */}
            <path
              d="M 220,215 C 220,180 365,180 365,215 C 365,250 220,250 220,215 Z"
              fill="#111111"
            />

            {/* Glowing Blue Eyes */}
            <ellipse cx="265" cy="215" rx="18" ry="22" fill="#38B6FF" />
            <ellipse cx="330" cy="215" rx="18" ry="22" fill="#38B6FF" />

            {/* Eye Highlights */}
            <ellipse cx="260" cy="210" rx="7" ry="12" fill="#FFFFFF" />
            <ellipse cx="325" cy="210" rx="7" ry="12" fill="#FFFFFF" />
          </g>

          {/* Big Diamond Sword in Foreground */}
          <g transform="rotate(-22 260 380)">
            {/* Pommel / Hilt */}
            <rect x="70" y="365" width="60" height="35" rx="8" fill="#3F466E" stroke="#111111" strokeWidth="16" />

            {/* Golden Crossguard */}
            <polygon
              points="130,340 160,340 150,425 120,425"
              fill="#F7C064"
              stroke="#111111"
              strokeWidth="16"
              strokeLinejoin="round"
            />

            {/* Cyan Diamond Blade */}
            <path
              d="M 155,355 L 360,355 L 420,383 L 360,410 L 155,410 Z"
              fill="#6EE7F0"
              stroke="#111111"
              strokeWidth="18"
              strokeLinejoin="round"
            />
            {/* Blade Center Gem & Highlight */}
            <ellipse cx="195" cy="383" rx="16" ry="12" fill="#0D6EFD" stroke="#111111" strokeWidth="6" />
            <line x1="225" y1="383" x2="380" y2="383" stroke="#A7F3D0" strokeWidth="8" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
