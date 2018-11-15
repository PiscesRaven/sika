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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './components/PostList.vue'),
    }, {
      path: '/news/post',
      name: '優惠內文',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './components/Blog.vue'),
    },
    {
      path: '/hairstyle',
      name: '髮型專區 Hair',
      component: () => import( /* webpackChunkName: "about" */ './components/HairStyle.vue'),
    },
    {
      path: '/designer',
      name: '設計師 Stylist',
      component: () => import( /* webpackChunkName: "about" */ './components/Designer/Designers.vue')
    },
    {
      path: '/designer/designerinfo',
      name: '設計師 個人資訊',
      component: () => import( /* webpackChunkName: "about" */ './components/Designer/DesignersInfo.vue')
    },
    {
      path: '/bloglist',
      name: '流行趨勢 Blog',
      component: () => import( /* webpackChunkName: "about" */ './components/PostList.vue')
    }, {
      path: '/video',
      name: '影音專區 Video',
      component: () => import( /* webpackChunkName: "about" */ './components/PostList.vue')
    },
    {
      path: '/products',
      name: '產品資訊 Products',
      component: () => import( /* webpackChunkName: "about" */ './components/PostList.vue')
    },
    {
      path: '/booking',
      name: '線上預約 Booking',
      component: () => import( /* webpackChunkName: "about" */ './components/Booking.vue')
    }
  ]
})