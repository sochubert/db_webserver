 $(function (){
    var socket = io();

    socket.on("changestate", function (data){

    });


    $("#complain_socket").submit(function(e){//추가 버튼 눌렸을
    e.preventDefault();


        socket.emit("changestate",{
        });

    });
 });