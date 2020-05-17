<template>
	<div class="custom-table">
		<table>
			<thead>
				<tr>
					<th v-for="(item, index) in config" :key="index">
						{{ item.title }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in data" :key="item.cid" @click="onRowSelect(item, index)" :class="{'highlight-row': (index === selectedRow)}">
					<td v-for="(value, key) in item">
						{{ value }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	name: 'CustomTable',
	props: {
		config: {
			type: Array,
			required: true
		},
		data: {
			type: Array,
			required: true
		}
	},
	data () {
		return {
			selectedRow: -1
		};
	},
	mounted () {

	},
	methods: {
		getTableData (value, key) {
			return item[this.tableConfig[index]];
			console.log(key, ' ', value);
		},
		onRowSelect (item, index) {
			this.selectedRow = index;
			this.$emit('onRowSelect', item);
		}
	}
};

</script>
<style scoped lang="scss">
	table {
		width: 100%;
		height: 100%;
		border-collapse: collapse;
	}
	tbody tr:nth-child(odd) {
		background-color: #f1f1f1;
	}
	tr {
		height: 2rem;
	}
	thead tr th {
		color: #f9f9f9;
		position: sticky;
		top: 0;
		background-color: #01b288;
	}

	thead tr th:first-child {
		border-top-left-radius: 0.5rem;
	}

	thead tr th:last-child {
		border-top-right-radius: 0.5rem;
	}

	tbody tr:hover {
		background-color: #e5e5e5;
	}
	tbody tr {
		cursor: pointer;
	}
	.highlight-row {
		background-color: #ffc81c85 !important;
	}

</style>
