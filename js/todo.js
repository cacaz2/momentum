const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}


function makeToDo(toDoItem) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = toDoItem;
    console.log(li);
    toDoList.appendChild(li);

}

function handleToDoSubmit (event) {
    event.preventDefault();
    const toDoItem = toDoInput.value;
    toDoInput.value = "";
    makeToDo(toDoItem)
}

toDoForm.addEventListener("submit",handleToDoSubmit)