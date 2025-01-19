# Agent Tools: The bridge to the outside world 

好的，这是对您提供的文章的分析和总结：

**关键字:**

*   Agent Tools
*   LLM
*   Tool Pattern
*   Function Calling
*   Python

**概述:**

这篇文章是“Agentic Patterns From Scratch”系列的第二课，主要介绍了如何为LLM（大型语言模型）构建工具，使其能够访问外部世界。文章指出，仅靠LLM自身权重中的信息不足以回答需要实时或特定上下文信息的问题。因此，需要通过工具来扩展LLM的能力。文章详细讲解了如何使用Python和Groq LLMs从头开始构建工具，包括如何通过系统提示让LLM识别并调用函数，以及如何使用装饰器模式将Python函数转换为可供LLM使用的工具对象。文章还通过一个获取当前天气和Hacker News头条的例子，展示了工具的实际应用。作者强调，工具是连接LLM与外部世界的桥梁，是构建强大智能体的关键。

**分节阅读:**

*   **Building a Tool from Scratch:**
    *   文章首先展示了一个简单的Python函数，并提出如何让LLM能够使用这个函数。
    *   为了让LLM知道这个函数，需要在系统提示中提供函数的名称、属性和描述等信息。
    *   通过系统提示，LLM可以像一个函数调用AI模型一样，根据提供的函数签名选择要使用的函数。
*   **A System Prompt that works:**
    *   文章展示了一个系统提示的例子，该提示强制LLM充当一个函数调用AI模型，根据XML标签内的函数签名选择要使用的函数。
    *   通过一个简单的例子，展示了如何让LLM调用函数并返回结果，但需要解析LLM的输出并将其转换为Python字典。
    *   文章还展示了如何将解析后的输出添加到聊天历史中，以便LLM知道要返回给用户的信息。
*   **Tool Decorator:**
    *   文章指出，需要一种方法将任何函数自动转换为系统提示中描述的格式，并告诉代理该函数是一个工具。
    *   文章介绍了工具装饰器的概念，它可以将任何Python函数转换为一个工具对象。
    *   文章通过一个与Hacker News交互的例子，展示了如何使用工具装饰器，并展示了如何运行代理。

**相关工具:**

*   **Python:** [https://www.python.org/](https://www.python.org/)
*   **Groq LLMs:** (文章中未提供具体链接，请自行搜索)
*   **GitHub (代码仓库):** [https://github.com/neural-maze/agentic_patterns](https://github.com/neural-maze/agentic_patterns)
*   **LlamaIndex:** (文章中未提供具体链接，请自行搜索)
*   **CrewAI:** (文章中未提供具体链接，请自行搜索)
*   **LangChain:** (文章中未提供具体链接，请自行搜索)
*   **Hacker News:** [https://news.ycombinator.com/](https://news.ycombinator.com/)

**参考文献:**

*   **Lesson 1 of the series:** [https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think](https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think)

**原文链接:**

[https://theneuralmaze.substack.com/p/agent-tools-the-bridge-to-the-outside](https://theneuralmaze.substack.com/p/agent-tools-the-bridge-to-the-outside)


source: https://theneuralmaze.substack.com/p/agent-tools-the-bridge-to-the-outside