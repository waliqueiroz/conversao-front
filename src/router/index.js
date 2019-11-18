import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/paginas/Form'
import Confirmacao from '@/paginas/Confirmacao'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form,
    },
    {
      path: '/invite/:hash',
      name: 'Conversao',
      component: Form,
    },
    {
      path: '/link',
      name: 'Link',
      component: Confirmacao,
    },
  ]
})
