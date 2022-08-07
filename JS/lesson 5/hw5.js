//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleSquare(a, b) {
//     return a * b;
// }
// console.log(rectangleSquare(10, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circleSquare(r) {
//     return 3.14 * r * r;
// }
// console.log(circleSquare(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinderSquare(h, r) {
//     return 2 * 3.14 * r * h;
// }
// console.log(cylinderSquare(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// function printArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// }
// printArray([true, 12, 'hi']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function createText(text) {
//     document.write(`<p>${text}</p>`)
// }
// createText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, debitis?');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createUl(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// createUl('Lorem ipsum dolor sit amet.');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function createUlwithli(text,n) {
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUlwithli('Lorem ipsum dolor sit amet.',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listOfArray(array) {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// listOfArray([12, 'hi', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let NewArray = [
//     {
//         id: 1,
//         name: 'Alina',
//         age: 18
//     },
//     {
//         id: 2,
//         name: 'Pes',
//         age: 0.2
//     },
//     {
//         id: 3,
//         name: 'Kit',
//         age: 3
//     }
// ];
//
// function writeObjects(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</div>`)
//     }
// }
//
// writeObjects(NewArray);

// - створити функцію яка повертає найменьше число з масиву
// function min(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }
//
// console.log(min([1, 0, -9, 556]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
//
// console.log(sum([10, 2, 3]));