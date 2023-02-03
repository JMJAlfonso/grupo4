const path = require ('path');
const express = require('express');
const mainRouter = require('./src/routes/main');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use('/', mainRouter);

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});



