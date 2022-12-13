function openNav(){
    document.getElementById("myNav").style.width="100%";}

function closeNav(){
    document.getElementById("myNav").style.width="0%";}


$(function(){
    var page = 0;
    $('.prev').click(function () {
        page--;
        if (page < 0) {
            page = 0;
            alert('first member');
            return;
        }
        $('.slide').stop().animate({ marginLeft: -300 * page }, 1600);
        });
    $('.next').click(function () {
        page++;
        if (page > $('.slide li').length-2) {
            page = $('.slide li').length-2;
            alert('last member');
            return;
        }
        $('.slide').stop().animate({ marginLeft: -300 * page }, 1600);
        });
    });

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