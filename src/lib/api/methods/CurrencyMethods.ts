import API from '@/lib/api'

class CurrencyMethods {
	getCurrencies () {
		return API.get('/currency')
	}
}

export default new CurrencyMethods()
