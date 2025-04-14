import axios from 'axios'

const API = axios.create({
	baseURL: 'https://status.neuralgeneration.com/api',
})

export default API
