//JS can change HTML contents

//To search ID or class, etc by using querySelector
const title = document.querySelector("#title"); //if you want to search as class -> ".title", to search as ID -> "#title"

title.innerHTML = "Hi! From JS"; //innerHTML can changes HTML body's contents
title.style.color = "red";
document.title = "--TITLE--";