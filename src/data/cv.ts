export interface CVEntry {
  period: string;
  title: string;
  organization: string;
  location?: string;
  details?: string[];
}

export const cvData = {
  lastUpdated: 'November 2026',
  // Place your real CV PDF at `public/cv.pdf` to enable direct download
  pdfUrl: '/cv.pdf',

  education: [
    {
      period: '2025 – Present',
      title: 'Ph.D. in Computer Science (Robotics & Embodied AI)',
      organization: 'University of Exeter',
      location: 'Exeter, United Kingdom',
      details: [
        'Fusion Intelligence Laboratory (FIL), Department of Computer Science · Advisor: Dr. Xingchen Zhang',
        'Research Focus: Robotic manipulation, active perception, mobile navigation, VLA models, and Sim2Real transfer',
      ],
    },
    {
      period: '2022 – 2025',
      title: 'M.S.',
      organization: 'Shenyang Institute of Automation, Chinese Academy of Sciences (SIA, CAS)',
      location: 'Shenyang, China',
      details: [
        'University of Chinese Academy of Sciences (UCAS)',
        'Research Focus: Multi-scale and frequency-domain deep learning for multivariate time-series forecasting and tabular ML',
      ],
    },
    {
      period: '2018 – 2022',
      title: 'B.Eng. in Mechanical Design, Manufacturing and Automation',
      organization: 'Southwest Jiaotong University (SWJTU)',
      location: 'Chengdu, China',
      details: [
        'School of Mechanical Engineering — focused on mechanical design, kinematics, mechatronics, and automation systems',
      ],
    },
  ] as CVEntry[],

  experience: [
    {
      period: '2025 – Present',
      title: 'Ph.D. Researcher — Robotics & Embodied AI',
      organization: 'Fusion Intelligence Laboratory (FIL), University of Exeter',
      location: 'Exeter, United Kingdom',
      details: [
        'Developing active perception, robotic manipulation, and navigation algorithms bridging simulation and real-world robots.',
        'First-authored ActiveReID (IEEE RA-L 2026) on target-conditioned active viewpoint optimization for mobile robots.',
      ],
    },
    {
      period: '2022 – 2025',
      title: 'Graduate Researcher — Time Series & Machine Learning',
      organization: 'Shenyang Institute of Automation, Chinese Academy of Sciences (SIA, CAS)',
      location: 'Shenyang, China',
      details: [
        'First-authored MSTVI (Knowledge-Based Systems 2025), WindowMixer (arXiv 2024), and FT-TabPFN (arXiv 2024).',
        'Co-authored FAITH (Knowledge-Based Systems 2025) and TAPO (AAAI 2026) on spectral forecasting and policy optimization.',
      ],
    },
  ] as CVEntry[],

  awards: [
    {
      period: '2026',
      title: 'Accepted Publications at IEEE RA-L 2026 & AAAI 2026',
      organization: 'IEEE Robotics and Automation Letters / AAAI',
    },
    {
      period: '2025',
      title: 'Accepted Publications in Knowledge-Based Systems (MSTVI & FAITH)',
      organization: 'Elsevier Knowledge-Based Systems',
    },
  ] as CVEntry[],

  teachingAndService: [
    {
      period: '2025 – Present',
      title: 'Research Member',
      organization: 'Fusion Intelligence Laboratory (FIL), University of Exeter',
    },
    {
      period: '2024 – Present',
      title: 'Open-Source Maintainer',
      organization: 'MSTVI & Time-Series / Robotics Research Repositories on GitHub',
    },
  ] as CVEntry[],

  skills: [
    {
      category: 'Robotics & Simulation',
      items: ['Isaac Lab / Isaac Sim', 'MuJoCo', 'ROS 2', 'Active Perception', 'Manipulation', 'Navigation', 'Sim2Real'],
    },
    {
      category: 'AI & Sequence Modeling',
      items: ['PyTorch', 'VLA Models', 'Policy Optimization', 'Time-Series Forecasting', 'Frequency / Spectral ML', 'Computer Vision'],
    },
    {
      category: 'Engineering & Hardware',
      items: ['Python', 'C++', 'Linux', 'Git', 'LaTeX', 'Mechanical Design'],
    },
  ],
};
