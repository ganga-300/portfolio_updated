import { PersonalIdentity, Project, Extracurricular, SkillGroup, SocialLinks, GitHubConfig, LeetCodeConfig } from '../types';

export const personalIdentity: PersonalIdentity = {
  name: "Ganga Raghuwanshi",
  monogram: "GANGA RAGHUWANSHI",
  subtitle: "AI/ML ENTHUSIAST · FULL-STACK DEVELOPER · 2026",
  positioningHeadline: "I build intelligent, impactful products.",
  positioningFull: "AI/ML enthusiast and full-stack developer with hands-on experience building end-to-end Generative AI applications for real-world problems. Experienced in designing LLM-powered systems using RAG pipelines, agentic workflows, and vector databases, with a strong foundation in Python, NLP, and modern web development. Solved 400+ LeetCode problems. Actively seeking AI Engineer or Full-Stack roles to build intelligent, impactful products.",
  bioQuote: "Complex systems should be robust enough to be invisible, yet transparent enough to be understood.",
  aboutText: [
    "AI/ML enthusiast and full-stack developer with hands-on experience building end-to-end Generative AI applications for real-world problems.",
    "Experienced in designing LLM-powered systems using RAG pipelines, agentic workflows, and vector databases, with a strong foundation in Python, NLP, and modern web development.",
    "Solved 400+ LeetCode problems, reflecting a strong problem-solving discipline. Actively seeking AI Engineer or Full-Stack roles to build intelligent, impactful products."
  ],
  principles: [
    {
      number: "01",
      title: "Make complexity legible",
      description: "Systems should explain themselves through transparent interfaces and deterministic workflow traces."
    },
    {
      number: "02",
      title: "Ship with evidence",
      description: "Driven by rigorous problem-solving discipline (400+ LeetCode problems solved) and empirical validation."
    },
    {
      number: "03",
      title: "Build end-to-end",
      description: "From vector embeddings and LLM orchestration down to clean, responsive user interfaces."
    }
  ],
  leetcodeSolved: 400,
  location: "BENGALURU / IST",
  timezone: "IST (UTC+5:30)",
  availabilityStatus: "OPEN TO AI/ML & FULL-STACK ROLES"
};

export const githubConfig: GitHubConfig = {
  username: "ganga-300"
};

export const leetcodeConfig: LeetCodeConfig = {
  username: "ganga-300",
  solvedCount: 400
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/ganga-300",
  linkedin: "https://www.linkedin.com/in/ganga-raghuwanshi-910a40323",
  leetcode: "https://leetcode.com/u/ganga-300/",
  email: "mailto:raghuwanshiganga08@gmail.com",
  resume: "https://drive.google.com/file/d/19XSw1SbHxUzsyfvmwF_4uuEklb1z3bCG/view?usp=drive_link"
};

