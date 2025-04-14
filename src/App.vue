<template>
	<Provider>
		<ErrorLayout v-if="hasError" />
		<MainLayout v-else>
			<RouterView />
		</MainLayout>
	</Provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { RouterView } from 'vue-router'
import Provider from '@/layouts/Provider.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import ErrorLayout from '@/layouts/ErrorLayout.vue'

const route = useRoute()

const hasError = computed<boolean>(() => route.name === '404')
</script>
