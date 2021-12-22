const express = require('express');
const path = require('path'); //unificar las rutas dentro de los distintos sistemas operativos

const app = express();

const publicPatch = path.resolve(__dirname,'./public')

app.use(express.static(publicPatch)); //esta porcion de codigo es para que la carpeta public sea un recurso estatico


app.listen(3004, () => {
    console.log("Servidor corriendo");
});

app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Home.html'));  // Permite enviar texto o codigo HTML
});