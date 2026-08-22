import React from 'react';
import { personalIdentity, socialLinks } from '../data/portfolioData';
import { ArrowUpRight, Mail, Github, Linkedin, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-editorial-bg border-t border-editorial-border pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-editorial-border pb-12">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs text-editorial-muted uppercase tracking-widest">
              CONTACT & COLLABORATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-editorial-dark tracking-tight font-display">
              Let's build something impactful together.
            </h2>
            <p className="text-sm font-sans text-editorial-muted max-w-xl">
              Actively seeking AI Engineer, Generative AI, or Full-Stack Developer roles. Feel free to reach out for inquiries or collaborations.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
            <a
              href={socialLinks.email}
              className="px-6 py-4 bg-editorial-dark text-white hover:bg-editorial-green transition-colors uppercase font-bold text-xs tracking-wider flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>SEND EMAIL</span>
            </a>
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-wider">
          <div className="space-y-3">
            <div className="text-editorial-muted text-[10px]">GITHUB</div>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-editorial-dark hover:text-editorial-green flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>PROFILE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-editorial-muted text-[10px]">LINKEDIN</div>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-editorial-dark hover:text-editorial-green flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>CONNECT</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-editorial-muted text-[10px]">LEETCODE</div>
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-editorial-dark hover:text-editorial-green flex items-center gap-1"
            >
              <Code className="w-3.5 h-3.5" />
              <span>400+ SOLVED</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            <div className="text-editorial-muted text-[10px]">RÉSUMÉ</div>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-editorial-dark hover:text-editorial-green flex items-center gap-1"
            >
              <span>VIEW PDF</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-editorial-border/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-editorial-muted gap-4">
          <div>
            © {new Date().getFullYear()} {personalIdentity.name.toUpperCase()} · DESIGNED WITH EDITORIAL SYSTEMS AESTHETIC
          </div>
          <div>
            {personalIdentity.location}
          </div>
        </div>

      </div>
    </footer>
  );
};
