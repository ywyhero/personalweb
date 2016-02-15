/**
 * Created by Administrator on 2016/1/23.
 */
function Skill(){
    this.div='';
    this.jq='';
    this.c3='';
    this.ajax='';
    this.team='';
}
Skill.prototype= {
    bindDetail: function () {
        var content = $('<div class="content"></div>');
        $('.skill').append(content);
        var str = '';
        str += '<p>' + this.div + '</p>';
        str += '<p>' + this.jq + '</p>';
        str += '<p>' + this.c3 + '</p>';
        str += '<p>' + this.ajax + '</p>';
        str += '<p>' + this.team + '</p>';
        $('.content').html(str);
    }
}