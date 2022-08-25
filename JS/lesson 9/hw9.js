//- є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// for (const simpson of simpsons) {
//     const div = document.createElement('div');
//     div.className = 'member';
//     const heading = document.createElement('h1');
//     heading.append(`${simpson.name} ${simpson.surname}`);
//     const heading2 = doconst ent.createElement('h2');
//     heading2.append(`${simpson.age}`);
//     const paragraph = document.createElement('p');
//     paragraph.append(`${simpson.info}`);
//     const image = document.createElement('img');
//     image.src = simpson.photo;
//     div.append(heading, heading2, paragraph, image);
//     document.body.appendChild(div);
// }

// Цикл в циклі
// // - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// // властивостей, для властивості modules зробити список з елементами
// // Приклад структири знаходиться у файлі example.png
// // for (const course of coursesArray) {
//     const htmlDivElement = document.createElement('div');
//
//     const title = document.createElement('h1');
//     title.append(`${course.title}`);
//
//     const duration = document.createElement('h3');
//     duration.append(`${course.monthDuration} month, ${course.hourDuration} hours`);
//
//     const modules = document.createElement('ul');
//
//     for (const module of course.modules) {
//         const item = document.createElement('li');
//         item.append(`${module}`);
//         modules.appendChild(item);
//     }
//     htmlDivElement.append(title, duration, modules);
//     document.body.appendChild(htmlDivElement);
// }

// - створити блок,
// const block = document.createElement('div');
// // - додати йому класи wrap, collapse, alpha, beta
// block.classList.add("wrap", "collapse", "alpha", "beta");
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.innerText = 'Lorem ipsum dolor sit amet.';
// block.style.background = 'cornflowerblue';
// block.style.color = 'white';
// block.style.fontSize = '25px';
// // - додати цей блок в body.
// document.body.appendChild(block);
// // - клонувати його повністю, та додати клон в body.
// document.body.appendChild(block.cloneNode(true));

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     const h1 = document.createElement('h1');
//     h1.append(`${course.title}`);
//     const h3 = document.createElement('h3');
//     h3.append(`${course.monthDuration}`);
//     div.append(h1, h3);
//     document.body.appendChild(div);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// // з title  елементу, та <p class='description'> з monthDuration елементу.
// // Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'item');
//
//     const h1 = document.createElement('h1');
//     h1.setAttribute('class', 'heading');
//     h1.innerText = `${course.title}`;
//
//     const p = document.createElement('p');
//     p.setAttribute('class', 'description');
//     p.innerText = `${course.monthDuration}`;
//
//     div.append(h1, p);
//     document.body.appendChild(div);
// }

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".
// const p = document.createElement('p');
// p.setAttribute('id', 'text');
// p.innerText = 'Text';
// const button = document.createElement('button');
// button.innerText = 'Click';
// button.onclick = function () {
//     document.getElementById('text').remove();
// }
// document.body.append(p, button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input = document.createElement('input');
// input.type = 'number';
// input.placeholder = 'How old are you?';
// const button = document.createElement('button');
// button.innerText = 'Submit';
// document.body.append(input, button);
// button.onclick = function () {
//     if (input.value >= 18) {
//         alert('Welcome');
//     } else {
//         alert('You are too small:)')
//     }
// }

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const input1 = document.createElement('input');
input1.type = 'number';
input1.placeholder = 'number of rows';

const input2 = document.createElement('input');
input2.type = 'number';
input2.placeholder = 'number of columns'

const input3 = document.createElement('input');
input3.type = 'text';
input3.placeholder = 'content';

const button = document.createElement('button');
button.innerText = 'Send';

document.body.append(input1, input2, input3, button);


button.addEventListener('click', function () {

    let rows = input1.value;
    let columns = input2.value;
    let text = input3.value;

    let foo = (row, column, content) => {

        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = '25px';
        table.style.margin = '10px';
        document.body.appendChild(table);

        for (let i = 0; i < row; i++) {
            const row = document.createElement('tr');
            row.style.border = '1px solid black';
            table.appendChild(row);

            for (let j = 0; j < column; j++) {
                const column = document.createElement('td');
                column.style.border = '1px solid black';
                column.innerText = `${content}`;
                row.appendChild(column);

            }
        }
    }

    foo(rows, columns, text);
})

