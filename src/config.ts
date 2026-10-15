import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'NAO Status Page',
    logo: 'logo-192x192.png',
    url: 'status.naodeng.com.cn',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    { id: 'inaodeng.com', name: 'inaodeng.com', description: 'Personal Blog', url: 'https://inaodeng.com', method: 'GET', expectStatus: 200, followRedirect: false },
    { id: 'naodeng.com.cn', name: 'naodeng.com.cn', description: 'You write code. They handle the rest.', url: 'https://naodeng.com.cn/', method: 'GET', expectStatus: 301, followRedirect: false },
    { id: 'analytics.inaodeng.com', name: 'analytics.inaodeng.com', description: 'You write code. They handle the rest.', url: 'https://analytics.inaodeng.com/', method: 'GET', expectStatus: 200},
    { id: 'email.naodeng.com.cn', name: 'email.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://email.naodeng.com.cn', method: 'GET', expectStatus: 200 },
    { id: 'deeplx.naodeng.com.cn', name: 'deeplx.naodeng.com.cn', description: 'A deep learning translation service.', url: 'https://deeplx.naodeng.com.cn/translate', method: 'GET', expectStatus: 200 },
    { id: 'unsplash.naodeng.com.cn', name: 'unsplash.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://unsplash.naodeng.com.cn', method: 'GET', expectStatus: 302 },
  ],
}
