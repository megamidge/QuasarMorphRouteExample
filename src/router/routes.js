
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        meta: {
          logoInTopBar: false
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'other',
        meta: {
          logoInTopBar: true
        },
        component: () => import('pages/Other.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
