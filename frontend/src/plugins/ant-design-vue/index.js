import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/reset.css'

export default {
  install(app) {
    setupAntDesignVue(app)
  }
}

export const setupAntDesignVue = async (app) => {
  const icons = antIcons
  for (const i in icons) {
    app.component(i, icons[i])
  }
}