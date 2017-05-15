/**
 * Created by Administrator on 2017-5-16.
 */
$(function () {
    $("#denglu").click(function () {
        $("#dengli_p").css("color"," #f36523");
        $("#denglu-line").css("background-color","#f36523");
        $("#zhuce-line").css("background-color","rgba(0, 0, 0, 0.46)");
        $("#zhuce_p").css("color","rgba(0, 0, 0, 0.46)");
        $("#part").css("visibility","visible");
    });
    $("#zhuce").click(function () {
        $("#dengli_p").css("color"," rgba(0, 0, 0, 0.46)");
        $("#denglu-line").css("background-color"," rgba(0, 0, 0, 0.46)");
        $("#zhuce-line").css("background-color","#f36523");
        $("#zhuce_p").css("color","#f36523");
        $("#part").css("visibility","hidden");
    })
})