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
      component: Home
    },
    {
      path: '/news',
      name: '優惠資訊',
      component: () => import('./components/PostList.vue'),
    },
    {
      path: '/news/:postid',
      name: '優惠內文',
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
      path: '/bloglist',
      name: '流行趨勢 Blog',
      component: () => import('./components/PostList.vue')
    }, {
      path: '/video',
      name: '影音專區 Video',
      component: () => import('./components/PostList.vue')
    },
    {
      path: '/products',
      name: '產品資訊 Products',
      component: () => import('./components/PostList.vue')
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