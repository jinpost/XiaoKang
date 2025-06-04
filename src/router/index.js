import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', name: 'login', component: () => import('@/views/login/LoginIndex.vue') },
    { path: '/hello', name: 'hello', component: () => import('@/views/Hello/index.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutIndex.vue'),
      redirect: '/hello',// 这个是重定向
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/home/article',
          name: 'article',
          component: () => import('@/views/article/index.vue')
        }
      ]
    },
  ],
})

export default router
