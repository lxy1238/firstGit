import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
const mainPage = () => import('@/page/main/main')
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
  if(arr.length === 1){
    globalRoutes.push(
      {
        path: path.replace('_', ':'),
        name: name,
        component: () => import(`@/page${path}`)
      }
    )
    return
  } 
  const moduleName = arr.pop()
  globalRoutes.forEach((v, i) => {
    if (v.name === name) return
    if (v.name === moduleName && v.name === name) {
      globalRoutes[i].children.push(
        {
          path: path.replace('_', ':'),
          name: name,
          component: () => import(`@/page${path}`)
        }
      )
    } else {
      globalRoutes.push(
        {
          path: path.replace('_', ':'),
          name: name,
          component: () => import(`@/page${path}`)
        }
      )
    }
  })
})
Vue.use(Router)

const router = new Router({

  routes: globalRoutes
})

export default router
