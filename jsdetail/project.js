/**
 * Created by Administrator on 2016/1/23.
 */
function Project(){
    this.images=[];
    this.arr=[];
}
Project.prototype= {
    bindImages: function () {
        var str = '';
        for (var i = 0; i < this.images.length; i++) {
            str += '<li><a target="_blank" href="' + this.arr[i] + '"><img src="' + this.images[i] + '" alt=""/></a></li>'
        }
        $('.pro-ad ul').html(str);
        var arrow = $('<div class="arrow" id="arrow"></div>');
        var proAd = $('.pro-ad');
        arrow.appendTo(proAd);
        var prev = $('<span class="prev"></span>');
        var next = $('<span class="next">></span>');
        prev.text('<');
        next.text('>');
        arrow.append(prev);
        arrow.append(next);
    },
    bindEvent: function () {
        function getStyle(obj, name) {
            if (obj.currentStyle) {
                return obj.currentStyle[name];
            }
            else {
                return getComputedStyle(obj, false)[name];
            }
        }

        function startMove(obj, json, fnEnd) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bStop = true;
                for (var attr in json) {
                    var cur = 0;
                    if (attr == 'opacity') {
                        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100) || 0;
                    }
                    else {
                        cur = parseInt(getStyle(obj, attr));
                    }
                    var speed = (json[attr] - cur) / 6;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (json[attr] != cur)
                        bStop = false;
                    if (attr == 'opacity') {
                        obj.style.opacity = (cur + speed) / 100;
                        obj.style.filter = "alpha(opacity:" + parseInt((cur + speed)) + ")";
                    }
                    else if (attr == 'zIndex') {
                        obj.style.zIndex = json[attr];
                    }
                    else {
                        obj.style[attr] = cur + speed + 'px';
                    }
                }
                if (bStop) {
                    clearInterval(obj.timer);
                    if (fnEnd)fnEnd();
                }
            }, 30);
        }

        var pro_ad = document.getElementById('pro-ad');
        var oUl = pro_ad.children[0];
        var aLi = oUl.children;
        var oArrow = document.getElementById('arrow');
        var oBtn = oArrow.children;
        var iNow = 0;
        var json = [
            {
                width: 400,
                top: 20,
                left: 50,
                opacity: 20,
                z: 2
            },
            {
                width: 600,
                top: 70,
                left: 0,
                opacity: 40,
                z: 3
            },
            {
                width: 800,
                top: 100,
                left: 200,
                opacity: 60,
                z: 4
            },
            {
                width: 600,
                top: 70,
                left: 600,
                opacity: 40,
                z: 3
            },
            {
                width: 400,
                top: 20,
                left: 750,
                opacity: 20,
                z: 2
            }
        ];
        Imgchange();
        for (var k in oBtn) {

            oBtn[k].onclick = function () {

                if (this.className == "prev") {
                    Imgchange(false);
                }
                else {

                    Imgchange(true);

                }

            }

        }
        function Imgchange(flag) {
            if (flag) {
                json.unshift(json.pop());
            }
            else {
                json.push(json.shift());
            }

            for (var q = 0; q < json.length; q++) {
                startMove(aLi[q], {
                    width: json[q].width,
                    top: json[q].top,
                    left: json[q].left,
                    opacity: json[q].opacity,
                    zIndex: json[q].z
                });
            }
        }

        function setMove() {
            iNow++;
            if (iNow > aLi.length - 1) {
                iNow = 0;
            }
            Imgchange(true);
        }

        timer = setInterval(setMove, 3000);
        pro_ad.onmouseover = function () {
            clearInterval(timer);
        }
        pro_ad.onmouseout = function () {
            timer = setInterval(setMove, 3000);
        }
    }
}