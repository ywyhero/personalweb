/**
 * Created by Administrator on 2015/12/2.
 */
$(document).ready(function(){
    /*banner*/
    $('.banner').on("mouseenter", function () {
        $(".b-prev,.b-next").stop().fadeTo(600,0.6)
    }).on("mouseleave", function () {
        $(".b-prev,.b-next").stop().fadeOut()
    })
    $('.b-item').on("click",function(){
        $(this).addClass("active").siblings(".b-item").removeClass("active");
        $('.banner>ul>li').eq($(this).index()-1).stop().fadeIn().siblings("li").hide();
    })
    var num=0;
    var timer=null;
    $('.b-next').on("click", function () {
        num++;
        if(num>4)
        {
            num=0;
        }
        $('.b-item').eq(num).addClass("active").siblings(".b-item").removeClass("active");
        $('.banner>ul>li').eq(num).stop().fadeIn().siblings("li").hide();
    })
    $('.b-prev').on("click", function () {
        num--;
        if(num<0)
        {
            num=4;
        }
        $('.b-item').eq(num).addClass("active").siblings(".b-item").removeClass("active");
        $('.banner>ul>li').eq(num).stop().fadeIn().siblings("li").hide();
    })
    function move()
    {
        num++;
        if(num>4)
        {
            num=0;
        }
        $('.b-item').eq(num).addClass("active").siblings(".b-item").removeClass("active");
        $('.banner>ul>li').eq(num).stop().fadeIn().siblings("li").hide();
    }
    timer=setInterval(move,3000);
    $('.banner').on("mouseenter", function () {
        clearInterval(timer);
    }).on("mouseleave",function(){
        timer=setInterval(move,3000);
    })
    /*导航栏*/

    $('.nav>ul>li').on("mouseenter",function(){
        $(this)/*.css({
            "background-position":"1px -110px"
        })*/.children("a").css({
            "color":"#b3dc10"
        })
    })
    $('.nav>ul>li').on("mouseleave",function(){
        $(this)/*.css({
            "background-position":"1px -110px"
        })*/.children("a").css({
            "color":"#cbcbcb"
        })
    })

    /*内容*/
    $('.game_next').on("click",function()
    {
        $(this).css({
            "background-position":"-166px -74px"
        }).siblings(".game_prev").css({
            "background-position":"-166px -154px"
        })
        $(".gamelist>ul").stop().animate({
            left:-196
        },600)
    })
    $('.game_prev').on("click",function()
    {
        $(this).css({
            "background-position":"-166px -178px"
        }).siblings(".game_next").css({
            "background-position":"-166px -50px"
        })
        $(".gamelist>ul").stop().animate({
             left:0
        },600)
    })
    $('.gamelist>ul>li').on("mouseenter",function(){
        $('strong').eq($(this).index()).hide().siblings('strong').show();

    })
    $('.gamelist>ul>li>').on("mouseleave",function(){
        $('strong').show();
    })

})

