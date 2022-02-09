
//Controladores
const controlador = {
	Home: (req, res) => {
		res.render('Home')
	},
	Detalle: (req, res) => {
		res.render('Detalleproduc')
	},
	Registro: (req, res) => {
		res.render('Registro')
	},
	Carrito: (req, res)=>{
		res.render('Carrito')
	},
	Login: (req, res) => {
		res.render('Login')
	}
}

module.exports = controlador;

