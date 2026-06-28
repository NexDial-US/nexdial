import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: { width: 100, height: 36 },
    md: { width: 130, height: 46 },
    lg: { width: 180, height: 64 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NexDial"
      role="img"
    >
      {/* N letterform */}
      <path
        d="M8 52V12L24 40V12L28 12V52L12 24V52H8Z"
        fill="white"
      />
      {/* WiFi / signal arc top right of N */}
      <path
        d="M26 10C28.5 8.2 31.5 8.2 34 10"
        stroke="#1D6EFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M23.5 7C27.5 4.5 32.5 4.5 36.5 7"
        stroke="#00B8FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 4C26.5 1 33.5 1 39 4"
        stroke="#4CC9F0"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Signal dot */}
      <circle cx="30" cy="13.5" r="2" fill="#1D6EFF" />

      {/* NexDial wordmark */}
      {/* N */}
      <path d="M46 48V20H50.5L60 38.5V20H64V48H59.5L50 29.5V48H46Z" fill="white" />
      {/* e */}
      <path d="M67.5 37C67.5 31.5 71 27.5 76.5 27.5C82 27.5 85 31 85 36.5V38.5H71.5C71.8 41 73.5 42.5 76.5 42.5C78.5 42.5 80 41.8 80.8 40.5L84.2 42.5C82.5 45 79.8 46.5 76.3 46.5C71 46.5 67.5 42.5 67.5 37ZM71.5 35.5H81C80.5 33 79 31.5 76.5 31.5C73.8 31.5 72.2 33 71.5 35.5Z" fill="white" />
      {/* x */}
      <path d="M86.5 46L92.5 37L86.5 28H91L94.8 34L98.5 28H103L97 37L103 46H98.5L94.5 39.8L90.5 46H86.5Z" fill="white" />
      {/* D */}
      <path d="M106 48V20H114.5C121.5 20 126.5 24.5 126.5 34C126.5 43.5 121.5 48 114.5 48H106ZM110.2 44H114C119 44 122.2 40.5 122.2 34C122.2 27.5 119 24 114 24H110.2V44Z" fill="white" />
      {/* i */}
      <path d="M130 48V28H134V48H130ZM130 25V20.5H134V25H130Z" fill="white" />
      {/* a */}
      <path d="M137.5 42.5C137.5 38.5 140.5 36.5 146.5 36.5H150.5V36C150.5 33.5 149.2 32 147 32C145 32 143.8 33 143.3 34.5L139.5 33C140.8 30 143.3 27.5 147.2 27.5C152 27.5 154.5 30.5 154.5 35.5V48H150.5V45.8C149.5 47.3 147.5 48.5 145 48.5C140.8 48.5 137.5 46.2 137.5 42.5ZM141.5 42C141.5 43.8 142.8 45 145 45C148 45 150.5 43 150.5 40V39.5H146.5C143.5 39.5 141.5 40.5 141.5 42Z" fill="white" />
      {/* l */}
      <path d="M158.5 48V20H162.5V48H158.5Z" fill="white" />

      {/* Tagline */}
      <text
        x="46"
        y="58"
        fontFamily="Inter, sans-serif"
        fontSize="7.5"
        fontWeight="500"
        letterSpacing="2.5"
        fill="#A9B0C7"
        textAnchor="start"
      >
        REMOTE SALES &amp; APPOINTMENT SETTING
      </text>
    </svg>
  );
};

export default Logo;
