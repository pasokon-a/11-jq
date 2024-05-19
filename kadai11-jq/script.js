$(function(){
    $('.menuButton').on("click",function(){
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        $('#mask').toggleClass('active');

    });
});

// スライドショー
$(function(){
    var dir = -1;
    var interval = 3000;
    var duration = 700;
    var timer;
    $("#slide .slideUl").prepend($("#slide li:last-child"));
    $("#slide .slideUl").css("left",-1000);

    timer = setInterval(slideTimer,interval);

    function slideTimer(){
        if (dir == -1) {
            $("#slide .slideUl").animate({ "left":"-=1000px" }, duration,
            function(){
                $(this).append($("#slide li:first-child"));
                $(this).css("left",-1000);
            });
        }
        else {
            $("#slide .slideUl").animate({ "left": "+=1000px" }, duration,
            function() {
                $(this).prepend($("#slide li:last-child"));
                $(this).css("left", -1000);
                dir = -1;
            });
        }
    }
});