<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'

const currenciesStore = useCurrenciesStore()

const currenciesListExceptBase = computed<string[]>(() =>
	currenciesStore.currenciesList.filter(currency => currency !== currenciesStore.baseCurrency))

const getFormattedCurrencyView = (currency: string): string | null => {
	const baseCurrency = currenciesStore.baseCurrency.toUpperCase()
	const currencyRatio = currenciesStore.getCurrenciesRatio(currency)

	if (currencyRatio) {
		let formattedRatio = Math.round(currencyRatio * 100) / 100
		if (formattedRatio === 0) {
			formattedRatio = currencyRatio
		}
		return `1 ${baseCurrency} = ${formattedRatio} ${currency.toUpperCase()}`
	} else {
		return null
	}
}
</script>

<template>
	<div>
		<h3>Курсы валют к основной валюте</h3>
		<div class="flex flex-col mt-2">
			<div v-for="currency in currenciesListExceptBase" :key="currency">
				<span v-if="getFormattedCurrencyView(currency)">{{ getFormattedCurrencyView(currency) }}</span>
			</div>
		</div>
	</div>
</template>
