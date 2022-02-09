const productosRoutes = require('./src/routes/productosRoutes.js'); //Requiriendo las rutas

const express = require('express');
const path = require('path');
const app = express();

//Motor de vistas
app.set('view engine', 'ejs');

//Hace que la carpeta views sea global
app.set('views', path.join(__dirname, './src/views'));

//rutas rendereizadas
app.use('/', productosRoutes);
app.use('/Detalleproduc', productosRoutes);
app.use('/Registro', productosRoutes);
app.use('/Comprar', productosRoutes);
app.use('/Login', productosRoutes);

//hace que la carpeta public sea estatica
app.use(express.static(path.resolve(__dirname, './public')));

//Levantando servidor
app.listen(3002, () => {
	console.log('Server on port 3002');
});


