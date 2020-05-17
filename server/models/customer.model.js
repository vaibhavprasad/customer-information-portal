module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define("Customer", {
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: Sequelize.UUIDV4
		},
		name: {
			type: Sequelize.STRING
		},
		age: {
			type: Sequelize.INTEGER
		},
		sex: {
			type: Sequelize.STRING
		}
	});
	return Customer;
};
