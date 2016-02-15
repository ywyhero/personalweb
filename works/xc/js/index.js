/**
 * Created by Administrator on 2015/12/21.
 */
$(function () {
    /*banner开始*/
    $('.close_btn').on('click', function () {
        $('.wx_mob').hide();
    })
    $('.xc_subway>ul>li>a>i').each(function (i,e) {
        $(e).css("background-position","0 -"+i*21+"px");
    })
    $('.xc_banner>ol>li').on('mouseenter', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.xc_banner>ul>li').eq($(this).index()).addClass("show").siblings().removeClass("show");
    })
    var index=0;
    var aImg=$('.xc_banner>ul>li');
    var timer=null;
    timer=setInterval(changeImg,3000);
    function changeImg() {
        index++;
        if(index>aImg.length-1)
        {
            index=0;
        }
        $('.xc_banner>ol>li').eq(index).addClass('current').siblings('li').removeClass("current");
        $('.xc_banner>ul>li').eq(index).addClass("show").siblings().removeClass("show");
    }
    $('.xc_banner').on('mouseenter', function () {
        clearInterval(timer);
    }).on('mouseleave', function () {
        timer=setInterval(changeImg,3000);
    });
    /*banner结束*/
    /*searchBox开始*/
    $('.searchBox>ul>li').on('mouseenter', function () {
        $(this).addClass('current')/*.siblings('li').removeClass("current")*/;
}).on('click', function () {
        $(this).addClass('clicked').siblings('li').removeClass("clicked");

        $('.ad_sch').eq($(this).index()).addClass("show").siblings().removeClass("show");
    }).on('mouseleave', function () {

        $('.searchBox>ul>li').removeClass('current');
        $('.clicked').addClass('current');
    })
    $('.line_bg>li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.search_hotel form').eq($(this).index()).show().siblings("form").hide();
    });
    /*main开始*/
    $('.tmh .main_travel>li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.tmh .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro').eq($(this).index()).addClass('show').siblings('.xc_pro').removeClass('show');
    });
    $('.pro_hd li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
    });
    /*海外酒店*/
    $('.hwjd>.main_title>.main_travel>li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.hwjd .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro1').eq($(this).index()).addClass('show').siblings('.xc_pro1').removeClass('show');
    });
    /*机票*/
    $('.tjjp .main_travel li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.tjjp .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro2').eq($(this).index()).addClass('show').siblings('.xc_pro2').removeClass('show');
    });
    /*租车*/
    $('.zc .main_travel li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.zc .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro3').eq($(this).index()).addClass('show').siblings('.xc_pro3').removeClass('show');
    });
    /*当地玩乐*/
    $('.ddwl .main_travel li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.ddwl .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro4').eq($(this).index()).addClass('show').siblings('.xc_pro4').removeClass('show');
    });
    /*目的地攻略*/
    $('.mddgl .main_travel li').on('click', function () {
        $(this).addClass('current').siblings('li').removeClass("current");
        $('.mddgl .main_travel>li>i').eq($(this).index()).addClass("show").parent("li").siblings("li").children('i').removeClass("show");
        $('.xc_pro5').eq($(this).index()).addClass('show').siblings('.xc_pro5').removeClass('show');
    });
    /*$('.xc_gl .pro-img').on('mouseenter',function(){
        $('.gl_item').stop().animate({'bottom':"0"},1000);
    }).on('mouseleave', function () {
        $('.gl_item').stop().animate({'bottom':"-25"},1000);
    })*/
    /*合作伙伴*/
    $('.xc_partner_right_bottom>ul>li>a').each(function (index,item) {
        $(item).css('background-position',"0 -"+index*33+"px");
    })
    
    /*左边导航栏*/
    $('.leftnav ul li').each(function (i,e) {
        $(e).css({'background-position':"center -"+i*40+"px"});
    });
    $('.leftnav ul li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('html,body').animate({scrollTop:$('.leftscroll').eq($(this).index()).offset().top-200},500 );
    })

    var leftTop=$('.leftnav').offset().top;

    $(window).on('scroll', function () {
        if($(document).scrollTop()<$('.xc_main').offset().top/2)
        {
            $('.leftnav').stop().animate({top:516},500);
        }
        else{
            $('.leftnav').stop().animate({top:200},500);
        }
        var num=parseInt($(window).scrollTop()/350);
        console.log(num);
        for(var i=0;i<num;i++)
        {
            $('.leftnav ul li').eq(i).addClass('active').siblings('li').removeClass('active');
        }
       if(leftTop<516)
        {

            $('.leftnav').stop().animate({top:516},500);
        }

    })
    /*固定栏*/
    $('.close').on('click', function () {
        $('.fix_ad').animate({'left':'-100%'},1000,function(){
            $('.fix_yin').animate({'left':'0%'},500);
        });
    $('.fix_yin').on('click', function () {
        $(this).animate({'left':'-100%'},500, function () {
                $('.fix_ad').animate({'left':'0%'},1000)
            });
        });
    })

})