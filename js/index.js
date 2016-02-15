/**
 * Created by Administrator on 2015/12/16.
 */
window.onload= function () {
    var bar = 0;
    function count() {
        bar = bar + 2;
        var per = document.getElementById('percent');
        per.innerHTML = bar + '%';
        if (bar <=99) {
            setTimeout(count, 100);
        }
        else {
            window.location = "main.html";
        }
    }

    count();
}
