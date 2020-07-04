export class ApostaLista {
    constructor() {
        this.apostas = []
    }

    novaAposta(aposta) {
        this.apostas.push(aposta)
    } 

    ativarDesativar(id) {
        for (const aposta of this.apostas) {
            if (aposta.id == id) {
                aposta.ativo = !aposta.ativo
                break
            }
        }
    }

    get() {
        return this.apostas
    }

    removerInativos() {
        console.log(this.apostas)
        this.apostas = this.apostas.filter(x => x.ativo)
        console.log(this.apostas)
    }
}