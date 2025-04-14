import { createWebHistory, createRouter } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/pages/HomePage.vue'),
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
