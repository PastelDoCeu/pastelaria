

const produtos = [
  {
    id: 1,
    nome: "Costela com Cream Cheese",
    descricao: "Costela desfiada com cream cheese.",
    preco: 20.90,
    img: ""
  },
  {
    id: 2,
    nome: "X-Tudo",
    descricao: "Queijo, carne moída, cream cheese, bacon, frango desfiado e batata palha.",
    preco: 19.90,
    img: ""
  },
  {
    id: 3,
    nome: "Frango Cremoso",
    descricao: "Frango desfiado com cream cheese.",
    preco: 15.90,
    img: ""
  },
  {
    id: 4,
    nome: "Brócolis com Queijo e Bacon",
    descricao: "Brócolis cozido, queijo e bacon.",
    preco: 15.90,
    img: ""
  },
  {
    id: 5,
    nome: "Corn Cheddar",
    descricao: "Cheddar cremoso com bacon.",
    preco: 14.90,
    img: ""
  },
  {
    id: 6,
    nome: "Pastel da Casa",
    descricao: "Queijo, presunto, bacon e carne moída.",
    preco: 14.90,
    img: ""
  },
  {
    id: 7,
    nome: "Carne com Catupiry",
    descricao: "Carne moída com catupiry.",
    preco: 13.90,
    img: ""
  },
  {
    id: 8,
    nome: "Carne com Queijo",
    descricao: "Carne moída com queijo.",
    preco: 13.90,
    img: ""
  },
  {
    id: 9,
    nome: "Carne",
    descricao: "Carne moída temperada.",
    preco: 12.90,
    img: ""
  },
  {
    id: 10,
    nome: "Pizza",
    descricao: "Queijo, presunto, orégano.",
    preco: 12.90,
    img: ""
  },
  {
    id: 11,
    nome: "Queijo com Bacon",
    descricao: "Queijo muçarela com bacon.",
    preco: 12.90,
    img: ""
  },
  {
    id: 12,
    nome: "Queijo",
    descricao: "Queijo muçarela derretido.",
    preco: 11.90,
    img: ""
  },
  {
    id: 13,
    nome: "Coca Lata",
    descricao: "Refrigerante Coca-Cola lata 350ml.",
    preco: 6.00,
    img: ""
  }
];

    var areaCards = document.querySelector(".items");

    function gerarCards(){
        for(i in produtos){
            areaCards.innerHTML += ` <div class="card">
                <div class="imagem-produto"></div>
                <div class="produto">
                    <span class="nome">${produtos[i].nome}</span>
                    <span class="descricao">${produtos[i].descricao}</span>
                        <div class="finalizar">
                            <div class="preco">R$ ${produtos[i].preco}</div>
                            <button class="comprar" onclick="adicionarAoCarrinho(${produtos[i].id})">Adicionar</button>
                        </div>
                    </div>`
        }
    }

    gerarCards();

    var produtosAdicionados = [];

    function adicionarAoCarrinho(n){
        produtosAdicionados.push(produtos[n-1].nome); 

    }

    function mostrarCarrinho (){
       alert(produtosAdicionados)
    }