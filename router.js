import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
const mainPage = () => import('@/page/main/main')
const Routes = []
const globalRoutes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/main',
    component: mainPage,
    name: 'main',
    meta: { title: '主入口整体布局' },
    children: [],
  }
]

const files = require.context('../page/', true, /\.vue$/)
files.keys().forEach(res => {
  const path = res.replace(/(\.|vue)/g, '')
  const arr = path.split('/')
  const name =arr.pop()
  const moduleName = arr.pop()
  const component = {
    path: path.replace('_', ':'),
    name: name,
    component: () => import(`@/page${path}`)
  }
  globalRoutes.forEach((v, i) => {
    if (v.name === name) return
    if (v.name === moduleName) {
      globalRoutes[i].children.push(component)
    } else {
      Routes.push(component)
    }
  })
})
Vue.use(Router)

const router = new Router({

  routes: globalRoutes.concat(Routes)
})

export default router
