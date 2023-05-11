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
const cors = require ('cors');
const authenticationMW = require ('./src/middlewares/authentication');
//Require Routes API
const apiUsersRoutes = require('./src/routes/api/usersRouter');
const apiProductsRoutes = require('./src/routes/api/productsRouter');
const apiDificultiesRoutes = require('./src/routes/api/dificultiesRouter');

//End Require Routes API

//Configuración  //use para hacer la herramienta global 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views')); // Define la ubicación de la carpeta de las vistas
app.use(methodOverride('_method'));
app.use(express.static('public'));  
app.use(session({secret:'Secreto!!!'})); // secret para que los archivos de session se almacenen y viajen encriptados entre navegador y servidor
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Activando los cors - va a lograr atrapar a cualquier ruta que le impacte
let listaBlanca = ['http://localhost:3000'] ;
app.use(cors({origin:listaBlanca}));
//session
//app.use(session({secret: "secreto"}));
app.use(authenticationMW);
//Start Routes app
app.use('/', mainRouter);
app.use('/admin', adminRouter);
app.use('/user',userRouter);
// End Routes app
//Start Routes API
app.use('/api/users',apiUsersRoutes);
app.use('/api/products',apiProductsRoutes);
app.use('/api/dificulties',apiDificultiesRoutes);

//End Routes API

const port = process.env.PORT || 3001 ;
app.listen(3001, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});



