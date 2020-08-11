const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    }); //toDos -> cleaned To-Do List
    toDos = cleanToDos;
    saveToDos();
}

function completeToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.children[1];

    if (span.style.cssText !== "text-decoration: line-through;") {
        span.style.cssText = "text-decoration: line-through;";
    } else if (span.style.cssText === "text-decoration: line-through;") {
        span.style.cssText = "text-decoration:none;";
    }

    saveToDos();
}

function saveToDos() {
    // It isn't able to save to local storage for javascript
    // (only STRING is able to be saved)
    // JSON is a nice way (Any type -> String)
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const completeBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    completeBtn.innerText = "⭕";
    completeBtn.addEventListener("click", completeToDo);
    span.innerText = text;
    li.appendChild(completeBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); //get toDos
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); //parse toDos(JS->object)
        parsedToDos.forEach(function(toDo) { //do function paintToDo each toDo
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();