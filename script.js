let todayDate = new Date();

let fixMonth = (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let month in months) {
        if (month == date) {
            return months[month];
        }
    }
};

let fixTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeOfDay = 'am';

    if (hours > 12) {
        hours -= 12;
        timeOfDay = 'pm';
    }
    
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
};


document.getElementById('date').innerHTML = `${todayDate.getDate()} ${fixMonth(todayDate.getMonth())} ${todayDate.getFullYear()}`;

fixTime(todayDate);

setInterval(fixTime, 1000);