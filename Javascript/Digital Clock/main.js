let DigitalClock = () => {
    let date = new Date();

    let hrs = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let ampm = document.getElementById("period");
    let dates = document.getElementById("date");
    let month = document.getElementById("month");
    let year = document.getElementById("year");


    let hours = date.getHours();

    let AMPM = hours >= 12 ? "PM" : "AM";

    ampm.innerHTML = AMPM;
    hrs.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    dates.innerHTML = date.getDate();
    month.innerHTML = date.getMonth();
    year.innerHTML = date.getFullYear();
}

setInterval(DigitalClock, 1000);