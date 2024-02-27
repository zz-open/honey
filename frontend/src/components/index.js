import * as components from './components'
export * from './components'

export const install = function (app) {
  const _components = components
  for (const [_, component] of Object.entries(_components)) {
    if (component.install) {
      app.use(component)
    }
  }

  return app
}

export default { install }