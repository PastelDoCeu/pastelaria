


    import { produtos } from "./bancodedados.js";
    import { renderizarPedidosDoCarrinho } from './renderizar-pedido.js'

    var carrinhoSalvo =  localStorage.getItem('carrinho');
    export var carrinhoCarregado = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    var carrinhoDOMObject = document.querySelector('#carrinho_de_compras')

    window.carrinhoCarregado = carrinhoCarregado

    carrinhoDOMObject.value = carrinhoCarregado.length
   

    document.querySelectorAll('.adicionar').forEach(btn => {
        btn.addEventListener('click', function(){
            carrinhoCarregado.push({
                produto: produtos[Number(btn.id) - 1].nome,
                quantia : produtos[Number(btn.id) - 1].quantia,
                id : Number(btn.id) - 1
            });
            localStorage.setItem('carrinho', JSON.stringify(carrinhoCarregado))
            console.log(carrinhoCarregado);
            carrinhoDOMObject.value = carrinhoCarregado.length
        })
    })




    carrinhoDOMObject.addEventListener('click', () => {
        let cardapio = document.querySelector('.principal')
        let finalizarCompra = document.querySelector('.finalizar')
        cardapio.style.display = "none"
        finalizarCompra.style.display = "flex"
        renderizarPedidosDoCarrinho();
    })
   



    