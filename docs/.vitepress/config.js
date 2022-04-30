module.exports = {
  title: '前端通用框架及工作流',
  description: '通用框架及工作流程管理用于解决效率、复用问题，使用Vue技术栈',
  head: [
    ['link', {
      rel: 'icon',
      href: '/fe.ico'
    }]
  ],
  base: '/admin-docs/',
  markdown: {
    // lineNumbers: true
  },
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    // sidebarDepth: 2,
    // 选项来启用页面滚动效果
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '暴力指南', link: '/guide/' },
      { text: '框架文档', link: '/doc/base/guide' },
      { text: '编码格式', link: '/standard/standard' },
      { text: 'Git管理', link: '/git/git' },
      { text: 'UI 组件', link: '/' },
      // {
      //   text: '其他知识',
      //   items: [
      //     { text: '入司指南', link: '/others/joinCompany' },
      //   ]
      // },
      // { text: '内部社区', link: '/others/social' },
    ],
    sidebar: {
      '/guide/': "auto",
      '/others/': "auto",
      '/git/': [
        {
          text:'Git',
          children: [
            { text: 'Git管理(必)', link: '/git/git'},
            { text: 'Git常用命令(选)', link: '/git/cmd' }
          ]
        }
      ],
      '/standard/': [
        {
          text:'规则',
          children: [
            { text: '编码格式(必)', link: '/standard/standard'},
            { text: '更多(选)', link: '/standard/more' }
          ]
        }
      ],
      '/tableLayout/': [
        {
          text:'tableLayout',
          children: [
            { text: '概述', link: '/tableLayout/outline'},
            { text: '配置项', link: '/tableLayout/disposition'},
            { text: '事件钩子', link: '/tableLayout/event'},
            { text: '内置方法', link: '/tableLayout/methods'},
            { text: '内置插槽', link: '/tableLayout/slot'},
            { text: '插槽注意事项', link: '/tableLayout/slot-notice'},
            { text: '使用答疑', link: '/tableLayout/doubt'},
          ]
        }
      ],
      '/doc/': [
        {
          text:'基础',
          children: [
            { text: '介绍', link: '/doc/base/guide'},
            { text: '布局', link: '/doc/base/layout' },
            { text: '路由和侧边栏', link: '/doc/base/router-and-nav' },
            { text: '权限验证', link: '/doc/base/permission' },
            { text: '新增页面', link: '/doc/base/new-page' },
            { text: '样式', link: '/doc/base/style' },
            { text: '和服务器交互', link: '/doc/base/server' },
            { text: '模拟数据', link: '/doc/base/mock' },
            { text: '引入外面模块', link: '/doc/base/import' },
            { text: '构建和发布', link: '/doc/base/deploy' },
            { text: '环境变量', link: '/doc/base/env' },
          ]
        },
        {
          text:'进阶',
          children: [
            { text: '内部组件', link: '/doc/advanced/components'},
            { text: '跨域问题', link: '/doc/advanced/cors'},
            { text: '风格指南', link: '/doc/advanced/style-guide' },
            { text: 'ESLint', link: '/doc/advanced/eslint' },
            { text: '图表', link: '/doc/advanced/chart' },
            { text: '图标', link: '/doc/advanced/icon' },
            { text: '错误处理', link: '/doc/advanced/error' },
          ]
        },
        {
          text:'其他',
          children: [
            { text: '鸣谢', link: '/doc/thanks' },
          ]
        }
      ],


    },
    lastUpdated: '上次更新: ', // string | boolean
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './docs/'
      }
    }
  }
}
