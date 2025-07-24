

    import { produtos } from './bancodedados.js'

    let pedido_atual = [];

    function adcionarPedido(id){

        let pedido = {
            item : produtos[id-1].nome,
            quantia : produtos[id-1].quantia,
            preco : produtos[id-1].preco
        }

    }

        document.querySelector(`${produtos.id}`).addEventListener('click', produto => {
            console.log(produto.nome)
        }) 