/**
 * 入口：先加载 polyfill（ES 模块 import 会提升，顺序靠前的先执行），再加载业务。
 */
import './worker-globals.js'
import './index.js'
