const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${month}월 ${day}일
    ${hours <10?`0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds < 10? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();