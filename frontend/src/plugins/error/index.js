export default {
  install(app) {
    errorSetUp(app)
  }
}

export const errorSetUp = async (app) => {
  // 全局异常处理
  app.config.errorHandler = (err) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子

    if (!err) {
      return
    }

    console.error('====== 有报错了兄弟!!! ======', err)
    if (err instanceof Error) {
      console.error('❌ 提示:', err.message)
    }
  }
}