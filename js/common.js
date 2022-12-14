function openNav(){
    document.getElementById("myNav").style.width="100%";}

function closeNav(){
    document.getElementById("myNav").style.width="0%";}

$(function(){
    $("#button1_1").click(function(){
    $("#slide1_2").fadeIn();
    $("#slide2_2").hide();
})
    $("#button2_1").click(function(){
    $("#slide2_2").fadeIn();
    $("#slide1_2").hide();
})
});