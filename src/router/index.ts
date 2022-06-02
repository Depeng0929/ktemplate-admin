import { createRouter, createWebHistory } from 'vue-router'
import Layout from '~/layout/index.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('~/views/dashboard/index.vue'),
          meta: {
            title: 'Dashboard',
          },
        },
      ],
    },
  ],
})

export default router
