/**
 * Created by robelwoldu on 7/2/17.
 */

var express = require('express');
var fetch = require('node-fetch');
var router = express.Router();

router.get('/', function(req, res, next) {
    async function fetchJsonObject (){
        try {
            let result = await fetch('http://jsonplaceholder.typicode.com/users/');
            return result;
        }
        catch (error) {
            console.log(errer.message)
        }
    }

    fetchJsonObject().then(data => data.json())
        .then((data) => res.render('index', {jsonObject:data}))
        .catch((error) => error)
});

module.exports = router;