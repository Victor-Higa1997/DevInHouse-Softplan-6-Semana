const arrayNumeros = [1,2,3,4,5,6,7,8,9]
var arrayQuadrados = []

arrayQuadrados = arrayNumeros.map(valor => valor = valor * valor)

var verificaResult = arrayQuadrados.every((element, index) => {
    return element === arrayNumeros[index] * arrayNumeros[index]
});

console.log(arrayQuadrados)
console.log(verificaResult)
