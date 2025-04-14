<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'

import { NSelect } from 'naive-ui'

import type { SelectOption } from 'naive-ui'

const currenciesStore = useCurrenciesStore()

const options = computed<SelectOption[]>(() =>
	currenciesStore.currenciesList.map(currency => ({ label: currency.toUpperCase(), value: currency })))

const changeBaseCurrency = (newBaseCurrency: string) => {
	currenciesStore.setBaseCurrency(newBaseCurrency)
}
</script>

<template>
	<NSelect
		:value="currenciesStore.baseCurrency"
		:options="options"
		class="min-w-20"
		@update:value="changeBaseCurrency"
	/>
</template>
