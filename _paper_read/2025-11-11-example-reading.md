---
title: "论文阅读：Attention Is All You Need"
excerpt: "Transformer模型的开山之作，深度解析其核心机制。"
date: 2025-11-11
categories:
  - NLP
  - Attention Mechanism
tags:
  - Transformer
  - Deep Learning
header:
  teaser: /assets/images/transformer.jpg  # 可选：缩略图
---

## 论文信息

- **标题**: Attention Is All You Need
- **作者**: Vaswani et al.
- **发表于**: NeurIPS 2017
- **论文链接**: [arXiv](https://arxiv.org/abs/1706.03762)

## 核心创新

Transformer摒弃了传统的RNN和CNN结构，完全基于注意力机制...

## 关键技术

### 1. Self-Attention

自注意力机制的核心公式：

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

### 2. Multi-Head Attention

多头注意力允许模型在不同的表示子空间关注不同的信息...

## 实验结果

在机器翻译任务上取得了SOTA结果...

## 个人评论

这篇论文的影响力巨大，后续的BERT、GPT等模型都基于Transformer架构...

