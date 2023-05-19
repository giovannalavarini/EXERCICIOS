// // 1 - Crie uma função usando o operador &&

// const girafa = true;
// const elefante = true;
// const macaco = false;

// function compareTrue(animal1, animal2) {
//   if (animal1 === true && animal2 === true) {
// //     return true
// //   } else if (animal1 === false || animal2 === false) {
// //     return false
// //   } else {
// //     return false
// //   }
// // }
// // console.log(compareTrue(girafa,elefante));
// // console.log(compareTrue(macaco,elefante));

// // // 2 - Crie uma função que divida uma frase

// // let frase = 'go Trybe';

// // function splitSentence(frase) {
// //   return frase.split(' ')
// // }
// // console.log(splitSentence('go Trybe'));

// // // 3 - Crie uma função que use concatenação de strings

// // function concatName(array) {
// //   return array[array.length - 1] + ', ' + array[0]
// // }

// // let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// // console.log(concatName(nomes));

// // let frase1 = ['foguete', 'não', 'tem', 'ré'];
// // console.log(concatName(frase1));

// // let frase2 = ['captain', 'my', 'captain'];
// // console.log(concatName(frase2));

// // // // 4 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

// // // function footballPoints(wins, ties) {
// // //   return (wins * 3) + ties
// // // }

// // // console.log(footballPoints(14, 8));
// // // console.log(footballPoints(1, 2));
// // // console.log(footballPoints(0, 0));

// // 5 - Crie uma função que calcula o número de repetições do maior número

// function highestCount(numeros) {
//   let counter = 0;
//   let maiorNumero = numeros [0];
  
//   for (let index = 0; index < numeros.length; index += 1) {
//     if (numeros[index] === maiorNumero){
//       counter += 1;
//     }
    
//   }
//   return counter;
// }
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Crie 3 funções para calcular as áreas de um triângulo e de um retângulo
















// // EXERCÍCIOS - Objetos

// let player = {
//  name: 'Marta',
//  lastName: 'Silva',
//  age: 34,
//  medals: { 
//   golden: 2, 
//   silver: 3 },
// };

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + 'tem ' + player.age + ' anos de idade.');

// console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

//  EXERCÍCIOS - For/in e for/of

// For/in -

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// let food = ['hambúrguer', 'bife', 'acarajé'];
// for (let index in car) {
//   console.log(index, car[index]);
// }
//resultado: 0, 1, 2;

// for/of - 

// let food = ['hambúrguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };
// //resultado: hambúrguer, bife, acarajé;

// for/in - 

// 1 - 
// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (const key in names) {
//   console.log('Olá, ' + names[key]); 
// }

// 2 -
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (const key in car) {
//   console.log(key + ': ' + car[key]);
// }

// Exercícios -  Adicionando novas chaves

// let student = {}

// function addProperty (object, key, value) {
// //   object[key] = value;
// // };

// // addProperty(student, 'nome', 'Giovanna Lavarini');
// // addProperty(student, 'e-mail', 'giovanna.lavarini@gmail.com');
// // addProperty(student, 'telefone', '(31) 99502-8076');
// // console.log(student);

// // Exercícios - Object.entries

// let countries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// let pairKeyValue = Object.entries(countries);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

//  Exercícios - var, let e const

if (true) {
  // inicio do escopo do if
  const userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20