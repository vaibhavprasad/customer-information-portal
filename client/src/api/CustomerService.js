import axios from 'axios';

export function getCustomerData (customerId = null) {
	return axios({
		method: 'get',
		url: '/api/customers',
		params: {
			customerId
		}
	}).then( response => {
		return response.data;
	}).catch( error => {
		console.log(error);
	});
}
export function getCustomerAddresses (customerId = null) {
	return axios({
		method: 'get',
		url: '/api/addresses',
		params: {
			id: customerId
		}
	}).then( response => {
		return response.data;
	}).catch( error => {
		console.log(error);
	});
}
