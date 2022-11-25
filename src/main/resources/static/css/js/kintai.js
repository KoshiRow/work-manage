const element1 = document.getElementById('attendwork');
element1.addEventListener('click', function() {
    window.confirm('出勤しますか？');
})

const element2 = document.getElementById('leavingwork');
element2.addEventListener('click', function() {
    window.confirm('退勤しますか？');
})
