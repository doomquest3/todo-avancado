// Código javascript para criação do cronometro.

// Formulário de envio do tempo.
const formTemp = document.querySelector("#form-temporizador");

// Input do temporizador
const inputTempo = document.querySelector("#form-temp");

// Função temporizador;
const temporizador = (duracao,display)=>{

    var timer = duracao, minutos, segundos;

    setInterval(()=>{

        minutos = parseInt(timer /60, 10);
        segundos = parseInt(timer % 60, 10);

        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        display.textContent = minutos + ":" + segundos;

        if(--timer < 0 ){
            timer = duracao;

        }
        
    }, 1000);

};


// Capturar evento de envio de formulário.
formTemp.addEventListener("submit", (e)=>{
    e.preventDefault();

    let tempo = 60 * parseInt(inputTempo.value); //Conversão para segundos
    let display = document.querySelector("#tempo");

    if(tempo){
        // Enviar para temporizador.
        temporizador(tempo, display);
        inputTempo.value = '';

    }else{
        // não há numero na função
        window.alert("erro ao enviar submit");
        inputTempo.value = '';

    }


})