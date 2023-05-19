const express = require('express');

const { request } = require('http');
const path = require('path');

const router = express.Router();

const getUserList = require('../model/user');

router.get('/', (req, res, next) => {
    console.log("INside product get /")
    res.write(JSON.stringify(getUserList()));


    res.end();

})

router.post('/', express.urlencoded({ extended: true }), (req, res, next) => {
    res.write('You are in the request Body Of user:');
    res.write('\n Name: ' + req.body.name);
    res.write('\n User: ' + req.body.email);
    res.write('\n Age: ' + req.body.age);
    res.end();
});
module.exports = router;