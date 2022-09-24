
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/curriculo',
        component: () => import('pages/CurriculoPage.vue')
      },
      {
        path: '/projetos',
        component: () => import('pages/ProjetosPage.vue')
      },
      {
        path: '/contato',
        component: () => import('pages/ContatoPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
