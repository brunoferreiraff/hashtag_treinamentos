//QUESTÃO 1

let preco = 200;
let desconto = 40;
let imposto = 12;

console.log(preco - desconto + imposto);

//QUESTÃO 2

let novoProduto = 100;
let lucro = 30;
console.log(novoProduto + lucro);

//questão 3

let orcamento = 250;
let precoProduto = 300;
let descontoProduto = 50;
let valorFinal = precoProduto - descontoProduto;
let valorReal = valorFinal === orcamento;
console.log(
  `Preco com desconto: R$${valorFinal} e está dentro do orçamento? ${valorReal}`
);

//questão 4

let produtosEstoque = '20';
let qtnMinima = 20;

let prdEstoque = parseFloat(produtosEstoque);

let estoque = prdEstoque >= qtnMinima;
console.log(estoque);

if ((estoque = true)) {
  console.log('A quantidade no estoque é suficiente: True');
} else {
  console.log('Não é suficiente');
}

//questão 5
