const productosRoutes = require('./src/routes/productosRoutes.js');

const express = require('express');
const path = require('path');


const app = express();
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './src/views'))//Hace que la carpeta views sea global

app.use('/', productosRoutes); 
app.use('/Detalleproduc', productosRoutes.Detalleproduc)
app.use('/Registro', productosRoutes.Registro)
app.use('/Comprar', productosRoutes.Comprar)
app.use('/Login', productosRoutes.Login)// se concatenan las rutas del primer y segundo parámetro


app.use(express.static(path.resolve(__dirname, './public')));


app.listen(3002, () => {
	console.log('Servidor corriendo');
});
