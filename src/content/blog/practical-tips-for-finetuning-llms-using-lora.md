---
pubDatetime: 2025-01-23T00:51:10Z
title: "Practical Tips for Finetuning LLMs Using LoRA (Low-Rank Adaptation)"
slug: practical-tips-for-finetuning-llms-using-lora
tags:
  - "lora"
  - "llm"
  - "Optimizers"
  - "Hyperparameters"
---

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** LoRA, 微调, LLM, 优化器, 超参数

**概述:**
本文作者基于大量实验，深入探讨了使用 LoRA（低秩适应）技术微调大型语言模型（LLM）的实践技巧。文章强调了 LoRA 在节省 GPU 内存方面的优势，并详细分析了 QLoRA、优化器选择、学习率调度器、训练轮数、LoRA 应用层、LoRA 超参数调整等关键因素对模型性能的影响。作者还解答了关于 LoRA 的常见问题，如数据集的重要性、领域适应性、最佳秩选择等。文章旨在为读者提供实用的指导，帮助他们更有效地微调 LLM，并指出了一些未来研究的方向。总而言之，本文为 LoRA 微调 LLM 提供了全面的实践指南，并揭示了许多重要的实验发现。

**分节阅读:**

- **A Brief Introduction to LoRA**
  - 大型语言模型参数众多，直接更新所有权重会消耗大量 GPU 内存。
  - LoRA 通过将权重更新分解为低秩表示，从而减少计算和内存需求。
  - LoRA 学习权重更新的分解表示，而不是直接计算权重更新矩阵，从而节省资源。
- **1. LoRA Consistency**
  - 尽管 LLM 训练存在随机性，但 LoRA 的基准测试结果在多次运行中表现出惊人的一致性。
  - 这种一致性为进一步的比较研究奠定了良好的基础。
  - 实验结果是在默认设置下使用较小的秩 r=8 获得的。
- **2. QLoRA Compute-Memory Trade-offs**
  - QLoRA 通过量化预训练权重和使用分页优化器，进一步减少了微调过程中的内存使用。
  - QLoRA 可以节省 33% 的 GPU 内存，但会增加 39% 的训练时间。
  - QLoRA 对模型性能的影响很小，使其成为解决 GPU 内存瓶颈的可行替代方案。
- **3. Learning Rate Schedulers**
  - 学习率调度器通过在训练过程中降低学习率来优化收敛并避免超出损失最小值。
  - 余弦退火是一种学习率调度器，它按照余弦曲线调整学习率。
  - 余弦退火调度器可以显著提高 SGD 的性能，但对 Adam 和 AdamW 优化器的影响较小。
- **4. Adam vs SGD**
  - Adam 和 AdamW 优化器虽然内存密集，但在深度学习中仍然很受欢迎。
  - SGD 优化器不需要跟踪任何额外的参数，因此可以节省内存。
  - 当 LoRA 的秩 r 较小时，用 SGD 替换 Adam 优化器可能不值得，但当增加 r 时，可能值得考虑。
- **5. Multiple Training Epochs**
  - 在传统的深度学习中，通常会多次迭代训练集，称为 epoch。
  - 对于指令微调，多次迭代训练集可能会降低模型性能，可能是由于过拟合。
  - 多轮训练可能不适用于指令微调，因为它可能会降低结果。
- **6. Enable LoRA for More Layers**
  - 除了 Key 和 Value 权重矩阵，还可以为 Query 权重矩阵、投影层和其他线性层启用 LoRA。
  - 为所有这些额外的层启用 LoRA 会增加可训练参数的数量，并可能显著提高模型性能。
  - 作者只探索了两种设置，未来可以探索其他组合。
- **7. Balancing LoRA Hyperparameters: R and Alpha**
  - LoRA 引入了一个额外的缩放系数，用于在正向传递期间将 LoRA 权重应用于预训练权重。
  - 通常，alpha 的值设置为秩 r 的两倍，但实验表明，对于较大的 r 值，较小的 alpha 值可能效果更好。
  - 选择 alpha 为 r 的两倍可能通常会产生最佳结果，但尝试不同的比率也可能不会有害。
- **8. Training 7B Parameter Models on a Single GPU**
  - LoRA 允许在单个 GPU 上微调 7B 参数的 LLM。
  - 使用 QLoRA 和最佳设置（r=256 和 alpha=512）需要 17.86 GB 的内存，并且对于 50k 个训练示例需要大约 3 个小时。
  - 文章的其余部分回答了读者可能有的其他问题。
- **Answers to Common Questions**
  - **Q1: How Important is the Dataset?** 数据集至关重要，数据质量非常重要。
  - **Q2: Does LoRA Work for Domain Adaptation?** LoRA 可以用于在特定领域数据集上进一步预训练现有的预训练 LLM。
  - **Q3: How Do You Select the Best Rank?** 选择最佳秩 r 是一个超参数，需要针对每个 LLM 和每个数据集进行探索。
  - **Q4: Does LoRA Need to Be Enabled for All Layers?** 探索其他组合可能是有价值的，例如激活投影层的 LoRA 是否真的有益。
  - **Q5: How To Avoid Overfitting?** 减小 r 或增加数据集大小是避免过拟合的首选方法。
  - **Q6: What about Other Optimizers?** Sophia 是一种二阶优化算法，值得在未来探索。
  - **Q7: What Other Factors Influence Memory Usage?** 除了精度和量化设置外，模型大小、批量大小和可训练的 LoRA 参数数量也会影响内存使用。
  - **Q8: How Does it Compare to Full Finetuning and RLHF?** 全微调需要至少 2 个 GPU，并且基准测试结果不佳。
  - **Q9: Can LoRA Weights be Combined?** 可以合并预训练权重和 LoRA 权重，以创建一个单一模型。
  - **Q10: What about Layer-wise Optimal Rank Adaptation?** 可以为不同的层选择不同的 LoRA 秩，但这会增加优化超参数时的选择。

**相关工具:**

- [Lit-GPT repository](https://github.com/Lightning-AI/lit-gpt)
- [scripts/merge_lora.py](https://github.com/Lightning-AI/lit-gpt/blob/main/scripts/merge_lora.py)

**参考文献:**

- [Low-rank adaptation](https://arxiv.org/abs/2106.09685)
- [QLoRA by Dettmers](https://arxiv.org/abs/2305.14314)
- [LIMA: Less Is More for Alignment](https://arxiv.org/abs/2305.11206)
- [Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training](https://arxiv.org/abs/2305.14342)
- [Layer-wise Optimal Rank Adaptation](https://medium.com/@tom_21755/llm-optimization-layer-wise-optimal-rank-adaptation-lora-1444dfbc8e6a)

**原文链接:** https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms

source: https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms
