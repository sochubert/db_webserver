var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM ROOM";
    connection.query(sql, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        res.render('../views/chanwoong/room_state', { title: 'Room_state' , cust_info:null, room : result});
    });
});

module.exports = router;