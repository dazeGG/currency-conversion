<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'
import { generateOptionsToCurrencies } from '@/lib/utils'

import { NSelect } from 'naive-ui'

import type { SelectOption } from 'naive-ui'

const currenciesStore = useCurrenciesStore()

const options = computed<SelectOption[]>(() => generateOptionsToCurrencies(currenciesStore.currenciesList))

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
