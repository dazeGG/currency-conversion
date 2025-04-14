<script setup lang="ts">
import { useCurrenciesStore } from '@/store'

const currenciesStore = useCurrenciesStore()

const created = async () => {
	await currenciesStore.loadCurrenciesRatios()
	console.log(currenciesStore.currenciesList)
}

created()
</script>

<template>
	<h1>Home page</h1>
</template>
