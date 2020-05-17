<template>
	<div class="main-container">
		<div class="page-header color-primary">
			Customer Information Portal
		</div>
		<div class="snapshot-container">
			<custom-table :config="tableConfig" :data="customerData" @onRowSelect="getCustomerData"></custom-table>
		</div>
		<div class="details-container">
			<template v-if="selectedCustomer.name">
				<label>Addresses for - {{selectedCustomer.name}}</label>
				<div class="address" v-for="item in customerAddress" :key="item.id">
					<label class="justify-right">Address Line 1: </label> <div class="value-content">{{item.address}}</div>
					<label class="justify-right">City: </label> <div class="value-content">{{item.city}}</div>
					<label class="justify-right">District: </label> <div class="value-content">{{item.district}}</div>
					<label class="justify-right">State:</label> <div class="value-content">{{item.state}}</div>
					<label class="justify-right">Landmark:</label> <div class="value-content">{{item.landmark}}</div>
					<label class="justify-right">PIN:</label> <div class="value-content">{{item.pinCode}}</div>
					<label class="justify-right">Phone:</label> <div class="value-content">{{item.phone}}</div>
				</div>
				<div v-if="notFoundAddressses" class="address-message">Addresses not available</div>
			</template>
			<template v-else>
				<div>
					No User Selected
				</div>
			</template>
		</div>
		<div class="page-footer"></div>
	</div>
	
</template>
<script>
import CustomTable from '@/components/CustomTable.vue';
import { mapGetters } from 'vuex';

export default {
	name: 'CustomerView',
	components: {
		CustomTable
	},
	data () {
		return {
			tableConfig: [{
				title: 'Customer ID',
				align: 'center',
				value: 'cid',
				width: ''
			}, {
				title: 'Name',
				align: 'center',
				value: 'name',
				width: ''
			}, {
				title: 'Age',
				align: 'center',
				value: 'age',
				width: ''
			}, {
				title: 'Sex',
				align: 'center',
				value: 'sex',
				width: ''
			}]
		};
	},
	computed: {
		...mapGetters ({
			customerData: 'getCustomerData',
			customerAddress: 'getCustomerAddresses',
			selectedCustomer: 'getSelectedCustomer'
		}),
		notFoundAddressses () {
			return this.customerAddress && this.customerAddress.length === 0;
		}
	},
	mounted () {
		this.$store.dispatch('getCustomerData');
	},
	methods: {
		getCustomerData (selectedCustomer) {
			this.$store.commit('setSelectedUser', selectedCustomer);
			this.$store.dispatch('getCustomerAddresses');
		}
	}
};
</script>
<style scoped lang="scss">

	@mixin grid-mix($row, $column, $gap) {
		display: grid;
		grid: {
			template: {
				rows: $row;
				columns: $column;
			}
			gap: $gap;
		}
	}

	.main-container {
		@include grid-mix(3rem 1fr 1fr 3rem, 100%, 0rem);
		height: 100%;
	}
	.page-header {
		grid-column: span 1;
		background-color: #3a92a3;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		padding-left: 0.5rem;
	}
	.page-footer {
		grid-column: span 1;
		border-top: 1px solid #b3b3b3
	}
	@media (min-width: 700px) {
		.main-container {
			@include grid-mix(3rem 1fr 3rem, 60% calc(40% - 0rem), 0rem);
			height: 100%;
		}
		.page-header {
			grid-column: span 2;
			// background-color: #8860D0;
			background-color: #3a92a3;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			padding-left: 0.5rem;
		}

		.page-footer {
			grid-column: span 2;
			border-top: 1px solid #b3b3b3
		}
	}
	.snapshot-container {
		overflow: hidden;
		background-color: whitesmoke;
		margin: 0.25rem;
	}
	.snapshot-container:hover {
		overflow: auto;
	}
	.details-container {
		background-color: whitesmoke;
		overflow: hidden;
		margin-top: 0.25rem;
		border-top-left-radius: 0.2rem;
		border-top-right-radius: 0.2rem;
	}
	.details-container:hover {
		overflow: auto;
	}
	.address {
		border: 1px solid #c5c5c5;
		background-color: #b7cad5;
		border-radius: 1rem;
		margin: 0.5rem;
		padding: 0.5rem;
		@include grid-mix(auto, auto auto, 0.5rem);
	}
	.justify-right {
		justify-self: right;
	}
	.value-content {
		justify-self: left;
		color: #b8860b;
	}
	.address-message {
		margin-top: 3rem;
		color: #ea2222;
	}
	.color-primary {
		color: #f9f9f9;
	}
</style>
