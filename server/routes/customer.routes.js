module.exports = app => {
  const customer = require("../controllers/customer.controller.js");

  var router = require("express").Router();

  // Create a new Customer
  router.post("/create", customer.create);

  // Fetch all Customers
  router.get("/", customer.findAll);

  // Fetch a single Customer with id
  router.get("/:id", customer.findOne);

  // Update a Customer with id
  router.put("/:id", customer.update);

  // Delete a Customer with id
  router.delete("/:id", customer.delete);

  // Delete all Customers
  router.delete("/", customer.deleteAll);

  app.use('/api/customers', router);
};
