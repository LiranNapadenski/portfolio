// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'LiranNapadenski',
  },
  base: 'portfolio/',
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
            'Investigated SIMD vectorization on Cuckoo Trie search paths. Achieved up to 16.4% throughput gains in multi-threaded workloads while analyzing the early-exit tax.',
          imageUrl: 'https://img.freepik.com/free-vector/abstract-background-with-low-poly-design_1048-8478.jpg',
          link: '/portfolio/Cuckoo_Trie_Optimization.pdf',
        },
        {
          title: 'Web Application Attack Detection',
          description:
            'Developed Transformer and Bi-LSTM models to detect SQL injection and XSS attacks with 99.93% accuracy using character-level encoding.',
          imageUrl: 'https://img.freepik.com/free-vector/security-analyst-working-with-data-on-screens_107791-14028.jpg',
          link: '/portfolio/AI_Intrusion_Detection_Report.pdf',
        },
        {
          title: 'GNN Performance Stability Study',
          description:
            'A comparative study of GNN architectures (GAT, GCN, GIN, GraphSAGE) evaluating ranking stability across varying label budgets.',
          imageUrl: 'https://img.freepik.com/free-vector/big-data-visualization-concept-illustration_114360-3942.jpg',
          link: '/portfolio/GNN_Performance_Study.pdf',
        },
        {
          title: 'Logic & Arithmetic Inference in LLMs',
          description:
            'Evaluated the emergent logical reasoning of LLMs by investigating their ability to infer mathematical operations from natural language prompts. Analyzed model limitations across dimensions such as number ranges, arithmetic operations (addition, subtraction, multiplication, division), and implicit vs. explicit phrasing.',
          imageUrl: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-elements_23-2148821033.jpg',
          link: '/portfolio/NLP_Math_Inference.pdf',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Liran Napadenski', description: 'M.Sc. Student at TAU', imageURL: '' },
  social: {
    linkedin: 'liran-napadenski',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
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
  ],
  experiences: [
    {
      company: 'Self-Employed',
      position: 'Private Tutor',
      from: 'Ongoing',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Tel Aviv University',
      degree: 'M.Sc. in Computer Science',
      from: '2025',
      to: '2027',
    },
    {
      institution: 'Tel Aviv University',
      degree: 'B.Sc. in Computer Science and Chemistry',
      from: '2022',
      to: '2025',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'lofi',
      'business',
      'nord',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
