export const base = '/backend'
export const backendRoutes = [
  {
    path: `${base}`,
    name: `${base}`,
    redirect: `${base}/user`,
    meta: {
      label: '后台管理'
    },
    children: [
      {
        path: `${base}/user`,
        name: `${base}/user`,
        meta: {
          label: '用户管理'
        },
        component: () => import('@/views/backend/UserManagementPage.vue')
      },
      {
        path: `${base}/authorization`,
        name: `${base}/authorization`,
        meta: {
          label: '权限管理'
        },
        component: () => import('@/views/backend/AuthorizationPage.vue')
      },
      {
        path: `${base}/partment-list`,
        name: `${base}/partment-list`,
        meta: {
          label: '部门列表'
        },
        component: () => import('@/views/backend/PartmentListPage.vue')
      },
      {
        path: `${base}/partment-structure`,
        name: `${base}/partment-structure`,
        meta: {
          label: '部门结构'
        },
        component: () => import('@/views/backend/PartmentStructurePage.vue')
      }
    ]
  }
]

export const backendRoutePaths = backendRoutes.map((route) => route.path)
