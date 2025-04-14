<script setup lang="ts">
import Header from '@/layouts/Header/index.vue'
</script>

<template>
	<div>
		<Header />
		<main>
			<slot></slot>
		</main>
	</div>
</template>
