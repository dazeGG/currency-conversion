<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'

import BaseCurrencyRatioView from '@/components/views/BaseCurrencyRatioView.vue'

const currenciesStore = useCurrenciesStore()

const currenciesListExceptBase = computed<string[]>(() =>
	currenciesStore.currenciesList.filter(currency => currency !== currenciesStore.baseCurrency))
</script>

<template>
	<div>
		<h3>Курсы валют к основной валюте</h3>
		<div class="flex flex-col mt-2">
			<div v-for="currency in currenciesListExceptBase" :key="currency">
				<BaseCurrencyRatioView :currency="currency" />
			</div>
		</div>
	</div>
</template>
