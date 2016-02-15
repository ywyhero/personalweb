/**
 * Created by Administrator on 2016/1/23.
 */
$(function () {
    var project = new Project();
    project.images = [
        'images/xc.png',
        'images/wjs.png',
        'images/shiji.png',
        'images/9you.png',
        'images/yyt.png'
    ];
    project.arr = [
        'works/xc/index.html',
        'works/wjs/index.html',
        'works/shiji/index.html',
        'works/9you/index.html',
        'works/yyt/index.html'
    ];
    project.bindImages();
    project.bindEvent();
})