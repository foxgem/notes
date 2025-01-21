# key value kv caching mistral transformers xformers | Towards Data Science 

**关键字:** KV-Caching, Mistral, Attention, Prefill, Decode

**概述:**
本文深入探讨了 Mistral 模型中使用的 KV-Caching 技术，解释了为什么大型语言模型（LLM）的首次 token 生成时间（TTFT）较长，而后续 token 生成速度很快。文章详细介绍了 KV-Caching 的原理，即通过存储先前计算的 key 和 value 向量来避免冗余计算，从而显著提高解码效率。文章还阐述了 Mistral 模型中预填充（Prefill）和解码（Decode）两个阶段的工作原理，以及如何利用 xFormers 库生成注意力掩码。通过具体的例子和图示，文章清晰地展示了 KV-Caching 在实际应用中的运作方式，以及它如何大幅减少计算量，从而加速 LLM 的推理过程。

**分节阅读:**

*   **KV-Caching: Avoiding Redundant Computations**
    *   KV-Caching 通过存储先前计算的 key 和 value 向量来避免在解码过程中进行重复计算。
    *   在解码时，只需要计算当前 token 的 key 和 value 向量，而无需重新计算之前 token 的 key 和 value 向量。
    *   这种优化方法显著减少了计算量，从而提高了模型的推理速度。

*   **Prefill and Decode Stages**
    *   Mistral 使用滑动窗口注意力机制，每个 token 只关注自身和之前的 W-1 个 token。
    *   预填充阶段（Prefill）是将用户输入 prompt 的 key 和 value 向量填充到 KV-Cache 中，这是 TTFT 较高的主要原因。
    *   解码阶段（Decode）则是在预填充阶段之后，逐个生成输出 token。

*   **Part 1: Prefill Stage**
    *   预填充阶段将用户输入的 token 序列分块处理，以限制 GPU 内存使用。
    *   在每个迭代中，计算当前块的 Q、K 和 V 向量，并使用 xFormers 库生成注意力掩码。
    *   计算出的 key 和 value 向量被存储到 KV-Cache 中，以便在后续的解码阶段使用。

*   **Iteration 1**
    *   在第一个迭代中，处理每个序列的前两个 token，并创建相应的注意力掩码。
    *   由于 KV-Cache 为空，所以每个 token 只关注自身。
    *   计算出的 key 和 value 向量被存储到 KV-Cache 中。

*   **Iteration 2**
    *   在第二个迭代中，处理每个序列的剩余 token，并从 KV-Cache 中检索之前存储的 key 和 value 向量。
    *   使用 xFormers 库生成注意力掩码，确保每个 token 只关注其上下文窗口内的 token。
    *   计算出的 key 和 value 向量被存储到 KV-Cache 中。

*   **Part 2: Decode Stage**
    *   解码阶段逐个生成输出 token，并首先将当前 token 的 key 和 value 向量添加到 KV-Cache 中。
    *   然后，从 KV-Cache 中检索所有 key 和 value 向量，并计算自注意力。
    *   使用 xFormers 库生成注意力掩码，确保每个 token 只关注其上下文窗口内的 token。

**相关工具:**

*   xFormers: [https://github.com/facebookresearch/xformers](https://github.com/facebookresearch/xformers)

**参考文献:**

1.  Mistral Codebase: [https://github.com/mistralai/mistral-inference/tree/main](https://github.com/mistralai/mistral-inference/tree/main)
2.  xFormers Codebase: [https://github.com/facebookresearch/xformers](https://github.com/facebookresearch/xformers)
3.  Umar Jamil’s excellent overview of Mistral: [https://www.youtube.com/watch?v=UiX8K-xBUpE](https://www.youtube.com/watch?v=UiX8K-xBUpE)

**原文链接:** https://towardsdatascience.com/deep-dive-into-kv-caching-in-mistral-7e0cea8409a1


source: https://towardsdatascience.com/deep-dive-into-kv-caching-in-mistral-7e0cea8409a1