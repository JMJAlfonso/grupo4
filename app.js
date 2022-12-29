const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
});
<<<<<<< HEAD
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productDetail.html'))
});
=======

app.use(express.static('public'));
app.get('/productCart',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productCart.html'))
});

app.use(express.static('public'));
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
});

>>>>>>> a2a78e60cc6f802ab451f008cd38547a71ef5c87
app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});