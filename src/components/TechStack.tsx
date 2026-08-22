import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolioData';
import { Code2, Cpu, Database, Terminal } from 'lucide-react';
import { LeetCodeProof } from './LeetCodeProof';

export const TechStack: React.FC = () => {
  const getIcon = (domain: string) => {
    if (domain.includes('Generative')) return <Cpu className="w-4 h-4 text-editorial-green" />;
    if (domain.includes('Full-Stack')) return <Code2 className="w-4 h-4 text-editorial-green" />;
    if (domain.includes('Core')) return <Database className="w-4 h-4 text-editorial-green" />;
    return <Terminal className="w-4 h-4 text-editorial-green" />;
  };

  return (
    <section id="stack" className="py-20 border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div>
          <div className="font-mono text-xs text-editorial-muted tracking-wider uppercase mb-3">
            05 / TECH STACK & ALGORITHMS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-editorial-dark tracking-tight font-display">
            Technical Stack & Discipline
          </h2>
        </div>

        {/* Separate LeetCode Proof Component */}
        <LeetCodeProof />

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.domain}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-editorial-card border border-editorial-border p-6 sm:p-8 space-y-4 rounded-none"
            >
              <div className="flex items-center gap-2 border-b border-editorial-border/60 pb-3 font-mono text-xs text-editorial-muted tracking-wider uppercase">
                {getIcon(group.domain)}
                <span className="font-bold text-editorial-dark">{group.domain}</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-editorial-bg border border-editorial-border/80 text-editorial-dark font-medium shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
