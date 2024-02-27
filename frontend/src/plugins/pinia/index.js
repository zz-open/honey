import { createPinia } from 'pinia'

const pinia = createPinia()

export default {
  install(app) {
    piniaSetUp(app)
  }
}

export const piniaSetUp = async (app) => {
  app.use(pinia)
}