const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./Devolop/controllers');
const sequelize = require('./Devolop/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const port = process.env.Port || 3001;

//Handlebars.js w/ helper
//const hbs = exphbs.create({ helpers });

//Set session and conntect to Sequelize

const sess = {
    secret: 'secret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: true,
    Store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

// active handlebars engine and set it as default
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


