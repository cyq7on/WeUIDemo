/**
 * Created by cyq7on on 2016/8/24 0024.
 */
$().ready(function () {
    getNews("top");
    showSwiper();
    // $(".weui_tab_bd").pullToRefresh();
    $(".weui_tab_bd").pullToRefresh().on("pull-to-refresh", function () {
        setTimeout(function () {
            $(".weui_tab_bd").pullToRefreshDone();
        }, 2000);
    });
    //初始化滚动加载
    var loading = false;  //状态标记
    $('.weui_tab_bd').infinite();
    $('.weui_tab_bd').infinite().on("infinite", function () {
        if (loading) return;
        loading = true;
        setTimeout(function () {
            $("#content").append("<p> 我是新加载的内容 </p><p> 我是新加载的内容 </p><p> 我是新加载的内容 </p><p> 我是新加载的内容 </p><p> 我是新加载的内容 </p>");
            loading = false;
        }, 1500);   //模拟延迟
    });

    // var a = $(".weui_tabbar_item");
    // var img = a.find("img");
    // img[0].src = "img/icon_shopping_mall_selected.png";
    // a.on("click", function () {
    //     img[0].src = "img/icon_shopping_mall_normal.png";
    //     img[1].src = "img/icon_alarm_information_normal.png";
    //     img[2].src = "img/icon_device_manager_normal.png";
    //     img[3].src = "img/icon_my_normal.png";
    //     var imgSrc = $(this).data('selected');
    //     $(this).find("img").attr('src', imgSrc);
    // });
});

function getNews(type) {
    var urlPre = "http://cors.itxti.net/?";
    var url = "http://v.juhe.cn/toutiao/index";
    var appKey = "bbbf6ce68763abcbf0c0071d6f692a9c";
    $.getJSON("data.json", function (data){
        $.each(data.result.data, function (i, item) {
            var html = '<div class="weui_cell">'+
                '<div data-id="'+ i+'">'+
                '<img src="' + item.thumbnail_pic_s + '" style="width: 100px ;height: 75px ; padding-top: 10px">' +
                '</div> ' +
                '<span style="height: 82px">'+
                '<p class="weui_cell_p">' + item.title + '</p>' +
                '<p class="weui_cell_p">' + item.date + '</p>' +
                '</span> ' +
                '</div>';
            $("#content").append(html);
        })
        $("#content").on("click","div",function () {
            var id = $(this).find("div").data("id");
            // $.toast("你选择了第" + id + "项", "text");
            location.href = "detail.html?id=" + id;
        });
    });

    // $.getJSON(url, {key: appKey, type: type}, function (data) {
    //     $.each(data.result.data, function (i, item) {
    //         var html = '<div class="weui_cell">'+
    //             '<div class="weui_cell_hd" data-id="'+ i+'">'+
    //             '<img src="' + item.thumbnail_pic_s + '" width="120px" height="100px">' +
    //             '</div> <span>'+
    //             '<p style="width: 280px;position: relative;top: -15px">' + item.title + '</p>' +
    //             '<p>' + item.date + '</p>' +
    //             '</span> </div>';
    //         $("#content").append(html);
    //     })
    //     $("#content").on("click","div",function () {
    //         var id = $(this).find("div").data("id");
    //         // $.toast("你选择了第" + id + "项", "text");
    //         location.href = "detail.html?id=" + id;
    //     });
    // })
}

function showSwiper() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 1500,
    });
    $(".swiper-slide").on("click", function () {
        $.toptip("点击了第" + (swiper.clickedIndex + 1) + "张图片", 1000, "success");
    });
}