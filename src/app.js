import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import app from './views/app.vue'
import router from './routes'
Vue.use(VueRouter)
Vue.use(Element)

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')