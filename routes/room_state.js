var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM ROOM";
    var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    var today = year + "-" + month + "-" + day + " 00:00:00"
    connection.query(sql, function (error, result, fields) {
        var sql2 = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON C.PERSON_ID=P.PERSON_ID WHERE CHECKIN_DATE = ?";
        connection.query(sql2,[today] ,function (error, result2, fields) {
            console.log(result2);
            res.render('../views/chanwoong/room_state', {title: 'Room_state', cust_info: [req.cookies.employee_id, req.cookies.employee_name, true], room: result, reservation:result2});
        });
    });
});

module.exports = router;