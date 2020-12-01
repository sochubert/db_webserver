var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql1 = `SELECT STAR_POINT, CONTENT, DATE, TITLE, ROOM_TYPE, LOGIN_ID FROM REVIEW NATURAL JOIN RESERVATION NATURAL JOIN CUSTOMER ORDER BY DATE DESC`;
    connection.query(sql1, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        res.render('../views/chanwoong/review', {title: 'Review', cust_info: null, reviewData: result})
    });
});

router.post('/', function(req, res, next) {
    var rating = parseInt(req.body.rating);
    var content = req.body.content;
    var content_title = req.body.content_title;

    var sql1 = 'SELECT RESERVATION_ID FROM RESERVATION WHERE CUSTOMER_ID = ?';
    connection.query(sql1, [req.cookies['customer_id']], function (error, result, fields) {
        if (error) {
            console.log(error);
        };
        var sql2 = 'INSERT INTO REVIEW (RESERVATION_ID, STAR_POINT, CONTENT, TITLE) VALUES(?, ?, ?, ?)';
        connection.query(sql2, [result[0].RESERVATION_ID, rating, content, content_title], function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            console.log(results);
        });
        console.log(result);
    });
    console.log("추가 성공!");
    res.redirect('/review');
});

module.exports = router;