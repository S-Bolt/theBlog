const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./develop/controllers');
const sequelize = require('./develop/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const port = process.env.PORT || 3001;

//Handlebars.js w/ helper
//const hbs = exphbs.create({ helpers });

//Set session and conntect to Sequelize

const sess = {
    secret: 'topSecret',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

// activate handlebars engine and set it as default
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('./develop/public'));

app.use(routes);

//sync sequalize models and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ${PORT}'))
});

