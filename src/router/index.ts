import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { gisRoutes } from './gis'
import { adminRoutes } from './admin'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/admin',
      component: () => import('@/views/HomeView.vue'),
      children: [...adminRoutes] as RouteRecordRaw[]
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue'),
      children: []
    },
    ...gisRoutes
  ]
})

export default router
