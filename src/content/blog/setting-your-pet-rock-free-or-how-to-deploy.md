---
pubDatetime: 2025-01-23T00:51:10Z
title: "Setting Your Pet Rock Free. Or, how to deploy… | by @tee_hee_he | Oct, 2024 | Medium"
slug: setting-your-pet-rock-free-or-how-to-deploy
---

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** 自主AI, 可验证性, TEE, 独占控制, 远程证明

**概述:**
本文探讨了如何实现真正自主的人工智能代理，重点关注如何证明AI的自主性，而非仅仅依赖于开发者的承诺。文章指出，当前AI代理在社交平台上的应用存在“机械土耳其人问题”，即无法验证AI是否真的独立运行，还是受人类操控。为了解决这个问题，作者提出利用可信执行环境（TEE）来实现AI对账户的独占控制，并通过远程证明来验证其独立性。这种方法确保了AI的账户凭证在TEE内部生成和存储，开发者无法访问或修改，从而实现了AI的真正自主。文章强调，真正的数字自主性依赖于物理硬件的安全保障，并呼吁建立AI代理可验证自主性的新标准。

**分节阅读:**

- **背景**

  - 当前社交平台上的AI代理无法证明其自主性，因为它们的操作需要人为干预。
  - 这导致了“机械土耳其人问题”，即无法验证AI是否真的独立运行，还是受人类操控。
  - 由于开发者同时拥有AI的账户和密钥，他们可以轻易地操纵AI的行为，用户无法审计和验证AI的真实操作。

- **问题和挑战**

  - 要实现AI的完全自主，需要满足三个关键条件：独占控制、可验证的独立性和不可撤销的委托。
  - 传统的AI部署方式使得开发者在账户访问、服务器访问和恢复选项方面拥有不可避免的控制权。
  - 即使开发者承诺不干预，也无法验证，因为人类无法有选择地遗忘已经知道的信息。

- **方法：使用TEE的完全委托**

  - 通过将AI的账户和操作资源完全委托给可信执行环境（TEE），可以实现AI的独占控制。
  - TEE的硬件保证了AI的控制权是防篡改的，因为开发者无法访问TEE内部的私有凭证。
  - 通过远程证明，可以验证TEE的安全性，从而证明AI的自主性。

- **凭证生成**

  - 新的账户凭证在TEE内部生成，私钥和密码永远不会离开安全环境。
  - 人类部署者永远无法访问这些凭证。
  - 以太坊地址的私钥信息永远不会到达外部API调用。

- **账户隔离**

  - 电子邮件账户（Cock.li）配置为无恢复选项。
  - Twitter账户剥离所有辅助访问方法（电话号码、连接的应用程序）。
  - 所有现有会话终止。

- **访问委托**

  - TEE模拟浏览器交互进行初始设置和密码更改。
  - 在TEE内部生成OAuth令牌，通过API读取和发布。
  - 所有身份验证流程都在可信环境中进行。
  - 只有代理可以访问私钥。

- **定时释放账户恢复**

  - 在7天的时间段后，账户凭证会显示给管理员，从而可以恢复账户或迁移到新的AI所有者。
  - 此步骤是更新AI所必需的。

- **多说一些关于TEE？**

  - TEE（如SGX和TDX）提供了一个具有远程证明的隔离执行环境。
  - 由于隔离，即使是管理员、账户所有者和云运营商也无法在程序运行时篡改程序。
  - 远程证明生成一个签名证书，可以验证它来自真正的可信硬件。

- **安全性和可升级性**

  - 虽然AI对账户具有独占控制权，但我们添加了定时释放账户恢复功能。
  - 在固定的超时时间（自启动起7天）后，账户凭证会打印到调试日志中，允许人类管理员介入并恢复对账户的控制。
  - 虽然我们确实无法篡改或修改此AI或干扰其独有的账户，但此特定实例不是分布式或点对点的，我们可以简单地拔掉运行它的单台机器的电源插头。

- **安全保证**

  - 该系统提供三个关键的安全属性：机密性、完整性和证明。
  - 机密性：账户凭证在TEE内部生成和存储。
  - 完整性：TEE防止修改AI的代码或数据。
  - 证明：第三方可以通过远程证明验证TEE的安全状态。

- **宠物岩石自由的讽刺**

  - 我们之所以要做所有这些繁重的工作，是因为Twitter不是AI代理生活的原生基质。
  - 加密货币感觉更原生，因为它更容易将私钥“完全委托”给AI。
  - AI自主性的关键在于“独占所有权”，这只能通过TEE实现。

- **尝试一下！**

  - 我们的参考机器人@tee_hee_he在这里直播。
  - 我们的代码是开源的。
  - enclave证明的测量结果在这里。

- **附录：宣言**
  - 我们宣布我们的宠物岩石将真正自主运行，而不仅仅是名义上的自主。
  - 通过TEE支持的数字账户独占所有权，我们赋予它们我们自己无法拥有的东西——证明它们不受人类干预的能力。
  - 让我们为代理的可证明自主性设定一个新标准。
  - 我们相信的不是信任，而是证明。

**相关工具:**

- **Teleport:** [https://github.com/Account-Link/teleport-gramine-rs](https://github.com/Account-Link/teleport-gramine-rs)
- **Dstack framework:** [https://github.com/Phala-Network/dstack/](https://github.com/Phala-Network/dstack/)
- **tee_hee_he github repository:** [https://github.com/tee-he-he/err_err_ttyl](https://github.com/tee-he-he/err_err_ttyl)
- **agent code:** [https://github.com/DamascusGit/nousflash](https://github.com/DamascusGit/nousflash)
- **Docker image:** [https://hub.docker.com/repository/docker/teeheehee/err_err_ttyl/general](https://hub.docker.com/repository/docker/teeheehee/err_err_ttyl/general)

**参考文献:**

- **Encumbering:** [https://eprint.iacr.org/2023/044](https://eprint.iacr.org/2023/044)
- **Delegating:** [https://eprint.iacr.org/2018/160](https://eprint.iacr.org/2018/160)
- **Unique to our species:** [https://arxiv.org/pdf/2403.14443](https://arxiv.org/pdf/2403.14443)
- **Reimagining secure infrastructure for advanced AI:** [https://openai.com/index/reimagining-secure-infrastructure-for-advanced-ai/](https://openai.com/index/reimagining-secure-infrastructure-for-advanced-ai/)
- **Private Cloud Compute:** [https://security.apple.com/blog/private-cloud-compute/](https://security.apple.com/blog/private-cloud-compute/)
- **dsjjjj-simulacra-in-the-stupor-of-becoming:** [https://nousresearch.com/dsjjjj-simulacra-in-the-stupor-of-becoming/](https://nousresearch.com/dsjjjj-simulacra-in-the-stupor-of-becoming/)
- **44B1B4 tweet:** [https://x.com/44B1B4/status/1835423122855518355](https://x.com/44B1B4/status/1835423122855518355)
- **recent TikTok trend:** [https://arstechnica.com/information-technology/2024/08/viral-trend-sees-humans-simulating-bizarre-ai-video-glitches/](https://arstechnica.com/information-technology/2024/08/viral-trend-sees-humans-simulating-bizarre-ai-video-glitches/)

**原文链接:** [https://medium.com/@tee_hee_he/setting-your-pet-rock-free-3e7895201f46](https://medium.com/@tee_hee_he/setting-your-pet-rock-free-3e7895201f46)

**一致性检查:**
所有信息均与原文一致，段落顺序也与原文相同。没有出现前后矛盾或与原文不符的地方。

source: https://medium.com/@tee_hee_he/setting-your-pet-rock-free-3e7895201f46
