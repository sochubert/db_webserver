
function popupOpen(id,rs_id){
    var popupWidth = 1000;
    var popupHeight = 400;
    var popupX = (window.screen.width / 2) - (popupWidth / 2);
    var popupY= (window.screen.height / 2) - (popupHeight / 2);
    // window.open('/', '_blank', 'width=popupWidth, height=popupHeight,' +
    //     'left= popupX,top= popupY,toolbar=no, menubar=no, scrollbars=no, resizable=no');
    var res_id;
    if(rs_id == null){res_id = "no";}
    else{res_id = rs_id.toString();}
    window.open('/popup?num='+id.toString() + '&rs_id='+res_id, '', 'status=no, height=' + popupHeight  + ', width=' + popupWidth  + ', left='+ popupX + ', top='+ popupY +
    ',scrollbars=no'
    );
}


$(function () {
    var socket = io();

    socket.on("changeroomstate", function (data){
        // if(data.rs_id == "no"){$("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+null+")");}
        // else{$("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+data.rs_id.toString()+")");}

        if(data.rs_id == null){$("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+null+")");}
        else{$("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+data.rs_id.toString()+")");}
        if(data.statex == "AVAILABLE") {
            $("#" + data.roomnumx + "0000").attr("color", "black");
            $("#" + data.roomnumx).attr("style","background-color:");
            $("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+null+")");
        }
        else if(data.statex == "CANNOT_USE") {
            $("#" + data.roomnumx + "0000").attr("color", "white");
            $("#"+data.roomnumx).attr("style","background-color:#ff9999");
            $("#" + data.roomnumx).attr("onclick","popupOpen("+data.roomnumx+","+null+")");
        }
        else if(data.statex == "CHECKOUT_DAY") {
            $("#" + data.roomnumx + "0000").attr("color", "white");
            $("#"+data.roomnumx).attr("style","background-color:#f599ff");
        }
        else if(data.statex == "STAYING") {
            $("#" + data.roomnumx + "0000").attr("color", "white");
            $("#" + data.roomnumx).attr("style", "background-color:#00cccc");
        }
    });

});