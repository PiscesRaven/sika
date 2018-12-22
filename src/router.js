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
      component: () => import( /* webpackChunkName: "news" */ './components/PostList.vue'),
      meta: {
        title: '希卡 Sika hair salon-優惠資訊'
      },

    },
    {
      path: '/news/:postid',
      name: 'newspost',
      component: () => import( /* webpackChunkName: "newspost" */ './components/Blog.vue'),
      meta: {
        title: '希卡 Sika hair salon-優惠資訊'
      }
    },
    {
      path: '/hairstyle',
      name: '髮型專區 Hair',
      component: () => import( /* webpackChunkName: "hairstyle" */ './components/HairStyle.vue'),
      meta: {
        title: '希卡 Sika hair salon-髮型風格'
      }
    },
    {
      path: '/designer',
      name: '/designer',
      component: () => import( /* webpackChunkName: "designer" */ './components/Designer/Designers.vue'),
      meta: {
        title: '希卡 Sika hair salon-設計師群'
      }
    },
    {
      path: '/designer/:postid',
      name: 'designerinfo',
      component: () => import( /* webpackChunkName: "designerinfo" */ './components/Designer/DesignersInfo.vue'),
      meta: {
        title: '希卡 Sika hair salon-設計師'
      }
    },
    {
      path: '/article',
      name: 'article',
      component: () => import( /* webpackChunkName: "article" */ './components/PostList.vue'),
      meta: {
        title: '希卡 Sika hair salon-部落格'
      }
    },
    {
      path: '/article/:postid',
      name: 'articlepost',
      component: () => import( /* webpackChunkName: "articlepost" */ './components/Blog.vue'),
      meta: {
        title: '希卡 Sika hair salon-部落格'
      }
    }, {
      path: '/video',
      name: 'video',
      component: () => import( /* webpackChunkName: "video" */ './components/PostList.vue'),
      meta: {
        title: '希卡 Sika hair salon-影片專區'
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import( /* webpackChunkName: "products" */ './components/PostList.vue'),
      meta: {
        title: '希卡 Sika hair salon-產品資訊'
      }
    },
    {
      path: '/products/:postid',
      name: 'productspost',
      component: () => import( /* webpackChunkName: "productspost" */ './components/Blog.vue'),
    },
    {
      path: '/booking',
      name: '線上預約 Booking',
      component: () => import( /* webpackChunkName: "booking" */ './components/Booking.vue'),
      meta: {
        title: '希卡 Sika hair salon-線上預約'
      }
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