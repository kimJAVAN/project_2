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

$(function(){
    var index=0;
    $(`.slide li:nth-of-type(${index+2})`).css('transform','scale(1.2)').css('transition','all 1s ease');
    $('.prev').click(function () {
        index--;
        if (index < 0) {
            index = 0;
            alert('First Member');
            return;
        }
        $('.slideul').stop().animate({ marginLeft: -336 * index }, 800);
        $('.slideul li').css('transform','scale(1)');
        $(`.slideul li:nth-of-type(${index+2})`).css('transform','scale(1.2)').css('transition','all 1s ease');
    });
    $('.next').click(function () {

        index++;
        if (index > $('.slideul li').length-3) {
            index = $('.slideul li').length-3;
            alert('Last Member');
            return;
        }
        $('.slideul').stop().animate({ marginLeft: -336 * index }, 800);
        $('.slideul li').css('transform','scale(1)');
        $(`.slideul li:nth-of-type(${index+2})`).css('transform','scale(1.2)').css('transition','all 1s ease');
    });
})