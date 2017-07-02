/**
 * Created by robelwoldu on 7/2/17.
 */

const express = require('express');
const fetch = require('node-fetch');
const Rx = require('@reactivex/rxjs');

const router = express.Router();
const jsonData = fetch ('http://jsonplaceholder.typicode.com/users/');

const result = jsonData.then((data) => {
    return data.json()
}).catch((error) => error);

router.get('/', function (req, res, next) {
    Rx.Observable.fromPromise(result)
        .subscribe(data => res.render('index', {jsonObject:data}));
});

module.exports = router;