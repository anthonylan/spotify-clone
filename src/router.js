import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/browse',
      name: 'browse',
      component: () => import('./views/Browse.vue')
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('./views/Radio.vue')
    },
    {
      path: '/madeforyou',
      name: 'madeforyou',
      component: () => import('./views/MadeForYou.vue')
    },
    {
      path: '/recentlyplayed',
      name: 'recentlyplayed',
      component: () => import('./views/RecentlyPlayed.vue')
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import('./views/Songs.vue')
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('./views/Albums.vue')
    },
    {
      path: '/stations',
      name: 'stations',
      component: () => import('./views/Station.vue')
    },
    {
      path: '/localfiles',
      name: 'localfiles',
      component: () => import('./views/LocalFiles.vue')
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: () => import('./views/Podcasts.vue')
    },

    //ARTISTS ROUTES
    {
      path: '/chainsmokers',
      name: 'chainsmokers',
      component: () => import('./artist_views/Chainsmokers.vue')
    },

  ],
  linkExactActiveClass: "exact-active"
})
