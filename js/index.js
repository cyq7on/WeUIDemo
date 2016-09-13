/**
 * Created by cyq7on on 2016/8/24 0024.
 */
$().ready(function () {
    $("#login").on("click", function () {
        var url = "http://211.149.246.103:8080/LuZhouFire/login";
        var account = $("#account").val();
        var psw = $("#password").val();
        if (account.length == 0 || psw.length == 0) {
            $.toast("请输入完整信息", "forbidden");
            return;
        }
        $.showLoading();
        location.href = "home.html";
        $.hideLoading();
        // $("#submit").submit();
        /*$.ajax({
         type:"post",
         url:url,
         data:{tel:account,password:psw},
         datatype:"json",
         success:function (data) {
         console.log(data);
         },
         error:function () {

         }
         });*/
    });
});