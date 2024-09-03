const formularioEdicao = document.querySelector("#formulario-edicao")
const nome = document.querySelector("#nome")
const numero = document.querySelector("#numero")
const email = document.querySelector("#email")

const urlParams = new URLSearchParams(window.location.search)
const index = urlParams.get('id')

const listaDeContatos = JSON.parse(localStorage.getItem("listaDeContatos")) || []

// Preencher o formulário com os dados do contato
if (index !== null) {
  const contato = listaDeContatos[index]
  nome.value = contato.nome
  numero.value = contato.numero
  email.value = contato.email
}

formularioEdicao.addEventListener("submit", (evento) => {
  evento.preventDefault()

  if (!nome.value || !numero.value || !email.value) {
    alert('Por favor, preencha todos os campos.')
    return
  }

  if (index !== null) {
    listaDeContatos[index] = {
      nome: nome.value,
      numero: numero.value,
      email: email.value
    }
    localStorage.setItem("listaDeContatos", JSON.stringify(listaDeContatos))
    window.location.href = 'index.html'
  }
})
