function clearCalender() {
    const tableElem = document.getElementsByClassName('date-calender')[0];
    const trElems = tableElem.tBodies[0].rows;
    const rowNum = trElems.length;
    for(let i = 0; i < rowNum; i++) {
        tableElem.tBodies[0].deleteRow(0);
    }
}
function setOneMonthCalenderAfter(displayMonthParam) {
    const tableElem = document.getElementsByClassName('date-calender')[0];
    let dateCount;
    if(displayMonthParam == 0) {
        dateCount = new SuperDate().getDate();
    } else {
        dateCount = SuperDate.getDateCountOf(SuperDate.getMonthModulo(new SuperDate().getMonth() + displayMonthParam));
    }
    for(let i = 0; i < dateCount; i++) {
        const date = new SuperDate().getFirstSuperDateAfter(displayMonthParam);
        date.setDate(date.getDate() + i);
        const trElem = tableElem.tBodies[0].insertRow(-1);
        const cellElem1 = trElem.insertCell(0);
        cellElem1.appendChild(document.createTextNode(date.toLocaleDateStr()));
        const cellElem2 = trElem.insertCell(1);
        cellElem2.appendChild(document.createTextNode("??:??"));
        const cellElem3 = trElem.insertCell(2);
        cellElem3.appendChild(document.createTextNode("??:??"));
        const cellElem4 = trElem.insertCell(3);
        cellElem4.appendChild(document.createTextNode("??:??"));
        const cellElem5 = trElem.insertCell(4);
        cellElem5.appendChild(document.createTextNode("??:??"));
    };
}
let displayMonthParam = 0;

function updateDisplayCalender() {
    clearCalender();
    const str = SuperDate.getOneMonthDurationStrAfter(displayMonthParam);
    document.getElementsByTagName("h1")[0].innerHTML = "選択した人の 勤怠履歴一覧" + str;
    setOneMonthCalenderAfter(displayMonthParam)
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