var element1 = document.getElementById('attendwork');
element1.addEventListener('click', function() {
    window.confirm('出勤しますか？');
})

var element2 = document.getElementById('leavingwork');
element2.addEventListener('click', function() {
    window.confirm('退勤しますか？');
})
document.getElementById("nowTime").innerHTML = new Date().toLocaleString();
function showDate() {
    document.getElementById("nowTime").innerHTML = (new Date()).toLocaleString();
    window.setTimeout("showDate()" , 1000);
}    