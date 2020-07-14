//JS can respond to Event(click, resize, open, close, ...)

//To search ID or class, etc by using querySelector
const title = document.querySelector("#title"); //if you want to search as class -> ".title", to search as ID -> "#title"

//When I need to call handler, addEventListener will call arg handler
function handleResize(event) {
    console.log(event);
}

window.addEventListener("resize", handleResize);

function handleClick(event) {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);