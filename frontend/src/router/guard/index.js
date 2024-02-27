import { loginGuard } from './loginGuard'

export const guardSetUp = (router) => {
  loginGuard(router)
}