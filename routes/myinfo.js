var express = require('express');
var router = express.Router();
var connection = require('./db');


router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM PERSON NATURAL JOIN ADDRESS NATURAL JOIN CUSTOMER WHERE CUSTOMER_ID = ?";
    connection.query(sql,[req.cookies['customer_id']], function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        var fucking = JSON.parse(JSON.stringify(result));
        res.render('../views/chanwoong/myinfo', { title: 'Myinfo' , cust_info:[req.cookies.customer_id, req.cookies.customer_name, false],myinfo:fucking});
    });
});

// `COMPLAIN_ID`           INT         NOT NULL    AUTO_INCREMENT COMMENT '민원ID',
//     `ROOM_NUM`     INT         NOT NULL    COMMENT '객실번호',
//     `DESCRIPTION`  TEXT        NOT NULL    COMMENT '내용',
//     `EMPLOYEE_ID`     INT         NULL        COMMENT '직원ID',
//     `TYPE`         ENUM('AMENITY','COMPLAIN','PRIMARY')        NOT NULL    COMMENT '민원타입',
//     `START_TIME`   DATETIME    NOT NULL    COMMENT '민원발생시간',
//     `FIN_TIME`     DATETIME    NULL        COMMENT '민원종료시간',
//     `PRIORITY`     INT        NOT NULL     COMMENT '우선순위',



module.exports = router;