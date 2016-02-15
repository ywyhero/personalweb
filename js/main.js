/**
 * Created by Administrator on 2015/12/16.
 */


$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
        continuousVertical: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        css3: true,
        afterLoad: function (anchorLink, index) {

            $('.section').removeClass('current');

            // 延时100毫秒执行
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
        }
    });
    /*首页*/
    $('.img_close').on('click', function () {
        $('.wenxin').stop().slideUp();
    })
    setTimeout(function(){
        $('.wenxin').stop().fadeOut();
    },3000);
});


/*作品展示*/
window.onload= function () {


    /*技能特长*/
    function CircleText(option) {
        this._init(option);
    }

    CircleText.prototype = {
        _init: function (option) {
            this.x = option.x;
            this.y = option.y;
            this.innerRadius = option.innerRadius;
            this.outerRadius = option.outerRadius;
            this.innerStyle = option.innerStyle;
            this.outerStyle = option.outerStyle;
            this.text = option.text;

            this.group = new Konva.Group({
                x: this.x,
                y: this.y
            });
            var innerCircle = new Konva.Circle({
                x: 0,
                y: 0,
                radius: this.innerRadius,
                fill: this.innerStyle,
                opacity: .8
            });
            this.group.add(innerCircle);
            var outerRing = new Konva.Ring({
                x: 0,
                y: 0,
                outerRadius: this.outerRadius,
                innerRadius: this.innerRadius,
                fill: this.outerStyle,
                opacity: .2
            });
            this.group.add(outerRing);

            var text = new Konva.Text({
                x: -this.outerRadius,
                y: -7,
                width: this.outerRadius * 2,
                text: this.text,
                fill: '#fff',
                align: 'center',
                fontSize: 17,
                fontStyle: 'bold'
            });
            this.group.add(text);
        },
        addGroup: function (arg) {
            arg.add(this.group);
        }
    }
    var stage = new Konva.Stage({
        container: 'container',
        width: 600,
        height: 600
    });
    var cenX = stage.width() / 2;
    var cenY = stage.height() / 2;
    var bglayer = new Konva.Layer();
    stage.add(bglayer);

    var innerRadius = 252 / 2;
    var outerRadius = 220;

    var innerCircle = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: innerRadius,
        stroke: '#ccc',
        strokeWidth: 4,
        dash: [10, 4]
    });
    bglayer.add(innerCircle);
    var outerCircle = new Konva.Circle({
        x: cenX,
        y: cenY,
        radius: outerRadius,
        stroke: '#ccc',
        strokeWidth: 4,
        dash: [10, 4]
    });
    bglayer.add(outerCircle);
    var cenCricleText = new CircleText({
        x: cenX,
        y: cenY,
        innerRadius: 132 / 2,
        outerRadius: 90,
        innerStyle: '#525A82',
        outerStyle: '#E1E1E1',
        text: '前端技能'
    });
    cenCricleText.addGroup(bglayer);
    bglayer.draw();
    var animateLayer = new Konva.Layer();

    stage.add(animateLayer);
    var L2Group = new Konva.Group({
        x: cenX,
        y: cenY
    });
    var L2_html5 = new CircleText({
        x: innerRadius * Math.cos(0 * Math.PI / 180),
        y: innerRadius * Math.sin(0 * Math.PI / 180),
        innerRadius: 30,
        outerRadius: 40,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'html5'
    });
    L2_html5.addGroup(L2Group);
    var L2_canvas = new CircleText({
        x: innerRadius * Math.cos(-180 * Math.PI / 180),
        y: innerRadius * Math.sin(-180 * Math.PI / 180),
        innerRadius: 30,
        outerRadius: 40,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'canvas'
    });
    L2_canvas.addGroup(L2Group);
    var L2_CSS3 = new CircleText({
        x: innerRadius * Math.cos(-90 * Math.PI / 180),
        y: innerRadius * Math.sin(-90 * Math.PI / 180),
        innerRadius: 30,
        outerRadius: 40,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'CSS3'
    });
    L2_CSS3.addGroup(L2Group);
    var L2_zhengz = new CircleText({
        x: innerRadius * Math.cos(90 * Math.PI / 180),
        y: innerRadius * Math.sin(90 * Math.PI / 180),
        innerRadius: 30,
        outerRadius: 40,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: '正则表达式'
    });
    L2_zhengz.addGroup(L2Group);
    animateLayer.add(L2Group);
    var L3Group = new Konva.Group({
        x: cenX,
        y: cenY
    });
    animateLayer.add(L3Group);

    var L3_js = new CircleText({
        x: outerRadius * Math.cos(45 * Math.PI / 180),
        y: outerRadius * Math.sin(45 * Math.PI / 180),
        innerRadius: 40,
        outerRadius: 50,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'JS'
    })
    L3_js.addGroup(L3Group);
    var L3_jquery = new CircleText({
        x: outerRadius * Math.cos(135 * Math.PI / 180),
        y: outerRadius * Math.sin(135 * Math.PI / 180),
        innerRadius: 40,
        outerRadius: 50,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'jquery'
    });
    L3_jquery.addGroup(L3Group);
    var L3_Ajax = new CircleText({
        x: outerRadius * Math.cos(-45 * Math.PI / 180),
        y: outerRadius * Math.sin(-45 * Math.PI / 180),
        innerRadius: 40,
        outerRadius: 50,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: 'Ajax'
    });
    L3_Ajax.addGroup(L3Group);
    var L3_mob = new CircleText({
        x: outerRadius * Math.cos(-135 * Math.PI / 180),
        y: outerRadius * Math.sin(-135 * Math.PI / 180),
        innerRadius: 40,
        outerRadius: 50,
        innerStyle: '#aaa',
        outerStyle: '#E1E1E1',
        text: '移动Web'
    });
    L3_mob.addGroup(L3Group);
    animateLayer.draw();

    var rotateAnglPerSecond = 60;
    var animate = new Konva.Animation(function (frame) {
        var rotateAngle = rotateAnglPerSecond * frame.timeDiff / 1000;
        L2Group.rotate(rotateAngle);
        L2Group.getChildren().each(function (item, index) {
            item.rotate(-rotateAngle);
        });
        L3Group.rotate(-rotateAngle);
        L3Group.getChildren().each(function (item, index) {
            item.rotate(rotateAngle);
        });
    }, animateLayer);
    animate.start();
    stage.on('mouseover', function () {
        rotateAnglPerSecond = 10;
    });
    stage.on('mouseout', function () {
        rotateAnglPerSecond = 60;
    });

}
