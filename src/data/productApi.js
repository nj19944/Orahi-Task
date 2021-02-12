import axios from 'axios';

export default class ProductApi {
	static getAllData(cb) {
		axios.get('https://demo5636362.mockable.io/stats')
			.then(response => cb(response.data))
			.catch(error => { throw error });
	}
}