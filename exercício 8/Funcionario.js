import { Pessoa } from './Pessoa.js'

export let padrao = class Funcionario extends Pessoa {
    cargo
    salario

    constructor(nome, cargo, salario) {
        super(nome)
        this.cargo = cargo
        this.salario = salario
    }
}
