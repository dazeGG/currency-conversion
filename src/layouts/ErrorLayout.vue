<template>
	<div class="flex flex-col gap-4 justify-center items-center w-full" :style="{ height: '100vh' }">
		<h1>{{ props.code }} | {{ props.message }}</h1>
		<NButton @click="routeToProductsPage">Go to home page</NButton>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { NButton } from 'naive-ui'

const router = useRouter()

const props = withDefaults(
	defineProps<{
		code?: number
		message?: string
	}>(),
	{
		code: 404,
		message: 'Not Found',
	},
)

const routeToProductsPage = () => router.push('/')
</script>
