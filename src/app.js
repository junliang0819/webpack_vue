import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import app from './views/app.vue'
import router from './routes'
Vue.use(VueRouter)
Vue.use(Mint)

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')