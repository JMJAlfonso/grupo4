//Módulos
require('dotenv').config();
const express = require('express');
const app = express();
const path = require ('path');
const methodOverride = require('method-override');
const mainRouter = require('./src/routes/main');
const adminRouter = require('./src/routes/admin');
const userRouter = require('./src/routes/user');
const session = require('express-session');
 
//Require Routes API
const apiUsersRoutes = require('./src/routes/api/usersRouter');
const apiProductsRoutes = require('./src/routes/api/productsRouter');

//End Require Routes API

//Configuración  //use para hacer la herramienta global 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views')); // Define la ubicación de la carpeta de las vistas
app.use(methodOverride('_method'));
app.use(express.static('public'));  
app.use(session({secret:'Secreto!!!'})); // secret para que los archivos de session se almacenen y viajen encriptados entre navegador y servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//session
//app.use(session({secret: "secreto"}));

//Start Routes app
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter);
// End Routes app
//Start Routes API
app.use('/api/users',apiUsersRoutes);
app.use('/api/products',apiProductsRoutes);
//End Routes API

const port = process.env.PORT || 3000 ;
app.listen(3000, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});



