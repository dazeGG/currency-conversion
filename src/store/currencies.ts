import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CurrencyServices } from '@/lib/api/services'

export const useCurrenciesStore = defineStore('currencies', () => {
	const currenciesRatios = ref<Record<string, number>>({})

	const currenciesList = computed<string[]>(() => {
		const currencies: Set<string> = new Set()

		Object.keys(currenciesRatios.value).forEach(currencyRatioKey => {
			currencyRatioKey.split('-').forEach(currency => currencies.add(currency))
		})

		return Array.from(currencies)
	})

	const loadCurrenciesRatios = async () => {
		currenciesRatios.value = await CurrencyServices.getCurrenciesRatios()
	}

	return {
		currenciesRatios,
		currenciesList,
		loadCurrenciesRatios,
	}
})
