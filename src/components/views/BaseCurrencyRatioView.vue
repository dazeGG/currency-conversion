<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'

const currenciesStore = useCurrenciesStore()

const props = defineProps<{
	currency: string
}>()

const formattedCurrencyView = computed<string | null>(() => {
	const baseCurrency = currenciesStore.baseCurrency.toUpperCase()
	const currencyRatio = currenciesStore.getCurrenciesRatio(props.currency)

	if (currencyRatio) {
		let formattedRatio = Math.round(currencyRatio * 100) / 100
		if (formattedRatio === 0) {
			formattedRatio = currencyRatio
		}
		return `1 ${baseCurrency} = ${formattedRatio} ${props.currency.toUpperCase()}`
	} else {
		return null
	}
})
</script>

<template>
	<span v-if="formattedCurrencyView">{{ formattedCurrencyView }}</span>
</template>
