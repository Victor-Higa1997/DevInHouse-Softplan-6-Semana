export class Pessoa {
    nome = 'Victor'
    #cpf = '999.999.999-99'

    imprime() {
        console.log(`${this.nome} - ${this.#cpf}`)
    }
}

