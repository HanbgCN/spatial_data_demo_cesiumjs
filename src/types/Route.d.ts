export type RouteMeta = {
  label?: string
}
export type Route = {
  path: string
  name: string
  meta: RouteMeta
  icon?: string
  component: () => any
  children?: Route[]
}
