# What is an Agent? - by Miguel Otero Pedrido 

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** 智能体, LLM, 规划, 记忆, 工具

**概述:**
这篇文章是关于智能体（Agent）的入门介绍，旨在揭开智能体神秘的面纱。作者指出，尽管智能体现在非常热门，但其本质是在大型语言模型（LLM）之上构建的功能层。一个智能体需要具备规划能力，将复杂任务分解为子任务；需要记忆能力，包括短期记忆（上下文窗口）和长期记忆（向量数据库）；还需要工具，以便与外部世界交互。文章强调，智能体的核心是LLM，而规划、记忆和工具是其关键组件。作者还预告了后续文章将深入探讨这些组件的实现细节。

**分节阅读:**

*   **What is an Agent?**
    *   文章开头指出，智能体现在非常流行，但很多人并不清楚其具体含义。作者计划通过一个系列文章，从理论和实践层面介绍智能体。本篇作为入门，将介绍智能体的基本概念和组成部分。
*   **The Agent’s Brain**
    *   作者将智能体比作大脑，强调LLM是智能体的核心，没有LLM，智能体就毫无用处。但仅仅有LLM是不够的，还需要其他组件来与外部世界交互。
*   **The Agent’s Components**
    *   **💠 Planning Capabilities**
        *   智能体需要具备规划能力，将复杂任务分解为子任务，并进行自我反思。文章列举了一些规划和推理技术，如CoT、CoT-SC和ToT。作者还预告将在后续文章中详细介绍ReAct技术。
    *   **💠 Memory Capabilities**
        *   智能体需要记忆能力，包括短期记忆（LLM的上下文窗口）和长期记忆（向量数据库）。短期记忆用于记住最近的交互，而长期记忆用于存储更持久的信息。
    *   **💠 Tools**
        *   智能体需要工具来与外部世界交互，例如调用API获取信息或操作外部系统。作者将在后续文章中详细介绍工具的实现。

**相关工具:**

*   **LangChain:** (未提供链接)
*   **LlamaIndex:** (未提供链接)
*   **CrewAI:** (未提供链接)
*   **Qdrant:** (未提供链接)
*   **Weaviate:** (未提供链接)
*   **Pinecone:** [https://www.pinecone.io/](https://www.pinecone.io/)

**参考文献:**

*   **Chain of Thoughts:** [https://arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)
*   **CoT-SC:** [https://arxiv.org/abs/2203.11171](https://arxiv.org/abs/2203.11171)
*   **Tree of Thoughts:** [https://arxiv.org/abs/2305.10601](https://arxiv.org/abs/2305.10601)
*   **ReAct:** [https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
*   **Donato Riccio's Medium article:** [https://towardsdatascience.com/extending-context-length-in-large-language-models-74e59201b51f](https://towardsdatascience.com/extending-context-length-in-large-language-models-74e59201b51f)
*   **Pinecone’s blog:** [https://www.pinecone.io/learn/vector-database/](https://www.pinecone.io/learn/vector-database/)

**原文链接:** [https://theneuralmaze.substack.com/p/what-is-an-agent](https://theneuralmaze.substack.com/p/what-is-an-agent)

**一致性检查:**
以上总结与原文内容一致，没有出现前后矛盾或与原文不符的地方，段落顺序也与原文保持一致。


source: https://theneuralmaze.substack.com/p/what-is-an-agent