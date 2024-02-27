import VueDOMPurifyHTML from 'vue-dompurify-html'
import MyComponents from '@/components'

export default {
  install(app) {
    globalSetUp(app)
  }
}

export const globalSetUp = async (app) => {
  app.use(VueDOMPurifyHTML)
  app.use(MyComponents)
}