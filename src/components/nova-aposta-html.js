export const novaApostaHtml = aposta => {
    const li = document.createElement('li')

    li.innerHTML = `${aposta.nome} - ${aposta.peso}gr`
    li.style.fontSize = 'italic'
    li.classList.add('list-group-item')
    li.setAttribute('data-id', aposta.id)
    return li
}