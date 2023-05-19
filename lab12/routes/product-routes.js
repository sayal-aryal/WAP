const express = require('express');
const { request } = require('http');
const path = require('path');

const router = express.Router();

const getProductList = require('../model/product');

router.get('/', (req, res, next) => {
    // throw new Error('Error in product add');
    console.log("INside product get")
    // console.log(getProductList());
    res.write(JSON.stringify(getProductList()));
    res.end();

})

router.post('/', express.urlencoded({ extended: true }), (req, res, next) => {
    res.write('You are in the request Body');
    res.write('\n Product name: ' + req.body.pname);
    res.write('\n Price: ' + req.body.price);
    res.write('\n Country Of Origin: ' + req.body.origin);
    res.end();
});


module.exports = router;