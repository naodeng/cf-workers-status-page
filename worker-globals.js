/**
 * Workers 环境没有 Node 的 global/process。
 * 本文件无 import，作为入口第一个被 import 时会在 index.js 之前执行。
 */
globalThis.global = globalThis
globalThis.process = globalThis.process || { env: { NODE_ENV: 'production' } }
