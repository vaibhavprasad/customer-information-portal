const db = require('../models');
const logger = require('../config/logger.config');

const Customer = db.Customer;

// The CRUD Ops

const crud = db.Sequelize.Op;

// Create and save a new customer
exports.create = (req, res) => {
	if (!req.body.name) {
		res.status(400).send({
			message: 'Customer Name Cannot be empty',
			errorCode: 'E001'
		});
	}
	const customer = {
		name: req.body.name,
		age: req.body.age,
		sex: req.body.sex
	};

	Customer.create(customer).then( data => {
		res.send(data);
	}).catch( error => {
		res.status(500).send({
			message: error || 'Internal Error in Create Customer',
			errorCode: 'E002'
		});
	});
};

// Fetch all customers from the database.
exports.findAll = (req, res) => {
	logger.info(`Fetching customers data`);
	Customer.findAll({
		where: null,
		attributes: ['id', 'name', 'age', 'sex']
	}).then( data => {
		res.send(data);
	}).catch( error => {
		logger.error(`Error in Fetching customers data`, JSON.stringify(error));
		res.status(500).send({
			message: error || 'Internal Error in Fetching Customers',
			errorCode: 'E003'
		});
	});
};

// Get a single customer info using ID
exports.findOne = (req, res) => {
	const id = req.query.id;
	Customer.findByPk(id).then( data => {
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
