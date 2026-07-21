// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Steven-Furlong', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/Steven-Furlong/Steven-Furlong.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/Steven-Furlong/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['Steven-Furlong/my-project1']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'EMG Controlled Robotic Hand',
          description:
            'A robotic hand driven by electromyography (EMG) signals, using real-time signal processing to translate muscle activity into precise finger and grip movement.',
          imageUrl:
            'https://cdn.prod.website-files.com/6a1b75db60ea5456e047f315/6a1b7ce5b5cdd3b7b527db41_IMG_1214.jpg',
          link: 'https://github.com/Steven-Furlong',
        },
        {
          title: 'Bus Simulation Side Panel — City of Seattle',
          description:
            'A 1:1 custom-built transit simulation control panel matching exact real-world specifications, built for driver training with the City of Seattle.',
          imageUrl:
            'https://cdn.prod.website-files.com/6a1b75db60ea5456e047f315/6a1b77c88def5a8ce067fb5c_6a1a299650966f1b318f7322_f1f8fef7034026b1ab41132201289f29_Screenshot_1.jpg',
          link: 'https://github.com/Steven-Furlong',
        },
        {
          title: 'Wireless Hot-Swap Push Button',
          description:
            'A hot-swappable button module with 2.4GHz wireless connectivity and wireless charging, engineered for reliable low-latency input.',
          imageUrl:
            'https://cdn.prod.website-files.com/6a1b75db60ea5456e047f315/6a1b867755af9680ca48beec_image.png',
          link: 'https://github.com/Steven-Furlong',
        },
        {
          title: 'EMU Flight Display — Indian Flight School',
          description:
            'A Raspberry Pi-powered instrument display replicating real aircraft instrumentation, built for pilot training at an Indian flight school.',
          imageUrl:
            'https://cdn.prod.website-files.com/6a1b75db60ea5456e047f315/6a1b86a5b5992c08653a9bbc_EMU_ANGLE_FIVE.png',
          link: 'https://github.com/Steven-Furlong',
        },
      ],
    },
  },
  seo: {
    title: 'Steven Furlong | Embedded Systems Founder & Firmware Engineer',
    description:
      'Steven Furlong is a BCIS graduate and founder of Syntaxis, an embedded systems startup building custom HID peripherals with firmware engineering, circuit design, and hardware integration.',
    imageURL: '',
  },
  social: {
    linkedin: 'stevendominic-furlong',
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
    phone: '+1 604-791-1434',
    email: 'sdfurlong02@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Embedded Systems',
    'Firmware Engineering',
    'Custom Circuit Design',
    'PCB Design',
    'C/C++',
    'Raspberry Pi',
    'RP2040',
    'Real-Time Signal Processing',
    'Hardware Integration',
    'Bioelectrical Sensing',
    '2.4GHz Wireless Connectivity',
    'Cybersecurity Best Practices',
  ],
  experiences: [
    {
      company: 'Syntaxis',
      position: 'Founder',
      from: '2024',
      to: 'Present',
      companyLink: 'https://github.com/Steven-Furlong',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'University of the Fraser Valley',
      degree: 'Bachelor of Computer Information Systems (BCIS)',
      from: '',
      to: 'December 2025',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon',

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
      'procyon',
      'nord',
      'dim',
      'black',
      'luxury',
      'silk',
      'business',
      'forest',
      'dracula',
      'abyss',
      'light',
      'dark',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Built by Steven Furlong with <a
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
