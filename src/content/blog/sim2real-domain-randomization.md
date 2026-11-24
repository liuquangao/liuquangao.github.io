---
title: "Closing the Reality Gap: Domain Randomization vs. Temporal Latent Adaptation"
description: "Why naive simulation policies fail on physical robots, how domain randomization trades optimality for robustness, and how temporal history encoders enable rapid online adaptation."
pubDate: 2026-10-18
tags: ["Sim2Real", "Robotics", "Manipulation", "Notes"]
---

Training a manipulation or navigation policy in GPU-parallel physics simulators lets us collect **years of robot experience in minutes**. Yet the moment we deploy that policy onto physical hardware, subtle mismatches in joint friction, payload inertia, sensor latency, and contact dynamics can turn a high simulated success rate into oscillation or drift.

In this note, I summarize the dynamics gap formulation and compare standard **Domain Randomization (DR)** against **Temporal Latent Adaptation** for zero-shot Sim2Real deployment.

## 1. Formalizing the Sim2Real Dynamics Gap

Let $\mathcal{M}(\phi) = (\mathcal{S}, \mathcal{A}, P_\phi, R, \gamma)$ denote a parameterized Markov Decision Process whose transition kernel $P_\phi(s_{t+1} \mid s_t, a_t)$ depends on physical parameters $\phi \in \Phi$ (e.g., contact friction $\mu$, link mass $m$, actuator damping $d$).

A policy $\pi_\theta$ trained solely on nominal simulator parameters $\phi_{\text{sim}}$ maximizes:

$$
J_{\text{sim}}(\theta) = \mathbb{E}_{\tau \sim \pi_\theta, \, P_{\phi_{\text{sim}}}} \left[ \sum_{t=0}^{T} \gamma^t R(s_t, a_t) \right]
$$

When deployed on physical hardware with unknown true dynamics $\phi_{\text{real}} \neq \phi_{\text{sim}}$, the compounding state distribution shift bounds the performance drop by the transition discrepancy:

$$
\left| J_{\text{real}}(\theta) - J_{\text{sim}}(\theta) \right| \le \frac{2 \gamma R_{\max}}{(1-\gamma)^2} \, \mathbb{E}_{s, a \sim d^{\pi_\theta}_{\text{sim}}} \left[ D_{\text{TV}}\!\left( P_{\phi_{\text{real}}}(\cdot \mid s, a) \,\|\, P_{\phi_{\text{sim}}}(\cdot \mid s, a) \right) \right]
$$

## 2. Why History Encoding Beats Pure Randomization

Standard Domain Randomization optimizes expected return over a broad prior $p(\phi)$:

$$
\max_{\theta} \; \mathbb{E}_{\phi \sim p(\phi)} \left[ J_{\phi}(\theta) \right]
$$

While DR prevents catastrophic failure, a memoryless policy $\pi_\theta(a_t \mid o_t)$ must behave **conservatively** so that one action works across both low- and high-friction regimes.

Instead, we can train a lightweight temporal encoder $f_\psi$ to map a short window of proprioceptive history $h_t = (o_{t-H:t}, a_{t-H:t-1})$ into a compact physics latent $\hat{z}_t \approx e(\phi)$:

```python
import torch
import torch.nn as nn

class TemporalPhysicsEncoder(nn.Module):
    """Infers latent physical dynamics z_t from proprioceptive history."""
    def __init__(self, obs_dim: int, act_dim: int, latent_dim: int = 16):
        super().__init__()
        in_dim = obs_dim + act_dim
        self.conv = nn.Sequential(
            nn.Conv1d(in_dim, 64, kernel_size=5, stride=2, padding=2),
            nn.SiLU(),
            nn.Conv1d(64, 64, kernel_size=3, stride=2, padding=1),
            nn.SiLU(),
            nn.AdaptiveAvgPool1d(1),
        )
        self.proj = nn.Linear(64, latent_dim)

    def forward(self, history: torch.Tensor) -> torch.Tensor:
        # history: [B, H, obs_dim + act_dim]
        x = history.transpose(1, 2)
        feat = self.conv(x).squeeze(-1)
        return self.proj(feat)
```

## 3. Practical Notes for Real-Robot Deployment

1. **Randomize action latency, not just friction.** Even a 15–30ms communication jitter on ROS 2 degrades high-gain controllers far more than a small mass mismatch.
2. **Match observation filtering.** Apply the same low-pass filter to simulated joint velocities that your hardware driver applies on the real robot.
3. **Log proprioceptive residuals.** Comparing predicted vs. actual next states on real hardware immediately reveals which physical axes are unmodeled.
