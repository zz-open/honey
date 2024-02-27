/**** Component ****/
export const EXCEPTION_COMPONENT = () => import('@/views/exception')
export const EXAMPLE_COMPONENT = () => import('@/views/example')
export const LOGIN_COMPONENT = () => import('@/views/login')

export const LOGIN_ROUTE = {
  name: 'Login',
  path: '/login'
}

export const ROOT_ROUTE = {
  name: 'Root',
  path: '/'
}

export const HOME_ROUTE = {
  name: 'Home',
  path: '/home'
}

export const PAGE_NOT_FOUND_ROUTE = {
  name: 'PageNotFound',
  childrenName: 'PageNotFoundChildren',
  path: '/:pathMatch(.*)*'
}

const PageNotFoundRoute = {
  path: PAGE_NOT_FOUND_ROUTE.path,
  name: PAGE_NOT_FOUND_ROUTE.name,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: '404'
  }
}

const LoginRoute = {
  name: LOGIN_ROUTE.name,
  path: LOGIN_ROUTE.path,
  component: LOGIN_COMPONENT,
  meta: { title: '登录页面' }
}

const ExampleRoute = {
  path: '/example',
  name: 'example',
  component: EXAMPLE_COMPONENT
}

const _route = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: HOME_ROUTE.path,
  component: () => import('@/views/default/layout/layout-default'),
  meta: { title: '项目根路径' },
  children: [
    {
      path: HOME_ROUTE.path,
      name: HOME_ROUTE.name,
      component: () => import('@/views/home')
    }
  ]
}

export const getRoutes = () => {
  return [
    PageNotFoundRoute,
    ExampleRoute, 
     _route
    ]
}