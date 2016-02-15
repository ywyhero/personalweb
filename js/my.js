/**
 * Created by Administrator on 2015/11/19.
 */

/*id��װ*/
function $(id)
{
    return document.getElementById(id);
}
/*ѡȡclassName����*/
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
/*�����˶����*/
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
        var bStop=true;//���裬����ֵ���Ѿ�����
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
/*��װscroll����*/
function scroll() {
    if (window.pageYOffset != null)  //  ie9+ �����������
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode == "CSS1Compat")  // �������� DTD
    // ����ǲ��ǹ���ģʽ������� -- ����û�� ����<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  ʣ�µĿ϶��ǹ���ģʽ��
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
/*��װclient����*/
function client() {
    if(window.innerWidth != null)  // ie9 +  ���������
    {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat")  // ��׼�����
    {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return {   // ���������
        width: document.body.clientWidth,
        height: document.body.clientHeight

    }
}