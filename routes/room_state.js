var express = require('express');
var router = express.Router();
var connection = require('./db');

router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM ROOM";
    connection.query(sql, function (error, result, fields) {
        var sql2 = "SELECT * FROM RESERVATION R LEFT JOIN CUSTOMER C ON R.CUSTOMER_ID = C.CUSTOMER_ID LEFT JOIN PERSON P ON C.PERSON_ID=P.PERSON_ID";
        connection.query(sql2, function (error, result2, fields) {
            var date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            if(day <10){
                day = "0"+day.toString();
            }
            switch (month){
                case 1:
                    month = "Jan";
                    break;
                case 2:
                    month = "Feb";
                    break;
                case 3:
                    month = "Mar";
                    break;
                case 4:
                    month = "Apr";
                    break;
                case 5:
                    month = "May";
                    break;
                case 6:
                    month = "Jun";
                    break;
                case 7:
                    month = "Jul";
                    break;
                case 8:
                    month = "Aug";
                    break;
                case 9:
                    month = "Sep";
                    break;
                case 10:
                    month = "Oct";
                    break;
                case 11:
                    month = "Nov";
                    break;
                case 12:
                    month = "Dec";
                    break;
            }

            var today = month.toString()+" "+day.toString()+" "+year.toString();
            var xyz = result2;
            var myres = "";
            if(xyz.length != 0) {
                for (var x of xyz) {
                    if (x.CHECKIN_DATE.toString().substring(4,15) == today) {
                        myres += "이름: "+ x.ENG_FIRST_NAME + x.ENG_LAST_NAME+  "생년:"+ x.BIRTH
                            + "\n예약 방: "+x.ROOM_TYPE+ "\n 체크인: " +x.CHECKIN_DATE +"\n 체크아웃: "+x.CHECKOUT_DATE
                            + " \n어른: "+x.ADULT_NUM+ " 아이: "+x.CHILD_NUM+ "아기: "+x.BABY_NUM;
                        myres += "\n\n";
                    }
                }
            }


            res.render('../views/chanwoong/room_state', {title: 'Room_state', cust_info: null, room: result, reservation:myres});
        });
    });
});

module.exports = router;