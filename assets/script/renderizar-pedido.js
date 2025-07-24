

    import { carrinhoCarregado } from './carrinho-de-compras.js'
    import { produtos } from './bancodedados.js'
    var tabela = document.querySelector('#tabela-pedido')

   export function renderizarPedidosDoCarrinho(){

            carrinhoCarregado.forEach( pedido => {
                tabela.innerHTML += `<tr>
                <td>${produtos[pedido.id].nome}</td>
                <td>x ${pedido.quantia}</td>
                <td>R$:${produtos[pedido.id].preco}</td>
            </tr>`
            });
             tabela.innerHTML += `<tr>
                <td>${produtos[pedido.id].nome}</td>
                <td>x ${pedido.quantia}</td>
                <td>R$:${produtos[pedido.id].preco}</td>
            </tr>`
    }

    window.renderizarPedidosDoCarrinho = renderizarPedidosDoCarrinho


