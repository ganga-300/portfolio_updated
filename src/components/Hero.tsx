import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalIdentity, socialLinks } from '../data/portfolioData';
import { ArrowUpRight, Cpu, Database, Zap, Sparkles, CheckCircle2, Play, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(1);
  const [isFlowing, setIsFlowing] = useState<boolean>(true);

  const architectureNodes = [
    {
      id: 0,
      name: 'INGEST',
      label: 'DATA CHUNKING & EMBEDDINGS',
      status: 'OK',
      tech: 'Python / LangChain',
      desc: 'Raw text ingestion, semantic chunking, and embedding generation.'
    },
    {
      id: 1,
      name: 'ORCHESTRATE / RAG',
      label: 'AGENTIC WORKFLOW CONTROLLER',
      status: 'ACTIVE',
      tech: 'FastAPI / LLM Chain',
      desc: 'Multi-step retrieval chain, context augmentation, and prompt synthesis.'
    },
    {
      id: 2,
      name: 'VECTOR DB',
      label: 'QDRANT RETRIEVAL',
      status: 'SYNCED',
      tech: 'Cosine Similarity 1536d',
      desc: 'High-density vector indexing and hybrid search lookup.'
    },
    {
      id: 3,
      name: 'AGENT WORKFLOW / NLP',
      label: 'SYNTHESIS & OUTPUT',
      status: 'READY',
      tech: 'PyTorch / HuggingFace',
      desc: 'Deterministic reasoning verification and final output formatting.'
    }
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-editorial-border overflow-hidden bg-grid-pattern">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-editorial-green/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Tagline Badge */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase">
              <span className="px-3 py-1 bg-editorial-dark text-white font-bold tracking-widest flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {personalIdentity.name.toUpperCase()}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-editorial-green"></span>
              <span className="text-editorial-muted font-medium">{personalIdentity.subtitle}</span>
            </div>

            {/* Main Headline with Animated Underline Accent */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-editorial-dark tracking-tight leading-[1.08] font-display">
                I build{' '}
                <span className="relative inline-block text-editorial-dark">
                  <span className="relative z-10">intelligent</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute bottom-1 left-0 h-3 bg-editorial-green/20 -z-10 rounded-sm"
                  />
                </span>
                , impactful products.
              </h1>
            </div>

            {/* Positioning Statement */}
            <p className="text-base sm:text-lg text-editorial-muted leading-relaxed font-normal max-w-2xl font-sans">
              {personalIdentity.positioningFull}
            </p>

            {/* Interactive Domain Pills */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="px-3 py-1.5 bg-editorial-card border border-editorial-border font-semibold text-editorial-dark flex items-center gap-1.5 shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-editorial-green" /> RAG PIPELINES
              </span>
              <span className="px-3 py-1.5 bg-editorial-card border border-editorial-border font-semibold text-editorial-dark flex items-center gap-1.5 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-editorial-green" /> AGENTIC WORKFLOWS
              </span>
              <span className="px-3 py-1.5 bg-editorial-card border border-editorial-border font-semibold text-editorial-dark flex items-center gap-1.5 shadow-xs">
                <Database className="w-3.5 h-3.5 text-editorial-green" /> VECTOR DBS
              </span>
              <span className="px-3 py-1.5 bg-editorial-card border border-editorial-border font-semibold text-editorial-dark flex items-center gap-1.5 shadow-xs">
                <Activity className="w-3.5 h-3.5 text-editorial-green" /> 400+ LEETCODE
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-wider">
              <a
                href="#work"
                className="px-6 py-4 bg-editorial-dark text-white hover:bg-editorial-green transition-all duration-200 uppercase font-medium flex items-center gap-2 group shadow-md hover:shadow-lg"
              >
                <span>EXPLORE SELECTED WORK</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>

              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-editorial-dark text-editorial-dark hover:border-editorial-green hover:text-editorial-green transition-all uppercase font-medium"
              >
                READ RÉSUMÉ
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 text-editorial-dark/80 hover:text-editorial-dark uppercase font-medium flex items-center gap-1 hover:underline underline-offset-4"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Interactive System Architecture Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-editorial-card border border-editorial-border p-6 rounded-none shadow-md space-y-6 relative group">
              
              {/* Card Header & Live Controls */}
              <div className="flex items-center justify-between font-mono text-[11px] text-editorial-muted tracking-wider uppercase border-b border-editorial-border/60 pb-3">
                <div className="flex items-center gap-2 font-bold text-editorial-dark">
                  <Activity className="w-3.5 h-3.5 text-editorial-green animate-spin" />
                  <span>SYSTEM ARCHITECTURE / v1.0</span>
                </div>

                <button
                  onClick={() => setIsFlowing(!isFlowing)}
                  className={`px-2 py-0.5 border text-[10px] font-bold transition-colors flex items-center gap-1 ${
                    isFlowing
                      ? 'bg-editorial-green text-white border-editorial-green'
                      : 'bg-editorial-bg text-editorial-muted border-editorial-border'
                  }`}
                >
                  <Play className={`w-2.5 h-2.5 ${isFlowing ? 'animate-pulse' : ''}`} />
                  <span>{isFlowing ? 'FLOW ACTIVE' : 'PAUSED'}</span>
                </button>
              </div>

              {/* Interactive Architecture Diagram Canvas */}
              <div className="h-64 bg-editorial-bg border border-editorial-border/80 p-5 relative flex flex-col justify-between overflow-hidden bg-grid-pattern shadow-inner">
                
                {/* SVG Animated Connector Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <line x1="20%" y1="28%" x2="50%" y2="28%" stroke="#DFDCD5" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="28%" x2="80%" y2="28%" stroke="#DFDCD5" strokeWidth="1.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="28%" x2="50%" y2="72%" stroke="#DFDCD5" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {isFlowing && (
                    <>
                      <circle cx="35%" cy="28%" r="3" fill="#2A4D43">
                        <animate attributeName="cx" from="20%" to="50%" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="65%" cy="28%" r="3" fill="#2A4D43">
                        <animate attributeName="cx" from="50%" to="80%" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="50%" cy="50%" r="3" fill="#2A4D43">
                        <animate attributeName="cy" from="28%" to="72%" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                </svg>

                {/* Nodes Top Row */}
                <div className="flex items-center justify-between z-10 relative">
                  {/* INGEST Node */}
                  <button
                    onClick={() => setActiveNode(0)}
                    className={`px-3 py-2.5 border font-mono text-[10px] font-bold transition-all ${
                      activeNode === 0
                        ? 'border-editorial-dark bg-editorial-dark text-white shadow-md scale-105'
                        : 'border-editorial-dark/40 bg-editorial-card text-editorial-dark hover:border-editorial-dark'
                    }`}
                  >
                    INGEST
                  </button>

                  {/* ORCHESTRATE / RAG Node */}
                  <button
                    onClick={() => setActiveNode(1)}
                    className={`px-4 py-3 border font-mono text-xs font-bold transition-all ${
                      activeNode === 1
                        ? 'border-editorial-green bg-editorial-green text-white shadow-md scale-105 ring-2 ring-editorial-green/30'
                        : 'border-editorial-dark bg-editorial-bg text-editorial-dark hover:border-editorial-green'
                    }`}
                  >
                    ORCHESTRATE / RAG
                  </button>

                  {/* VECTOR DB Node */}
                  <button
                    onClick={() => setActiveNode(2)}
                    className={`px-3 py-2.5 border font-mono text-[10px] font-bold transition-all ${
                      activeNode === 2
                        ? 'border-editorial-dark bg-editorial-dark text-white shadow-md scale-105'
                        : 'border-editorial-dark/40 bg-editorial-card text-editorial-dark hover:border-editorial-dark'
                    }`}
                  >
                    <div>VECTOR DB</div>
                    <div className="text-[8px] opacity-70">RETRIEVAL</div>
                  </button>
                </div>

                {/* Nodes Bottom Row */}
                <div className="flex justify-center z-10 relative">
                  <button
                    onClick={() => setActiveNode(3)}
                    className={`px-4 py-2 border font-mono text-[10px] font-bold transition-all ${
                      activeNode === 3
                        ? 'border-editorial-green bg-editorial-green text-white shadow-md scale-105'
                        : 'border-editorial-dark/40 bg-editorial-card text-editorial-dark hover:border-editorial-dark'
                    }`}
                  >
                    AGENT WORKFLOW / NLP
                  </button>
                </div>

                {/* Node Detail Inspector Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="z-10 p-2.5 bg-editorial-dark text-white font-mono text-[10px] border border-editorial-dark space-y-0.5 shadow-sm"
                  >
                    <div className="flex justify-between items-center text-emerald-400 font-bold">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {architectureNodes[activeNode].label}
                      </span>
                      <span className="text-[8px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        {architectureNodes[activeNode].status}
                      </span>
                    </div>
                    <p className="text-white/80 font-sans text-[11px] leading-tight">
                      {architectureNodes[activeNode].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Verified Metric Counters Footer */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-editorial-border/60 font-mono">
                <div>
                  <p className="text-[10px] text-editorial-muted uppercase tracking-wider">PROBLEMS</p>
                  <p className="text-sm font-extrabold text-editorial-dark">400+ SOLVED</p>
                </div>
                <div>
                  <p className="text-[10px] text-editorial-muted uppercase tracking-wider">WORKFLOWS</p>
                  <p className="text-sm font-extrabold text-editorial-dark">AGENTIC RAG</p>
                </div>
                <div>
                  <p className="text-[10px] text-editorial-muted uppercase tracking-wider">STACK</p>
                  <p className="text-sm font-extrabold text-editorial-dark">FULL STACK</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Hero Status Sub-bar */}
        <div className="mt-16 pt-4 border-t border-editorial-border flex flex-wrap items-center justify-between font-mono text-xs text-editorial-muted tracking-wider">
          <div>{personalIdentity.location}</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-editorial-green animate-ping"></span>
            <span className="font-bold text-editorial-dark">OPEN TO AI ENGINEER & FULL-STACK ROLES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
