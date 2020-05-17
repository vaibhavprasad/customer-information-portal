module.exports = app => {
  const address = require("../controllers/address.controller.js");

  var router = require("express").Router();

  // Create a new address for a customer
  router.post("/create", address.create);

  // Fetch all addresses
  router.get("/", address.findAll);

  // Fetch addresses of single Customer
  router.get("/:id", address.findOne);

  // Update an addresses with id
  router.put("/:id", address.update);

  // Delete an address using customer id and address id
  router.delete("/:id", address.delete);

  // Delete all addresses
  router.delete("/", address.deleteAll);

  app.use('/api/addresses', router);
};
