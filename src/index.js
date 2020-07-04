import './style.css'

//import Aposta from './classes/aposta.class'
//import ApostaLista from './classes/aposta-lista.class'

import {Aposta, ApostaLista} from './classes'
import { novaApostaHtml } from './components/nova-aposta-html'

const inNome     = document.querySelector('#inNome')
const inPeso     = document.querySelector('#inPeso')
const outApostas = document.querySelector('#outApostas')

let lista = new ApostaLista()

document.querySelector('#btApostar').addEventListener('click', () => {
    
    const aposta = new Aposta(inNome.value, inPeso.value)
    // console.log(aposta)

    outApostas.appendChild(novaApostaHtml(aposta))

    lista.novaAposta(aposta)

    inNome.value = ''
    inPeso.value = ''
    inNome.focus()
})

outApostas.addEventListener('click', (event) => {
    // console.log(event)
    // console.log(event.target)
    // console.log(event.target.getAttribute('data-id'))
    const id = event.target.getAttribute('data-id')

    lista.ativarDesativar(id)
    event.target.classList.contains('inativo') ? 
      event.target.classList.remove('inativo') : 
      event.target.classList.add('inativo') 

})

document.querySelector('#btCancelar').addEventListener('click', () => {
    const dados = lista.get()

    if (dados.filter(x => !x.ativo).length == 0) {
        alert('Selecione a aposta a ser cancelada clicando sobre ela na lista...')
        return
    }

    lista.removerInativos()

    let apostas = Array.from(outApostas.children)

    for (let i=apostas.length-1; i>=0; i--) {
        if (apostas[i].classList.contains('inativo')) {
            outApostas.removeChild(apostas[i])
        }
    }
})

document.querySelector('#btLimpar').addEventListener('click', () => {
    if (!confirm('Confirma exclusão de todas as apostas?')) {
        return
    }

    // enquanto houver um filho em outApostas, irá removê-lo
    while (outApostas.firstChild) {
        outApostas.removeChild(outApostas.firstChild)
    }
    lista = new ApostaLista()
})