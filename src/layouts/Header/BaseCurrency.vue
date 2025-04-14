<script setup lang="ts">
import { computed } from 'vue'
import { useCurrenciesStore } from '@/store'

import { NSelect } from 'naive-ui'

import type { SelectOption } from 'naive-ui'

const currenciesStore = useCurrenciesStore()

const options = computed<SelectOption[]>(() =>
	currenciesStore.currenciesList.map(currency => ({ label: currency.toUpperCase(), value: currency })))
</script>

<template>
	<NSelect
		v-model:value="currenciesStore.baseCurrency"
		:options="options"
		class="min-w-20"
		@update:value="currenciesStore.saveBaseCurrency"
	/>
</template>
