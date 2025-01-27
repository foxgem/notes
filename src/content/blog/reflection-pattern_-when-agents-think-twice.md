---
pubDatetime: 2025-01-23T00:51:10Z
title: "Reflection Pattern: When Agents think twice"
slug: reflection-pattern_-when-agents-think-twice
tags:
  - "Agentic Patterns"
  - "Reflection Pattern"
  - "LLM"
  - "Groq"
  - "Python"
---

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** Agentic Patterns, Reflection Pattern, LLM, Groq, Python

**概述:**
本文介绍了Agentic Patterns中的第一个模式：Reflection Pattern。作者强调，为了深入理解其工作原理，他选择从零开始使用Python和Groq LLM实现该模式，而不是依赖现有的框架。Reflection Pattern的核心思想是让LLM反思其自身的输出，并通过迭代改进最终结果。这个过程通过一个简单的循环实现，包括生成、反思和修改三个步骤。文章还提供了具体的代码示例，展示了如何使用Llama3 70B模型生成和改进Merge Sort算法的Python代码。最后，作者介绍了封装了反射循环的Reflection Agent，并展示了其在实际应用中的效果，强调了该模式的简单性和有效性。

**分节阅读:**

- **Reflection Pattern 101**

  - Reflection Pattern 是最简单的 Agentic Pattern 之一，但能显著提升 LLM 的响应性能。
  - 该模式允许 Agent 反思其生成的输出，并提供反馈以逐步改进最终结果。
  - 反射机制的核心是一个简单的循环，包括生成、反思和修改三个步骤。

- **Reflection Loop From Scratch**

  - 作者选择使用 Groq 托管的 Llama3 70B 模型来测试其 Python 编码能力，并要求其实现 Merge Sort 算法。
  - 首先，通过系统提示让 LLM 扮演 Python 程序员的角色，并生成 Merge Sort 算法的初始版本。
  - 然后，通过另一个系统提示让 LLM 扮演 Andrej Karpathy 的角色，对生成的代码进行反思和改进。

- **The Reflection Agent**
  - 作者提供了一个封装了反射循环的 Reflection Agent，可以通过 `agentic-patterns` 库安装使用。
  - 通过使用 Reflection Agent，LLM 生成的 Merge Sort 代码得到了显著改进，包括添加了类和单元测试。
  - 文章强调，尽管 Reflection Pattern 很简单，但它在实际应用中非常有效。

**相关工具:**

- **Groq:** [https://console.groq.com/docs/models](https://console.groq.com/docs/models)
- **GitHub (agentic_patterns repo):** [https://github.com/neural-maze/agentic_patterns](https://github.com/neural-maze/agentic_patterns)

**参考文献:**

- **DeepLearning.ai series:** [https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/?ref=dl-staging-website.ghost.io](https://www.deeplearning.ai/the-batch/how-agents-can-improve-llm-performance/?ref=dl-staging-website.ghost.io)
- **Lesson 0 of the series:** [https://theneuralmaze.substack.com/p/what-is-an-agent](https://theneuralmaze.substack.com/p/what-is-an-agent)

**原文链接:** [https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think](https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think)

source: https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think
