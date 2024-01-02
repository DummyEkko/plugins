import { createRouter, createWebHashHistory } from 'vue-router'
import TabA from '../pages/TabA.vue'
import TabB from '../pages/TabB.vue'

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    // {
    //   path: '/',
    //   name: 'tabA',
    //   component: TabA
    // },
    // {
    //   path: '/tab-b',
    //   name: 'tabB',
    //   component: TabB
    // },
    {
      path: '/',
      name: 'gl',
      component: () => import('@/pages/webgl.vue')
    }
  ]
})

export default router
