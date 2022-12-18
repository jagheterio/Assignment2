// Selectors
const todoInput = document.querySelector('.todo-input');
// const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const todoItem = document.querySelector('.todo-item')
// const filterInput = document.querySelector('.filter-input');

//Event Listners
// todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);
// filterInput.addEventListener('keyup',filterList);

//Functions

function addTodo(){
    //prevent form submitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check" ><i/>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK TRUCH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash" ><i/>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Appened TO LIST
    todoList.appendChild(todoDiv);
    //Clear TOdo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event){
    const item = event.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display="flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display="flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}


            function filterList(){
                var filterInput  = document.querySelector(".filter-input");
                
                // console.log("method works!")
                // console.log("filterInput:", filterInput.value);

                const todos = todoList.childNodes;
                todos.forEach(function (todoItem){

                    const itemText = todoItem.querySelector(".todo-item").innerText

                    // console.log("inside forEach:", itemText);

                    if(itemText.includes(filterInput.value))
                    {
                        todoItem.style.display="flex";
                    } 
                    else
                    {
                        todoItem.style.display="none";
                    }
                });
            }
 

    // function filterList(){
    //     const todos = todoList.childNodes;
    //     todos.forEach(function(itemTodo){

    //         let filterInput = document.querySelectorAll('filter-input');
    //         if(filterInput.contains("yahoo"));
    //         {
    //             filter.style.display="flex";    
    //         }else
    //         {
    //             filter.style.display="none";    
    //         }
    //         }
    //     );
    // }