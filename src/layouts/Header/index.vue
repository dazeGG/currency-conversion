<script setup lang="ts">
import BaseCurrency from '@/layouts/Header/BaseCurrency.vue'
import Navbar from '@/layouts/Header/Navbar.vue'
</script>

<template>
	<div class="flex justify-between py-2">
		<a href="https://github.com/dazeGG" target="_blank">
			<h2>dazeGG</h2>
		</a>
		<div class="flex gap-2 items-center">
			<Navbar />
			<BaseCurrency />
		</div>
	</div>
</template>
