
function popupOpen(id){
    var popupWidth = 1000;
    var popupHeight = 400;
    var popupX = (window.screen.width / 2) - (popupWidth / 2);
    var popupY= (window.screen.height / 2) - (popupHeight / 2);
    // window.open('/', '_blank', 'width=popupWidth, height=popupHeight,' +
    //     'left= popupX,top= popupY,toolbar=no, menubar=no, scrollbars=no, resizable=no');
    window.open('/popup?num='+id.toString(), '', 'status=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY +
    ',scrollbars=no'
    );
}

$(function () {
    var socket = io();

    socket.on("changeroomstate", function (data){
        if(data.statex == "AVAILABLE")
            $("#"+data.roomnumx+"0000").attr("color","blue");
        else if(data.statex == "CANNOT_USE")
            $("#"+data.roomnumx+"0000").attr("color","red");
        else if(data.statex == "CHECKOUT_DAY")
            $("#"+data.roomnumx+"0000").attr("color","orange");
        else if(data.statex == "STAYING")
            $("#"+data.roomnumx+"0000").attr("color","green");
    });

});