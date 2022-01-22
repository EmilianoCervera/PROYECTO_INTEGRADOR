//Creo mis rutas donde defino el procesamiento, el controlador y el metodo de su controlador

const productsController = require('./../controllers/productsController');

const express = require('express');
const router = express.Router();

router.get('/',productsController.Home);

module.exports = router;

