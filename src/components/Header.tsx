import React from 'react';
import { personalIdentity } from '../data/portfolioData';

export const Header: React.FC = () => {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#work' },
    { label: 'PROOF', href: '#proof' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'STACK', href: '#stack' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-editorial-bg/95 backdrop-blur-md border-b border-editorial-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-mono text-xs tracking-wider">
        
        {/* Prominent Logo & Name */}
        <a 
          href="#" 
          className="font-bold text-editorial-dark hover:text-editorial-green transition-colors flex items-center gap-2"
        >
          <span className="text-sm tracking-tight font-extrabold uppercase">
            {personalIdentity.name}
          </span>
          <span className="text-editorial-muted font-normal text-[10px]">
            / PORTFOLIO
          </span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-editorial-dark/70 hover:text-editorial-dark transition-colors uppercase font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Status Badge */}
        <div className="flex items-center gap-2 text-editorial-dark/80 text-[11px] font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-editorial-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-editorial-green"></span>
          </span>
          <span className="uppercase tracking-widest hidden sm:inline font-semibold">
            {personalIdentity.availabilityStatus}
          </span>
        </div>

      </div>
    </header>
  );
};
