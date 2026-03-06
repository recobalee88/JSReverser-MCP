# JS Reverse MCP

一个把前端 JavaScript 逆向流程标准化的 MCP 服务。  
目标不是只做页面调试，而是把页面观察、运行时采样、本地复现、补环境和证据沉淀串成一套可复用工作流。

## 核心方法论

本项目默认遵循以下方法论：

- `Observe-first`
- `Hook-preferred`
- `Breakpoint-last`
- `Rebuild-oriented`
- `Evidence-first`

这意味着：

1. 先在浏览器里确认请求、脚本、函数和依赖来源
2. 再做最小化 Hook 采样
3. 再导出 local rebuild
4. 再在 Node 里逐项补环境
5. 每一步都沉淀为 task artifact，而不是只留在对话里

## 已沉淀链路

以下参数链路已有公开索引，可作为仓库内复用入口：

- 某东 `h5st` 参数
  - 索引：`scripts/cases/README.md`
  - Case：`scripts/cases/jd-h5st-pure-node.mjs`

- 某手 `falcon` 风控参数
  - 索引：`scripts/cases/README.md`
  - Case：`scripts/cases/ks-hxfalcon-pure-node.mjs`

- 某音 `a-bogus` 参数
  - 索引：`scripts/cases/README.md`
  - Case：`scripts/cases/douyin-a-bogus-pure-node.mjs`

说明：

- README 首页只展示脱敏后的参数类型和公开入口
- 真实 `artifacts/tasks/<task-id>/` 默认视为本地私有任务目录
- Git 默认只提交 `artifacts/tasks/_TEMPLATE/`

## 支持的能力

### 页面观察与脚本定位

- `list_scripts`
- `get_script_source`
- `find_in_script`
- `search_in_scripts`

### Hook 与运行时采样

- `create_hook`
- `inject_hook`
- `get_hook_data`
- `hook_function`
- `trace_function`

### 断点与调试控制

- `set_breakpoint`
- `set_breakpoint_on_text`
- `resume`
- `pause`
- `step_over` / `step_into` / `step_out`

### 请求链路与网络分析

- `list_network_requests`
- `get_network_request`
- `get_request_initiator`
- `break_on_xhr`

### 本地复现与补环境

- `export_rebuild_bundle`
- `diff_env_requirements`
- `record_reverse_evidence`

### 页面自动化

- `navigate_page`
- `query_dom`
- `click_element`
- `type_text`
- `take_screenshot`

### 深度分析

- `collect_code`
- `understand_code`
- `deobfuscate_code`
- `risk_panel`

### 会话与登录态复用

- `save_session_state`
- `restore_session_state`
- `dump_session_state`
- `load_session_state`

完整参数说明见 `docs/reference/tool-reference.md`。

## 标准任务结构

任务目录统一使用：

- `artifacts/tasks/_TEMPLATE/`
- `artifacts/tasks/<task-id>/`

推荐目录结构：

- `task.json`
- `runtime-evidence.jsonl`
- `network.jsonl`
- `scripts.jsonl`
- `env/env.js`
- `env/polyfills.js`
- `env/entry.js`
- `env/capture.json`
- `run/`
- `report.md`

职责边界：

- `env.js`
  - 基础宿主对象和最小 shim
- `polyfills.js`
  - 代理诊断层、`watch`、`safeFunction`、`makeFunction`
- `entry.js`
  - 运行入口、目标脚本加载、first divergence 输出

## 标准执行流程

推荐流程：

1. 页面观察
2. 运行时采样
3. 证据入库
4. local rebuild
5. 逐项补环境
6. first divergence 定位
7. 深入去混淆 / 风控逻辑提纯

默认原则：

- 不要跳过页面证据直接猜环境
- 不要一次性全量模拟浏览器
- 不要把真实任务目录直接提交 Git

## 参数沉淀与安全边界

参数链路沉淀遵循以下规则：

1. 先读本地 task artifact
- `artifacts/tasks/<task-id>/`

2. 本地没有时再读抽象 case
- `scripts/cases/*`

3. 仍不足时按模板新建
- `docs/reference/parameter-methodology-template.md`
- `docs/reference/parameter-site-mapping-template.md`

安全边界：

- case 只保留抽象方法和流程
- 真实任务目录默认本地保留
- 敏感值必须脱敏后才允许共享
- Git 默认只提交 `_TEMPLATE`

详见：

- `docs/reference/case-safety-policy.md`
- `docs/reference/reverse-artifacts.md`
- `docs/reference/env-patching.md`

## 3 分钟快速开始

### 1) 安装依赖并构建

```bash
npm install
npm run build
```

构建入口：

```bash
build/src/index.js
```

### 2) 最简单启动方式

```bash
npm run start
```

### 3) 配置客户端

最小配置示例：

#### Claude Code

```bash
claude mcp add js-reverse node /ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js
```

#### Cursor

- Command: `node`
- Args: `[/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js]`

#### Codex

```toml
[mcp_servers.js-reverse]
command = "node"
args = ["/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js"]
```

如果你需要接管已经打开的浏览器，请继续看：

- `docs/guides/browser-connection.md`
- `docs/guides/client-configuration.md`

## 文档入口

### Guides

- 快速开始：`docs/guides/getting-started.md`
- 浏览器连接：`docs/guides/browser-connection.md`
- 客户端配置：`docs/guides/client-configuration.md`
- 逆向工作流：`docs/guides/reverse-workflow.md`
- 补环境规范：`docs/reference/env-patching.md`

### Reference

- 逆向任务索引：`docs/reference/reverse-task-index.md`
- 工具参数总表：`docs/reference/tool-reference.md`
- 工具读写契约：`docs/reference/tool-io-contract.md`
- 任务产物说明：`docs/reference/reverse-artifacts.md`

### Templates And Supporting Docs

- `docs/reference/reverse-update-prompt-template.md`
- `docs/reference/reverse-report-template.md`
- `docs/reference/algorithm-upgrade-template.md`
- `docs/reference/parameter-methodology-template.md`
- `docs/reference/parameter-site-mapping-template.md`

## 开发与测试

```bash
npm run build
npm run test:unit
npm run test:property
npm run coverage:full
```

## 故障排查

更多问题排查请看：

- `docs/guides/browser-connection.md`

## 参考项目

本项目在设计和实现过程中参考了以下项目，具体协议声明（如 MIT 等）以对应上游仓库为准：

- https://github.com/wuji66dde/jshook-skill
- https://github.com/zhizhuodemao/js-reverse-mcp

## License

Apache-2.0
