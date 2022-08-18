//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//  створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];
let user1 = new User(8, 'Yulia', 'Radzik', `asdf@gmail.com`, 129864892);
let user2 = new User(4, 'Olena', 'Bezukh', `qwer@gmail.com`, 12532665);
let user3 = new User(3, 'Serhey', 'Velychko', 'qwegh2gmail.com', 664612680);
let user4 = new User(2, 'Olga', 'Hhromchak', 'qwggh2gmail.com', 664606256);
let user5 = new User(5, 'Mariya', 'Kotla', 'qwejh2gmail.com', 6646064529);
let user6 = new User(6, 'Yuriy', 'Muslin', 'qwagh2gmail.com', 664606125);
let user7 = new User(1, 'Nadiya', 'Kuzmiak', 'qwmgh2gmail.com', 664606122);
let user8 = new User(9, 'Kolya', 'Muka', 'qwevh2gmail.com', 664606115);
let user9 = new User(7, 'Alina', 'Perek', 'qwcvh2gmail.com', 664606150);
let user10 = new User(10, 'Nazar', 'Lysin', 'qwhjh2gmail.com', 664606175);
users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((a, b) => a.id - b.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
let client1 = new Client(8, 'Yulia', 'Radzik', `asdf@gmail.com`, 129864892, ['milk', 'butter', 'eggs']);
let client2 = new Client(4, 'Olena', 'Bezukh', `qwer@gmail.com`, 12532665, ['bread', 'tomatoes', 'potatoes']);
let client3 = new Client(3, 'Serhey', 'Velychko', 'qwegh2gmail.com', 664612680, ['juice']);
let client4 = new Client(2, 'Olga', 'Hhromchak', 'qwggh2gmail.com', 664606256, ['apples', 'bananas']);
let client5 = new Client(5, 'Mariya', 'Kotla', 'qwejh2gmail.com', 6646064529, ['bananas']);
let client6 = new Client(6, 'Yuriy', 'Muslin', 'qwagh2gmail.com', 664606125, ['milk', 'butter']);
let client7 = new Client(1, 'Nadiya', 'Kuzmiak', 'qwmgh2gmail.com', 664606122, ['sugar', 'salt']);
let client8 = new Client(9, 'Kolya', 'Muka', 'qwevh2gmail.com', 664606115, ['lemon', 'vegetables']);
let client9 = new Client(7, 'Alina', 'Perek', 'qwcvh2gmail.com', 664606150, ['notebook', 'pen']);
let client10 = new Client(10, 'Nazar', 'Lysin', 'qwhjh2gmail.com', 664606175, ['book', 'sketchbook', 'pencil']);
clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxspeed, capacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.capacity = capacity;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    this.info = function () {
        for (const item in this) {
            if (typeof this[item] != 'function') {
                console.log(`${item} - ${this[item]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let newCar = new Car('tesla', 'usa', 2020, 300, 4);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(50);
newCar.changeYear(2021);
newCar.addDriver({name: 'Alina', age: 19});
console.log(newCar);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, producer, year, maxspeed, capacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.capacity = capacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`);
    }

    info() {
        for (const item in this) {
            if (typeof this[item] != 'function') {
                console.log(`${item} - ${this[item]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}
let newCar = new Car('tesla', 'usa', 2020, 300, 4);
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed(50);
newCar.changeYear(2021);
newCar.addDriver({name: 'Alina', age: 19});
console.log(newCar);

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}

let arrCinderella = [
    new Cinderella('Olena', 18, 39),
    new Cinderella('Mariya', 20, 36),
    new Cinderella('Oksana', 41, 40),
    new Cinderella('Olesya', 17, 36),
    new Cinderella('Diana', 22, 38),
    new Cinderella('Yana', 18, 36),
    new Cinderella('Nataly', 42, 41),
    new Cinderella('Sofiya', 19, 39),
    new Cinderella('Nadiya', 60, 36),
    new Cinderella('Nastya', 43, 37),
];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Oleg', 20, 37);

let findCinderella = (arrCinderella, prince) => {
    for (const item of arrCinderella) {
        if (item.footsize === prince.shoe) {
            return `${item.name}`;
        }
    }
}
console.log(findCinderella(arrCinderella, prince));
console.log(arrCinderella.find(value => value.footsize === prince.shoe));