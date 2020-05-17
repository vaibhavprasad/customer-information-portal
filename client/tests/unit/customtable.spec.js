import { shallowMount } from '@vue/test-utils'
import CustomTable from '@/components/CustomTable.vue'

describe('CustomTable.vue', () => {
	it('renders the table heading and table data when passed', () => {
	const config = [{
		title: 'Customer ID',
		align: 'center',
		value: 'cid',
		width: ''
	}];
	const data = [{
		id: '10',
		name: 'vaibhav',
		age: 30,
		sex: 'Male'
	}]
	// const data = [{id: '10', name: 'vaibhav', age: 30, sex: 'Male'}]
	const wrapper = shallowMount(CustomTable, {
		propsData: { config, data }
	});
	console.log(wrapper.html());
	expect(wrapper.find('th').text()).toMatch(config[0].title);
	expect(wrapper.find('td').text()).toMatch(data[0].id);
	})
})
