import React from 'react';
import { motion } from 'framer-motion';
import { extracurricularsData } from '../data/portfolioData';
import { ArrowUpRight, Award, GitPullRequest, Users, Trophy } from 'lucide-react';

export const BeyondRepo: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Open Source':
        return <GitPullRequest className="w-4 h-4 text-editorial-green" />;
      case 'Hackathon':
        return <Trophy className="w-4 h-4 text-editorial-green" />;
      case 'Leadership':
        return <Award className="w-4 h-4 text-editorial-green" />;
      case 'Community':
      default:
        return <Users className="w-4 h-4 text-editorial-green" />;
    }
  };

  return (
    <section id="journey" className="py-20 border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div>
          <div className="font-mono text-xs text-editorial-muted tracking-wider uppercase mb-3">
            06 / BEYOND THE REPO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-editorial-dark tracking-tight font-display">
            Leadership, Open Source & Extracurriculars
          </h2>
        </div>

        {/* List of Activities Timeline */}
        <div className="space-y-6">
          {extracurricularsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-editorial-card border border-editorial-border p-6 sm:p-8 rounded-none flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-editorial-dark/40 transition-colors"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex items-center gap-3 font-mono text-xs text-editorial-muted uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 font-bold text-editorial-dark">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-editorial-dark font-display">
                  {item.title} <span className="font-normal text-editorial-muted">— {item.role} @ {item.organization}</span>
                </h3>

                <p className="text-sm text-editorial-muted leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <div className="self-start md:self-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-editorial-dark text-editorial-dark hover:bg-editorial-dark hover:text-white transition-colors font-mono text-xs uppercase font-bold"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
