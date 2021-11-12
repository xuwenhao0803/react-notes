module.exports = {
  title: 'react学习',
  description: 'react学习',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebar: [
      {
        title: '理念',   // 必要的
        path: '/idea',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/idea/设计理念.md',
        ]
      },

    ],
    nav: [
      { text: 'react学习', link: '/react/' }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/xuwenhao0803/react-notes' },
          {
            text: '算法仓库',
            link: 'https://github.com/xuwenhao0803/algorithm-notes'
          }
        ]
      }
    ]
  }
};