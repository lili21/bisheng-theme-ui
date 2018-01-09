'use strict'

module.exports = {
  lazyLoad: false,
  home: '/',
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd'
  ],
  routes: [
    {
      path: '/',
      component: './template/Cover'
    },
    {
      path: '/components/:doc',
      component: './template/Components'
    },
    {
      path: '/articles/:doc',
      component: './template/Articles'
    },
    {
      path: '/404',
      component: './template/NotFound'
    }
  ]
}
