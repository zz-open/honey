import { createRouter, createWebHashHistory } from '@/shared/deps'
import { getRoutes } from './route'
import { guardSetUp } from './guard'

const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

guardSetUp(router)

export { router }