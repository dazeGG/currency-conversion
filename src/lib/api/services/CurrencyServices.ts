import { CurrencyMethods } from '@/lib/api/methods'

class CurrenciesServices {
	async getCurrencies () {
		const res = await CurrencyMethods.getCurrencies()
		return res.data
	}
}

export default new CurrenciesServices()
