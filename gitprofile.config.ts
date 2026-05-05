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
        projects: [], // Add your repo names here if you want them displayed
      },
    },
    external: {
      header: 'Research & Engineering Projects',
      projects: [
        {
          title: 'SIMD-Optimized Cuckoo Trie Index',
          description:
            'Optimized a high-performance in-memory index using AVX2 SIMD intrinsics[cite: 4]. Analyzed the "early-exit tax" and achieved up to 16.4% throughput gains in high-contention, multi-threaded workloads[cite: 4]. Developed using C++ with a focus on hardware-software interaction and memory-level parallelism[cite: 4].',
          imageUrl: 'https://img.freepik.com/free-vector/abstract-background-with-low-poly-design_1048-8478.jpg',
          link: '/Cuckoo_Trie_Optimization.pdf',
        },
        {
          title: 'Application-Level AI Intrusion Detection System',
          description:
            'Developed deep learning models (Transformer and Bi-LSTM) to detect web application attacks like SQL Injection and XSS. Achieved 99.93% accuracy using a character-level Transformer encoder to capture long-range contextual dependencies in malicious payloads[cite: 2].',
          imageUrl: 'https://img.freepik.com/free-vector/security-analyst-working-with-data-on-screens_107791-14028.jpg',
          link: '/AI_Intrusion_Detection_Report.pdf',
        },
        {
          title: 'Performance Stability of GNNs',
          description:
            'A comparative study of GNN architectures (GAT, GCN, GIN, GraphSAGE) evaluating ranking stability across varying label budgets. Identified critical performance flips in low-data regimes across datasets like Cora and ZINC[cite: 1].',
          imageUrl: 'https://img.freepik.com/free-vector/big-data-visualization-concept-illustration_114360-3942.jpg',
          link: '/GNN_Performance_Study.pdf',
        },
        {
          title: 'Implicit Arithmetic Inference in LLMs',
          description:
            'Proposed an evaluation framework to test Large Language Models on their ability to infer mathematical operations from natural language phrasing[cite: 3]. Explored the distinction between rote pattern recognition and logical inference in emergent LLM capabilities[cite: 3].',
          imageUrl: 'https://img.freepik.com/free-vector/brain-with-digital-circuit-elements_23-2148821033.jpg',
          link: '/NLP_Math_Inference_Proposal.pdf',
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
    fileUrl: '', // Add the link to your main CV PDF here
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
    'Graph Neural Networks',
    'Transformers/NLP',
    'Machine Learning',
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
      degree: 'Advanced Science and University Coursework',
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
