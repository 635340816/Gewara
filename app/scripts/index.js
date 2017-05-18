/**
 * Created by 宇欣 on 2017/5/15.
 */
$(function () {
    $("#dianying").click(function (e) {
        $(this).css({"border-bottom":"3px solid #f36523","color": "#f36523"});
        $("#yingyuan").css({"border-bottom":"none","color": "black"});
    });
    $("#yingyuan").click(function (e) {
        $(this).css({"border-bottom":"3px solid #f36523","color": "#f36523"});
        $("#dianying").css({"border-bottom":"none","color": "black"});
    });
});