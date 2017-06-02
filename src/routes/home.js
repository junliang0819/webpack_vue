import home from 'src/views/home.vue'
import error from 'src/views/error.vue'

export default [
	{
		path: '*',
    component: error
	},
	{
    path: '/home',
    component: home,
    meta: { title: '主页'},
  }
]