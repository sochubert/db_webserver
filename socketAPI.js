var socketAPI = {};
var socket_io = require('socket.io');
var io = socket_io();
var connection = require('routes/db');


io.on('connection', function (socket){
    // socket.on('addcomplain',function (data){
    //     io.emit('addcomplain',data.complaintext);
    // });
    socket.on('addcomplain',function (data){
        var roomnum=data.roomnum;
        var description=data.contentx;
        var employee_id = data.employee_id;
        var TYPE = data.complain_type;
        var start_time = data.st_time;
        var fin_time = data.fin_time;
        var priorityx = data.priorityx;

        //INSERT INTO COMPLAIN(ROOM_NUM,DESCRIPTION,EMPLOYEE_ID,TYPE,START_TIME,FIN_TIME,PRIORITY) VALUES(201,"it just test",null,'COMPLAIN',"2000-11-11 00:00:00",null,1);
        var sql = "INSERT INTO COMPLAIN(ROOM_NUM,DESCRIPTION,EMPLOYEE_ID,TYPE,START_TIME,FIN_TIME,PRIORITY) VALUES(?, ?, ?, ?, ?,?,?)";
        connection.query(sql,[roomnum,description,employee_id,TYPE,start_time,fin_time,priorityx], function (error, result, fields) {
            if (error) {
            } else{
                connection.query("select * from EMPLOYEE natural join PERSON where EMPLOYEE_ID = ?",[employee_id],function(error,rows){
                    if(error){
                    } else{
                        var emp_name = rows[0].ENG_LAST_NAME + " " + rows[0].ENG_FIRST_NAME;
                        io.emit('addcomplain',{
                            data:data,
                            complain_id:result.insertId,
                            emp_name:emp_name,
                        });
                    }
                });
            }
        });
        
    });

    socket.on('updateComplain',function(data){
        var complain_id = data.complain_id;
        var date = data.fin_time;

        var sql = "update COMPLAIN set FIN_TIME = ? WHERE COMPLAIN_ID = ?";
        connection.query(sql,[date,complain_id],function(error,result){
            if(error){
                console.log(error);
            } else{
            }
        })
        io.emit('updateComplain',data);
    });

    socket.on('changeroomstate',function(data){
       var roomnum=data.roomnumx;
       var statex=data.statex;
       var rs_id = data.rs_id;
       if(statex == "AVAILABLE" || statex == "CANNOT_USE"){
           var sql = "UPDATE ROOM SET RES_ID=" + "NULL" + " WHERE ROOM_NUM=" + roomnum;
           connection.query(sql, function (error, result, fields) {
           });
       }
       else if(rs_id != null) {
           var sql = "UPDATE ROOM SET RES_ID=" + rs_id + " WHERE ROOM_NUM=" + roomnum;
           connection.query(sql, function (error, result, fields) {
           });
       }

       var sql = "UPDATE ROOM SET STATE="+"\""+ statex+"\""+" WHERE ROOM_NUM="+roomnum;
       //ENUM('AVAILABLE', 'CANNOT_USE','CHECKOUT_DAY','STAYING')
        connection.query(sql, function (error, result, fields) {
            if (error) {
                console.log(error);
            }
        });
        io.emit('changeroomstate',data);
    });

});







socketAPI.io = io;
module.exports = socketAPI;