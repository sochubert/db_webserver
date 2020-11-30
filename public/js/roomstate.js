
function stateupdate(id){
    var socket_u = io();
    socket_u.emit("changeroomstate",{
        roomnumx:id.toString(),
        statex:"AVAILABLE",//임시방편
    });
}
function popupOpen(){
    var popupWidth = 1000;
    var popupHeight = 400;
    var popupX = (window.screen.width / 2) - (popupWidth / 2);
    var popupY= (window.screen.height / 2) - (popupHeight / 2);
    // window.open('/', '_blank', 'width=popupWidth, height=popupHeight,' +
    //     'left= popupX,top= popupY,toolbar=no, menubar=no, scrollbars=no, resizable=no');
    window.open('/popup', '', 'status=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY +
    ',scrollbars=no'
    );
}

$(function () {
    var socket = io();

    socket.on("changeroomstate", function (data){
        $("#"+data.roomnumx+"0000").attr("color","green");
    });

});