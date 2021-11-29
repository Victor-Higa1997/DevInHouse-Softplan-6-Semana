import { Pessoa } from './Pessoa.js'

export let padrao = class Funcionario extends Pessoa {
    cargo
    salario

    constructor(nome, cargo, salario) {
        super(nome)
        this.cargo = cargo
        this.salario = salario
    }

    static calcularSalarios(array) {
        let somaSalarios = array.reduce((valorTotal, cargo) => valorTotal + cargo.salario, 0)
        console.log(somaSalarios)
    }
}
