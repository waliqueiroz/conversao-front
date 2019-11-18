import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import NProgress from 'nprogress';
import store from './store'  // Arquivo de configuração do vuex (flux)

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css'
import '../node_modules/nprogress/nprogress.css'

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
