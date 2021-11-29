
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

separaImpar = (valor) => {
    if (arrayNumeros[valor] % 2 == 0) {
        return valor
    }
}


separaElementosIguais = (valor) => {
    if (arrayNumeros.find(element => element = valor)) {
        return valor
    }
}

const arrayImpares = arrayNumeros.filter(separaImpar)
const resultVal = arrayImpares.filter(separaElementosIguais)

var validando = (arrayImpares.length == resultVal.length) && arrayImpares.every((element, index) => {
    return element === resultVal[index]
});

console.log(resultVal)
console.log(arrayImpares)
console.log(validando)
