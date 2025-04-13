import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/pages/HomePage.vue'),
	},
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	component: () => import('@/layouts/404.vue'),
	// },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
