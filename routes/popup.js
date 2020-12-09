var express = require('express');
var router = express.Router();
var connection = require('./db');
var http = require('http');
var fs = require('fs');
var url = require('url');


router.get('/', function(req, res, next) {
    var _url = req.url;
    var queryData = url.parse(_url, true).query;//queryData.num;
    var num = queryData.num;
    var rs_id = queryData.rs_id;
    var custinfo = null;
    connection.query("SELECT * FROM ROOM WHERE ROOM_NUM = "+num.toString(),function(error,result) {
        var roominfo = result[0];
        connection.query("SELECT * FROM COMPLAIN WHERE ROOM_NUM = "+num.toString(),function(error,result2) {
            var complainlist = result2;
            console.log("\n\n\n\n");
            connection.query("SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON P.PERSON_ID=C.PERSON_ID WHERE R.ID = "+rs_id,function(error,result3) {
                custinfo = result3;
                if(rs_id == "null"){custinfo = null;}
                res.render('../views/chanwoong/popup', {
                    title: 'Popup',
                    cust_info: custinfo,
                    roominfo: roominfo,
                    complainlist: complainlist,
                });
            });
        });
    });
});

module.exports = router;