module.exports = (sequelize, Sequelize) => {
	const Address = sequelize.define("Address", {
		customerId: {
			type: Sequelize.UUID,
			allowNull: false,
			field: 'customer_id',
			references: {
				model: 'Customers',
				key: 'id'
			}
		},
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: Sequelize.UUIDV4
		},
		address: {
			type: Sequelize.STRING
		},
		landmark: {
			type: Sequelize.STRING
		},
		city: {
			type: Sequelize.STRING
		},
		district: {
			type: Sequelize.STRING
		},
		pinCode: {
			type: Sequelize.INTEGER,
			field: 'pin_code'
		},
		state: {
			type: Sequelize.STRING
		},
		phone: {
			type: Sequelize.STRING
		}
	});
	return Address;
};
