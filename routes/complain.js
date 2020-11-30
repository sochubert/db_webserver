var express = require('express');
var router = express.Router();
var connection = require('./db');


router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM COMPLAIN AS C LEFT JOIN EMPLOYEE AS E ON C.EMPLOYEE_ID=E.EMPLOYEE_ID LEFT JOIN PERSON AS P ON P.PERSON_ID=E.PERSON_ID order by FIN_TIME, COMPLAIN_ID DESC";
    connection.query(sql, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        var sql2 = "select * from EMPLOYEE natural join PERSON where ep_state = true";
        connection.query(sql2,function(error,rows){
            var fucking = JSON.parse(JSON.stringify(result));
            var emp = JSON.parse(JSON.stringify(rows));
            res.render('../views/chanwoong/complain', { title: 'Complain' , cust_info:[req.cookies.employee_id, req.cookies.employee_name, true] ,complain:fucking,emp_info:emp});
        });
    });
});





module.exports = router;