export const projectsData: Project[] = [
  {
    id: "contract-risk-analyzer",
    name: "Contract Risk Analyzer",
    tagline: "Legal Clause Analysis & Liability Risk Evaluation",
    description: "AI-powered legal contract analysis system evaluating commercial agreements, extracting high-risk liability clauses, and providing automated summary reports via RAG.",
    category: "Generative AI",
    technologies: ["Python", "Streamlit", "LangChain", "RAG", "LLM", "NLP"],
    githubUrl: "https://github.com/w41k3r77020-code/Contract_Risk_Analysis",
    deployedUrl: "https://contractriskanalysis-l3qvfbvsojfij8hek3khzk.streamlit.app/",
    featured: true,
    visualType: "contract-risk"
  },
  {
    id: "news-credibility-analyzer",
    name: "News Credibility Analyzer",
    tagline: "NLP Authenticity & Bias Detection Engine",
    description: "Generative AI and NLP platform evaluating news article authenticity, detecting bias indicators, scoring source credibility, and visualizing intent signals.",
    category: "Generative AI",
    technologies: ["Next.js", "Python", "FastAPI", "NLP", "OpenAI"],
    githubUrl: "https://github.com/ganga-300/News_credibility_Analyzer",
    deployedUrl: "https://news-credibility-analyzer.vercel.app/",
    featured: true,
    visualType: "news-credibility"
  },
  {
    id: "studystuff-ecommerce",
    name: "StudyStuff",
    tagline: "Educational E-Commerce Web Platform",
    description: "Full-stack e-commerce platform designed for educational materials, featuring secure backend API routes, inventory state management, and user authentication.",
    category: "Full stack",
    technologies: ["Node.js", "Express", "MongoDB", "React", "REST API"],
    githubUrl: "https://github.com/ganga-300/E-commerce-platform-BE",
    deployedUrl: "https://e-commerce-platform-be-gray.vercel.app/",
    featured: false,
    visualType: "studystuff"
  },
  {
    id: "brewcraft",
    name: "Brewcraft",
    tagline: "Artisan Coffee Brewing Web Experience",
    description: "Modern, high-performance responsive web interface for craft coffee brewing, focusing on micro-interactions, editorial typography, and fluid design.",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    deployedUrl: "https://brewcraft.netlify.app/",
    featured: false,
    visualType: "brewcraft"
  },
  {
    id: "staywise-hotel-analytics",
    name: "StayWise",
    tagline: "Hotel Booking Cancellation Analytics",
    description: "What are the primary drivers of hotel booking cancellations, and how can pricing and channel strategies be optimized to maximize revenue?",
    category: "Data visualization",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analytics"],
    githubUrl: "https://github.com/ganga-300/SectionB_G-1_StayWise",
    featured: false,
    visualType: "staywise"
  },
  {
    id: "road-traffic-accidents",
    name: "Road Traffic Accidents",
    tagline: "Hotspot & Risk Pattern Analytics",
    description: "Analyzing traffic accident data to identify risk factors, geographic hotspots, and temporal patterns to inform road safety interventions.",
    category: "Data visualization",
    technologies: ["Python", "Data Analysis", "Statistics", "Data Visualization"],
    githubUrl: "https://github.com/ka-ori/Road_Traffic_Accidents",
    featured: false,
    visualType: "traffic-accidents"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    domain: "Generative AI & ML",
    skills: ["RAG Pipelines", "Agentic Workflows", "Vector Databases", "LLM Systems", "LangChain", "NLP", "Python", "Prompt Engineering"]
  },
  {
    domain: "Full-Stack Development",
    skills: ["Python (FastAPI, Flask)", "JavaScript & TypeScript", "React.js & Next.js", "Node.js & Express", "Tailwind CSS", "REST APIs"]
  },
  {
    domain: "Core Engineering & Databases",
    skills: ["Vector Indexing", "PostgreSQL & MongoDB", "Redis Caching", "Git & GitHub", "Docker", "Data Structures & Algorithms"]
  },
  {
    domain: "Problem Solving Discipline",
    skills: ["400+ LeetCode Problems Solved", "Algorithmic Efficiency", "System Design Basics", "Clean Code Architecture"]
  }
];

export const extracurricularsData: Extracurricular[] = [
  {
    id: "open-source-contributions",
    title: "Open Source Contributor",
    role: "Community Developer",
    organization: "GitHub Open Source Projects",
    date: "2024 — PRESENT",
    description: "Contributing bug fixes, feature enhancements, and code improvements to open source repositories.",
    category: "Open Source",
    link: "https://github.com/ganga-300"
  },
  {
    id: "leetcode-discipline",
    title: "Algorithmic Problem Solving",
    role: "400+ Solved",
    organization: "LeetCode Platform",
    date: "2023 — PRESENT",
    description: "Solving 400+ algorithmic challenges spanning dynamic programming, graphs, trees, arrays, and string manipulation.",
    category: "Community",
    link: "https://leetcode.com/u/ganga-300/"
  }
];
