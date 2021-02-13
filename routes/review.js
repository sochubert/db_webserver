var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql1 = `SELECT STAR_POINT, CONTENT, DATE, TITLE, ROOM_TYPE, LOGIN_ID FROM REVIEW NATURAL JOIN RESERVATION NATURAL JOIN CUSTOMER ORDER BY DATE DESC`;
    connection.query(sql1, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        if(!req.cookies['customer_id'] && !req.cookies['employee_id']){
            res.render('review', {title: 'Review', cust_info: null, reviewData: result})
        }else if(!req.cookies['employee_id']){
            res.render('review', {title: 'Review', cust_info: [req.cookies.customer_id, req.cookies.customer_name, false], reviewData: result})
        }else{
            res.render('review', {title: 'Review', cust_info: [req.cookies.employee_id, req.cookies.employee_name, true], reviewData: result})
        }
        
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