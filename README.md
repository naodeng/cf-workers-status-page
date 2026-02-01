# NAO Status Page

基于 Cloudflare Workers + KV + CRON 的状态页，用于监控 [inaodeng.com](https://inaodeng.com) 及子站可用性。

- 技术栈：Vike + Vite + TypeScript
- 配置：见 [src/config.ts](./src/config.ts)
- 部署：见 [DEPLOY.md](./DEPLOY.md)

## 本地运行

```bash
pnpm install
pnpm run dev
```

## Credits

- [cf-worker-status-page-pro](https://github.com/yunsii/cf-worker-status-page-pro)
- [eidam/cf-workers-status-page](https://github.com/eidam/cf-workers-status-page)
