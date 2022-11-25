let displayMonthParam = 0;

function updateDisplayCalender() {
    const str = SuperDate.getYearMonthStrAfter(displayMonthParam);
    document.getElementsByTagName("h1")[0].innerHTML = "勤務時間集計一覧　　" + str;
}
updateDisplayCalender();
document.getElementById("to-previous-month").addEventListener('click', function() {
    displayMonthParam--;
    updateDisplayCalender();
});

document.getElementById("to-next-month").addEventListener('click', function() {
    displayMonthParam++;
    updateDisplayCalender();
});