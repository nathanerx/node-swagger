const express = require('express');
const routerUser = require('../api/user/user.router');

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

const app = express();

const logger = (req, res, next) => {
    console.log(`Request (${Date.now()}): ${req.path}`);
    next();
}

app.set('view engine', 'pug');
app.set('views', './src/server/views');

app.use(express.urlencoded({ extended : true}));
app.use(express.static('./src/client'));

app.use(logger);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/user', routerUser);

app.use((req, res, next) => {
    res.status(404).render('error');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('error');
});

module.exports = app;