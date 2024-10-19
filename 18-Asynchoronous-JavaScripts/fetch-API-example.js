// const getPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));
// }

// getPosts();

// const getPosts = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(posts => {
//     posts.forEach(post => console.log(post));
// })
// .catch(error => console.log(error));
// }

// getPosts();


async function getPost(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
     const posts = await response.json();
     posts.forEach(post => console.log(post));
}

getPost();