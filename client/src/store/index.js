import Vue from 'vue'
import Vuex from 'vuex'

import {
	getCustomerData,
	getCustomerAddresses
} from '@/api/CustomerService';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		customerData: [],
		selectedCustomer: {},
		customerAddresses: []
	},
	mutations: {
		setSelectedUser (state, customer) {
			state.selectedCustomer = customer;
		},
		setCustomerData (state, data) {
			state.customerData = data;
		},
		setCustomerAddresses (state, addresses) {
			state.customerAddresses = addresses;
		}
	},
	actions: {
		async getCustomerData({ dispatch, commit, state }) {
			let data = await getCustomerData();
			commit('setCustomerData', data);
		},
		async getCustomerAddresses({ dispatch, commit, state }) {
			let data = await getCustomerAddresses(state.selectedCustomer.id);
			commit('setCustomerAddresses', data);
		}
	},
	getters: {
		getCustomerData (state) {
			return state.customerData;
		},
		getCustomerAddresses (state) {
			return state.customerAddresses;
		},
		getSelectedCustomer (state) {
			return state.selectedCustomer;
		}
	}
})
