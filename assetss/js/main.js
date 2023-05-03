let $mensaje = document.getElementById("mensaje")
const $cifrarBtn = document.getElementById("cifrar")
const $descifrarBtn = document.getElementById("descifrar")
const $desplazamiento = document.getElementById("desplazamiento")
const $mensajeDevuelto = document.getElementById("mensaje2")



function inicio() {
    $mensaje.addEventListener("keyup", function () {
        this.value = this.value.toUpperCase()//this hace referencia al $mensaje
    })

    $cifrarBtn.addEventListener("click", function () {
        let texto = $mensaje.value
        let desplazamiento = $desplazamiento.value
        console.log(texto, desplazamiento)
        $mensajeDevuelto.value = cifrar(texto, desplazamiento)
    })

    $descifrarBtn.addEventListener("click", function () {
        let texto = $mensaje.value
        let desplazamiento = $desplazamiento.value
        console.log(texto, desplazamiento)
        $mensajeDevuelto.value = descifrar(texto, desplazamiento)
    })



}

//funciones cifrar y descifrar

function cifrar(texto, desplazamiento) {
    let resultado = ""
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    texto = texto.toUpperCase()
    desplazamiento = (desplazamiento % 26 + 26) % 26



    if (texto) {
        for (let i = 0; i < texto.length; i++) {

            if (letras.indexOf(texto[i]) != -1) {
                let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26)

                resultado += letras[posicion]

            } else {
                resultado += texto[i]
            }
        }
    }

    //console.log()
    return resultado
}

function descifrar(texto, desplazamiento) {
    let resultado = ""
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    texto = texto.toUpperCase()
    desplazamiento = (desplazamiento % 26 + 26) % 26



    if (texto) {
        for (let i = 0; i < texto.length; i++) {

            if (letras.indexOf(texto[i]) != -1) {
                let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 26)

                resultado += letras[posicion]

            } else {
                resultado += texto[i]
            }
        }
    }

    //console.log()
    return resultado
}


document.addEventListener("DOMContentLoaded", inicio)

/*
//Forma mejorada

function cifrar(texto, desplazamiento) {
     
    if (!texto)return "";

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       desplazamiento = (desplazamiento % 26 + 26) % 26
     
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26])
}

function descifrar(texto, desplazamiento) {
     
    if (!texto)return "";

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       desplazamiento = (desplazamiento % 26 + 26) % 26
     
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26])
}
*/