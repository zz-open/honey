import { router } from '@/router/router'

export default {
  install(app) {
    vueRouterSetUp(app)
  }
}

export const vueRouterSetUp = async (app) => {
  app.use(router)
} 