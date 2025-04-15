<script setup lang="ts">
import { useCurrenciesStore } from '@/store'
import { generateOptionsToCurrencies } from '@/lib/utils'

import { computed, nextTick } from 'vue'
import { NInputGroup, NInputNumber, NSelect } from 'naive-ui'

import type { SelectOption } from 'naive-ui'

const currenciesStore = useCurrenciesStore()

const value = defineModel<number>('value', { required: true })
const currency = defineModel<string>('currency', { required: true })

const emit = defineEmits<{
	(e: 'sync'): void
}>()

const props = defineProps<{
	secondCurrency: string
}>()

const sync = (): void => {
	emit('sync')
}

const currencies = computed<SelectOption[]>(() =>
	generateOptionsToCurrencies(currenciesStore.currenciesList.filter(currency => currency !== props.secondCurrency)))
</script>

<template>
	<NInputGroup>
		<NInputNumber v-model:value="value" :show-button="false" @input="sync" />
		<NSelect
			v-model:value="currency"
			:options="currencies"
			class="max-w-20"
			@update:value="sync"
			@updateValue="() => nextTick(saveConvertCurrencies)"
		/>
	</NInputGroup>
</template>
