/**
 * Created by 宇欣 on 2017/5/15.
 */
$(function () {
    $("#dianying").click(function () {
        $(this).css({"border-bottom":"3px solid #f36523","color": "#f36523"});
        $("#yingyuan").css({"border-bottom":"none","color": "black"});
        $("#yingchang").show(1000);
        $("#yingchang1").hide(1000);
        $(".xuanze").css({"display": "none"});


    });
    $("#yingyuan").click(function () {
        $(this).css({"border-bottom":"3px solid #f36523","color": "#f36523"});
        $("#dianying").css({"border-bottom":"none","color": "black"});
        $("#yingchang").hide(1000);
        $(".xuanze").css({"display": "block"});
        $("#yingchang1").show(1000);

    });
    $("#quyu").click(function () {
        $(this).css({"color": "#f36523"});
        $("#tese").css({"color": "black"});
        $("#yingchang2").toggle(1000);
        $("#yingchang3").hide(1000);

    });
    $("#tese").click(function () {
        $(this).css({"color": "#f36523"});
        $("#quyu").css({"color": "black"});
        $("#yingchang2").hide(1000);
        $("#yingchang3").toggle(1000);
    });
});
/**
 * Created by Administrator on 2017-5-16.
 */
$(function () {
    $("#menu").click(function () {
        $("#menu_list").css("visibility","visible");
        setTimeout(function () {
            $("#menu_list").css("visibility","hidden")
        },1000)
    })
});
function scroll() {
    //判断当前的浏览器是否是IE9+ 或者其他浏览器
    if (window.pageYOffset != null) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        };
    }
    //检测是否是怪异模式浏览器，就是没有声明<!DOCTYPE html>
    else if(document.compatMode == "CSS1Compat"){
        //正常模式
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        };
    }
    //怪异浏览器
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    };
}

window.onscroll = function () {
    var top = scroll().top;
    var div = document.getElementById("dibu1");
    if(top<200){
        div.className = "dibu1 hidden";
        // console.log(top);
    }else{
        // console.log(2);
        div.className = "dibu1";
    }
    // console.log(top);
}
// $(function () {
//     var top = scroll().top;
//     console.log(top)
// });