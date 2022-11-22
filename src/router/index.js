import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Usuarios from '../views/Usuarios.vue'
import Clubes from '../views/Clubes.vue'
import DetalhesClube from '../views/DetalhesClube.vue'
import DetalhesUsuario from '../views/DetalhesUsuario.vue'
import AdicionarUsuario from '../views/AdicionarUsuario.vue'
import AdicionarClube from '../views/AdicionarClube.vue'
import Assinatura from '../views/Assinatura.vue'
import EditarUsuario from '../views/EditarUsuario.vue'
import EditarClube from '../views/EditarClube.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detalhesClube',
      name: 'detalhesClube',
      component: DetalhesClube,
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
      path: '/detalhesUsuario',
      name: 'detalhesUsuario',
      component: DetalhesUsuario,
    },
    {
      path: '/sair',
      name: 'sair',
      component: Clubes
    },
    {
      path: '/adicionarUsuario',
      name: 'adicionarUsuario',
      component: AdicionarUsuario
    },
    {
      path: '/adicionarClube',
      name: 'adicionarClube',
      component: AdicionarClube
    },
    {
      path: '/assinatura',
      name: 'assinatura',
      component: Assinatura
    },
    {
      path: '/editarUsuario',
      name: 'editarUsuario',
      component: EditarUsuario
    },
    {
      path: '/editarClube',
      name: 'editarClube',
      component: EditarClube
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})

export default router
