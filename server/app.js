(async function () {
	'use strict';

	const express = require('express')
	const cors = require('cors');
	const sequelize = require('sequelize');
	const bodyParser = require("body-parser");
	const logger = require('./config/logger.config');
	
	const app = express();

	app.get('/', (req, res) => {
		res.send('Welcome to conviva app!');
	});
	
	var corsOptions = {
		origin: "http://localhost:7080"
	};

	app.use(cors(corsOptions));

	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({ extended: true }));

	const db = require('./models');

	// db.sequelize.sync({ force: true }).then(() => {
	// 	console.log("recreating tables everytime server is started");
	// });

	require("./routes/customer.routes")(app);
	require("./routes/address.routes")(app);

	const http = require('http');
	const hostname = 'localhost';
	const port = 3000;
	const server = http.createServer(app).listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
		logger.info(`Server started on ${new Date()} at http://${hostname}:${port}/`);
	});
})();
