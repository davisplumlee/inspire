function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDay();
    var y = today.getMonth();
    var w = today.getDate()
    m = checkTime(m);
    if (d == 1) {
        d = 'Monday'
    } else if (d == 2) {
        d = 'Tuesday'
    } else if (d == 3) {
        d = 'Wednesday'
    } else if (d == 4) {
        d = 'Thursday'
    } else if (d == 5) {
        d = 'Friday'
    } else if (d == 6) {
        d = 'Saturday'
    } else if (d == 7) {
        d = 'Sunday'
    }

    if (y == 0) {
        y = 'January'
    } else if (y == 1) {
        y = 'February'
    } else if (y == 2) {
        y = 'March'
    } else if (y == 3) {
        y = 'April'
    } else if (y == 4) {
        y = 'May'
    } else if (y == 5) {
        y = 'June'
    } else if (y == 6) {
        y = 'July'
    } else if (y == 7) {
        y = 'August'
    } else if (y == 8) {
        y = 'September'
    } else if (y == 9) {
        y = 'October'
    } else if (y == 10) {
        y = 'November'
    } else if (y == 11) {
        y = 'December'
    }
    
    $('#clock').text(h + ':' + m)
    $('#date').text(d + ', ' + y + ' ' + w)
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime()
