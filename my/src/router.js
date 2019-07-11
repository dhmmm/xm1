import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import  Movie  from './views/Movie.vue'
import Cinema  from './views/Cinema.vue'
import User  from './views/User.vue'
import Nowplay from './components/nowplay.vue'
import ComList from './components/ComList.vue'
import Detail from './components/Detail.vue'

import Nowplay from './components/nowplay.vue'
import Mtlogin from './components/mtlogin.vue'
import Phologin from './components/phologin.vue'
import Buy from './components/buy.vue'
import Detail from './components/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{ name: 'movie'}
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },

    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect:{ name: 'movie'},
      children:[
        {
          path: '/home/movie',
          name: 'movie',
          component: Movie,
<<<<<<< HEAD
          redirect:{ name: 'nowplay'},
          children:[
              {//正在热映
                  path:'/home/movie/nowplay',
                  name:'nowplay',
                  component:Nowplay,
              }
          ]
=======
          children:[
            {
              path: '/home/movie/now',
              name: 'nowplay',
              component: Nowplay
            },
            {
              path: '/home/movie/coming',
              name: 'comList',
              component: ComList
            },

          ]

>>>>>>> e72a45995949a3e2aee00e4448236cbe1bde7438
        },
        {
          path: '/home/cinema',
          name: 'cinema',
          component: Cinema
        },

      ]
    },
      {//我的
          path: '/user',
          name: 'user',
          component: User,
          redirect:{ name: 'mtlogin'},
          children:[
              {//美团登录
                  path:'/user/mtlogin',
                  name:'mtlogin',
                  component:Mtlogin,
              },
              {//手机验证登录
                  path:'/user/phologin',
                  name:'phologin',
                  component:Phologin,
              },
          ]
      },
      {
        path:'/buy',
        name:'buy',
        component:Buy,
      },
      {
          path:'/detail',
          name:'detail',
          component:Detail,
      },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
