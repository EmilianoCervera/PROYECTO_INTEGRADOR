//Creo mis rutas donde defino el procesamiento, el controlador y el metodo de su controlador

const productsController = require('../controllers/productsController.js');
const express = require('express');
const router = express.Router();

//Rutas
router.get('/', productsController.Login);
router.get('/Detalleproduc', productsController.Detalle);
router.get('/Registro', productsController.Registro);
router.get('/Carrito', productsController.Carrito);
router.get('/Home', productsController.Home);
module.exports = router;
