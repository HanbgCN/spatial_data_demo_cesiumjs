import { backendRoutes } from './admin/backend'
import { fileRoutes } from './admin/file'
export const adminRoutes = [
  {
    path: '/admin',
    name: '/admin',
    redirect: '/admin/index',
    meta: {
      label: null
    },
    children: [
      {
        path: '/admin/index',
        name: '/admin/index',
        meta: {
          label: '首页'
        },
        component: () => import('@/views/admin/HomePage.vue')
      }
    ]
  },
  ...backendRoutes,
  ...fileRoutes
]

export const adminRoutePaths = adminRoutes.map((route) => route.path)
