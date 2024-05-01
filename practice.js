const text= document.querySelector(".text");
const button= document.querySelector(".button");
const list= dociment.querySelector(".list");
document.addEventListener("DOMContent Loaded",()=>{
    const storedTodoList=JSON.parse(localStorage.getitem("todoList"));
    if (storedTodoList){
        storedTodoList.forEach((todo) => {
            addToDoDOMList(todo);
        });
    };
});
function addToDoDOMList(todo) {
    const div= document.createElement("div");
    const li= document.createElement("li");
    div.classList.add("todo-div");
    li.classList.add("todo-li");
    li,innerText= todo.text;
    div.appendChild(li);
    list.appendChild(div);
    const deleteButton= document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText="Delete";
    div.appendChild(deleteButton);
    deleteButton.addEventListener("click",()=>{
        div.parentNode.removeChild(div);
        updateToDoList();
    });
    const editButton= Document.createElement("button");
    editButton,classlist.add("edit");
    editButton.innerText="Edit";
    div.appendChild(editButton);
    editButton.addEventListener("click", () => {
        const editInput = document.createElement("input");
        editInput.type="text";
        editInput.value=li.innerText.trim();
        li.innerHTML="";
        li.appendChild;
        editInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                li.innerText=editInput.value;
                updateToDoList();
            }
        });
    });
};
function updateToDoList(){
    const todos = array.from(list.querySelectorAll(".todo.li")).map((item)=>{
        return{ text:item. innerText.trim()};
    });
    localStorage.setItem("todoList",JSON.stringify(todos));
};
button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(text.value.trim()!==""){
        const todo={text: text.value.trim()};
        addToDoDOMList(todo);
        updateToDoList();
        text.value="";
    }
});