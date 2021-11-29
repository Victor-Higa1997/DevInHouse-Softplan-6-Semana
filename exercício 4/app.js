
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var encontrado

const found = arrayNumeros.find(element => element > 5);

encontraValor = (valor) => {
    encontrado = arrayNumeros.find(element => element > valor);
    console.log(encontrado)

}

const verifica = (valor) => {
    if (valor == encontrado) {
        console.log('Valor encontrado no array de numeros!')
    }
}

encontraValor(5)
arrayNumeros.find(verifica)
