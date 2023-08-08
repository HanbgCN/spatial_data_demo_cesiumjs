export const base = '/file'
export const fileRoutes = [
  {
    path: `${base}`,
    name: `${base}`,
    redirect: `${base}/dynamic-book`,
    meta: {
      label: '文件管理'
    },
    children: [
      {
        path: `${base}/mine-file`,
        name: `${base}/mine-file`,
        meta: {
          label: '我的文件'
        },
        component: () => import('@/views/file/MineFilePage.vue')
      },
      {
        path: `${base}/mine-folder`,
        name: `${base}/mine-folder`,
        meta: {
          label: '个人文件夹'
        },
        component: () => import('@/views/file/MineFolderPage.vue')
      },
      {
        path: `${base}/publish-center`,
        name: `${base}/publish-center`,
        meta: {
          label: '发布中心'
        },
        component: () => import('@/views/file/PublishCenterPage.vue')
      },
      {
        path: `${base}/file-center`,
        name: `${base}/file-center`,
        meta: {
          label: '文件中心'
        },
        component: () => import('@/views/file/FileCenterPage.vue')
      },
      {
        path: `${base}/dynamic-book`,
        name: `${base}/dynamic-book`,
        meta: {
          label: '动态台账'
        },
        component: () => import('@/views/file/DynamicBookPage.vue')
      },
      {
        path: `${base}/dynamic-book/info`,
        name: `${base}/dynamic-book/info`,
        meta: {
          label: '台账详情'
        },
        component: () => import('@/views/file/DynamicBookInfoPage.vue')
      }
    ]
  }
]

export const fileRoutePaths = fileRoutes.map((route) => route.path)
