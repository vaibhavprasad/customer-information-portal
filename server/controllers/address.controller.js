const db = require('../models');
const logger = require('../config/logger.config');

const Address = db.Address;

// The CRUD Ops

const crud = db.Sequelize.Op;

// Create and save a new address against a customer
exports.create = (req, res) => {
	if (!req.body.customerId) {
		res.status(400).send({
			message: 'Customer id cannot be empty',
			errorCode: 'E001'
		});
	}
	const address = {
		customerId: req.body.customerId,
		address: req.body.address || '',
		landmark: req.body.landmark || '',
		city: req.body.city || '',
		district: req.body.district || '',
		pinCode: req.body.pinCode || 0,
		state: req.body.state || '',
		phone: req.body.phone || ''
	};

	Address.create(address).then( data => {
		res.send(data);
	}).catch( error => {
		res.status(500).send({
			message: error || 'Internal Error in Create Address',
			errorCode: 'E002'
		});
	});
};

// Fetch all addresses from the database.
exports.findAll = (req, res) => {
	logger.info(`Fetching Addresses for customer ${req.query.id}`);
	let whereClause = req.query.id ? { customerId: req.query.id } : null;
	if (!whereClause) {
		res.send({
			message: "No Adresses found for the customer"
		});
	} else {
		Address.findAll({ where: whereClause }).then( data => {
			res.send(data);
		}).catch( error => {
			res.status(500).send({
				message: error || 'Internal Error in Fetching Addresses',
				errorCode: 'E003'
			});
		});
	}
};

// Get a single address info using ID
exports.findOne = (req, res) => {
	const id = req.query.id;
	Address.findAll({ where: { customerId: id }}).then( data => {
		res.send(data);
	}).error( error => {
		res.status(500).send({
			message: error || 'Internal Error in Fetching Customer by ID',
			errorCode: 'E004'
		});
	});
};

// Update a customer using id
exports.update = (req, res) => {
  
};

// Delete a customer with the id
exports.delete = (req, res) => {
  
};

// Delete all customers from the database.
exports.deleteAll = (req, res) => {

};
