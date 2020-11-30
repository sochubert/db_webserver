function complete_socket(params) {
    var socket = io();
    var date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    socket.emit("updateComplain",{
        complain_id: parseInt(params),
        fin_time:year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec
    });
}

$(function () {
    var socket = io();

    socket.on("updateComplain", function (data){
        // $("#" + data.complain_id).style.color = "green";
        // console.log(data);
        var x = document.getElementById(data.complain_id);
        console.log(x);
        x.style.backgroundColor = "mediumspringgreen";
    });
    
});