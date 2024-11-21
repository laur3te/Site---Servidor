let form = document.querySelector("#formulario")

form.addEventListener("submit", async (ev) => {
    ev.preventDefault()

    let nome = document.querySelector("#txtNome").value
    let preco = document.querySelector("#txtPreco").value
    let foto = document.querySelector("#txtFoto").files[0] // Pega a primeira foto da lista 

    // Cria um objeto FormData para enviar os dados do formulário
    let dados = new FormData () 
    dados.append("nome", nome)
    dados.append("preco", preco)
    dados.append("foto", foto)

        let resp = await fetch("http://127.0.0.1:3000/produtos", {
            method: "POST",
            // headers: {
                //"Content-Type": "application/json"
            // },
            body: dados 
        }) 

        if ( resp.status == 200 ) {
            // Redireciona para a página inicial
            location.href = "index.html"; 
            alert("Produto cadastrado com sucesso!")

        } else {
            alert("Erro ao cadastrar o produto")
        }
})