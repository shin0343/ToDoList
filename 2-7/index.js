const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    /*const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }*/
    title.classList.toggle(CLICKED_CLASS); // This way is worked same as above code
}

function init() {
    title.addEventListener("click", handleClick);
}

init();