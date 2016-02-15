/**
 * Created by Administrator on 2015/11/19.
 */

/*id封装*/
function $(id)
{
    return document.getElementById(id);
}
/*选取className函数*/
function getByClass(id,sClass)
{
    var oParent=document.getElementById(id);
    var aEle=oParent.getElementsByTagName("*");
    var aResult=[];
    for(var i=0;i<aEle.length;i++)
    {
        var txtarr=aEle[i].className.split(" ");
        for(var j=0;j<txtarr.length;j++)
        {
            if(txtarr[j]==sClass)
            {
                aResult.push(aEle[i]);
            }
        }
    }
    return aResult;
}
/*完美运动框架*/
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,json,fnEnd)
{

    clearInterval(obj.timer);

    obj.timer=setInterval(function()
    {
        var bStop=true;//假设，所有值都已经到了
        for(var attr  in json)
        {
            var cur=0;
            if(attr=='opacity')
            {
                cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }
            else
            {
                cur=parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-cur)/6;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur != json[attr])
                bStop=false;
            if(attr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else
            {
                obj.style[attr]=cur+speed+'px';
            }

        }
        if(bStop)
        {
            clearInterval(obj.timer);
            if(fnEnd)fnEnd();
        }
    },30);
}
/*封装scroll函数*/
function scroll() {
    if (window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/*封装client函数*/
function client() {
    if(window.innerWidth != null)  // ie9 +  最新浏览器
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat")  // 标准浏览器
    {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {   // 怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight

    }
}