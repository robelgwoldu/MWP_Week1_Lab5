var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(data => data.json())
        .then(data => res.render('index', {jsonObject: data}));
});

module.exports = router;
