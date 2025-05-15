import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full opacity-40 animate-pulse-slow"></div>
      <div className="relative flex items-center justify-center w-full h-full bg-dark-lighter rounded-full border-2 border-primary">
        <Sparkles className="text-primary" size={20} />
      </div>
    </div>
  );
};

export default Logo;