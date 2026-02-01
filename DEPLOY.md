# 部署说明（已按 cf-worker-status-page-pro 迁移）

当前项目已改为与 [cf-worker-status-page-pro](https://github.com/yunsii/cf-worker-status-page-pro) 相同技术栈（Vike + Vite + TypeScript），配置已写入 NAO Status Page。

## 1. 安装依赖

```bash
pnpm install
```

## 2. KV 命名空间并修改 wrangler.toml

**Wrangler 4** 使用空格子命令（不是冒号）：

```bash
# 若尚未创建，先创建
npx wrangler kv namespace create cf-workers-status-page
```

若提示「namespace with this title already exists」，说明已存在，可列出并记下 id：

```bash
npx wrangler kv namespace list
```

将得到的 **id** 填入 **wrangler.toml**，替换两处 `YOUR_KV_NAMESPACE_ID`（顶层和 `[env.production]`）。无需在 wrangler.toml 里写 account_id，CI 用 GitHub Secret，本地用 `wrangler login` 或环境变量。

## 3. 本地运行

```bash
pnpm run dev
```

## 4. 部署（GitHub Actions）

- 在仓库 **Settings → Secrets and variables → Actions** 添加：
  - `CLOUDFLARE_API_TOKEN`（必填）：在 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) 创建，需包含 **Account → Workers Scripts → Edit** 及 **Account → Account Settings → Read**；若希望日志中显示邮箱可勾选 **User → User Details → Read**。
  - `CLOUDFLARE_ACCOUNT_ID`（**必填**）：须与上述 Token 所属账号一致，否则会报 Authentication error / account_id 不匹配。在 [Cloudflare Dashboard](https://dash.cloudflare.com) 右侧或 API Tokens 页可看到当前 Account ID。
- 推送 **main** 或 **master** 分支即可触发部署（`.github/workflows/publish.yml`）。

## 5. 自定义域名

在 Cloudflare Dashboard → Workers & Pages → 对应 Worker → Settings → Domains & Routes 中绑定 `status.naodeng.com.cn`。
