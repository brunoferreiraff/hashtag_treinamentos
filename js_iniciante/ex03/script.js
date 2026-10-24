// questão 1

let produtos1 = ['Maçaneta', 'chave', 'carro'];

console.log(produtos1[1]);

produtos1[2] = 'Notebook';
console.log(produtos1);

//questão 2

let clientes = ['Bruno', 'Thainá', 'Patrick'];

clientes.push = 'josé';
console.log(clientes);

//questão 3

let produto = { nome: 'carro', preco: 1000, quantidade: 10 };
console.log(produto.nome);

produto.preco = 3000;
console.log(produto);

//questão 4

let venda = { cliente: 'Bruno', produto: 'celular', valor: 1000 };
console.log(venda)
venda.data = '18/07/2026';
delete venda.produto 
console.log(venda)
//questão 5

let estoque = ['Maça', 'feijão', 'arroz', 'batata'];

let novoEstoque = [...estoque];

novoEstoque[2] = 'geladeira';

console.log(estoque);
console.log(novoEstoque);

let funcionario = { nome: 'bruno', idade: 13, cargo: 'estag' };
let novoFuncionario = {...funcionario};

novoFuncionario.nome = 'Carlitos';

console.log(funcionario);
console.log(novoFuncionario);
