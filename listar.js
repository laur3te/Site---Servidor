let produtos = []

pegarProdutos () // Chama a função pegarProdutos

async function pegarProdutos() {
    let resposta = await fetch ("http://127.0.0.1:3000/produtos")
    produtos = await resposta.json()

    listarProdutos();
}

function listarProdutos(){
    let listagem = document.querySelector("#listagem")
    listagem.innerHTML = ""

    let html = `
        <table class="table-auto w-full mt-4">
            <tr>
                <th>ID</th>
                <th>FOTO</th>   
                <th>NOME</th>
                <th>PREÇO</th>
            </tr>
    `

    for (let prod of produtos){
        html += `
            <tr>
                <td class="text-center">${prod.id}</td>
                <td class="text-center">${prod.nome}</td>
                <td class="text-center"> RS ${prod.preco}</td>
                <td class="w-24 text-center"><img src="http://127.0.0.1:3000/${prod.foto}" class="w-20 h-20"></td>
            </tr>
        `
    }

    html += `</table>`
    listagem.innerHTML = html

    function listarProdutos(){

    }
}