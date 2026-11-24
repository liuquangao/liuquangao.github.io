---
title: "From Time-Series Forecasting to Visuomotor Control: A Unified Sequence View"
description: "How inductive biases from multivariate time-series forecasting—multi-scale interaction, window mixing, and frequency-domain decomposition—transfer into high-frequency robot control."
pubDate: 2026-08-29
tags: ["Time Series", "Robotics", "Manipulation", "Notes"]
---

Transitioning from **multivariate time-series forecasting** (such as [MSTVI](/publications#liu2025mstvi) and [FAITH](/publications#li2025faith)) to **robotic manipulation and active navigation** initially looks like jumping between two separate worlds. One deals with multi-channel sensor telemetry and forecasting horizons; the other deals with robot arms, mobile bases, and physical contact.

Yet once you inspect a robot running at 50–100Hz, **embodied control is fundamentally a closed-loop, non-stationary time-series problem**.

## 1. Action Chunking Is Multi-Horizon Patch Forecasting

In long-horizon time-series forecasting, predicting one step at a time causes compounding error and loses local temporal semantics. Instead, modern forecasters predict a **horizon patch** conditioned on a lookback window:

$$
\hat{X}_{t+1 : t+K} = f_\theta\!\left( X_{t-L+1 : t} \right)
$$

In robotic manipulation (e.g., Action Chunking and Diffusion Policy), predicting a chunk of $K$ future joint actions $A_{t:t+K}$ uses the exact same inductive bias:
- **Reduces compounding error** under non-Markovian demonstrations.
- **Smooths high-frequency motor chatter** on physical actuators.
- **Amortizes vision backbone latency** during onboard deployment.

## 2. Reversible Normalization Under Contact Regimes

Non-stationary time series experience shifting mean and variance across regimes. Similarly, when a manipulator transitions from **free-space motion** to **stiff surface contact**, proprioceptive and force signals undergo abrupt distribution shifts.

Applying lightweight reversible instance normalization (RevIN) to proprioceptive windows stabilizes latent representations across contact transitions:

```python
import torch

def revin_normalize(x: torch.Tensor, eps: float = 1e-5):
    """Normalize [B, T, D] proprioceptive window and return stats for inversion."""
    mean = x.mean(dim=1, keepdim=True)
    std = torch.sqrt(x.var(dim=1, keepdim=True, unbiased=False) + eps)
    return (x - mean) / std, mean, std
```

## 3. Multi-Scale & Spectral Inductive Biases

Both physical sensor forecasting and robotic control contain coupled fast and slow dynamics: high-frequency vibration/contact feedback alongside low-frequency task trajectories. Combining multi-scale temporal decomposition with cross-variable interaction remains a strong unifying design principle across both domains.
