
$(function (){
    var socket = io();

        socket.on("addcomplain", function (data){
            var color;
            if(data.data.employee_id == data.data.cust_id){
                color = "#f15f5f";
            }else{
                color = "pink";
            }
            console.log(color);
            $("#list_place").prepend(
                    "<div class=\"row\">"+
                        "<div class=\"probootstrap-gutter40\">"+
                            "<div id ="+String(data.complain_id) +" class=\"col-sm-3\" style=\"border-radius: 20px; padding: 3% 2%;background-color:"+color+";\">"+
                                "<div class=\"review-block-name\" style=\"margin-left: 0%;\"><a href=\"#\"><strong>객실 번호 : "+String(data.data.roomnum)+"</strong></a></div>"+
                                "<div class=\"review-block-room\" style=\"margin-left: 0%;\"><strong>직원 ID : "+String(data.data.employee_id)+"</strong></div>"+
                                "<div class=\"review-block-room\" style=\"margin-left: 0%;\"><strong>담당 직원 : "+String(data.emp_name) +"</strong></div>"+
                                "<div class=\"review-block-room\" style=\"margin-left: 0%;\"><strong>우선 순위 : "+String(data.data.priorityx)+"</strong></div>"+
                                "<div class=\"rating-selected\" style=\"margin-left: 30%;\">"+
                                "</div>"+
                            "</div>"+
                            "<div class=\"col-sm-9\">"+
                                "<div class=\"row\">"+
                                    "<div class=\"col-sm-9\">"+
                                        "<div class=\"review-block-title\"><p>타입 : "+data.data.complain_type+"</p></div>"+
                                    "</div>"+
                                    "<div class=\"col-sm-3\">"+
                                        "<div class=\"form-group text-right\" style=\"margin-top: 10%;\">"+
                                        "<input  type=\"submit\" class=\"btn btn-primary btn-md\" id="+String(data.complain_id) +" onclick=\"complete_socket(this.id)\" name=\"submit\" value=\"민원 해결\">"+
                                            "</div>"+
                                            "</div>"+
                                            "</div>"+
                                            "<div class=\"review-block-description\">"+data.data.contentx+"</div>"+
                                            "<div class=\"review-block-description text-right\" style=\"font-size: 14px;\"><p>발생 시간 : "+data.data.st_time+"</p></div>"+
                                            "<div class=\"review-block-description text-right\" style=\"font-size: 14px;\"><p>종료 시간 : "+data.data.fin_time+"</p></div>"+
                                            "</div>"+
                                            "</div>"+
                                            "</div>"+
                                            "<hr style=\"border: solid 0.5px\">"
            )
        });

        

        $("#complain_socket").submit(function(e){//추가 버튼 눌렸을
            e.preventDefault();
            var $roomnum=$("#roomnum");
            var $complain_type=$("#complain_type");
            var $priorityx=$("#priorityx");
            var $contentx=$("#contentx");
            var $emp_id=$("#emp_id");
            var $emp_name = null;
            var $cust_id = $("#cust_id");

            var date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDay();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();

            var $st_time=year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;

           socket.emit("addcomplain",{
               roomnum:parseInt($roomnum.val()),
               complain_type:$complain_type.val(),
               priorityx:parseInt($priorityx.val()),
               contentx:$contentx.val(),
               employee_id:parseInt($emp_id.val()),
               emp_name:$emp_name,
               cust_id:parseInt($cust_id.val()),
               st_time:$st_time,
               // st_time:$st_time.val(),
               fin_time:null,
           });
           $roomnum.val("");
           $complain_type.val('');
           $priorityx.val("0");
           $contentx.val("");
           $emp_id.val("");
           $emp_name = null;
        });

        
});

