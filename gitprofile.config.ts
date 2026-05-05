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
        projects: [], 
      },
    },
    external: {
      header: 'Research & Engineering Projects',
      projects: [
        {
          title: 'Cuckoo Trie Vectorization',
          description:
            'Investigated the impact of SIMD vectorization on Cuckoo Trie search paths. Achieved up to 16.4% throughput gains in multi-threaded workloads while analyzing the "early-exit tax" in scalar vs. vector execution.',
          imageUrl: 'https://img.freepik.com/free-vector/abstract-background-with-low-poly-design_1048-8478.jpg',
          link: 'Cuckoo_Trie_Optimization.pdf', // Relative link
        },
        {
          title: 'Web Application Attack Detection',
          description:
            'Developed character-level Transformer and Bi-LSTM models to detect SQL injection and XSS attacks with 99.93% accuracy. Evaluated model robustness against long-range dependencies in HTTP request bodies.',
          imageUrl: 'https://img.freepik.com/free-vector/security-analyst-working-with-data-on-screens_107791-14028.jpg',
          link: 'AI_Intrusion_Detection_Report.pdf', // Relative link
        },
        {
          title: 'GNN Performance Stability Study',
          description:
            'Analyzed the consistency of GNN architecture rankings under varying label budgets. Identified "ranking flips" across Cora, Citeseer, and ZINC datasets when training data is limited.',
          imageUrl: 'https://img.freepik.com/free-vector/big-data-visualization-concept-illustration_114360-3942.jpg',
          link: 'GNN_Performance_Study.pdf', // Relative link
        },
        {
          title: 'Logic & Arithmetic Inference in LLMs',
          description:
            'Evaluated emergent logical reasoning in LLMs by testing their ability to infer mathematical operations from natural language prompts, distinguishing between pattern recognition and true inference.',
          imageUrl: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-elements_23-2148821033.jpg',
          link: 'NLP_Math_Inference_Proposal.pdf', // Relative link
        },
      ],
    },
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
    fileUrl: '', // You can also put your CV in /public and link it here as 'My_CV.pdf'
  },
  skills: [
    'Python', 'PyTorch', 'C++', 'AVX2/SIMD', 'Java', 'Spring Boot', 'C#', 'ASP.NET', 'SQL', 'React', 'TypeScript', 'Graph Neural Networks', 'Transformers/NLP', 'Machine Learning',
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
