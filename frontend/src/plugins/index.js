import { globalSetUp } from './global'
import { errorSetUp } from './error'
import { piniaSetUp } from './pinia'
import { vueRouterSetUp } from './vue-router'

export const pluginsSetUp = async (app) => {
  await globalSetUp(app)
  await errorSetUp(app)
  await piniaSetUp(app)
  await vueRouterSetUp(app)
}