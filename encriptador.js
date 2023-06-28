
let mensaje = "";

function ocultarElementos(){
    document.getElementById("copiar").style.display = "block";
    document.getElementById("elementosResultado").style.display = "none";
}

function encriptar(){
    let textarea = document.getElementById("inputTexto");
    if(textarea.value != ''){
        mensaje = textarea.value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
        let salidaMensaje = document.getElementById("mensajeCodificado");
        salidaMensaje.innerText = mensaje;
        ocultarElementos();
    }
}

function desencriptar(){
    let textarea = document.getElementById("inputTexto");
    if(textarea.value != ''){
        mensaje = textarea.value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
        /* textarea.innerText = mensaje; */
        let salidaMensaje = document.getElementById("mensajeCodificado");
        salidaMensaje.innerText = mensaje;
        ocultarElementos();
    }
}

function validarTexto(event){
    let textarea = document.getElementById("inputTexto");
    let textoValidado = textarea.value.replace(/[^a-zA-Z\s]/g, '');
    textarea.value = textoValidado.toLowerCase();
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById("mensajeCodificado").textContent);
    let textarea = document.getElementById("inputTexto");
    textarea.focus();
}