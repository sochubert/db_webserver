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
    connection.query("SELECT * FROM ROOM WHERE ROOM_NUM = "+num.toString(),function(error,result) {
        var roominfo = result[0];
        connection.query("SELECT * FROM COMPLAIN WHERE ROOM_NUM = "+num.toString(),function(error,result2) {
            var complainlist = result2;
            res.render('../views/chanwoong/popup', {title: 'Popup', cust_info: null, roominfo:roominfo, complainlist:complainlist});
        });
    });
});

module.exports = router;