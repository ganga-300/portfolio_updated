export type ProjectCategory = 'All' | 'Full stack' | 'Generative AI' | 'Data visualization' | 'Frontend' | 'AI/ML';

export interface Project {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  githubUrl?: string; // Optional
  deployedUrl?: string; // Optional
  featured?: boolean;
  visualType?: 'contract-risk' | 'news-credibility' | 'studystuff' | 'brewcraft' | 'staywise' | 'traffic-accidents';
}

export interface Extracurricular {
  id: string;
  title: string;
  role: string;
  organization: string;
  date: string;
  description: string;
  category: 'Open Source' | 'Leadership' | 'Community';
  link?: string;
}

export interface SkillGroup {
  domain: string;
  skills: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  resume: string;
}

export interface GitHubConfig {
  username: string;
}

export interface LeetCodeConfig {
  username: string;
  solvedCount: number;
}

export interface PersonalIdentity {
  name: string;
  monogram: string;
  subtitle: string;
  positioningHeadline: string;
  positioningFull: string;
  bioQuote: string;
  aboutText: string[];
  principles: {
    number: string;
    title: string;
    description: string;
  }[];
  leetcodeSolved: number;
  location: string;
  timezone: string;
  availabilityStatus: string;
}
