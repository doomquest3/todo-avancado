// Seleção de elementos
const todoForm = document.querySelector("#todo-form");

const todoInput = document.querySelector("#todo-input");

const todoList = document.querySelector("#todo-list");

const editForm = document.querySelector("#edit-form");

const editInput = document.querySelector("#edit-input");

const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

// Funções
// Salvar dados na local storage
const saveLocalStorage = (text) =>{
    let num = localStorage.length += 1;

    localStorage.setItem(num, text);

}

// Recuperar dados da local storage.
const recuperarDados = () =>{
    let n = Object.keys(localStorage);

    for(let i of n){
        let textDate = localStorage.getItem(i);
        saveTodo(textDate);

    }

}

//deletar item da local storage.

const deletarDado = (text) =>{    
    let n = Object.keys(localStorage);
    for(let i of n){
        let resultado = text.localeCompare(localStorage.getItem(i));
        if(resultado === 0){
            console.log(i)
            localStorage.removeItem(i)

        }

    }
    
}

// Adicionar item para lista
const saveTodo=(text) =>{

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo)
    
    todoInput.value = '';
    todoInput.focus();
}

// esconder formulários
const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");

}

// Editar Formulário
const updateTodo = (text) =>{
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo)=>{
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;

        }

    })

}

// Eventos
// Evento de adicionar formulário
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const valueInput = todoInput.value;

    if(valueInput){
        saveTodo(valueInput);
        saveLocalStorage(valueInput);
    }else{
        //Mostra erro na tela

    }

});


document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finished-todo")){
        parentEl.classList.toggle("done");

    }else if(targetEl.classList.contains("remove-todo")){
        let variavel =  parentEl.querySelector("h3").innerText
        deletarDado(variavel);
        parentEl.remove();

    }else if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;

    }

})

cancelEditBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    toggleForms();

})


editForm.addEventListener('submit', (e)=>{
    e.preventDefault();


    const editValue = editInput.value;

    if(editValue){
        updateTodo(editValue);

    }
    toggleForms();


})