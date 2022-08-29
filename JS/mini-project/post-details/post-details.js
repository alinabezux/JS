//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));

const currentPost = document.createElement('div');
currentPost.classList.add('currentPost');
document.body.appendChild(currentPost);
currentPost.innerHTML =
    `<h2>User - ${post.userId} Post - ${post.id}</h2>
     <h1>${post.title}</h1>
     <p>${post.body}</p>`;

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(resp => resp.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('commentsDiv');
        document.body.appendChild(commentsDiv);

        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentsDiv.appendChild(commentDiv);
            commentDiv.classList.add('comment');

            const email = document.createElement('h3');
            email.innerText = `${comment.email}`;

            const text = document.createElement('p');
            text.innerText = `${comment.body}`;

            commentDiv.append(email, text);
        }
    })

//post-details.html - блок з інфою про пост зверху.
// Коментарі - по 4 в ряд.


