//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
const usersWrap = document.createElement('div');
usersWrap.setAttribute('class', 'wrap');
document.body.appendChild(usersWrap);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
                const userWrap = document.createElement('div');
                userWrap.setAttribute('class', 'user-wrap')
                usersWrap.appendChild(userWrap);

                const userName = document.createElement('h2');
                userName.setAttribute('class', 'user-name')
                userName.innerText = `${user.id} - ${user.name}`;

                const userButton = document.createElement('button');
                userButton.innerText = 'See more';
                userButton.setAttribute('class', 'user-button')
                userButton.onclick = function () {
                    location.href = `../user-details/user-details.html?data=${JSON.stringify(user)}`
                }
                userWrap.append(userName, userButton)
            }
        }
    )

//index.html - всі блоки з user - по 2 в рядок.
// кнопки/аосилвння розташувати під інформацією про user.

