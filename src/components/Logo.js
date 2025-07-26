import React from 'react';

function Logo() {
  return (
    <div className="absolute top-6 left-6 flex items-center space-x-3">
      <div className="w-12 h-12">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Brain side (left) */}
          <path
            d="M20 25 C15 25, 10 30, 10 35 C10 40, 12 42, 15 45 C12 48, 10 52, 12 56 C14 60, 18 62, 22 60 C25 65, 30 68, 35 65 C40 68, 45 65, 48 60 L48 25 C48 20, 43 15, 38 15 C33 15, 28 18, 25 22 C22 18, 18 20, 20 25 Z"
            fill="url(#brainGradient)"
            stroke="url(#brainGradient)"
            strokeWidth="2"
          />
          
          {/* Brain pattern lines */}
          <path d="M18 30 C22 32, 25 35, 28 38" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M15 40 C20 42, 25 45, 30 48" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M20 50 C25 52, 30 55, 35 58" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          {/* Divider line */}
          <line x1="50" y1="15" x2="50" y2="85" stroke="url(#brainGradient)" strokeWidth="3"/>
          
          {/* Chat bubble side (right) */}
          <path
            d="M55 25 C55 20, 60 15, 70 15 C80 15, 85 20, 85 25 L85 40 C85 45, 80 50, 70 50 L65 50 L60 55 L62 50 C58 48, 55 45, 55 40 Z"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="3"
          />
          
          {/* Chat dots */}
          <circle cx="65" cy="32" r="2" fill="url(#brainGradient)"/>
          <circle cx="70" cy="32" r="2" fill="url(#brainGradient)"/>
          <circle cx="75" cy="32" r="2" fill="url(#brainGradient)"/>
          
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#brainGradient)"
            strokeWidth="4"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#2196f3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="text-white">
        <div className="font-bold text-lg leading-tight">IntelliPrompt</div>
        <div className="text-xs opacity-80">Smart AI Creator</div>
      </div>
    </div>
  );
}

export default Logo;
