// Funções
// Localizar item localstorage
export const localizarItem = (text) =>{
    let n = Object.keys(localStorage);

    for(let i of n){
        if(text.localeCompare(localStorage.getItem(i))===0){
            console.log(i);
            return i;
        }

    }

}

// Salvar dados na local storage
export const saveLocalStorage = (text) =>{
    let num = localStorage.length;
    localStorage.setItem(num, text);

}

// Recuperar dados da local storage.
export const carregarDados = () =>{
    let n = Object.keys(localStorage);
    for(let i of n){
        let textDate = localStorage.getItem(i);
        saveTodo(textDate);

    }

}

//deletar item da local storage.
export const deletarDado = (text) =>{    
    let i = localizarItem(text);
    localStorage.removeItem(i);
    
}

//Trocar item na localstorage.
export const substituirItem = (num, text) =>{
    localStorage.setItem(num, text);

}

export * as funcoes from "../js/functions.js";