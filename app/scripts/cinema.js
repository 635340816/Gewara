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
    var div = document.getElementById("return_bg");
    if(top<200){
        div.className = "return_bg hidden";
        // console.log(top);
    }else{
        // console.log(2);
        div.className = "return_bg";
    }
    // console.log(top);
}
// $(function () {
//     var top = scroll().top;
//     console.log(top)
// });