import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CurrencyServices } from '@/lib/api/services'

export const useCurrenciesStore = defineStore('currencies', () => {
	const baseCurrency = ref<string>(localStorage.getItem('baseCurrency') ?? 'rub')

	const saveBaseCurrency = (): void => {
		localStorage.setItem('baseCurrency', baseCurrency.value)
	}

	const getBaseCurrency = computed<string>(() => baseCurrency.value)

	const currenciesRatios = ref<Record<string, number>>({})

	const currenciesList = computed<string[]>(() => {
		const currencies: Set<string> = new Set()

		Object.keys(currenciesRatios.value).forEach(currencyRatioKey => {
			currencyRatioKey.split('-').forEach(currency => currencies.add(currency))
		})

		return Array.from(currencies)
	})

	const loadCurrenciesRatios = async (): Promise<void> => {
		currenciesRatios.value = await CurrencyServices.getCurrenciesRatios()
	}

	const getCurrenciesRatio = (currency: string, conversionCurrency?: string): number | null => {
		return currenciesRatios.value[conversionCurrency ?? baseCurrency.value + '-' + currency] ?? null
	}

	const init = () => {
		loadCurrenciesRatios()
	}

	init()

	return {
		baseCurrency,
		getBaseCurrency,
		saveBaseCurrency,
		currenciesRatios,
		currenciesList,
		loadCurrenciesRatios,
		getCurrenciesRatio,
	}
})
