
export var produtos = [
  {
    id: "1",
    nome: "Costela com Cream Cheese",
    descricao: "Costela desfiada com cream cheese.",
    preco: 20.90,
    tipo: 'salgado',
    quantia: 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 2,
    nome: "X-Tudo",
    descricao: "Queijo, carne moída, cream cheese, bacon, frango desfiado e batata palha.",
    preco: 19.90,
     tipo: 'salgado',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 3,
    nome: "Frango Cremoso",
    descricao: "Frango desfiado com cream cheese.",
    preco: 15.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 4,
    nome: "Brócolis com Queijo e Bacon",
    descricao: "Brócolis cozido, queijo e bacon.",
    preco: 15.90,
     tipo: 'salgado',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 5,
    nome: "Corn Cheddar",
    descricao: "Cheddar cremoso com bacon.",
    preco: 14.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 6,
    nome: "Pastel da Casa",
    descricao: "Queijo, presunto, bacon e carne moída.",
    preco: 14.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 7,
    nome: "Carne com Catupiry",
    descricao: "Carne moída com catupiry.",
    preco: 13.90,
     tipo: 'salgado',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 8,
    nome: "Carne com Queijo",
    descricao: "Carne moída com queijo.",
    preco: 13.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 9,
    nome: "Carne",
    descricao: "Carne moída temperada.",
    preco: 12.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 10,
    nome: "Pizza",
    descricao: "Queijo, presunto, orégano.",
    preco: 12.90,
     tipo: 'salgado',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 11,
    nome: "Queijo com Bacon",
    descricao: "Queijo muçarela com bacon.",
    preco: 12.90,
     tipo: 'salgado',
      quantia : 1,
     adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 12,
    nome: "Queijo",
    descricao: "Queijo muçarela derretido.",
    preco: 11.90,
     tipo: 'salgado',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 13,
    nome: "Coca Lata",
    descricao: "Refrigerante Coca-Cola lata 350ml.",
    preco: 6.00,
     tipo: 'bebida',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  },
  {
    id: 14,
    nome: "Chocolate com Creme de Avelã",
    descricao: "Pastel com recheio de chocolate e creme de avelã.",
    preco: 16.90,
     tipo: 'doce',
      quantia : 1,
    adicionarQuantia : function(){       
            produtos[this.id-1].quantia ==  produtos[this.id-1].quantia++ 
    },
    removerQuantia : function () {
            if(this.quantia > 1){
       produtos[this.id-1].quantia ==  produtos[this.id-1].quantia-- 
            }
    },
    img: ""
  }
];