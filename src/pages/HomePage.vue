<script setup lang="ts">
import { CurrencyServices } from '@/lib/api/services'

const created = async () => {
	const currencies = await CurrencyServices.getCurrencies()
	console.log(currencies)
}

created()
</script>

<template>
	<h1>Home page</h1>
</template>
