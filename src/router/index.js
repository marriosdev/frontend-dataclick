import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import Clubes from '../views/Clubes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/usuarios',
      name: 'usaurios',
      component: Usuarios
    },
    {
      path: '/clubes',
      name: 'clubes',
      component: Clubes
    },
  ]
})

export default router
