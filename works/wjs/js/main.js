/**
 * Created by Administrator on 2015/12/12.
 */
$(function() {

    /*控制轮播图*/
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function(i, item) {
            var $item = $(item);
            var imgSrc=isSmallScreen?$item.data('image-xs') : $item.data('image-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if(isSmallScreen)
            {
                $item.html('<img src="'+imgSrc+'"/>');

            }
            else{
                $item.empty();
            }

        });
    }
    $(window).on('resize', resize).trigger('resize');
    /*初始化tooltips插件*/
    $('[data-toggle="tooltip"]').tooltip();
    /*控制tab*/
    var $ulWidth = $('.nav-tabs');
    var width = 30;
    $ulWidth.children().each(function(index, element) {
        width += $(element).width();
    });
    if (width > $(window).width()) {
        $ulWidth
            .css('width', width)
            .parent().css('overflow-x', 'scroll');
    }
    else{
        $ulWidth
            .css('width', 'auto')
            .parent().css('overflow-x', 'hidden');
    }
    /*news转换*/
    var $newsBtns=$('.nav-pills>li>a');

        $newsBtns.on('click', function () {
            $('.news-title').text($(this).data('title'));
        })
    /*触摸换图*/
    var $carousels=$('.carousel');
    var startX=0;
    var endX=0;
    var offset=50;
    $carousels.on('touchstart', function (e) {
      startX=e.originalEvent.touches[0].clientX;
    })
    $carousels.on('touchmove', function (e) {
        endX=e.originalEvent.touches[0].clientX;
        /* console.log(end);*/
    })

    $carousels.on('touchend', function () {
        var distance=endX-startX;
        if(distance>offset)
        {
            $(this).carousel("prev");
        }
        else if(distance<-offset){
            $(this).carousel("next");
        }
        console.log(distance)
    })


});