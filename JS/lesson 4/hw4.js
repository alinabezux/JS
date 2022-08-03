//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} - text with index</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>text</h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<div>${i} - text with index</div>`)
//     i++;
// }

//- Використовуючи дані з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (const Item of listOfItems) {
//     document.write(`<li>${Item}</li>`)
// }
// document.write(`</ul>`);

//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`<div class="product-card">
//             <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
//             <img src="${product.image}" alt="product" class="product-image">
//  </div`)
// }

//є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
// for (const user of users) {
//     if (user.status) {
//        console.log(user);
//     }
// }
//  - користувачів зі статусом false
// for (const user of users) {
//     if(!user.status){
//         console.log(user);
//     }
//
// }
//  - користувачів які старші за 30 років
// for (const user of users) {
//     if (user.age > 30) {
//         console.log(user);
//     }
//
// }

//---------------------------------------------------------------------------------
//ADDITIONAL 1

//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let numbers = [1, 5, 6.2, 8, 65.12];
// let string = ['my', 'name', 'is', 'Alina', 'Bezuh'];
// let arr3 = ['hello', 3.14, true, 145697, false];
// console.log(numbers);
// console.log(string);
// console.log(arr3);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'hello';
// array[1] = 3.14;
// array[2] = true;
// array[3] = false;
// array[4] = 145697;
// array[5] = 'Alina';
// console.log(array);

//- є масив [2,17,13,6,22,31,45,66,100,-18] :
//let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }

// 2. перебрати його циклом for
// for (let j = 0; j < array.length; j++) {
//     console.log(array[j]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i = 0;
// while (i < array.length) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
// }
// console.log(array);

// 8. вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//  1.
// i = array.length - 1;
// while (i >= 0) {
//     console.log(array[i])
//     i--;
// }

//2.
// for (let j = array.length - 1; j >= 0; j--) {
//     console.log(array[j]);
// }

//3.
// i = array.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

//4.
// for (let i = array.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(array[i]);
//     }
// }

//5.
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
//     i--;
// }

//6.
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//     }
// }

//7.
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 3 === 0) {
//         array[i] = "okten";
//     }
// }
// console.log(array);

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1, 6.15, 15, 752, 15.6, 456, 852, 1, 8, 1];
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['I', ' ', 'love', ' ', 'Okten', ' ', 'very', ' ', 'very', ' ', 'much', '.'];
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [1, 6.15, 'asdfgh', false, 15649846, 'пуньк', true, 1, 8, 'qwerty'];
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [1, 6.15, 'asdfgh', false, 15649846, 'вапрол', true, 1, 8, 'qwerty'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [1, 6.15, 'asdfgh', false, 15649846, 'dfghj', true, 1, 8, 'qwerty'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [1, 6.15, 'asdfgh', false, 15649846, 'zxcvb', true, 1, 8, 'qwerty'];
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string') {
//         console.log(array[i]);
//     }
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 'hello';
// array[1] = 3.14;
// array[2] = true;
// array[3] = false;
// array[4] = 145697;
// array[5] = 'Alina';
// array[6] = 'qwerty';
// array[7] = true;
// array[8] = 0;
// array[9] = 'asd';
// array[10] = false;
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('Крок ' + i + ' ');
//     document.write('Крок ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('Крок ' + i + ' ');
//     document.write('Крок ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log('Крок ' + i + ' ');
//     document.write('Крок ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log('Крок ' + i + ' ');
//         document.write('Крок ' + i + ' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('Крок ' + i + ' ');
//         document.write('Крок ' + i + ' ');
//     }
// }


