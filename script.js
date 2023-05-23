const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const ningun = document.querySelector(".ningun");
const deseas = document.querySelector(".deseas");
const botones = document.querySelector(".botones");
const copiar = document.querySelector(".copiar");
let textoEncriptado = "";

function btnEncriptar(){
    textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    ningun.textContent = "";
    textArea.value = "";
    deseas.textContent = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["ap","ai"],["o","ober"],["u","ufat"]]
    console.table(matrizCodigo)
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    ningun.textContent = "";
    deseas.textContent = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["ap","ai"],["o","ober"],["u","ufat"]]
    console.table(matrizCodigo)
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

botones.addEventListener("click", function() {
    copiar.style.display = "block";
});


copiar.addEventListener("click", function() {
    if(textoEncriptado){
        navigator.clipboard.writeText(textoEncriptado)
            .then(function() {
                console.log("Texto copiado: " + textoEncriptado);
        })
        .catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
    }else{
        console.log("No hay texto para copiar")
    }
});