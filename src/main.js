import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueTypedJs from 'vue-typed-js'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';


import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false
Vue.use(Vuesax)
Vue.use(VueTypedJs)

new Vue({
  render: h => h(App),
}).$mount('#app')
