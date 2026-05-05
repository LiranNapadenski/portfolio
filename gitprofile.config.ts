// gitprofile.config.ts



const CONFIG = {

  github: {

    username: 'LiranNapadenski', // Your GitHub org/user name. (This is the only required config)

  },

  /**

   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.

   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,

   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.

   */

  base: '/portfolio/',

  projects: {

    github: {

      display: true, // Display GitHub projects?

      header: 'Github Projects',

      mode: 'manual', // Mode can be: 'automatic' or 'manual'

      automatic: {

        sortBy: 'stars', // Sort projects by 'stars' or 'updated'

        limit: 8, // How many projects to display.

        exclude: {

          forks: false, // Forked projects will not be displayed if set to true.

          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']

        },

      },

      manual: {

        // Properties for manually specifying projects

        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']

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

  seo: { title: 'Portfolio of Ariful Alam', description: '', imageURL: '' },

  social: {

    linkedin: 'https://www.linkedin.com/in/liran-napadenski/',

    phone: '',

    email: '',

  },

  resume: {

    fileUrl:

      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.

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

  googleAnalytics: {

    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX

  },

  // Track visitor interaction and behavior. https://www.hotjar.com

  hotjar: { id: '', snippetVersion: 6 },

  themeConfig: {

    defaultTheme: 'lofi',



    // Hides the switch in the navbar

    // Useful if you want to support a single color mode

    disableSwitch: false,



    // Should use the prefers-color-scheme media-query,

    // using user system preferences, instead of the hardcoded defaultTheme

    respectPrefersColorScheme: false,



    // Display the ring in Profile picture

    displayAvatarRing: true,



    // Available themes. To remove any theme, exclude from here.

    themes: [

      'light',

      'dark',

      'cupcake',

      'bumblebee',

      'emerald',

      'corporate',

      'synthwave',

      'retro',

      'cyberpunk',

      'valentine',

      'halloween',

      'garden',

      'forest',

      'aqua',

      'lofi',

      'pastel',

      'fantasy',

      'wireframe',

      'black',

      'luxury',

      'dracula',

      'cmyk',

      'autumn',

      'business',

      'acid',

      'lemonade',

      'night',

      'coffee',

      'winter',

      'dim',

      'nord',

      'sunset',

      'caramellatte',

      'abyss',

      'silk',

      'procyon',

    ],

  },



  // Optional Footer. Supports plain text or HTML.

  footer: `Made with <a 

      class="text-primary" href="https://github.com/arifszn/gitprofile"

      target="_blank"

      rel="noreferrer"

    >GitProfile</a> and ❤️`,



  enablePWA: true,

};



export default CONFIG;
