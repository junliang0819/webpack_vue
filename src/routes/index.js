import router from 'vue-router'
import vueRouter from 'vue-router'
import homeRoutes from './home.js'
import error from 'src/views/error.vue'

let routes = [
		{
			path: '*',
			component: error
		}
	]
routes = routes.concat(homeRoutes)

export default new vueRouter({
	mode: 'history',
	routes
})