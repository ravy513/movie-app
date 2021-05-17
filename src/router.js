import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routerHistory = createWebHistory()
const routes = [
    { path: '/', component: Home ,name:'home' },
    { path: '/detail/:id', name:'detail', component: Detail }
  ]
  const router = createRouter({
    history: routerHistory,
    routes // short for `routes: routes`
  })
  // router.beforeEach((to, _, next) => {
  //     console.log(to,"***")
  //     return next()
  // })
export default router;