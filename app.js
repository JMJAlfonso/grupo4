const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
<<<<<<< HEAD
<<<<<<< HEAD
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
=======

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
>>>>>>> ed313bb3da3fd1c1fbd7289871d348911495b72c
=======

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
>>>>>>> ed313bb3da3fd1c1fbd7289871d348911495b72c
});

app.listen(3030, () => {
    console.log('Servidor iniciado en http://localhost:3030');
});