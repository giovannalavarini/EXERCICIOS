// Exercícios - For

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// // for (let index = 0; index < groceryList.length; index += 1) {
// //   console.log(groceryList[index]);
// } 

// // // ou 

// for (let index = 0; index < groceryList.length; index += 1) {
//   let element = groceryList[index];
//   console.log(element);
// }

// Exercícios - For/of

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let string of names) {
//   console.log(string);
// }

// ou 

// for(let index of names) {
//   console.log(index);
// }

// Exercícios - While

// let dado1 = Math.ceil(Math.random() * 6);
// console.log('resultado dado 1:', dado1);
// let dado2 = Math.ceil(Math.random() * 6);

// while (dado1 !== dado2) {
//   dado2 = Math.ceil(Math.random() * 6);
//   console.log('resultado dado 2:', dado2);
// }

// Exercícios - agora, a prática

// - Lidando com arrays

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1-
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// 2-
//  let soma = 0
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }
// console.log(soma);

// 3- 
// let soma = 0
// for (let index = 0; index < numbers.length; index += 1) {
//   soma += numbers[index];
// }

// let mediaAritmetica = soma / numbers.length

// console.log(mediaAritmetica);

// 4- 
// let mediaAritmetica = 27.8
// if (mediaAritmetica > 20) {
//   console.log('O valor da média aritmética é maior que 20');
// } else {
//   console.log('O valor da média aritmética é menor ou igual a 20');
// }

// 5-
// let maiorValor = numbers[0];
// for (let index = 1; index < numbers .length; index += 1) {
//   if (numbers[index] > maiorValor) {
//     maiorValor = numbers[index];
//   }
// }
// console.log(maiorValor);

// 6-
// let impares = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     impares += 1;
//   }
// }
//   if (impares === 0) {
//     console.log('Nenhum valor ímpar encontrado');
//   } else {
//     console.log(impares);
//   }

// 7- 
// let menorValor = numbers[0]
// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < menorValor) {
//     menorValor = numbers[index]
//   }
// }
// console.log(menorValor);

// 8- 
// let array = [];
// for (let index = 1; index <= 25; index += 1) {
//   array.push(index);
// }
// console.log(array);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

// // 9- 
// for (let index = 0; index < array.length; index += 1) {
//   console.log(array[index] / 2);
// }

// Exercício - Lógica de programação e algoritmos

// 1-
// let fatorial = 10;
// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
// console.log(fatorial);

// 2- 
// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

// ou 

// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);

// 3- 
// let array = ['java', 'javascript', 'python', 'html', 'css'];

// 3.1- 
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length > maiorPalavra.length) {
//     maiorPalavra = array[index];
//   } 
// }

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length < menorPalavra.length) {
//     menorPalavra = array[index];
//   }
// }
// console.log(maiorPalavra);
// console.log(menorPalavra);

// 3.2- 
// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

