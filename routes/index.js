const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Suhnya Kelley');
});

module.exports = routes;