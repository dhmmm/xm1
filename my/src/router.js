import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import  Movie  from './views/Movie.vue'
import Cinema  from './views/Cinema.vue'
import User  from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:{ name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/home/movie',
          name: 'movie',
          component: Movie
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
