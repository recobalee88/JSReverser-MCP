# 客户端配置指南

这份指南按客户端分别给出最常用配置。

## Claude Code

### 最简单配置

```bash
claude mcp add js-reverse node /ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js
```

### 接管已打开的 Chrome

```bash
claude mcp add js-reverse node /ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js -- --browserUrl http://127.0.0.1:9222
```

如果你本地已经固定开着远程调试端口，也可以改用：

```bash
claude mcp add js-reverse node /ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js -- --autoConnect
```

## Cursor

`Settings -> MCP -> New MCP Server`

### 最简单配置

- Command: `node`
- Args: `[/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js]`

### 接管已打开的 Chrome

- Command: `node`
- Args:

```json
[
  "/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js",
  "--browserUrl",
  "http://127.0.0.1:9222"
]
```

## Codex

Codex 使用 `config.toml`。

### 最简单配置

```toml
[mcp_servers.js-reverse]
command = "node"
args = ["/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js"]
```

### 接管已打开的 Chrome

```toml
[mcp_servers.js-reverse]
command = "node"
args = [
  "/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js",
  "--browserUrl",
  "http://127.0.0.1:9222"
]
```

### 自动接管本机浏览器

```toml
[mcp_servers.js-reverse]
command = "node"
args = [
  "/ABSOLUTE/PATH/JSReverser-MCP/build/src/index.js",
  "--autoConnect"
]
```

## 配置完成后的验证

无论你用哪个客户端，建议都做一次最小验证：

1. 打开一个已知页面
2. 调用 `list_pages`
3. 调用 `list_scripts`
4. 调用 `list_network_requests`

如果三者都能返回你当前页面对应的信息，说明配置已经基本正确。
