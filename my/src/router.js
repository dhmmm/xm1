import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import  Movie  from './views/Movie.vue'
import Cinema  from './views/Cinema.vue'
import User  from './views/User.vue'
import Nowplay from './components/nowplay.vue'
import ComList from './components/ComList.vue'
import Detail from './components/Detail.vue'

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
      children:[
        {
          path: '/home/movie',
          name: 'movie',
          component: Movie,
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

        },
        {
          path: '/home/cinema',
          name: 'cinema',
          component: Cinema
        },
        {
          path: '/home/user',
          name: 'user',
          component: User
        },
        
      ]
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
