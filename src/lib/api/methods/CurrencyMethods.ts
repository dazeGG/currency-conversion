import API from '@/lib/api'

class CurrencyMethods {
	getCurrenciesRatios () {
		return API.get('/currency')
	}
}

export default new CurrencyMethods()
