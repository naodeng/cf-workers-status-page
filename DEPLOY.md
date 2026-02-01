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

在仓库 **Settings → Secrets and variables → Actions** 添加：

| Secret                  | 必填 | 说明                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | 是   | 在 [API Tokens](https://dash.cloudflare.com/profile/api-tokens) 创建。**必须包含**：**Account** → **Workers Scripts** → Edit、**Account** → **Workers KV Storage** → Edit、**Account** → Account Settings → Read。可选 **User** → User Details → Read。建议直接用 **Edit Cloudflare Workers** 模板（已含上述权限）。 |
| `CLOUDFLARE_ACCOUNT_ID` | 是   | **必须与上述 Token 所属账号一致**，否则会报 `Authentication error [code: 10000]`。在 [Dashboard](https://dash.cloudflare.com) 右侧栏或 Workers 页 URL 中可见（如 `dash.cloudflare.com/<account_id>/workers`）。                                                                                                      |

推送 **main** 或 **master** 分支即可触发部署（`.github/workflows/publish.yml`）。

### 若出现 Authentication error [code: 10000]

1. **确认 `CLOUDFLARE_ACCOUNT_ID` 已设置**：在仓库 Settings → Secrets and variables → Actions 中必须存在且非空。
2. **确认 Account ID 与 Token 一致**：Token 是在哪个账号下创建的，`CLOUDFLARE_ACCOUNT_ID` 就填该账号的 ID（登录 Cloudflare → 进入该账号 → 右侧或 Workers 页 URL 中的 ID）。
3. **确认 Token 权限**：进入 [API Tokens](https://dash.cloudflare.com/profile/api-tokens) → 编辑该 Token，必须包含 **Workers Scripts: Edit**、**Workers KV Storage: Edit**（访问 `/storage/kv/namespaces` 必需）、**Account Settings: Read**。
4. 修改 Secrets 后重新推送或手动 re-run 该 workflow。

## 5. 自定义域名

在 Cloudflare Dashboard → Workers & Pages → 对应 Worker → Settings → Domains & Routes 中绑定 `status.naodeng.com.cn`。
