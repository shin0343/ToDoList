const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
        console.log(currentColor);
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
}

title.addEventListener("click", handleClick);
init();

//MDN: Event Reference
function handOffline() {
    console.log("OffLine");
}

function handOnline() {
    console.log("OnLine");
}

window.addEventListener("offline", handOffline);
window.addEventListener("online", handOnline);