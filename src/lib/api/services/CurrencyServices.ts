import { CurrencyMethods } from '@/lib/api/methods'

class CurrenciesServices {
	async getCurrenciesRatios () {
		const res = await CurrencyMethods.getCurrenciesRatios()
		return res.data
	}
}

export default new CurrenciesServices()
