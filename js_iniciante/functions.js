function nomeFuncao() {
  console.log('Para continuar você precisa informar o seu nome para cadastro!');
}

nomeFuncao();

// Cadastro de usuário

function cadastrar(nome, sobrenome) {
  console.log(`Olá, ${nome} ${sobrenome}! Você foi cadastrado com sucesso`);
}

cadastrar('Bruno', 'Ferreira');

// verificar o saldo em conta.

function banco(deposito, saque) {
  let saldo = deposito - saque;
  return saldo;
}

console.log(banco(1000, 30));


//funcão principal para agrupar tudo

function main() {
    nomeFuncao();
    cadastrar("Bruno", "Ferreira");
    let saldo = banco(10,3);
    console.log(`O saldo atual da sua conta é ${saldo}`);
}

main();
