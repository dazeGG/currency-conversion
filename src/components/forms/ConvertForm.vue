<script setup lang="ts">
import { computed, reactive } from 'vue'
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
		value: 1,
	},
	{
		currency: 'usd',
		value: 1,
	},
])

const firstCurrencySelectOptions = computed<SelectOption[]>(() =>
	generateOptionsToCurrencies(currenciesStore.currenciesList.filter(currency => currency !== convertItems[1].currency)))

const secondCurrencySelectOptions = computed<SelectOption[]>(() =>
	generateOptionsToCurrencies(currenciesStore.currenciesList.filter(currency => currency !== convertItems[0].currency)))
</script>

<template>
	<div class="flex gap-2">
		<NInputGroup>
			<NInputNumber v-model:value="convertItems[0].value" :show-button="false" />
			<NSelect v-model:value="convertItems[0].currency" :options="firstCurrencySelectOptions" class="max-w-20" />
		</NInputGroup>
		<NButton quaternary>
			<template #icon>
				<Icon icon="ph:arrows-left-right-light" />
			</template>
		</NButton>
		<NInputGroup>
			<NInputNumber v-model:value="convertItems[1].value" :show-button="false" />
			<NSelect v-model:value="convertItems[1].currency" :options="secondCurrencySelectOptions" class="max-w-20" />
		</NInputGroup>
	</div>
</template>
