
const arrayNumeros = [1,2,3,4,5,6,7,8,9]

const found = arrayNumeros.find(element => element > 5);

encontraValor = (valor) =>{
    const encontrado = arrayNumeros.find(element => element > valor);
    console.log(encontrado)

    const verifica = (valor) => {
       if(valor == encontrado){
           console.log('Valor encontrado no array de numeros!')
       }
    } 

    arrayNumeros.find(verifica)

    //for(var i = 0; i < arrayNumeros.length; i++){
    //    if(arrayNumeros[i] == encontrado){
    //        console.log('Valor encontrado no array de numeros!')
    //        break
    //    }
    //}
}

encontraValor(5)
