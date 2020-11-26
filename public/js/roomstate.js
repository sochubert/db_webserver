
$(function (){
    var socket = io();
    socket.on("changestate", function (data){
        var id = data.roomnum;
        //아이디로 접근해서 색 바꾸기
        $("#"+id);
        console.log("=-=-=-=-=\n\n\n\n");
    });


 });

function myclick(){
    console.log("asdasdasd");
    console.log(x);
}