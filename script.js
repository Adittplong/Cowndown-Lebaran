const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondEl = document.getElementById('second');

const lebaran = '11 Apr 2024';

function countdown(){
    const lebarandate = new Date(lebaran);
    const currentDate = new Date();

    const totalSeconds = (lebarandate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds /3600) %24 ; 
    const mins = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time <10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);