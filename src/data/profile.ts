export interface SocialLink {
  label: string;
  href: string;
  icon: 'email' | 'scholar' | 'orcid' | 'github' | 'twitter' | 'linkedin' | 'rss';
}

export interface NewsItem {
  date: string; // e.g., "Nov 2026"
  content: string; // Supports simple HTML for inline links/emphasis
}

export const profile = {
  name: 'Quangao Liu',
  shortName: 'Q. Liu',
  role: 'Ph.D. Student in Robotics & Embodied AI',
  affiliation: 'Department of Computer Science, University of Exeter',
  lab: 'Fusion Intelligence Laboratory (FIL)',
  advisor: {
    name: 'Dr. Xingchen Zhang',
    url: 'https://experts.exeter.ac.uk',
  },
  email: 'ql337@exeter.ac.uk',
  office: 'Exeter, United Kingdom',
  avatar: '/images/avatar.svg',
  avatarAlt: 'Portrait of Quangao Liu',
  siteTitle: 'Quangao Liu — Robotics, Embodied AI & Time Series',
  siteDescription:
    'Ph.D. Student at the Fusion Intelligence Laboratory, University of Exeter, researching robotic manipulation, active perception, navigation, and Sim2Real transfer.',

  // Displayed on the Home page Hero section (supports inline HTML)
  bio: [
    'I am a Ph.D. student in the Department of Computer Science at the <strong>University of Exeter</strong>, working in the <strong>Fusion Intelligence Laboratory (FIL)</strong> advised by Dr. Xingchen Zhang. My research focuses on <strong>robotic manipulation</strong>, <strong>active perception &amp; navigation</strong>, <strong>Vision-Language-Action (VLA) models</strong>, and <strong>Sim2Real transfer</strong>.',
    'Specifically, I develop learning-based perception and control methods that bridge physics simulation and physical robots for dexterous manipulation and mobile robot autonomy in unstructured environments.',
    'Previously, I received my M.S. from the <strong>Shenyang Institute of Automation, Chinese Academy of Sciences (SIA, CAS)</strong> (2022–2025), where I worked on multi-scale and frequency-domain deep learning for multivariate time-series forecasting, and my B.Eng. in Mechanical Design, Manufacturing and Automation from <strong>Southwest Jiaotong University (SWJTU)</strong> (2018–2022).',
  ],

  researchInterests: [
    'Robotic Manipulation & Visuomotor Control',
    'Sim2Real Transfer & Policy Optimization',
    'Active Perception & Mobile Robot Navigation',
    'Multivariate Time-Series Forecasting & Sequence Modeling',
  ],

  socials: [
    { label: 'Email', href: 'mailto:ql337@exeter.ac.uk', icon: 'email' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?hl=en&user=wM_i-3MAAAAJ',
      icon: 'scholar',
    },
    { label: 'GitHub', href: 'https://github.com/liuquangao', icon: 'github' },
  ] as SocialLink[],

  news: [
    {
      date: '2026',
      content:
        'Our paper <strong>ActiveReID: Target-Conditioned Active Viewpoint Optimization for Mobile Robot Person Re-Identification</strong> has been accepted to <em>IEEE Robotics and Automation Letters (IEEE RA-L)</em>!',
    },
    {
      date: '2026',
      content:
        'Our collaborative paper <strong>TAPO: Dynamic Teacher and Perturbed Answer Injection for Policy Optimization</strong> has been accepted to <em>AAAI 2026</em>!',
    },
    {
      date: '2025',
      content:
        'Joined the <strong>Fusion Intelligence Laboratory (FIL)</strong>, Department of Computer Science, University of Exeter as a Ph.D. student.',
    },
    {
      date: '2025',
      content:
        '<strong>MSTVI</strong> and <strong>FAITH</strong> for multivariate time-series forecasting have been published in <em>Knowledge-Based Systems</em>. Official code is available on <a class="academic-link" href="https://github.com/liuquangao/MSTVI" target="_blank" rel="noopener noreferrer">GitHub</a>.',
    },
    {
      date: 'Jun 2024',
      content:
        'Preprints for <strong>WindowMixer</strong> and <strong>FT-TabPFN</strong> are available on arXiv.',
    },
  ] as NewsItem[],
};
