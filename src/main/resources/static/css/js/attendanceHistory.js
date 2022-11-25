function clearCalender() {
    const tableElem = document.getElementsByClassName('date-calender')[0];
    const trElems = tableElem.tBodies[0].rows;
    const rowNum = trElems.length;
    for(let i = 0; i < rowNum; i++) {
        tableElem.tBodies[0].deleteRow(0);
    }
}
function setOneMonthCalenderUntil(date) {
    const tableElem = document.getElementsByClassName('date-calender')[0];
    date.setDate(date.getDate() + 1);
    date.getPastOneMonthDates().forEach(function(date) {
        const trElem = tableElem.tBodies[0].insertRow(0);
        const cellElem1 = trElem.insertCell(0);
        cellElem1.appendChild(document.createTextNode(date));
        const cellElem2 = trElem.insertCell(1);
        cellElem2.appendChild(document.createTextNode("??:??"));
        const cellElem3 = trElem.insertCell(2);
        cellElem3.appendChild(document.createTextNode("??:??"));
        const cellElem4 = trElem.insertCell(3);
        cellElem4.appendChild(document.createTextNode("??:??"));
        const cellElem5 = trElem.insertCell(4);
        cellElem5.appendChild(document.createTextNode("??:??"));
    });    
}
let displayMonthParam = 0;

function updateDisplayCalender() {
    clearCalender();
    const untilDate = new SuperDate().getDateAfterMonth(displayMonthParam);
    const str = SuperDate.getOneMonthDurationStrUntil(untilDate);
    document.getElementsByTagName("h1")[0].innerHTML = "勤怠履歴一覧" + str;
    setOneMonthCalenderUntil(untilDate);    
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