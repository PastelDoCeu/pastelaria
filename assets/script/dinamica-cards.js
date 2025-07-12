
    import { produtos } from './bancodedados.js'

    var cardapio = document.querySelector('.cardapio')

    function listarProdutos(){ produtos.forEach( produto => {
        if(produto.tipo == 'salgado'){
            cardapio.innerHTML += `
            <div class="card">
                <img src="#" alt="">
                <div class="produto">
                    <span class="nome">${produto.nome}</span>
                    <span class="descricao">${produto.descricao}</span>
                    <div class="acoes">
                        <div class="quantidade">
                            <input type="button" value="-" class="menos" onclick="remover(${produto.id})">
                            <div class="contador" id="${produto.id}">${produto.quantia}</div>
                            <input type="button" value="+" class="mais" onclick="adicionar(${produto.id})">
                        </div>
                        <input type="button" value="Adicionar" class="adicionar" >
                    </div>
                        <div class="preco">
                            <span class="promocao"></span>
                            <span class="valor">R$ ${produto.preco.toFixed(2)}</span>
                        </div>
                    </div>
                </div>`
        }
    })
}

    window.adicionar = function adicionar(id){
        
        produtos[Number(id)-1].adicionarQuantia();
         document.getElementById(id).textContent = produtos[Number(id)-1].quantia
        
    }
     window.remover = function remover(id){
        
        produtos[Number(id)-1].removerQuantia();
         document.getElementById(id).textContent = produtos[Number(id)-1].quantia
        
    }


    
  

listarProdutos();