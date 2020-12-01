var express = require('express');
var router = express.Router();
var connection = require('./db');


var ep_list = null;

router.get('/', function(req, res, next) {
    var sql1 = 'select * from EMPLOYEE natural join PERSON';
    connection.query(sql1, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        var ep_info = JSON.parse(JSON.stringify(result));
        res.render('../views/chanwoong/staff', {
            title: 'Staff' ,
            cust_info:null,
            staff_list : ep_info
        });
    })
});

module.exports = router;