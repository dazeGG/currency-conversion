<script setup lang="ts">
import { reactive, watch } from 'vue'
import { cloneDeep } from 'lodash'
import { useCurrenciesStore } from '@/store'

import { NButton } from 'naive-ui'
import { Icon } from '@iconify/vue'
import ConvertInputGroup from '@/components/forms/ConvertForm/ConvertInputGroup.vue'

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

const roundValue = (value: number): number => Math.round(value * 100) / 100

const sync = (i: 0 | 1): void => {
	const j: number = (i + 1) % 2

	const convertRatio = currenciesStore.getCurrenciesRatio(convertItems[i].currency, convertItems[j].currency)
	if (convertRatio) {
		convertItems[i].value = roundValue(convertItems[j].value * convertRatio)
	}
}

const swapConvertItems = () => {
	const tmpConvertItem = cloneDeep(convertItems[0])
	convertItems[0] = cloneDeep(convertItems[1])
	convertItems[1] = cloneDeep(tmpConvertItem)
}

const saveConvertCurrencies = (): void => {
	localStorage.setItem('convertCurrencies', convertItems[0].currency + '-' + convertItems[1].currency)
}

const initConvertItems = (): void => {
	const convertCurrencies = localStorage.getItem('convertCurrencies') ?? null
	if (convertCurrencies) {
		const convertCurrenciesItems = convertCurrencies.split('-')
		convertItems[0].currency = convertCurrenciesItems[0]
		convertItems[1].currency = convertCurrenciesItems[1]
	}
	convertItems[0].value = 1
	sync(1)
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
		<ConvertInputGroup
			v-model:value="convertItems[0].value"
			v-model:currency="convertItems[0].currency"
			:second-currency="convertItems[1].currency"
			@sync="sync(1)"
			@update:currency="saveConvertCurrencies"
		/>
		<NButton quaternary @click="swapConvertItems">
			<template #icon>
				<Icon icon="ph:arrows-left-right-light" />
			</template>
		</NButton>
		<ConvertInputGroup
			v-model:value="convertItems[1].value"
			v-model:currency="convertItems[1].currency"
			:second-currency="convertItems[0].currency"
			@sync="sync(0)"
			@update:currency="saveConvertCurrencies"
		/>
	</div>
</template>
