/**
 * Created by Administrator on 2015/11/5.
 */
window.onload=function() {
    /*banner开始*/
    var oBanner = document.getElementById('banner');
    var aB=oBanner.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var aImg=oBanner.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var now=0;

    for(var i=0; i<aB.length;i++)
    {
        aB[i].index=i;
        aB[i].onclick=function()
        {
            now=this.index;
            tab();
        }
    }
    function tab()
    {
        for(var i=0;i<aB.length;i++)
        {
            aB[i].className='';
            aImg[i].style.display='none';
        }
        aB[now].className='active';
        aImg[now].style.display='block';
    }
    var timer=null
    function next(){
        now++;
        if(now==aB.length)
        {
            now=0;
        }
        tab();
    }
    timer=setInterval(next,5000);
    oBanner.onmouseover=function()
    {
        clearInterval(timer);
    }
    oBanner.onmouseout=function()
    {
        timer=setInterval(next,5000);
    }
    var oTxt=document.getElementById('txt');
    oTxt.onfocus=function()
    {
        if(oTxt.value=="中岛美嘉《花束》")
        {
            oTxt.value="";
            oTxt.style.color="#000";
        }
    }
    oTxt.onblur=function()
    {
        if(oTxt.value=="")
        {
            oTxt.value="中岛美嘉《花束》";
            oTxt.style.color="#ccc";
        }
    }
    $('#next').on('click', function () {
        now++;
        if(now==aB.length)
        {
            now=0;
        }
        tab();
    });
    $('#prev').on('click', function () {
        now--;
        if(now<0)
        {
            now=aB.length-1;
        }
        tab();
    });
    /*内容开始*/
    $('.shoub .yy_first').on('click', function () {
        $(this).addClass('cur').siblings('.yy_first').removeClass('cur');
        $('.shoub .main_box').eq($(this).index()/2).addClass('show').siblings().removeClass('show');
    });
    $('.purple .yy_first').on('click', function () {
        $(this).addClass('cur').siblings('.yy_first').removeClass('cur');
        $('.purple .main_box').eq($(this).index()/2).addClass('show').siblings().removeClass('show');
    });
    $('.music .yy_first').on('click', function () {
        $(this).addClass('cur').siblings('.yy_first').removeClass('cur');
        $('.music .main_box').eq($(this).index()/2).addClass('show').siblings().removeClass('show');
    });
    $('.fl-yy_2_1').on('mouseenter', function () {

        $(this).children('.yy_down').stop().animate({'height':'148px'},500);

        $(this).addClass('current');


    }).on('mouseleave', function () {

        $(this).children('.yy_down').stop().animate({'height':'0'},500);

        $(this).removeClass('current');

    })



    /*返回顶部*/
    $(window).on('scroll', function () {
        $scrollTop=$(document).scrollTop();
        console.log($scrollTop);
        if($scrollTop>300){
            $('.top').stop().slideDown();
        }
        else{
            $('.top').stop().slideUp();
        }
        $('.top').on('click', function () {
            $('html,body').stop().animate({scrollTop:0});
        })
    })

}