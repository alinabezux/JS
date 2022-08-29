//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
const currentUser = document.createElement('div');
currentUser.setAttribute('class', 'currentUser-wrap')
document.body.appendChild(currentUser);

getInformation = (user) => {
    for (const userElement in user) {
        if (typeof user[userElement] !== 'object') {
            const item = document.createElement('p');
            item.setAttribute('class', 'item-wrap')
            currentUser.appendChild(item);
            item.innerHTML = `${userElement} : <strong>${user[userElement]}</strong>`;
        } else getInformation(user[userElement])
    }
}

getInformation(user);

const currentUserButton = document.createElement('button');
currentUserButton.setAttribute('class', 'currentBtn')
currentUserButton.innerText = 'Posts of current user';
currentUser.appendChild(currentUserButton);

currentUserButton.onclick = function () {
    const postsDiv = document.createElement('div');
    document.body.appendChild(postsDiv);
    postsDiv.classList.add('postsDiv');
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                const postDiv = document.createElement('div');
                postsDiv.appendChild(postDiv);
                postDiv.classList.add('postDiv');

                const postTitle = document.createElement('h3');
                postTitle.innerText = post.title;

                const postButton = document.createElement('button');
                postButton.classList.add('postButton');
                postButton.innerText = 'post details';
                postButton.onclick = function () {
                    location.href = `../post-details/post-details.html?data=${JSON.stringify(post)}`
                }

                postDiv.append(postTitle, postButton);
            }
        })
    currentUserButton.disabled = true;
}

//user-details.html - блок з інфою про user зверху сторінки.
// Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .