<template>
	<div class="flex flex-col gap-4 justify-center items-center w-full" :style="{ height: '100vh' }">
		<h1>404 | Not Found</h1>
		<NButton @click="routeToProductsPage">Go to products page</NButton>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { NButton } from 'naive-ui'

const router = useRouter()

const routeToProductsPage = () => router.push('/products')
</script>
