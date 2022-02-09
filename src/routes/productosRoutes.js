const productsController = require('../controllers/productsController.js'); //Requiriendo los controladores

const express = require('express');
const router = express.Router();

//Rutas
router.get('/', productsController.Login);
router.get('/Detalleproduc', productsController.Detalle);
router.get('/Registro', productsController.Registro);
router.get('/Carrito', productsController.Carrito);
router.get('/Home', productsController.Home);
module.exports = router;
