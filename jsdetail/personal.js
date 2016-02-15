/**
 * Created by Administrator on 2016/1/23.
 */
function Personal(){
    this.yinping='';
    this.name='';
    this.sex='';
    this.date='';
    this.huji='';
    this.collage='';
    this.xueli='';
    this.professional='';
    this.hobby='';
    this.detail='';
    this.skill='';
    this.company1='';
    this.time1='';
    this.position1='';
    this.company2='';
    this.time2='';
    this.position2='';
    this.selfAppraisal='';
}
Personal.prototype= {
    bindInfo: function () {
        var personLeft = $('<div class="person-left"></div>');
        $('.person-content').append(personLeft);
        var str = '';
        str += '<p class="col-red">' + this.yinping + '</p>';
        str += '<p>' + this.name + '</p>';
        str += '<p>' + this.sex + '</p>';
        str += '<p>' + this.date + '</p>';
        str += '<p>' + this.huji + '</p>';
        str += '<p>' + this.collage + '</p>';
        str += '<p>' + this.xueli + '</p>';
        str += '<p>' + this.professional + '</p>';
        str += '<p class="col-black">' + this.hobby + '</p>';
        str += '<p class="col-black">' + this.detail + '</p>';
        str += '<a class="col-red" href="#page4">' + this.skill + '</a>';
        $('.person-left').html(str);
        var personRight = $('<div class="person-right"></div>');
        $('.person-content').append(personRight);
        var txt = '';
        txt += '<h5>工作简历</h5>';
        txt += ' <p>公司名称：' + this.company1 + '</p>';
        txt += '<p>工作时间：' + this.time1 + '</p>';
        txt += '<p>从事职位：' + this.position1 + '</p>';
        txt += ' <p>公司名称：' + this.company2 + '</p>';
        txt += '<p>工作时间：' + this.time2 + '</p>';
        txt += '<p>从事职位：' + this.position2 + '</p>';
        txt += '<h5 class="col-black">自我评价</h5>';
        txt += '<p class="col-black">' + this.selfAppraisal + '</p>';
        $('.person-right').html(txt);
    }
}