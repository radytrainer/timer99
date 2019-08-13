// Date 
var showDate = () => {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let dates = date.getDate();

    let outputDay = "";
    let outputMonth = "";
    let outputTop = "";

    // display day
    for (let i = 0; i < dayOfTheWeek.length; i++) {
        switch(day) {
            case i:
                outputDay = dayOfTheWeek[i];
        }
    }
    // display Month
    for (let i = 0; i < monthOfTheYear.length; i++) {
        switch(month) {
            case i:
                outputMonth = monthOfTheYear[i];
        }
    }
    // top date
    switch(dates) {
        case 1:
        case 21:
        case 31:
            outputTop = "st";
            break;
        case 2:
        case 22:
            outputTop = "nd";
            break;
        case 3:
        case 23:
            outputTop = "rd";
            break;
        default:
            outputTop = "th";
    }
    let result = document.getElementById('date');
    result.innerHTML = outputDay + "   " + dates + "<sup>" +  outputTop + "</sup>" + "  " + outputMonth + "  " + year;
    let message = document.querySelector('h4');
    switch(day) {
        case 1:
            message.innerHTML = "Enjoy Aerobic Dancing";
            message.style.color = "#f1c40f";
            break;
        case 3:
            message.innerHTML = "Enjoy Sport Time !";
            message.style.color = "#3498db";
            break;
        case 5:
            message.innerHTML = "Enjoy Movie Time !";
            message.style.color = "purple";
            break;
        case 0:
        case 6:
            message.innerHTML = "Nice Weekend Day !";
            message.style.color = "red";
            break;
        default:
            message.innerHTML = "Normal Day !";
            message.style.color = "teal";
    }
}
showDate();

// Timer
var timer = () => {
    let time = new Date();
    let hours = time.getHours() % 12;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let output = document.getElementById('timer');
    if (time.getHours() < 12) {
        output.innerHTML = hours + " : " + minutes + " : " +  seconds + " AM";
        document.querySelector('h6').innerHTML = "Good Morning !";
        document.querySelector('h6').style.color = "#2ecc71";
    }else {
        output.innerHTML = hours + " : " + minutes + " : " +  seconds + " PM";
        document.querySelector('h6').innerHTML = "Good Afternoon !";
        document.querySelector('h6').style.color = "orange";
    }
    if (time.getHours() >= 16) {
        output.innerHTML = hours + " : " + minutes + " : " +  seconds + " PM";
        document.querySelector('h6').innerHTML = "Good Evening !";
        document.querySelector('h6').style.color = "#c0392b";
    }
    if (time.getHours() >= 20) {
        output.innerHTML = hours + " : " + minutes + " : " +  seconds + " PM";
        document.querySelector('h6').innerHTML = "Good Night !";
        document.querySelector('h6').style.color = "#16a085";
    }

}
setInterval(timer, 1000);