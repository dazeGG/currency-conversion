import type { SelectOption } from 'naive-ui'

const generateOptionsToCurrencies = (currencies: string[]): SelectOption[] =>
	currencies.map(currency => ({ label: currency.toUpperCase(), value: currency }))

export {
	generateOptionsToCurrencies,
}
