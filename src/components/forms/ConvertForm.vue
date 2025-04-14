<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { useCurrenciesStore } from '@/store'
import { generateOptionsToCurrencies } from '@/lib/utils'

import { NInputGroup, NInputNumber, NSelect, NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'

import type { SelectOption } from 'naive-ui'

type IConvert = {
	currency: string
	value: number
}

const currenciesStore = useCurrenciesStore()

const convertItems = reactive<[IConvert, IConvert]>([
	{
		currency: 'rub',
		value: 0,
	},
	{
		currency: 'usd',
		value: 0,
	},
])

const firstCurrencySelectOptions = computed<SelectOption[]>(() =>
	generateOptionsToCurrencies(currenciesStore.currenciesList.filter(currency => currency !== convertItems[1].currency)))

const secondCurrencySelectOptions = computed<SelectOption[]>(() =>
	generateOptionsToCurrencies(currenciesStore.currenciesList.filter(currency => currency !== convertItems[0].currency)))

const roundValue = (value: number): number => {
	const roundedValue = Math.round(value * 100) / 100
	if (roundedValue !== 0) {
		return roundedValue
	} else {
		return Math.round(value * 100000) / 100000
	}
}

const syncFirstValue = (): void => {
	const convertRatio = currenciesStore.getCurrenciesRatio(convertItems[0].currency, convertItems[1].currency)
	if (convertRatio) {
		convertItems[0].value = roundValue(convertItems[1].value * convertRatio)
	}
}

const syncSecondValue = () => {
	const convertRatio = currenciesStore.getCurrenciesRatio(convertItems[1].currency, convertItems[0].currency)
	if (convertRatio) {
		convertItems[1].value = roundValue(convertItems[0].value * convertRatio)
	}
}

const initConvertItems = () => {
	const convertCurrencies = localStorage.getItem('convertCurrencies') ?? null
	if (convertCurrencies) {
		const convertCurrenciesItems = convertCurrencies.split('-')
		convertItems[0].currency = convertCurrenciesItems[0]
		convertItems[1].currency = convertCurrenciesItems[1]
	}
	convertItems[0].value = 1
	syncSecondValue()
}

const created = () => {
	initConvertItems()
}

created()

watch(
	() => currenciesStore.currenciesRatios,
	initConvertItems,
	{
		once: true,
	},
)
</script>

<template>
	<div class="flex gap-2">
		<NInputGroup>
			<NInputNumber v-model:value="convertItems[0].value" :show-button="false" @input="syncSecondValue" />
			<NSelect v-model:value="convertItems[0].currency" :options="firstCurrencySelectOptions" class="max-w-20" />
		</NInputGroup>
		<NButton quaternary>
			<template #icon>
				<Icon icon="ph:arrows-left-right-light" />
			</template>
		</NButton>
		<NInputGroup>
			<NInputNumber v-model:value="convertItems[1].value" :show-button="false" @input="syncFirstValue" />
			<NSelect v-model:value="convertItems[1].currency" :options="secondCurrencySelectOptions" class="max-w-20" />
		</NInputGroup>
	</div>
</template>
