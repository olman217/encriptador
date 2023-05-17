const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar () {
    const txtEncriptado = encriptar(textArea.value)
    mensaje.value = txtEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar (stringEncriptado) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }
    return stringEncriptado
}

function btndesencriptar () {
    const txtdesencriptar = desencriptar(textArea.value)
    mensaje.value = txtdesencriptar
    textArea.value = "";

}

function desencriptar (strigDesencriptar) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = strigDesencriptar.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (strigDesencriptar.includes(matrizCodigo[i][1])) {
            strigDesencriptar = strigDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
        
    }
    return strigDesencriptar
}

