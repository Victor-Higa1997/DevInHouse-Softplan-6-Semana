
const arrayNumeros = [1,2,3,4,5,6,7,8,9]
const arrayInvertido = []
var cont = 0

inverteArray = () =>{
    for(var i = arrayNumeros.length-1; i >= 0 ;i--){
        arrayInvertido[cont] = arrayNumeros[i]
        cont++
    }
    console.log(arrayNumeros)
    console.log(arrayInvertido)
}

inverteArray()