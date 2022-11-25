//秒で動くのが目障りなので分までの表示に変更
function showMitute() {
    document.getElementById("now-time").innerHTML = (new SuperDate()).getStrUntilMinute();
    window.setTimeout("showMitute()" , 60000);
}