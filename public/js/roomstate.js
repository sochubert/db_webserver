

function stateupdate(id){
    var socket_u = io();
    socket_u.emit("changeroomstate",{
        roomnumx:id.toString(),
        statex:"AVAILABLE",//임시방편
    });
}

$(function () {
    var socket = io();

    socket.on("changeroomstate", function (data){
        $("#"+data.roomnumx+"0000").attr("color","green");
    });

});