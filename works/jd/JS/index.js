/**
 * Created by Administrator on 2015/11/7.
 */

window.onload=function() {
    function $(id) {
        return document.getElementById(id);
    }

    /*登录框显示*/

    $("login_sy").onclick = function () {
        $('login_k').style.display = 'block';
        $('mask').style.display = 'block';
    }
    $('login_close').onclick = function () {
        $('login_k').style.display = 'none';
        $('mask').style.display = 'none';
    }

    /*登录框结束*/
    /*搜索开始*/
    $('txt').onfocus = function () {
        if ($('txt').value == "图书开抢") {
            $('txt').value = "";
            $('txt').style.color = "#333";

        }

    }
    $('txt').onblur = function () {
        if ($('txt').value == "") {
            $('txt').value = "图书开抢";
            $('txt').style.color = "#666";

        }
    }
    /*搜索结束*/
    /*生活服务图标开始*/
    var oLift_tb = document.getElementById('lift_tb');
    var aI = oLift_tb.getElementsByTagName('ul')[0].getElementsByTagName('i');
    for (var i = 0; i < aI.length; i++) {
        aI[i].style.background = "url(images/serv.png) no-repeat right " + (-25 * i) + "px";
    }
    /*生活服务图标结束*/
    /*topbanner关闭开始*/
    $('jd_close').onclick = function () {
        $('topbanner').style.display = 'none';
    }
    /*topbanner关闭结束*/
    /*banner切换开始*/
    var oMain = document.getElementById('slider');
    var oMain_li = oMain.getElementsByTagName('ol')[0].getElementsByTagName('li');
    var oMain_pic = oMain.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var oMain_ul = oMain.getElementsByTagName('ul')[0];
    var now = 0;
    for (var i = 0; i < oMain_li.length; i++) {
        oMain_li[i].index = i;
        oMain_li[i].onmouseover = function () {
            now = this.index;
            tab();
        }
    }
    function tab() {
        for (var i = 0; i < oMain_li.length; i++) {
            oMain_li[i].className = '';
            oMain_pic[i].style.display = 'none';
        }
        oMain_li[now].className = 'current';
        oMain_pic[now].style.display = 'block';
    }

    function next() {
        now++
        if (now == oMain_li.length) {
            now = 0;
        }
        tab();
    }

    var timer = setInterval(next, 3000);
    oMain_ul.onmouseover = function () {
        clearInterval(timer);
    }
    oMain_ul.onmouseout = function () {
        timer = setInterval(next, 3000);
    }

    /*banner切换结束*/
    /*楼层TAB切换开始*/
    /*function getByClass(oParent,sClass)
    {

        var aEle=oParent.getElementsByTagName('*');
        var aResult=[];
        for(var i=0;i<aEle.length;i++)
        {
            if(aEle[i].className==sClass)
            {
                aResult.push(aEle[i]);
            }

        }
        return aResult;
    };*/
    function getByClass(cName,parent)
{
    var nodeParent = null; // 存放父亲元素的
    if(parent) // 如果存在就说明 用户输入了
    {
        nodeParent = document.getElementById(parent);
    }
    else
    {
        nodeParent = document.body;// 整个页面的父亲
    }

    //parent?nodeParent = document.getElementById(parent) :  nodeParent = document.body;
    var eles = nodeParent.getElementsByTagName("*");
    //获取里面所有的元素

    var arr = [];   //用于存放满足条件的元素
    for(var i=0;i<eles.length;i++) //开始筛选所有的元素
    {
        var namearr = eles[i].className.split(' ');
        //获得某个元素的classname 字符串  并且进行转换为数组
        for(var j=0;j<namearr.length;j++)
        {
            if(namearr[j]==cName) //如果含有 类名 就进行保存
            {
                arr.push(eles[i]);// 留下满足条件的
            }
        }

    }
    return arr;
}


    //var clothes=document.getElementById('clothes');

    var jd_clothes=document.getElementById('jd_clothes');
    var clothes_li=jd_clothes.getElementsByTagName('li');

    var jd_cl_show = getByClass('mc','clothes');
    //alert(jd_cl_show.length);

    for(var i=0;i<clothes_li.length;i++)
    {
        clothes_li[i].index=i;
        clothes_li[i].onmouseover=function()
        {

            for(var j=0;j<clothes_li.length;j++)
            {
                clothes_li[j].className='';

               jd_cl_show[j].className='mc';
            }
            this.className='active';
           jd_cl_show[this.index].className='mc show';
        }
    }
    /*楼层TAB切换结束*/


}

