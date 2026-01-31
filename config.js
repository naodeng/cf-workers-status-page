/**
 * 配置（与 config.yaml 等价，供 Wrangler/esbuild 打包使用，不支持 .yaml 导入时使用此文件）。
 */
module.exports = {
  settings: {
    title: 'NAO Status Page',
    url: 'status.naodeng.com.cn',
    logo: 'logo-192x192.png',
    daysInHistogram: 90,
    collectResponseTimes: true,
    allmonitorsOperational: 'All Systems Operational',
    notAllmonitorsOperational: 'Not All Systems Operational',
    monitorLabelOperational: 'Operational',
    monitorLabelNotOperational: 'Not Operational',
    monitorLabelNoData: 'No data',
    dayInHistogramNoData: 'No data',
    dayInHistogramOperational: 'All good',
    dayInHistogramNotOperational: ' incident(s)',
  },
  monitors: [
    { id: 'inaodeng.com', name: 'inaodeng.com', description: 'Personal Blog', url: 'https://inaodeng.com', method: 'GET', expectStatus: 200, linkable: true },
    { id: 'qaprompt.inaodeng.com', name: 'Awesome QA Prompt', description: 'Professional Quality Assurance AI Prompt Library.', url: 'https://qaprompt.inaodeng.com/', method: 'GET', expectStatus: 200, followRedirect: false, linkable: true },
    { id: 'naodeng.com.cn', name: 'naodeng.com.cn', description: 'You write code. They handle the rest.', url: 'https://naodeng.com.cn/', method: 'GET', expectStatus: 301, followRedirect: false, linkable: true },
    { id: 'email.naodeng.com.cn', name: 'email.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://email.naodeng.com.cn', method: 'GET', expectStatus: 200, linkable: true },
    { id: 'lobe.naodeng.com.cn', name: 'lobe.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://lobe.naodeng.com.cn', method: 'GET', expectStatus: 302, linkable: true },
    { id: 'chat.naodeng.com.cn', name: 'chat.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://chat.naodeng.com.cn', method: 'GET', expectStatus: 302, linkable: true },
    { id: 'azure.naodeng.com.cn', name: 'azure.naodeng.com.cn', description: 'A azure AI service.', url: 'https://azure.naodeng.com.cn/v1/models', method: 'GET', expectStatus: 200, linkable: true },
    { id: 'deeplx.naodeng.com.cn', name: 'deeplx.naodeng.com.cn', description: 'A deep learning translation service.', url: 'https://deeplx.naodeng.com.cn/translate', method: 'GET', expectStatus: 200, linkable: true },
    { id: 'analytics.naodeng.com.cn', name: 'analytics.naodeng.com.cn', description: 'A analytics website for blog.', url: 'https://analytics.naodeng.com.cn/websites/b3b285c9-3c35-4398-9252-91bb70560b84', method: 'GET', expectStatus: 200, linkable: true },
    { id: 'unsplash.naodeng.com.cn', name: 'unsplash.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://unsplash.naodeng.com.cn', method: 'GET', expectStatus: 302, linkable: true },
    { id: 'gemini.naodeng.com.cn', name: 'gemini.naodeng.com.cn', description: 'Built for anything connected to the Internet.', url: 'https://gemini.naodeng.com.cn', method: 'GET', expectStatus: 200, linkable: true },
  ],
}
