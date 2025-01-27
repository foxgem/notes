---
pubDatetime: 2025-01-23T00:51:10Z
title: "Fine-Tune Llama 3.1 Ultra-Efficiently with Unsloth | by Maxime Labonne | Towards Data Science"
slug: fine-tune-llama-3.1-ultra-efficiently-with-unsloth
tags:
  - "Llama 3.1"
  - "Supervised Fine-Tuning"
  - "lora"
  - "qlora"
  - "Unsloth"
---

好的，这是对您提供的文章的分析和总结：

**关键字:**

- Llama 3.1
- Supervised Fine-Tuning (SFT)
- LoRA
- QLoRA
- Unsloth

**概述:**

本文详细介绍了如何使用 Unsloth 库高效地对 Llama 3.1 8B 模型进行监督微调。文章首先解释了监督微调的概念及其与提示工程的区别，然后深入探讨了全微调、LoRA 和 QLoRA 等主要微调技术，并比较了它们的优缺点。文章重点介绍了使用 QLoRA 和 Unsloth 库在 Google Colab 上微调 Llama 3.1 8B 模型的实践步骤，包括环境配置、模型加载、数据集准备、训练参数设置和模型保存。最后，文章还提供了模型评估、对齐、量化和部署的建议，旨在帮助读者掌握高效微调大型语言模型的方法。作者强调了 Unsloth 库在内存效率和训练速度方面的优势，并鼓励读者尝试微调后的模型。

**分节阅读:**

- **🔧 Supervised Fine-Tuning**
  - 监督微调 (SFT) 是一种通过在较小的数据集上重新训练预训练的 LLM 来改进和定制模型的方法。其主要目标是将基本模型转换为可以遵循指令和回答问题的助手。SFT 还可以增强模型的整体性能，添加新知识或使其适应特定任务和领域。
- **⚖️ SFT Techniques**
  - 全微调是最直接的 SFT 技术，它涉及在指令数据集上重新训练预训练模型的所有参数，但需要大量的计算资源。LoRA 是一种参数高效的微调技术，它冻结权重并在每个目标层引入小的适配器，从而大大减少了训练参数的数量。QLoRA 是 LoRA 的扩展，可提供更大的内存节省，但训练时间更长，适用于 GPU 内存受限的情况。
- **🦙 Fine-Tune Llama 3.1 8B**
  - 文章使用 Unsloth 库来高效微调 Llama 3.1 8B 模型，该库提供了更快的训练速度和更低的内存使用率。文章使用 mlabonne/FineTome-100k 数据集进行 QLoRA 微调，并详细介绍了安装库、加载模型、配置 LoRA 参数、准备数据集和设置训练参数的步骤。训练完成后，文章还演示了如何测试模型、保存模型以及将其转换为 GGUF 格式。

**相关工具:**

- **Unsloth:** [https://github.com/unslothai/unsloth](https://github.com/unslothai/unsloth)
- **TRL:** [https://huggingface.co/docs/trl/en/index](https://huggingface.co/docs/trl/en/index)
- **Axolotl:** [https://github.com/OpenAccess-AI-Collective/axolotl](https://github.com/OpenAccess-AI-Collective/axolotl)
- **LM Studio:** [https://lmstudio.ai/](https://lmstudio.ai/)
- **Ollama:** [https://ollama.com/](https://ollama.com/)
- **text-generation-webui:** [https://github.com/oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui)
- **AutoQuant:** [https://colab.research.google.com/drive/1b6nqC7UZVt8bx4MksX7s656GXPM-eWw4?usp=sharing](https://colab.research.google.com/drive/1b6nqC7UZVt8bx4MksX7s656GXPM-eWw4?usp=sharing)
- **ZeroChat:** [https://colab.research.google.com/drive/1LcVUW5wsJTO2NGmozjji5CkC--646LgC](https://colab.research.google.com/drive/1LcVUW5wsJTO2NGmozjji5CkC--646LgC)

**参考文献:**

- **my article about DPO:** [https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html](https://mlabonne.github.io/blog/posts/Fine_tune_Mistral_7b_with_DPO.html)
- **my article about GGUF and llama.cpp:** [https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html](https://mlabonne.github.io/blog/posts/Quantize_Llama_2_models_using_ggml.html)
- **my article about BF16 format:** [https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html#background-on-floating-point-representation](https://mlabonne.github.io/blog/posts/Introduction_to_Weight_Quantization.html#background-on-floating-point-representation)
- **Rank-Stabilized LoRA:** [https://arxiv.org/abs/2312.03732](https://arxiv.org/abs/2312.03732)
- **LLM Course:** [https://github.com/mlabonne/llm-course](https://github.com/mlabonne/llm-course)
- **LLM Datasets:** [https://github.com/mlabonne/llm-datasets](https://github.com/mlabonne/llm-datasets)
- **Open LLM Leaderboard:** [https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
- **LLM AutoEval:** [https://github.com/mlabonne/llm-autoeval](https://github.com/mlabonne/llm-autoeval)
- **mlabonne/orpo-dpo-mix-40k:** [https://huggingface.co/datasets/mlabonne/orpo-dpo-mix-40k](https://huggingface.co/datasets/mlabonne/orpo-dpo-mix-40k)
- **meta-llama/Meta-Llama-3.1-8B:** [https://huggingface.co/meta-llama/Meta-Llama-3.1-8B](https://huggingface.co/meta-llama/Meta-Llama-3.1-8B)
- **unsloth/Meta-Llama-3.1-8B-bnb-4bit:** [https://huggingface.co/unsloth/Meta-Llama-3.1-8B-bnb-4bit](https://huggingface.co/unsloth/Meta-Llama-3.1-8B-bnb-4bit)
- **mlabonne/FineTome-100k:** [https://huggingface.co/datasets/mlabonne/FineTome-100k](https://huggingface.co/datasets/mlabonne/FineTome-100k)
- **arcee-ai/The-Tome:** [https://huggingface.co/datasets/arcee-ai/The-Tome](https://huggingface.co/datasets/arcee-ai/The-Tome)
- **arcee-ai/qwen2–72b-magpie-en:** [https://huggingface.co/datasets/arcee-ai/qwen2-72b-magpie-en](https://huggingface.co/datasets/arcee-ai/qwen2-72b-magpie-en)
- **HuggingFaceFW/fineweb-edu-classifier:** [https://huggingface.co/HuggingFaceFW/fineweb-edu-classifier](https://huggingface.co/HuggingFaceFW/fineweb-edu-classifier)
- **mlabonne/FineLlama-3.1-8B:** [https://huggingface.co/mlabonne/FineLlama-3.1-8B](https://huggingface.co/mlabonne/FineLlama-3.1-8B)
- **mlabonne/FineLlama-3.1-8B-GGUF:** [https://huggingface.co/mlabonne/FineLlama-3.1-8B-GGUF](https://huggingface.co/mlabonne/FineLlama-3.1-8B-GGUF)

**原文链接:**

[https://towardsdatascience.com/fine-tune-llama-3-1-ultra-efficiently-with-unsloth-7196c7165bab](https://towardsdatascience.com/fine-tune-llama-3-1-ultra-efficiently-with-unsloth-7196c7165bab)

**一致性检查:**

所有信息均与原文一致，段落顺序也与原文相同。

source: https://towardsdatascience.com/fine-tune-llama-3-1-ultra-efficiently-with-unsloth-7196c7165bab
