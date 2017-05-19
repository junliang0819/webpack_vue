import router from 'vue-router'
import vueRouter from 'vue-router'
import homeRoutes from './home.js'


let routes = []
routes = routes.concat(homeRoutes)

export default new vueRouter({
	routes
})