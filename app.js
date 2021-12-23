const express = require('express');
const path = require('path'); //unificar las rutas dentro de los distintos sistemas operativos

const app = express();

const publicPatch = path.resolve(__dirname,'./public')

app.use(express.static(publicPatch)); //esta porcion de codigo es para que la carpeta public sea un recurso estatico


app.listen(3002, () => {
    console.log("Servidor corriendo"); //puerto donde corre
});


app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Home.html'));  // Permite enviar texto o codigo HTML
});

app.get('/Home', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Home.html'));  // Permite enviar texto o codigo HTML (home)
});

app.get('/Registro', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Registro.html'));  // Permite enviar texto o codigo HTML(regis)
});

app.get('/Login', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Login.html'));  // Permite enviar texto o codigo HTML()
});
app.get('/Carrito', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Carrito.html'));  // Permite enviar texto o codigo HTML
});
app.get('/Detalleproduc', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/Detalleproduc.html'));  // Permite enviar texto o codigo HTML
});
