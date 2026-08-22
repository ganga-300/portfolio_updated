import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ProjectCategory, Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { 
  ContractRiskVisual, 
  NewsCredibilityVisual, 
  StudyStuffVisual, 
  BrewcraftVisual, 
  StayWiseVisual, 
  TrafficAccidentsVisual 
} from './ProjectCardVisuals';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Generative AI', 'Full stack', 'Frontend', 'Data visualization'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const featuredProject = filteredProjects.find((p) => p.featured) || filteredProjects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  const renderVisual = (visualType?: string) => {
    switch (visualType) {
      case 'contract-risk':
        return <ContractRiskVisual />;
      case 'news-credibility':
        return <NewsCredibilityVisual />;
      case 'studystuff':
        return <StudyStuffVisual />;
      case 'brewcraft':
        return <BrewcraftVisual />;
      case 'staywise':
        return <StayWiseVisual />;
      case 'traffic-accidents':
        return <TrafficAccidentsVisual />;
      default:
        return <ContractRiskVisual />;
    }
  };

  return (
    <section id="work" className="py-20 border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-editorial-muted tracking-wider uppercase mb-3">
              03 / SELECTED WORK
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-editorial-dark tracking-tight font-display">
              Real-World Projects
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider">
            {categories.map((cat) => {
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`py-1.5 transition-colors uppercase relative font-medium ${
                    isActive
                      ? 'text-editorial-dark font-bold'
                      : 'text-editorial-muted hover:text-editorial-dark'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <motion.span 
                      layoutId="categoryUnderline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-editorial-dark" 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="project-card bg-editorial-card border border-editorial-border p-6 sm:p-8 md:p-10 rounded-none relative group hover:border-editorial-dark/40 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase">
                  <span className="px-2.5 py-1 bg-editorial-dark text-white font-bold tracking-widest">
                    {featuredProject.category}
                  </span>
                  {featuredProject.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-editorial-bg border border-editorial-border text-editorial-dark/80 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-editorial-dark tracking-tight font-display">
                    {featuredProject.name} {featuredProject.tagline && <span className="font-normal text-editorial-muted">/ {featuredProject.tagline}</span>}
                  </h3>
                </div>

                <p className="text-base text-editorial-muted leading-relaxed font-sans">
                  {featuredProject.description}
                </p>

                {/* Conditional Action Buttons */}
                <div className="flex items-center gap-6 font-mono text-xs tracking-wider pt-2">
                  {featuredProject.deployedUrl && (
                    <a
                      href={featuredProject.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-editorial-dark text-white hover:bg-editorial-green transition-colors uppercase font-bold flex items-center gap-1.5"
                    >
                      <span>LIVE DEMO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-editorial-dark/90 hover:text-editorial-dark uppercase font-bold flex items-center gap-1 hover:underline underline-offset-4"
                    >
                      <span>GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Visual Window */}
              <div className="lg:col-span-6">
                {renderVisual(featuredProject.visualType)}
              </div>

            </div>
          </motion.div>
        )}

        {/* Project Grid Layout */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridProjects.map((project: Project, idx: number) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="project-card bg-editorial-card border border-editorial-border p-6 sm:p-8 rounded-none space-y-6 flex flex-col justify-between hover:border-editorial-dark/40 transition-colors"
              >
                <div>
                  <div className="font-mono text-[10px] text-editorial-muted tracking-widest uppercase mb-4 flex items-center justify-between">
                    <span>0{idx + 2} / {project.category}</span>
                    <span className="font-bold text-editorial-dark">{project.name}</span>
                  </div>
                  
                  {renderVisual(project.visualType)}
                </div>

                <div className="space-y-4 pt-4 border-t border-editorial-border/60">
                  <h3 className="text-xl font-bold text-editorial-dark font-display">
                    {project.name} {project.tagline && <span className="font-normal text-editorial-muted">— {project.tagline}</span>}
                  </h3>

                  <p className="text-sm text-editorial-muted leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 border border-editorial-border bg-editorial-bg text-editorial-dark/70 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Conditional Action Buttons */}
                  <div className="flex items-center gap-6 font-mono text-xs tracking-wider pt-2">
                    {project.deployedUrl && (
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-editorial-dark text-white hover:bg-editorial-green transition-colors uppercase font-bold flex items-center gap-1 text-[11px]"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-editorial-dark/80 hover:text-editorial-dark uppercase font-bold flex items-center gap-1 hover:underline underline-offset-4"
                      >
                        <span>GITHUB</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
