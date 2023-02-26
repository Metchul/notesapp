document.addEventListener("DOMContentLoaded", function(){

const todoInput = document.getElementById("todoInputBox");
const addTodoButton = document.getElementById("addTodoButton");
const mainTodoList = document.getElementById("todoList");
const downloadButton = document.getElementById("downloadButton");


let inputText = "";

class toDoItem {
    constructor(taskName, createdDate, completedDate) {
        this.taskName = taskName;
        this.createdDate = createdDate;
        this.completedDate = 0;
    }
}

const toDoList = [];




function addListItem() {
    const listItem = document.createElement('li');
    const date = new Date();
    const date2 = date.toLocaleString();
    const inputText = todoInput.value;

    listItem.innerHTML = `<label>` +
        `<input type = "checkbox" class="rounded-checkbox">` +
        `<span>`+ inputText +`</span>` +
        `</label>` +
        `<span class = "li-subtitle">Created: ${date.toLocaleString()}</span>` +
        `<span class = "li-subtitle">Completed:</span>`;
    mainTodoList.appendChild(listItem)

    const todoObject = new toDoItem(inputText, date2);
    toDoList.push(todoObject);
}


function downLoadTodoList() {
    const data = JSON.stringify(toDoList);
    const blob = new Blob([data], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "todo-list.json";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}


downloadButton.addEventListener("click", function() {
    console.log("download clicked");
    downLoadTodoList();
});

addTodoButton.addEventListener("click", function() {
    inputText = todoInput.value;
    addListItem()

    console.log("test")
    todoInput.value = "";
    todoInput.placeholder = "Add item to list...";
    
});






})