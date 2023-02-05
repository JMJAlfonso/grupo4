//Módulos
const express = require('express');
const app = express();
const path = require ('path');
const methodOverride= require('method-override');

const mainRouter = require('./src/routes/main');
const productRouter = require('./src/routes/productRouter.js');


app.use(express.urlencoded({extended:false}));
app.use(express.json())

//Configuración
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views')); // Define la ubicación de la carpeta de las vistas
app.use(methodOverride('_method'));
app.use(express.static('public'));


//Routers
app.use('/', mainRouter);
app.use('/products', productRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});



