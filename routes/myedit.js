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
        res.render('../views/chanwoong/myedit', { title: 'Myedit' , cust_info:null,myedit:fucking});
    });
});

router.post('/', function (req, res) {
    var phone_num = req.body.phone_num;

    var password = req.body.password;
    var forget_password = req.body.forget_password;

    var add_city = req.body.add_city;
    var add_state = req.body.add_state;
    var zip = req.body.zip;
    var street = req.body.street;
    var apart_num = req.body.apart_num;
    var detail_address = req.body.detail_address;

    var sql1 = 'UPDATE PERSON NATURAL JOIN ADDRESS NATURAL JOIN CUSTOMER SET ZIP_CODE = ?, ADDRESS1 = ?, ADDRESS2 = ?, ADDRESS3 = ?, ADDRESS4 = ?, ADDRESS5 = ?, PHONE_NUM = ?, PW_ANSWER= ?, LOGIN_PW = ? WHERE CUSTOMER_ID = ?';
    connection.query(sql1, [zip, add_city, add_state, street, apart_num, detail_address, phone_num, forget_password, password, req.cookies['customer_id']], function (error, rows, fields) {
        if (error) {
            console.log(error);
        }
        console.log(rows);
    });
    console.log("수성공");
    res.redirect('/myinfo');
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