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
        projects: [], // Manual projects removed
      },
    },
    external: {
      header: 'Research & Engineering Projects',
      projects: [
        {
          title: 'Cuckoo Trie Vectorization',
          description:
            'Investigated the architectural performance tradeoffs of manual AVX2 SIMD vectorization on the search paths of a high-performance in-memory Cuckoo Trie. Designed 4-lane parallel header matching logic using Intel intrinsics to mitigate DRAM pointer-chasing bottlenecks and maximize instruction-level execution efficiency.\n\n**What I Learned:** Uncovered a core system design trade-off called the "early-exit tax." I discovered that while fine-grained intra-lookup vectorization degrades low-latency single-threaded performance due to setup overhead, it provides significant throughput acceleration (up to 16.4%) in heavily concurrent, multi-threaded environments where hardware streams overlap and amortize the execution penalty.',
          imageUrl: 'https://img.freepik.com/free-vector/abstract-background-with-low-poly-design_1048-8478.jpg',
          link: '/portfolio/Cuckoo_Trie_Optimization.pdf',
        },
        {
          title: 'Web Application Attack Detection',
          description:
            'Engineered deep learning sequence classifiers—specifically a character-level Transformer encoder and a Bidirectional LSTM architecture—to detect injection vulnerabilities, parameter tampering, and malicious strings in HTTP requests using the CSIC 2010 benchmark dataset.\n\n**What I Learned:** Achieved a peak classification accuracy of 99.93% with the attention mechanism, which naturally handles long-range contextual dependencies far better than traditional architectures. Through empirical mistake analysis, I learned how feature-space truncation (like short sequence length limits) can blind text models to critical payload signatures, emphasizing the importance of broader metadata context like headers and tracking cookies.',
          imageUrl: 'https://img.freepik.com/free-vector/security-analyst-working-with-data-on-screens_107791-14028.jpg',
          link: '/portfolio/AI_Intrusion_Detection_Report.pdf',
        },
        {
          title: 'GNN Performance Stability Study',
          description:
            'Conducted a rigorous empirical analysis comparing major graph frameworks (GAT, GCN, GIN, and GraphSAGE) to observe architecture rank stability as training label constraints vary systematically across node and graph property prediction tasks.\n\n**What I Learned:** Discovered that popular leaderboards mask a major deployment risk: "ranking flips." The model crowned best under full data availability can switch completely when data budgets drop to severe constraints (e.g., severe label scarcity on Cora, Citeseer, or ZINC datasets). I mastered sample complexity benchmarking and tracking alignment curves across diverse hyperparameter spaces.',
          imageUrl: 'https://img.freepik.com/free-vector/big-data-visualization-concept-illustration_114360-3942.jpg',
          link: '/portfolio/GNN_Performance_Study.pdf',
        },
        {
          title: 'Logic & Arithmetic Inference in LLMs',
          description:
            'Designed a programmatic evaluation benchmark to stress-test whether large language models capture structural linguistic and mathematical logic natively, or if they rely on local pattern overfitting within training corpora. Evaluated model performance across implicit vs. explicit phrasing contexts.\n\n**What I Learned:** Gained comprehensive experience with the operational boundaries of language models regarding logical inference. I observed how tokenization behaviors distort fundamental math arithmetic and analyzed why models handle explicit digit computation radically differently than fluid natural language reasoning problems.',
          imageUrl: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-elements_23-2148821033.jpg',
          link: '/portfolio/NLP_Math_Inference.pdf',
        },
        {
          title: 'Full-Stack Web Application',
          description:
            'Developed a full-stack application with a secure REST API backend and a responsive React/TypeScript frontend. \n\n**What I Learned:** Strengthened my ability to orchestrate end-to-end data flows, implement robust real-time input validation, and manage complex application states.',
          imageUrl: 'https://img.freepik.com/free-vector/web-development-programmer-engineering-and-coding-websites_107791-3863.jpg',
          link: 'https://github.com/LiranNapadenski/software-final',
        },
        {
          title: 'Stock REST API Engine',
          description:
            'Created a back-end engine for tracking and serving real-time financial metrics using structured database interactions. \n\n**What I Learned:** Focused on schema design, query optimization, and handling high-concurrency API requests efficiently.',
          imageUrl: 'https://img.freepik.com/free-vector/financial-growth-arrow-with-stock-market-investment-graph_1017-43405.jpg',
          link: 'https://github.com/LiranNapadenski/stock-api',
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
    phone: '',
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
