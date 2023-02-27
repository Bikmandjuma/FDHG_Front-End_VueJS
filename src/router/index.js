import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import GuestHomeView from '../views/pages/guest/index.vue'
import Login from '../components/Login.vue'
import test from '../views/pages/guest/HomePage.vue'
import GuestAbout from '../views/pages/guest/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guesthomeview',
    component: GuestHomeView
  },

   {
    path: '/about',
    name: 'guestabout',
    component: GuestAbout
  },

  {
    path: '/test',
    name: 'test',
    component: test
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
