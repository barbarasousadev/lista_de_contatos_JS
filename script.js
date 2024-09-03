const nome = document.querySelector("#nome")
const numero = document.querySelector("#numero")
const email = document.querySelector("#email")
const formulario = document.querySelector("#formulario")
const todosOsContatos = document.querySelector("#todosOsContatos")

const listaDeContatos = JSON.parse(localStorage.getItem("listaDeContatos")) || []

function contatoNaTela() {
  todosOsContatos.innerHTML = ""

  listaDeContatos.forEach((contatoDaVez, index) => {
    const novo_card = document.createElement("div")
    novo_card.className = "card"

    const novoNome = document.createElement("h2")
    novoNome.textContent = contatoDaVez.nome

    const novoNumero = document.createElement("p")
    novoNumero.textContent = contatoDaVez.numero

    const novoEmail = document.createElement("p")
    novoEmail.textContent = contatoDaVez.email

    const botaoEditar = document.createElement("button")
    botaoEditar.textContent = "Editar"
    botaoEditar.addEventListener("click", () => {
      window.location.href = `editar.html?id=${index}`
    })

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"
    botaoExcluir.addEventListener("click", () => excluirContato(index))

    novo_card.append(novoNome, novoNumero, novoEmail, botaoEditar, botaoExcluir)
    todosOsContatos.appendChild(novo_card)
  })
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault()

  if (!nome.value || !numero.value || !email.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  listaDeContatos.push({
    nome: nome.value,
    numero: numero.value,
    email: email.value
  })

  localStorage.setItem("listaDeContatos", JSON.stringify(listaDeContatos))
  formulario.reset()
  nome.focus()
  contatoNaTela()
})

function excluirContato(index) {
  if (confirm('Tem certeza que deseja excluir este contato?')) {
    listaDeContatos.splice(index, 1)
    localStorage.setItem("listaDeContatos", JSON.stringify(listaDeContatos))
    contatoNaTela()
  }
}

contatoNaTela()
