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
            res.render('chanwoong/res_check', {
                title: 'Reservation_Check',
                cust_info: [req.cookies.employee_id, req.cookies.employee_name, x],
                res_check:result,
            });
        });
    }
    else if(x == null){//비회원
        res.render('chanwoong/res_check', {
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
            res.render('chanwoong/res_check', {
                title: 'Reservation_Check',
                cust_info: null,
                res_check: null,
            });
        }
        else {
            sql = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE P.PHONE_NUM = " + "\"" + phone.toString() + "\"";
            connection.query(sql, function (error, result) {
                res.render('chanwoong/res_check', {
                    title: 'Reservation_Check',
                    cust_info: null,
                    res_check: result,
                });
            });
        }
    });
});



// router.post('/rm', function(req, res, next) {
//     var x;
//     if(!req.cookies['customer_id'] && !req.cookies['employee_id']) x = null;
//     else if(!req.cookies['employee_id']) x = false;
//     var res1 = req.body.res1;//resid
//     var sql;
//     sql =  "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE R.RESERVATION_ID =" + res1.toString();
//     connection.query(sql, function (error, resinfo) {
//         var phone = resinfo[0].PHONE_NUM.toString();
//
//         var sql2 = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID = C.PERSON_ID WHERE P.PHONE_NUM = " + "\""+phone.toString()+ "\"";
//         connection.query(sql2, function (error, result) {
//             sql = "DELETE FROM RESERVATION WHERE RESERVATION_ID = ?";
//             connection.query(sql, [res1.toString()], function (error, no) {
//                 console.log(result);
//                 res.render('chanwoong/res_check', {
//                     title: 'Reservation_Check',
//                     cust_info: null,
//                     res_check: null,
//                 });
//             });
//         });
//     });
// });





module.exports = router;