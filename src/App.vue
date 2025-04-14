<template>
	<NaiveProvider>
		<RouterView />
	</NaiveProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NaiveProvider from '@/layouts/NaiveProvider.vue'
</script>
