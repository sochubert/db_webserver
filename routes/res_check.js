var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var x;
    if(!req.cookies['customer_id'] && !req.cookies['employee_id']) x = null;
    else if(!req.cookies['employee_id']) x = false;
    else x = true;
    var sql;
    if(x == false) {//회원
        sql = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE C.CUSTOMER_ID = " + req.cookies['customer_id'].toString();
        connection.query(sql, function (error, result) {
            if(error){
                console.log(error);
            }
            console.log(result);
            res.render('res_check', {
                title: 'Reservation_Check',
                cust_info: [req.cookies.customer_id, req.cookies.customer_name, x],
                res_check:result,
            });
        });
    }
    else if(x == null){//비회원
        res.render('res_check', {
            title: 'Reservation_Check',
            cust_info: null,
            res_check:null,
        });
    }
});

router.post('/', function(req, res, next) {
    var x;
    if(!req.cookies['customer_id'] && !req.cookies['employee_id']) x = null;
    else if(!req.cookies['employee_id']) x = false;
    var phone = req.body.phone;

    sql = "SELECT count(*) AS Y FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE P.PHONE_NUM = " + "\""+phone.toString()+ "\"";
    connection.query(sql, function (error, test) {
        if(test[0].Y == 0){
            res.render('res_check', {
                title: 'Reservation_Check',
                cust_info: null,
                res_check: null,
            });
        }
        else {
            sql = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE P.PHONE_NUM = " + "\"" + phone.toString() + "\"";
            connection.query(sql, function (error, result) {
                res.render('res_check', {
                    title: 'Reservation_Check',
                    cust_info: null,
                    res_check: result,
                });
            });
        }
    });
});





module.exports = router;