import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import Clubes from '../views/Clubes.vue'
import DetalhesClube from '../views/DetalhesClube.vue'
import DetalhesUsuario from '../views/DetalhesUsuario.vue'
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
      name: 'usuarios',
      component: Usuarios
    },
    {
      path: '/clubes',
      name: 'clubes',
      component: Clubes
    },
    {
      path: '/detalhesClube',
      name: 'detalhesClube',
      component: DetalhesClube,
    },
    {
      path: '/detalhesUsuario',
      name: 'detalhesUsuario',
      component: DetalhesUsuario,
    },
    {
      path: '/sair',
      name: 'sair',
      component: Clubes
    },
  ]
})

export default router
