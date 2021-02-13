var express = require('express');
var router = express.Router();
var connection = require('./db');



router.get('/', function(req, res, next) {
    var sql1 = 'select * from CUSTOMER natural join PERSON';
    connection.query(sql1, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        var cust_list = JSON.parse(JSON.stringify(result));
        res.render('custList', {
            title: 'Cust Info' ,
            cust_info:[req.cookies.employee_id, req.cookies.employee_name, true],
            cust_list : cust_list
        });
    })
});

module.exports = router;