export interface Publication {
  id: string;
  title: string;
  authors: string[];
  /** Author name substring to highlight in bold */
  highlightAuthor?: string;
  venue: string;
  venueShort: string;
  year: number;
  type: 'journal' | 'preprint' | 'conference';
  selected?: boolean;
  award?: string;
  tags: string[];
  /** Optional teaser image under /public/images/ */
  thumbnail?: string;
  abstract: string;
  links: {
    pdf?: string;
    arxiv?: string;
    doi?: string;
    code?: string;
    slides?: string;
    project?: string;
  };
  bibtex: string;
}

export const publications: Publication[] = [
  {
    id: 'liu2026activereid',
    title: 'ActiveReID: Target-Conditioned Active Viewpoint Optimization for Mobile Robot Person Re-Identification',
    authors: ['Quangao Liu', 'Ning Wang', 'Zixian Zhao', 'Xingchen Zhang'],
    highlightAuthor: 'Quangao Liu',
    venue: 'IEEE Robotics and Automation Letters (RA-L), 2026',
    venueShort: 'IEEE RA-L',
    year: 2026,
    type: 'journal',
    selected: true,
    tags: ['Robotics', 'Active Perception', '3DGS', 'Sim2Real'],
    abstract:
      'Given an RGB-D image and a target person bounding box, ActiveReID predicts in a single forward pass a current-view quality score and a dense navigable view quality map. Trained on 28,765 scored photorealistic 3DGS RGB-D images in NVIDIA Isaac Sim, it transfers zero-shot to a Unitree Go2 quadruped, boosting Rank-1 accuracy from 71.4% to 94.2% in simulation (906 runs) and from 31.9% to 84.7% in the real world (144 runs).',
    links: {
      code: 'https://github.com/liuquangao/ActiveReID',
      project: '/activereid',
    },
    bibtex: `@article{liu2026activereid,
  title={ActiveReID: Target-Conditioned Active Viewpoint Optimization for Mobile Robot Person Re-Identification},
  author={Liu, Quangao and Wang, Ning and Zhao, Zixian and Zhang, Xingchen},
  journal={IEEE Robotics and Automation Letters (RA-L)},
  year={2026}
}`,
  },
  {
    id: 'jiang2026tapo',
    title: 'TAPO: Dynamic Teacher and Perturbed Answer Injection for Policy Optimization',
    authors: [
      'Maowei Jiang',
      'Zihang Wang',
      'Qi Wang',
      'Peter Búš',
      'Moquan Cheng',
      'Yifan Wang',
      'Quangao Liu',
      'Ruiqi Li',
      'et al.',
    ],
    highlightAuthor: 'Quangao Liu',
    venue: 'Proceedings of the AAAI Conference on Artificial Intelligence (AAAI), Vol. 40, 2026',
    venueShort: 'AAAI',
    year: 2026,
    type: 'conference',
    selected: true,
    tags: ['Policy Optimization', 'Reinforcement Learning'],
    abstract:
      'Introduces dynamic teacher guidance and perturbed answer injection to stabilize and accelerate policy optimization for sequential decision-making and reasoning models.',
    links: {},
    bibtex: `@inproceedings{jiang2026tapo,
  title={TAPO: Dynamic Teacher and Perturbed Answer Injection for Policy Optimization},
  author={Jiang, Maowei and Wang, Zihang and Wang, Qi and B{\\'u}{\\v{s}}, Peter and Cheng, Moquan and Wang, Yifan and Liu, Quangao and Li, Ruiqi and others},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence (AAAI)},
  volume={40},
  year={2026}
}`,
  },
  {
    id: 'liu2025mstvi',
    title: 'MSTVI: Multi-Scale Time-Variable Interaction for Multivariate Time Series Forecasting',
    authors: [
      'Quangao Liu',
      'Ruiqi Li',
      'Maowei Jiang',
      'Wei Yang',
      'Chen Liang',
      'Liang Pang',
      'Zeyu Zou',
    ],
    highlightAuthor: 'Quangao Liu',
    venue: 'Knowledge-Based Systems, 2025',
    venueShort: 'KBS',
    year: 2025,
    type: 'journal',
    selected: true,
    tags: ['Time Series', 'Multi-Scale Modeling'],
    abstract:
      'Models coupled multi-scale temporal patterns and cross-variable dependencies jointly, achieving strong accuracy and efficiency across long- and short-horizon multivariate time-series benchmarks.',
    links: {
      code: 'https://github.com/liuquangao/MSTVI',
    },
    bibtex: `@article{liu2025mstvi,
  title={MSTVI: Multi-Scale Time-Variable Interaction for Multivariate Time Series Forecasting},
  author={Liu, Quangao and Li, Ruiqi and Jiang, Maowei and Yang, Wei and Liang, Chen and Pang, Liang and Zou, Zeyu},
  journal={Knowledge-Based Systems},
  year={2025}
}`,
  },
  {
    id: 'li2025faith',
    title: 'FAITH: Frequency-domain Attention In Two Horizons for Time Series Forecasting',
    authors: [
      'Ruiqi Li',
      'Maowei Jiang',
      'Quangao Liu',
      'Kaiduo Feng',
      'Kaixuan Feng',
      'Yankun Sun',
      'Xiaopeng Zhou',
    ],
    highlightAuthor: 'Quangao Liu',
    venue: 'Knowledge-Based Systems, Vol. 309, 112790, 2025',
    venueShort: 'KBS',
    year: 2025,
    type: 'journal',
    selected: false,
    tags: ['Time Series', 'Frequency Domain'],
    abstract:
      'Combines multi-scale sequence-adaptive decomposition with Frequency Channel and Frequency Temporal attention modules to capture global spectral patterns with linear complexity.',
    links: {
      code: 'https://github.com/LRQ577/FAITH',
    },
    bibtex: `@article{li2025faith,
  title={FAITH: Frequency-domain Attention In Two Horizons for Time Series Forecasting},
  author={Li, Ruiqi and Jiang, Maowei and Liu, Quangao and Feng, Kaiduo and Feng, Kaixuan and Sun, Yankun and Zhou, Xiaopeng},
  journal={Knowledge-Based Systems},
  volume={309},
  pages={112790},
  year={2025}
}`,
  },
  {
    id: 'liu2024windowmixer',
    title: 'WindowMixer: Intra-Window and Inter-Window Modeling for Time Series Forecasting',
    authors: [
      'Quangao Liu',
      'Ruiqi Li',
      'Maowei Jiang',
      'Wei Yang',
      'Chen Liang',
      'Longlong Pang',
      'Zeyu Zou',
    ],
    highlightAuthor: 'Quangao Liu',
    venue: 'arXiv preprint arXiv:2406.12921',
    venueShort: 'arXiv',
    year: 2024,
    type: 'preprint',
    selected: false,
    tags: ['Time Series', 'All-MLP'],
    abstract:
      'An all-MLP forecasting framework analyzing temporal variations through dedicated Intra-Window-Mixer and Inter-Window-Mixer modules to separate local seasonal structure from global trends.',
    links: {
      arxiv: 'https://arxiv.org/abs/2406.12921',
    },
    bibtex: `@article{liu2024windowmixer,
  title={WindowMixer: Intra-Window and Inter-Window Modeling for Time Series Forecasting},
  author={Liu, Quangao and Li, Ruiqi and Jiang, Maowei and Yang, Wei and Liang, Chen and Pang, Longlong and Zou, Zeyu},
  journal={arXiv preprint arXiv:2406.12921},
  year={2024}
}`,
  },
  {
    id: 'liu2024fttabpfn',
    title: 'Tokenize Features, Enhancing Tables: The FT-TabPFN Model for Tabular Classification',
    authors: ['Quangao Liu', 'Wei Yang', 'Chen Liang', 'Longlong Pang', 'Zhuozhang Zou'],
    highlightAuthor: 'Quangao Liu',
    venue: 'arXiv preprint arXiv:2406.06891',
    venueShort: 'arXiv',
    year: 2024,
    type: 'preprint',
    selected: false,
    tags: ['Tabular ML', 'Representation Learning'],
    abstract:
      'Augments Prior-Data Fitted Networks (TabPFN) with a feature tokenization layer and downstream fine-tuning, significantly improving performance on mixed categorical and numerical tabular classification tasks.',
    links: {
      arxiv: 'https://arxiv.org/abs/2406.06891',
    },
    bibtex: `@article{liu2024fttabpfn,
  title={Tokenize Features, Enhancing Tables: The FT-TabPFN Model for Tabular Classification},
  author={Liu, Quangao and Yang, Wei and Liang, Chen and Pang, Longlong and Zou, Zhuozhang},
  journal={arXiv preprint arXiv:2406.06891},
  year={2024}
}`,
  },
];
