// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'LiranNapadenski',
  },
  base: '/portfolio/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual', 
      manual: {
        projects: [], // List your specific repository names here
      },
    },
  external: {
    header: 'Research & Engineering Projects',
    projects: [
      {
        title: 'SIMD-Optimized Cuckoo Trie Index',
        description: 'Optimized a high-performance in-memory index using AVX2 SIMD...',
        imageUrl: '...',
        link: '/Cuckoo_Trie_Optimization.pdf', // Points to public/Cuckoo_Trie_Optimization.pdf[cite: 4]
      },
      {
        title: 'Application-Level AI Intrusion Detection System',
        description: 'Developed deep learning models (Transformer and Bi-LSTM)...',
        imageUrl: '...',
        link: '/AI_Intrusion_Detection_Report.pdf', //[cite: 2]
      },
      // ... add the others similarly
    ],
  },
  seo: { 
    title: 'Portfolio of Liran Napadenski', 
    description: 'M.Sc. Computer Science Student at Tel Aviv University specializing in Machine Learning and Systems.', 
    imageURL: '' 
  },
  social: {
    linkedin: 'liran-napadenski',
    phone: '+972-52-2979723',
    email: 'liran.napadenski@gmail.com',
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'Python',
    'PyTorch',
    'C++',
    'AVX2/SIMD',
    'Java',
    'Spring Boot',
    'C#',
    'ASP.NET',
    'SQL',
    'React',
    'TypeScript',
    'Graph Neural Networks (GNN)',
    'Transformers/NLP',
    'Systems Programming',
    'Parallel Computing',
  ],
  experiences: [
    {
      company: 'Self-Employed',
      position: 'Private Tutor (CS, Math, Physics)',
      from: 'Ongoing',
      to: 'Present',
      companyLink: '',
    },
  ],
  educations: [
    {
      institution: 'Tel Aviv University',
      degree: 'M.Sc. in Computer Science (Focus: Machine Learning)',
      from: '2025',
      to: 'Expected 2027',
    },
    {
      institution: 'Tel Aviv University',
      degree: 'B.Sc. in Computer Science and Chemistry',
      from: '2022',
      to: '2025',
    },
    {
      institution: 'Odyssey – Academic Studies Program in the Sciences',
      degree: 'Advanced University Coursework',
      from: '2020',
      to: '2022',
    },
  ],
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'corporate', 'lofi', 'business', 'nord'],
  },
  enablePWA: true,
};

export default CONFIG;
