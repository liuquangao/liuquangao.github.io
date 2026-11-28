export interface Project {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  status: 'Active' | 'Maintained' | 'Archived';
  tags: string[];
  links: {
    github?: string;
    docs?: string;
    demo?: string;
    paper?: string;
  };
  metrics?: string;
}

export const projects: Project[] = [
  {
    title: 'ActiveReID',
    subtitle: 'Target-Conditioned Active Viewpoint Optimization for Mobile Robots',
    description:
      'Trained on 28,765 3DGS RGB-D frames in NVIDIA Isaac Sim, ActiveReID transfers zero-shot to a Unitree Go2 quadruped—raising Rank-1 ReID accuracy from 31.9% to 84.7% across 144 real-world runs.',
    year: '2025 – Present',
    status: 'Active',
    tags: ['3DGS', 'Active Vision', 'Sim2Real', 'ROS 2', 'Unitree Go2'],
    metrics: 'IEEE RA-L 2026 · +52.8 pp Real-World Rank-1',
    links: {
      demo: '/activereid',
      github: 'https://github.com/liuquangao/ActiveReID',
      paper: '/publications#liu2026activereid',
    },
  },
  {
    title: 'MSTVI',
    subtitle: 'Multi-Scale Time-Variable Interaction for Multivariate Time Series Forecasting',
    description:
      'Official PyTorch implementation of MSTVI (Knowledge-Based Systems 2025), jointly modeling multi-scale temporal variations and cross-variable interactions across standard forecasting benchmarks.',
    year: '2024 – 2025',
    status: 'Maintained',
    tags: ['PyTorch', 'Time Series', 'Multi-Scale', 'Deep Learning'],
    metrics: 'KBS 2025 · Official Code',
    links: {
      github: 'https://github.com/liuquangao/MSTVI',
      paper: '/publications#liu2025mstvi',
    },
  },
  {
    title: 'FAITH',
    subtitle: 'Frequency-domain Attention In Two Horizons for Time Series Forecasting',
    description:
      'Linear-complexity frequency-domain attention framework (Knowledge-Based Systems 2025) combining sequence-adaptive decomposition with frequency-channel and frequency-temporal feature extraction.',
    year: '2024 – 2025',
    status: 'Maintained',
    tags: ['PyTorch', 'Frequency Domain', 'Time Series', 'FFT'],
    metrics: 'KBS 2025 · Open Source',
    links: {
      github: 'https://github.com/LRQ577/FAITH',
      paper: '/publications#li2025faith',
    },
  },
  {
    title: 'WindowMixer & FT-TabPFN',
    subtitle: 'All-MLP Temporal Modeling & Feature-Tokenized Tabular Classification',
    description:
      'Research implementations exploring intra-/inter-window mixing for efficient time-series forecasting and feature tokenization with fine-tuning for prior-data fitted tabular networks.',
    year: '2024',
    status: 'Maintained',
    tags: ['PyTorch', 'Time Series', 'Tabular ML', 'All-MLP'],
    metrics: 'arXiv 2024',
    links: {
      github: 'https://github.com/liuquangao',
      paper: '/publications#liu2024windowmixer',
    },
  },
];
