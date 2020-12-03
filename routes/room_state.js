var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM ROOM";
    connection.query(sql, function (error, result, fields) {
        var sql2 = "SELECT * FROM (RESRVATION LEFT JOIN CUMTOMER ON RESERVATION.CUSTOMER_ID = CUSTOMER.CUSTOMER_ID) X LEFT JOIN PERSON P ON X.PERSON_ID=P.PERSON_ID";
        connection.query(sql2, function (error, result2, fields) {
            var date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDay();

            var today = year.toString()+"-"+month.toString()+"-"+day.toString()+" 00:00:00";
            var xyz = result2;
            var myres;
            if(xyz.length != 0) {
                xyz = JSON.parse(JSON.stringify(xyz));
                for (var x in xyz) {
                    if (x.CHECKIN_DATE == today) {
                        myres += x;
                    }
                }
            }
            else{
                myres = null;
            }


            res.render('../views/chanwoong/room_state', {title: 'Room_state', cust_info: null, room: result, reservation:myres});
        });
    });
});

module.exports = router;