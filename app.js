//Módulos
const express = require('express');
const app = express();
const path = require ('path');
const methodOverride = require('method-override');

const mainRouter = require('./src/routes/main');
const adminRouter = require('./src/routes/admin');
const userRouter = require('./src/routes/user');

app.use(express.urlencoded({extended:false})); //necesario para que las rutas de post,put envien la informacion
app.use(express.json())
var session = require('express-session');

//Configuración
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views')); // Define la ubicación de la carpeta de las vistas
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(session({secret:'Secreto!!!'}));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//session
//app.use(session({secret: "secreto"}));

//Routers

app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter);

app.listen(3001, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});



