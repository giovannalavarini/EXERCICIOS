//// Exercício - Funções

// let saldo = 1000;

// function adicionaSaldo(valor) {
//   return saldo + valor;
// }
// function subtraiSaldo(valor) {
//   return saldo - valor;
// }
// function multiplicaSaldo(valor) {
//   return saldo * valor;
// }
// function divideSaldo(valor) {
//   return saldo / valor;
// }

// console.log(adicionaSaldo(500));
// console.log(subtraiSaldo(500));
// console.log(multiplicaSaldo(2));
// console.log(divideSaldo(2));

//// Exercício - Parâmetros de funções

// 1-
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaCliente(cliente) {
//   if (typeof cliente === 'string') {
//     clientesTrybeBank.push(cliente);
//     return 'cliente adicionado!';
//   } else {
//     return 'erro';
//   }
//   }
//    console.log(adicionaCliente('Giovanna'));

// // 2-
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function excluiCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteCadastrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteCadastrado = true;
//         return 'Cliente excluído.';
//       }
//     }

//     if (clienteCadastrado === false) {
//       return 'Cliente não encontrado.'
//     }
//   } else {
//     return 'erro';
//   }
// };

// console.log(excluiCliente('John'));
// console.log(excluiCliente('Giovanna'));

// clientesTrybeBank.splice(index, 1); - não entendi esse index,1

// Exercícios - Funções – Diminuição de complexidades ????????????

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function validaCliente(cliente) {
//   if (typeof cliente !== 'string') {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   } else {
//     return true;
//   }
// }

// function clienteIndex(cliente) {
//   for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//     if (cliente === clientesTrybeBank[index]) {
//       return index;
//     }
//   }
//   return false;
// }

// function removeCliente(cliente) {
//   let validacao = validaCliente(cliente);
//   if (validacao !== true) {
//     return validacao;
//   }

//   let index = clienteIndex(cliente);
//   if (index === false) {
//     return 'Cliente não encontrada(o).'
//   }

//   clientesTrybeBank.splice(index, 1);
//   return 'Cliente excluída(o) com sucesso.';
// }

// console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
// console.log(removeCliente('Barney')); // Cliente não encontrada(o)
// console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
// console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]




