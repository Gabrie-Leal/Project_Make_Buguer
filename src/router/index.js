import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//rotas
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Pedidos',//caminho url
    name: 'Pedidos',//nome
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
