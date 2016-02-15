/**
 * Created by Administrator on 2015/12/1.
 */
$(document).ready(function(){
    /*banner*/
    $('.item').on("mouseenter","li",function(){
        $(this).addClass("active").siblings().removeClass("active");
        $('.slider').eq($(this).index()).stop().fadeIn().siblings("div").hide();
    })
    var num=0;
    var timer=null;
    function move()
    {
        num++;
        if(num>2)
        {
            num=0;
        }
        $(".item>li").eq(num).addClass("active").siblings().removeClass("active");
        $('.slider').eq(num).stop().fadeIn().siblings("div").hide();

    }
    timer=setInterval(move,3000);
    $(".banner").on("mouseenter",function(){
        clearInterval(timer);
    }).on("mouseleave",function(){
        timer=setInterval(move,3000);
    })
    /*新闻热点*/
    $(".main>a>img").on("mouseenter",function(){
        $(this).stop().animate({
            opacity:1
        },600);
    }).on("mouseleave",function(){
        $(this).stop().animate({
            opacity:0.2
        },600);
    })
    /*游戏*/
    $('.gnav>a').on("mouseenter",function(){
        $(this).css("opacity","1").siblings().css("opacity","0.8");
        $(".game").eq($(this).index()).show().siblings("div.game").hide();
    })
    $(".mob_icon>li").on("mouseenter",function(){
        $(".mob_name>h3").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
        $(".mob_game>li").eq($(this).index()).hide().fadeIn().siblings().hide();

    })
    $(".mob_icon1>a").on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g4.png) no-repeat"
            })
        })
    })
    $(".mob_icon2>a").on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g8.png) no-repeat"
            })
        })
    })
    $(".mob_icon3>a").on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g10.png) no-repeat"
            })
        })
    })
    $(".web_SD>li>a").on("mouseenter",function(){
        $(".web_GD").hide().stop().fadeIn()
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
            "background":"url(images/g6.png) no-repeat"
            })
        })
    })
    $('.pc_tab li').on("mouseenter",function(){
        $('.pc_main>div').eq($(this).index()).fadeIn().siblings().hide();
    })
    $('.pc_icon1>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g5.png) no-repeat"
            })
        })
    })
    $('.pc_icon2>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g1.png) no-repeat"
            })
        })
    })
    $('.pc_icon3>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g3.png) no-repeat"
            })
        })
    })
    $('.pc_icon4>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g2.png) no-repeat"
            })
        })
    })
    $('.pc_icon5>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g7.png) no-repeat"
            })
        })
    })
    $('.pc_icon6>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g12.png) no-repeat"
            })
        })
    })
    $('.pc_icon7>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g11.png) no-repeat"
            })
        })
    })
    $('.pc_icon8>a').on("mouseenter",function(){
        $(this).css({
            "background":"url(images/imgbg.png) no-repeat"
        }).on("mouseleave",function(){
            $(this).css({
                "background":"url(images/g9.png) no-repeat"
            })
        })
    })

})