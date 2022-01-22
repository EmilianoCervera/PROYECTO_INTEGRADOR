const path = require('path');

const controlador = {
	Home: (req, res) => {
		res.render('Home');
	},
};

module.exports = controlador;
