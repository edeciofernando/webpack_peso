export class Aposta {
    constructor(nome, peso) {
        this.id    = new Date().getTime()
        this.nome  = nome
        this.peso  = peso
        this.ativo = true
    }
}