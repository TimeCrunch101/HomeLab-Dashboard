import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('../views/DocumentationView.vue')
    },
    {
      path: '/asset_man',
      name: 'asset management',
      component: () => import('../views/AssetManagement.vue')
    },
    {
      path: '/cost_overview',
      name: 'cost overview',
      component: () => import('../views/CostOverview.vue')
    },
    {
      path: '/change_log',
      name: 'change log',
      component: () => import('../views/ChangeLog.vue')
    },
    {
      path: '/view/service/:service_id',
      name: 'View Service',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/document',
      name: 'View Document',
      component: () => import('../views/DocumentView.vue')
    },
    {
      path: '/buttons',
      name: 'Buttons View',
      component: () => import('../views/ButtonsView.vue')
    },
    {
      path: '/create/document',
      name: 'New Document',
      component: () => import('../views/NewDocument.vue')
    },
  ]
})

export default router
