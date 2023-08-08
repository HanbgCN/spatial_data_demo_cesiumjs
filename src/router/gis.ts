export const gisBase = '/gis'
export const gisRoutes = [
  {
    path: `${gisBase}/index`,
    name: `${gisBase}/index`,
    component: () => import('@/views/ThreeDView.vue')
  }
]

export const gisRoutePaths = gisRoutes.map((route) => route.path)
