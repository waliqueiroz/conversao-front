import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/paginas/Form'
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
      path: '/:hash',
      name: 'Conversao',
      component: Form,
    },
  ]
})
