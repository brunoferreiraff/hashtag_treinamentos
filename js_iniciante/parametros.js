let pedido = {
  id: 1234,
  nome: 'João',
  email: 'joao@exemplo.com',
  lanche: 12,
  batataFrita: 6,
  suco: 4,
};

function enviarNotificacao(nome, idPedido, email) {
  console.log(`Enviando email para ${email} sobre o pedido ${idPedido} `);
  console.log(`Mensagem: ${nome}, pedido confirmado`);
}

enviarNotificacao(pedido.nome, pedido.id, pedido.email);

function valorPedido(id, item1, item2, item3) {
  let totalPedido = item1 + item2 + item3;
  console.log(totalPedido);
  return totalPedido;
}

valorPedido(pedido.id, pedido.lanche, pedido.batataFrita, pedido.suco);

let retornoDaFuncao = valorPedido;