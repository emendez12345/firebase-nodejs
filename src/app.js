const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // Corrige la ruta de las vistas
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs' // Corrige "exname" a "extname"
}));
app.set('view engine', '.hbs'); // Corrige "views engine" a "view engine"

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/index'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
