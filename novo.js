let form = document.querySelector("#formulario")

form.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    let nome = document.querySelector("#txtNome").value
    let preco = document.querySelector("#txtPreco").value
    let foto = document.querySelector("#txtFoto").files[0] // Pega a primeira foto da lista 

    let dados = new FormData () // Cria um objeto FormData
    dados.append("nome", nome)
    dados.append("preco", preco)
    dados.append("foto", foto)

    await fetch("http://127.0.0.1:3000/produtos", {
        method: "POST",
        // headers: {
            //"Content-Type": "application/json"
        // },
        body: dados
    })

    alert("Produto cadastrado com sucesso!")
})