import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/pages/HomePage.vue'),
	},
	{
		path: '/convert',
		name: 'convert',
		component: () => import('@/pages/ConvertPage.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: () => import('@/layouts/ErrorLayout.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
