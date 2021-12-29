const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";
function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}




function makeToDo(toDoItem) {
    const li = document.createElement("li");
    li.id = toDoItem.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = toDoItem.text;
    console.log(li);
    toDoList.appendChild(li);
    
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const toDoItem = toDoInput.value;
    const toDOItemObj = {
        text : toDoItem,
        id : Date.now(),

    };
    toDoInput.value = "";
    toDos.push(toDOItemObj);
    makeToDo(toDOItemObj);
    saveToDos();
}


toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    parsedToDos.forEach(makeToDo);
    toDos = parsedToDos;
}