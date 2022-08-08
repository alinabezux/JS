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

//--------------------------------------------------------------------------------------------------------------------
//ADDITIONAL
//Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNum = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     console.log(min);
// }
// minNum([1, 5, -10]);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNum = (array) => {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     console.log(max);
// }
// maxNum([1, 5, -10]);

// - створити функцію яка повертає найбільше число з масиву
// let maxNum = (array) => {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum([1, 5, -10]));

// - створити функцію яка повертає найменьше число з масиву
// let minNum = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//     }
//     return min;
// }
// console.log(minNum([1, 5, -10]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumNums = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
//
// console.log(sumNums([10, 2, 3]));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// let writeNums = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// writeNums(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let AtoB = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (b < a) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     } else console.log(a);
//
// }
// AtoB(5, 1);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = (array, i) => {
//     let temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
//     return array;
// }
// console.log(foo([1, 2, 3, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// const arr = [1, 0, 5, 2, 0, 0, 1];
// let foo = (array) => {
//     let res = [];
//     let counter = 0;
//     let j = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             counter++;
//         } else {
//             res[j++] = array[i];
//         }
//     }
//     for (let i = 0; i < counter; i++) {
//         res[res.length++] = 0;
//     }
//
//     return res;
// }
// console.log(foo(arr));