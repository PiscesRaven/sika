import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./components/PostList.vue'),

    },
    {
      path: '/news/:postid',
      name: 'newspost',
      component: () => import('./components/Blog.vue'),
    },
    {
      path: '/hairstyle',
      name: '髮型專區 Hair',
      component: () => import('./components/HairStyle.vue'),
    },
    {
      path: '/designer',
      name: '設計師 Stylist',
      component: () => import('./components/Designer/Designers.vue')
    },
    {
      path: '/designer/designerinfo',
      name: '設計師 個人資訊',
      component: () => import('./components/Designer/DesignersInfo.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('./components/PostList.vue')
    },
    {
      path: '/article/:postid',
      name: 'articlepost',
      component: () => import('./components/Blog.vue'),
    }, {
      path: '/video',
      name: 'video',
      component: () => import('./components/PostList.vue')
    },
    {
      path: '/video/:postid',
      name: 'videopost',
      component: () => import('./components/Blog.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./components/PostList.vue')
    },
    {
      path: '/products/:postid',
      name: 'productspost',
      component: () => import('./components/Blog.vue'),
    },
    {
      path: '/booking',
      name: '線上預約 Booking',
      component: () => import('./components/Booking.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return {
      x: 0,
      y: 0
    }
  }
})