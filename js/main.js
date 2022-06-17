$(document).ready( function() {
    //scroling efect
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('#full_header').addClass("menu_fixed");
        }else{
            $('#full_header').removeClass("menu_fixed");
        }
        //for fade out back to top btn
        if($(window).scrollTop() > 300){
            $(".back_to_top").fadeIn();
        }
        else{
            $(".back_to_top").fadeOut();
        }
    });
    $(".back_to_top").click(function(){
        $("html,body").animate({
            scrollTop : 0,
        },2000)
    })
});