const productosRoutes = require('./src/routes/productosRoutes.js')

const express = require('express');
const path = require('path');


const app = express();

app.set ('view engine', 'ejs');

app.use('/', productosRoutes); // se concatenan las rutas del primer y segundo parámetro

app.use(express.static(path.resolve(__dirname, '..', './public')));

app.use(express.static(path.resolve(__dirname, '..','./views')));

app.listen(3002, () => {
	console.log('Servidor corriendo');
});
