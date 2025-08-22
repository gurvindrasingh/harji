
const btt = document.getElementById("time-stop")


function Showtime() {
    const currenttime = new Date();
    const Time =` ${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()} `
    document.getElementById("Time").innerText = Time
}

const interval = setInterval(Showtime, 1000)

btt.addEventListener('click', () => {
    clearInterval(interval);
});

