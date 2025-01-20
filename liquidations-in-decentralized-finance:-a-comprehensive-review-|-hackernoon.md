# Liquidations in Decentralized Finance: A Comprehensive Review | HackerNoon 

好的，这是对您提供的文章的分析和总结：

**语言:** 中文

**关键字:** DeFi, 清算, 抵押率, 清算奖励, 去中心化金融

**概述:**
本文深入探讨了去中心化金融（DeFi）中清算机制的复杂性。文章从基本概念出发，逐步介绍了清算机制的各个组成部分，包括抵押率、清算奖励、平仓系数、清算成本以及市场流动性等因素。作者强调，清算机制的设计需要在保护贷款人免受坏账风险的同时，尽可能降低借款人的损失。文章还讨论了拍卖机制在清算中的应用，以及一种全新的基于DEX的清算方法。文章旨在帮助读者理解现有的清算机制，甚至能够设计自己的清算机制，并强调了在DeFi借贷中，清算机制对于维护系统稳定和用户利益的重要性。

**分节阅读:**

*   **关于清算:** 传统贷款人通过要求借款人提供抵押品来确保贷款偿还，如果借款人未能偿还贷款，则会出售抵押品进行清算。在去中心化金融中，由于没有法律追索权，不偿还贷款的风险更高，因此，如果贷款资不抵债，会立即进行清算。DeFi清算人是匿名方，通过激励机制来保护贷款人免受坏账影响。
*   **偿付能力:** 贷款的偿付能力是指抵押品的价值始终高于债务的价值。如果贷款资不抵债，借款人将没有动力偿还债务，因此，贷款人会允许清算，出售抵押品以偿还债务。为了激励匿名方进行清算，需要确保清算人能够从中获利。
*   **抵押率:** 为了确保清算人获利，贷款需要超额抵押，即抵押品的价值高于债务的价值。抵押率是抵押品价值与债务价值的比率，超额抵押贷款的抵押率高于1.0。抵押率的高低取决于债务和抵押资产之间的预期波动性，波动性越高，抵押率也需要越高。
*   **清算奖励:** 为了平衡清算人的利润、用户损失和贷款人的偿付能力，引入了清算奖励机制。清算人通常会以可配置的系数获得额外的抵押品，该系数通常远低于抵押率。清算奖励本身可以是债务、抵押品或其他因素的函数。
*   **平仓系数:** 为了避免大额借款人在清算时支付过高的费用，贷款人通常只清算贷款的一部分。平仓系数决定了应该清算贷款的比例，以尽可能减少清算规模，同时使剩余贷款恢复到健康状态。在某些情况下，如果部分清算不足以使剩余贷款恢复健康，贷款人可能会选择忽略平仓系数并清算整个贷款。
*   **清算成本:** 清算人需要承担多种成本，包括闪电贷费用、交易费用、滑点以及执行交易的gas费用。清算成本会侵蚀清算奖励，因此清算奖励系数需要高于估计的闪电贷和交易系数。清算成本通常与贷款规模成正比。
*   **节流:** 为了避免市场流动性不足，需要对每个贷款允许的抵押品设置硬性限制，以确保单次清算不会超过可交易的抵押品数量。另一种解决方案是使用动态平仓系数，以便分批清算大额贷款。市场流动性无法提前预测，只有贷款人和交易所之间的整合才能根据价格和流动性变化触发清算。
*   **灰尘:** 小额贷款由于gas成本过高而无利可图，因此，一些贷款人会设置一个阈值，禁止低于该阈值的贷款。然而，这种方法存在问题，因为它取决于gas价格和抵押品价值等不可预测的因素。大多数贷款人选择不实施阈值。
*   **拍卖:** 为了避免大额贷款对借款人造成过大的惩罚，有时会使用拍卖机制。在拍卖中，清算人竞争，将清算权交给接受以最小利润执行清算的人。拍卖机制包括英式拍卖和荷兰式拍卖，但拍卖机制的复杂性高于即时清算。
*   **社会化坏账:** 无法清算的贷款被称为坏账，坏账会损害贷款人的偿付能力。为了避免自我强化的循环，最好在协议用户之间立即社会化坏账。
*   **一种完全不同的方法:** Instadapp提出了一种完全不同的方法，将抵押品用作DEX中的流动性，当抵押品价值下降时，DEX会自动将抵押品交易为借入资产。这种方法不需要专门的清算人，用户也不需要支付清算奖励，并且市场流动性不是问题。

**相关工具:**

*   Yield v1: [https://github.com/yieldprotocol/fyDai/blob/4105c5a4cf0105845f2d782c839bf1d1c7e9422a/contracts/Liquidations.sol](https://github.com/yieldprotocol/fyDai/blob/4105c5a4cf0105845f2d782c839bf1d1c7e9422a/contracts/Liquidations.sol)
*   Sai: [https://github.com/makerdao/sai/blob/master/README.md](https://github.com/makerdao/sai/blob/master/README.md)
*   Compound v1: [https://github.com/compound-finance/compound-money-market/blob/master/docs/CompoundProtocol.pdf](https://github.com/compound-finance/compound-money-market/blob/master/docs/CompoundProtocol.pdf)
*   Aave flash loans: [https://docs.aave.com/developers/guides/flash-loans#flash-loan-fee](https://docs.aave.com/developers/guides/flash-loans#flash-loan-fee)
*   MakerDAO: [https://github.com/makerdao/dss/blob/fa4f6630afb0624d04a003e920b0d71a00331d98/src/vat.sol#L172](https://github.com/makerdao/dss/blob/fa4f6630afb0624d04a003e920b0d71a00331d98/src/vat.sol#L172)
*   MakerDAO Dutch auctions: [https://docs.makerdao.com/smart-contract-modules/dog-and-clipper-detailed-documentation](https://docs.makerdao.com/smart-contract-modules/dog-and-clipper-detailed-documentation)
*   Yield v2: [https://github.com/yieldprotocol/vault-v2/blob/a8c7587a01fd7c0e0df042932fa14584e28ad88b/src/Witch.sol](https://github.com/yieldprotocol/vault-v2/blob/a8c7587a01fd7c0e0df042932fa14584e28ad88b/src/Witch.sol)
*   Instadapp Fluid: [https://blog.instadapp.io/fluid/](https://blog.instadapp.io/fluid/)

**参考文献:**

*   Compound Audit: [https://blog.openzeppelin.com/compound-audit](https://blog.openzeppelin.com/compound-audit)
*   CRV: [https://members.delphidigital.io/feed/michael-egorovs-crv-positions](https://members.delphidigital.io/feed/michael-egorovs-crv-positions)

**原文链接:** [https://hackernoon.com/liquidations-in-decentralized-finance-a-comprehensive-review](https://hackernoon.com/liquidations-in-decentralized-finance-a-comprehensive-review)

**一致性检查:**
以上总结与原文内容一致，没有出现前后矛盾或与原文不符的地方，段落顺序也与原文保持一致。


source: https://hackernoon.com/liquidations-in-decentralized-finance-a-comprehensive-review