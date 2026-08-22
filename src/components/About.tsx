import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalIdentity } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const concisePills = [
    "LLM & RAG PIPELINES",
    "VECTOR DATABASES",
    "AGENTIC WORKFLOWS",
    "FULL STACK ARCHITECTURE",
    "400+ LEETCODE SOLVED"
  ];

  return (
    <section id="about" className="py-28 border-b border-editorial-border bg-editorial-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Label */}
        <div className="font-mono text-xs text-editorial-muted tracking-wider uppercase flex items-center justify-between border-b border-editorial-border/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-editorial-dark">01 / ABOUT</span>
            <span>•</span>
            <span>PHILOSOPHY & POSITIONING</span>
          </div>
          <span className="text-editorial-green font-bold">GANGA RAGHUWANSHI</span>
        </div>

        {/* Spacious Quote Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-editorial-dark tracking-tight leading-snug font-display">
            "{personalIdentity.bioQuote}"
          </h2>
        </motion.div>

        {/* Clean Two-Column Layout (Generous Whitespace) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Concise Editorial Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4 text-base sm:text-lg text-editorial-muted leading-relaxed font-sans font-normal">
              <p className="text-editorial-dark font-medium">
                AI/ML enthusiast and full-stack developer dedicated to building end-to-end Generative AI applications for real-world problems.
              </p>
              <p className="text-editorial-muted text-base">
                Experienced in designing LLM-powered systems using RAG pipelines, agentic workflows, and vector databases, backed by a strong foundation in Python, NLP, and modern web development.
              </p>
              <p className="text-editorial-muted text-base">
                Solved <span className="text-editorial-dark font-bold underline underline-offset-4 decoration-editorial-green">400+ LeetCode problems</span>, reflecting strong problem-solving discipline and algorithmic focus.
              </p>
            </div>

            {/* Concise Minimal Pills */}
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px]">
              {concisePills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 bg-editorial-card border border-editorial-border text-editorial-dark/80 font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Airy Principles Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="font-mono text-xs text-editorial-muted uppercase tracking-wider border-b border-editorial-border pb-2 flex justify-between">
              <span>CORE PRINCIPLES</span>
              <span>03 RULES</span>
            </div>

            <div className="space-y-3 font-mono">
              {personalIdentity.principles.map((principle, idx) => {
                const isActive = activePrinciple === idx;
                return (
                  <div
                    key={principle.number}
                    onClick={() => setActivePrinciple(idx)}
                    className={`p-5 border transition-all cursor-pointer space-y-1.5 ${
                      isActive
                        ? 'bg-editorial-dark text-white border-editorial-dark shadow-sm'
                        : 'bg-editorial-card/60 border-editorial-border text-editorial-dark hover:border-editorial-dark/40 hover:bg-editorial-card'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold">
                      <div className="flex items-center gap-3">
                        <span className={isActive ? 'text-emerald-400' : 'text-editorial-muted'}>
                          {principle.number}
                        </span>
                        <span className="font-display font-bold text-sm tracking-tight">
                          {principle.title}
                        </span>
                      </div>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'rotate-45 text-emerald-400' : 'text-editorial-muted/40'}`} />
                    </div>

                    <p className={`text-xs font-sans font-normal pl-7 leading-relaxed ${isActive ? 'text-white/80' : 'text-editorial-muted'}`}>
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
