 $(function (){
    var socket = io();

    socket.on("changestate", function (data){
        var id = data.roomnum;
        //아이디로 접근해서 색 바꾸기
        $("#"+id);
    });


    //클릭 됐을 때
     for(var j = 10;j > 0;j--) {
        for(var i = 1; i < 13; i++) {
            var id =100*j+i;
            id = toString(id);
            $("#"+id).submit(function (e){
                e.preventDefault();
                socket.emit("changeroomstate",{
                    roomnum:id,
                    state:null,
                });
            });
        };
     };

 });