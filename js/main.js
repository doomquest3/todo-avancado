//Importações
import model from './models/item.model.js';
var modelo = model;
import { funcoes } from './functions.js';

// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

const todoList = document.querySelector("#todo-list");

const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");

const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;


window.carregarInfo = () => {
    funcoes.carregarDados();

}


// Adicionar item para lista
window.saveTodo = (modelo) => {

    const todo = document.createElement("div")
    todo.classList.add("todo");
    todo.classList.add(`${modelo.status}`);

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = modelo.text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
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
    modelo.id = funcoes.qtdLocalStorage();
    modelo.text = todoInput.value;
    modelo.status = 'todo';
    
    console.log(modelo);
    if(modelo){
        saveTodo(modelo.text);
        funcoes.saveLocalStorage(modelo);
        
    }else{
        //Mostra erro na tela

    }

});

// Mudar texto do item.
document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
        let variavel = parentEl.querySelector("h3").innerText;
        let novoModelo = funcoes.localizarItem(variavel);
        novoModelo = funcoes.verificarModelo(novoModelo);
        funcoes.substituirItem(variavel, novoModelo);
        

    }else if(targetEl.classList.contains("remove-todo")){
        let variavel =  parentEl.querySelector("h3").innerText
        funcoes.deletarDado(variavel);
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

// Editar formulário.
editForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const editValue = editInput.value;
       
    if(editValue){
        updateTodo(editValue);
        modelo = funcoes.localizarItem(oldInputValue);
        modelo.text = editValue; 
        funcoes.substituirItem(oldInputValue, modelo);

    }
    toggleForms();

});

filter.addEventListener("select", (e)=>{
    e.preventDefault();
    // let listaOptions = document.querySelectorAll("")
    

})

