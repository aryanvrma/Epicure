import React from 'react';

interface MotifProps {
  className?: string;
  size?: number;
  glow?: boolean;
  style?: React.CSSProperties;
}

export function Mandala({ className = '', size = 120, glow = true, style = {} }: MotifProps) {
  const mergedStyle: React.CSSProperties = {
    ...(glow ? { filter: 'drop-shadow(0 0 6px rgba(203, 162, 51, 0.45))' } : {}),
    ...style
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} text-gold fill-none stroke-current stroke-[0.75]`}
      style={mergedStyle}
    >
      {/* Outer intricate ring */}
      <circle cx="50" cy="50" r="45" strokeDasharray="2 2" className="opacity-60" />
      <circle cx="50" cy="50" r="41" />
      <circle cx="50" cy="50" r="37" strokeDasharray="4 2" className="opacity-70" />

      {/* Radiant petal patterns */}
      {Array.from({ length: 12 }).map((_, i) => {
        const rotation = i * (360 / 12);
        return (
          <g key={i} transform={`rotate(${rotation} 50 50)`}>
            <path
              d="M 50 50 C 47 30, 47 15, 50 10 C 53 15, 53 30, 50 50"
              className="opacity-95"
            />
            <path
              d="M 50 50 C 48 35, 48 20, 50 15 C 52 20, 52 35, 50 50"
              className="opacity-40"
              strokeDasharray="1 1"
            />
            <circle cx="50" cy="10" r="1.2" className="fill-gold" />
          </g>
        );
      })}

      {/* Inner layered geometric beauty */}
      {Array.from({ length: 6 }).map((_, i) => {
        const rotation = i * (360 / 6) + 15;
        return (
          <rect
            key={i}
            x="32"
            y="32"
            width="36"
            height="36"
            transform={`rotate(${rotation} 50 50)`}
            className="opacity-70"
          />
        );
      })}

      {/* Center lotus seedpod star */}
      <circle cx="50" cy="50" r="7" className="stroke-[1.2]" />
      <polygon points="50,45 52,49 55,50 52,51 50,55 48,51 45,50 48,49" className="fill-gold" />
    </svg>
  );
}

export function LotusDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold opacity-50" />
      <svg
        width="32"
        height="24"
        viewBox="0 0 40 30"
        className="text-gold fill-none stroke-current stroke-[1.22]"
        style={{ filter: 'drop-shadow(0 0 4px rgba(203, 162, 51, 0.4))' }}
      >
        {/* Center lotus petal */}
        <path d="M 20 28 C 17 18, 17 6, 20 2 C 23 6, 23 18, 20 28 Z" className="fill-gold/10" />
        {/* Left petals */}
        <path d="M 20 28 C 10 18, 8 10, 11 6 C 14 6, 17 16, 20 28 Z" />
        <path d="M 20 28 C 4 22, 2 16, 4 12 C 7 11, 12 21, 20 28 Z" className="opacity-60" />
        {/* Right petals */}
        <path d="M 20 28 C 30 18, 32 10, 29 6 C 26 6, 23 16, 20 28 Z" />
        <path d="M 20 28 C 36 22, 38 16, 36 12 C 33 11, 28 21, 20 28 Z" className="opacity-60" />
        {/* Base drop ripple */}
        <path d="M 12 28 C 16 30, 24 30, 28 28" />
      </svg>
      <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold opacity-50" />
    </div>
  );
}

export function TempleBorder({ className = '' }: { className?: string }) {
  return (
    <svg
      width="100%"
      height="18"
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      className={`${className} text-gold/35 fill-none stroke-current stroke-[1]`}
    >
      <path
        d="M 0 15 L 10 15 L 15 5 L 20 15 L 30 15 L 35 5 L 40 15 L 50 15 L 55 5 L 60 15 L 70 15 L 75 5 L 80 15 L 90 15 L 95 5 L 100 15 L 110 15 L 115 5 L 120 15 L 130 15 L 135 5 L 140 15 L 150 15 L 155 5 L 160 15 L 170 15 L 175 5 L 180 15 L 190 15 L 195 5 L 200 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="0" y1="17" x2="200" y2="17" className="opacity-55" />
    </svg>
  );
}

export function CornerOrnament({ className = '', position = 'top-left' }: { className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': 'rotate-270',
  }[position];

  return (
    <div className={`absolute pointer-events-none p-1.5 ${className} ${rotation} opacity-45`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 30 30"
        className="text-gold fill-none stroke-current stroke-[1]"
      >
        <path d="M 0 30 L 0 0 L 30 0" />
        <path d="M 4 26 L 4 4 L 26 4" strokeDasharray="2 2" />
        <path d="M 8 22 L 8 8 L 22 8" />
        <circle cx="14" cy="14" r="1.5" className="fill-gold" />
      </svg>
    </div>
  );
}
