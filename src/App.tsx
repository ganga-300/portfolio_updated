import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { GitHubProof } from './components/GitHubProof';
import { TechStack } from './components/TechStack';
import { BeyondRepo } from './components/BeyondRepo';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-editorial-bg text-editorial-dark font-sans selection:bg-editorial-green selection:text-white">
      {/* Custom Cursor (Fine pointers) */}
      <CustomCursor />

      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <GitHubProof />
        <TechStack />
        <BeyondRepo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
