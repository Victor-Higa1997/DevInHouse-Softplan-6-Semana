import { Pessoa } from './Pessoa.js'
import { padrao } from './Funcionario.js'

var funcionarios = []

var funcionario = new padrao('Victor', 'Analista', 5000.00)
var funcionario2 = new padrao('Fulano', 'Suporte', 3000.00)
var funcionario3 = new padrao('Ciclano', 'Auxiliar', 4800.00)

funcionarios.push(funcionario)
funcionarios.push(funcionario2)
funcionarios.push(funcionario3)

//let somaSalarios = funcionarios.reduce((valorTotal, funcionario) => valorTotal + funcionario.salario, 0)

funcionarios.forEach(element => {
    element.imprime()
});

//console.log(somaSalarios)
