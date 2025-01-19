# Building a ReAct Agent from Scratch 

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** ReAct Agent, Planning Pattern, LLM, 工具, Python

**概述:**
本文是“从零开始的 Agentic 模式”系列课程的第三课，主要介绍了如何从头开始构建一个 ReAct Agent。ReAct 技术是一种规划模式，它允许大型语言模型（LLM）将复杂任务分解为更小的子目标，而不会迷失整体目标。文章详细解释了 ReAct 循环的工作原理，包括“思考”、“行动”和“观察”三个步骤，并使用 Python 和 Groq LLM 从头开始实现了一个 ReAct Agent。文章还强调了系统提示的重要性，并展示了如何使用工具来增强 Agent 的能力。最后，作者还提供了一个封装了 ReAct 循环的 `ReactAgent` 类，并提供了 GitHub 链接。

**分节阅读:**

*   **The ReAct System Prompt**
    *   ReAct 技术需要一个系统提示，该提示描述了 ReAct 循环，并确保 LLM 理解其可以执行的三个操作：思考、行动和观察。
    *   与工具模式系统提示的另一个关键区别是，所有消息都包含在标签中，例如 `< >`，这有助于 LLM 遵循指令。
    *   系统提示中需要一组工具，这些工具包含在 `<tools></tools>` 标签中，文章中使用的示例涉及三个工具。
*   **ReAct Loop - Choosing the First Tool**
    *   文章提出了一个问题，该问题可以使用提供的工具按正确的顺序轻松解决，并展示了 Agent 如何生成第一个完成，包括 `<thought>` 和 `<tool_call>` 标签。
    *   `<tool_call>` 标签告诉 Agent 要使用哪个工具。
*   **ReAct Loop - Running the First Tool**
    *   根据 `<tool_call>` 标签，文章演示了如何评估工具以获得结果，这基本上是 Agent 将要采取的行动。
    *   工具的结果是 1234 和 5678 的总和，即 6912。
*   **ReAct Loop - Choosing the Second Tool**
    *   工具的结果（6912）作为 `<observation>` 添加到 `chat_history` 中，这允许 LLM 再次思考要使用的下一个工具。
    *   LLM 正确选择了乘法工具，将先前的结果乘以 5。
*   **ReAct Loop - Running the Second Tool**
    *   文章继续演示了如何运行第二个工具，结果为 34560。
*   **ReAct Loop - Choosing the Third Tool**
    *   在计算了总和和乘法之后，剩下的唯一操作是对数，在 `compute_log` 工具中实现。
*   **ReAct Loop - Running the Third Tool and Final Output**
    *   运行对数工具并将结果添加到 `chat_history` 后，文章展示了如何运行最后一个完成，生成的输出将包含一个 `<response>` 标签，该标签标记循环的结束并包含最终答案。
    *   LLM 的最终答案是 10.45，这是正确的。
*   **The ReAct Agent**
    *   文章介绍了 `agentic_patterns` 库，该库实现了上述代码，并提供了一个 `ReactAgent` 类，该类封装了 ReAct 循环，并接受可用工具列表。
    *   提供了 `ReactAgent` 类的 GitHub 链接。

**相关工具:**

*   `agentic_patterns` 库: [https://github.com/neural-maze/agentic_patterns/blob/main/src/agentic_patterns/planning_pattern/react_agent.py](https://github.com/neural-maze/agentic_patterns/blob/main/src/agentic_patterns/planning_pattern/react_agent.py)

**参考文献:**

*   Lesson Zero: What is an Agent?: [https://theneuralmaze.substack.com/p/what-is-an-agent](https://theneuralmaze.substack.com/p/what-is-an-agent)
*   Lesson One: The Reflection Pattern: [https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think](https://theneuralmaze.substack.com/p/reflection-pattern-agents-that-think)
*   Lesson Two: The Tool Pattern: [https://theneuralmaze.substack.com/p/agent-tools-the-bridge-to-the-outside](https://theneuralmaze.substack.com/p/agent-tools-the-bridge-to-the-outside)

**原文链接:** [https://theneuralmaze.substack.com/p/building-a-react-agent-from-scratch](https://theneuralmaze.substack.com/p/building-a-react-agent-from-scratch)


source: https://theneuralmaze.substack.com/p/building-a-react-agent-from-scratch