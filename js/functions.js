import model from './models/item.model.js';
var modelo = model;
// Funções
// Localizar item localstorage
export const localizarItem = (text) =>{
    let n = Object.keys(localStorage);

    for(let i of n){
        modelo = JSON.parse(localStorage.getItem(i));

        if(text.localeCompare(modelo.text)===0){
            console.log(i);
            return modelo;

        }

    }

}

// Verificar quantidade de itens na local storage.
export const qtdLocalStorage = () =>{
    let n = Number(localStorage.length);
    return n;

}

// Salvar dados na local storage
export const saveLocalStorage = (modelo) =>{
    let num = localStorage.length;

    localStorage.setItem(num, JSON.stringify(modelo));

}

// Recuperar dados da local storage.
export const carregarDados = () =>{
    let n = Object.keys(localStorage);
    for(let i of n){
        modelo = JSON.parse(localStorage.getItem(i));
        saveTodo(modelo);

    }

}

//deletar item da local storage.
export const deletarDado = (text) =>{    
    modelo = localizarItem(text);
    localStorage.removeItem(modelo.id);
    
}

//Trocar item na localstorage.
export const substituirItem = (oldText, novoModelo) =>{
    let oldModelo = modelo;
    oldModelo = localizarItem(oldText);
    oldModelo = novoModelo;

    localStorage.setItem(modelo.id, JSON.stringify(oldModelo));

}

// Verificar modelo
export const verificarModelo = (modelo) =>{
    if(modelo.status === 'done'){
        modelo.status = 'todo';

    }else if(modelo.status === 'todo'){
        modelo.status = 'done';

    }
    return modelo;

}

export * as funcoes from "../js/functions.js";