# Case Index

仓库内公开的参数 / 链路沉淀入口统一放在 `scripts/cases/`。

这里仅保留抽象 case、方法论和验收口径，不放可直接复用的完整实现代码。

## 已公开链路

### 某东 `h5st` 参数

- Case: `scripts/cases/jd-h5st-pure-node.mjs`
- 说明：Node 补环境签名链路抽象 case

### 某手 `falcon` 风控参数

- Case: `scripts/cases/ks-hxfalcon-pure-node.mjs`
- 说明：风控链路定位与 local rebuild 抽象 case

### 某音 `a-bogus` 参数

- Case: `scripts/cases/douyin-a-bogus-pure-node.mjs`
- 说明：参数链路定位与纯 Node 复现抽象 case

## 使用约束

- 优先读取这里的抽象 case
- 如果新增公开参数 / 链路入口，统一更新本文件
- 可执行脚本和真实任务产物默认保留在本地 `artifacts/tasks/<task-id>/`
- 仓库内不提交真实 Cookie、Storage、可直接复用的生产参数组合

更多工具入口请看：

- `docs/reference/reverse-task-index.md`
- `docs/reference/tool-reference.md`
- `docs/reference/case-safety-policy.md`
