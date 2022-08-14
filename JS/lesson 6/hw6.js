// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());
// console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (string) => {
//     console.log(string.split(' '));
// }
// stringToArray(str);

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map(num => num + ''));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// let sortNums = (numbers, direction) => {
//     if (direction === 'ascending') {
//         numbers.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         numbers.sort((a, b) => b - a)
//     }
//     return numbers;
// }
// console.log(sortNums(nums, 'ascending'));// [3,11,21]
// console.log(sortNums(nums, 'descending')); // [21,11,3]

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//  -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));

//описати колоду карт
// let cards = [
//     //хреста
//     {cardSuit: 'clubs', value: 'Ace', color: 'black'},
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'Jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'Queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'King', color: 'black'},
//     //буба
//     {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
//     {cardSuit: 'diamonds', value: 6, color: 'red'},
//     {cardSuit: 'diamonds', value: 7, color: 'red'},
//     {cardSuit: 'diamonds', value: 8, color: 'red'},
//     {cardSuit: 'diamonds', value: 9, color: 'red'},
//     {cardSuit: 'diamonds', value: 10, color: 'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
//     {cardSuit: 'diamonds', value: 'King', color: 'red'},
//     //черва
//     {cardSuit: 'hearts', value: 'Ace', color: 'red'},
//     {cardSuit: 'hearts', value: 6, color: 'red'},
//     {cardSuit: 'hearts', value: 7, color: 'red'},
//     {cardSuit: 'hearts', value: 8, color: 'red'},
//     {cardSuit: 'hearts', value: 9, color: 'red'},
//     {cardSuit: 'hearts', value: 10, color: 'red'},
//     {cardSuit: 'hearts', value: 'Jack', color: 'red'},
//     {cardSuit: 'hearts', value: 'Queen', color: 'red'},
//     {cardSuit: 'hearts', value: 'King', color: 'red'},
//     {value: 'Joker', color: 'red'},
//     //піка
//     {cardSuit: 'spades', value: 'Ace', color: 'black'},
//     {cardSuit: 'spades', value: 6, color: 'black'},
//     {cardSuit: 'spades', value: 7, color: 'black'},
//     {cardSuit: 'spades', value: 8, color: 'black'},
//     {cardSuit: 'spades', value: 9, color: 'black'},
//     {cardSuit: 'spades', value: 10, color: 'black'},
//     {cardSuit: 'spades', value: 'Jack', color: 'black'},
//     {cardSuit: 'spades', value: 'Queen', color: 'black'},
//     {cardSuit: 'spades', value: 'King', color: 'black'},
//     {value: 'Joker', color: 'black'},
//
// ];
//  - знайти піковий туз
// console.log(cards.find(value => value.cardSuit === 'spades' && value.value === 'Ace'));

//  - всі шістки
// console.log(cards.filter(value => value.value === 6));

//  - всі червоні карти
// console.log(cards.filter(value => value.color === 'red'));

//  - всі буби
// console.log(cards.filter(value => value.cardSuit === 'diamonds'));

//  - всі трефи від 9 та більше
// console.log(cards.filter(value => value.cardSuit === 'clubs' && (value.value >= 9 || value.value === 'Jack' || value.value === 'Queen' || value.value === 'King')));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// let reduce = cards.reduce(function (accumulator, card) {
//     if (card.cardSuit === 'spades') {
//         accumulator.spades.push(card);
//     }
//     if (card.cardSuit === 'diamonds') {
//         accumulator.diamonds.push(card);
//     }
//     if (card.cardSuit === 'hearts') {
//         accumulator.hearts.push(card);
//     }
//     if (card.cardSuit === 'clubs') {
//         accumulator.clubs.push(card);
//     }
//     return accumulator;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
// console.log(reduce);
