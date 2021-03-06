// function loadDAta(){
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// }
function loadDAta(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
    };
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
    };
    function loadPosts(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => console.log(post))
    }
    loadPosts();
    function displayUsers(data){
        const ul = document.getElementById('users');
      for (user of data){
          console.log(user.email);
          const li = document.createElement('li');
          //li.innerText= user.name;//
           li.innerText= `name: ${user.name}  email: ${user.email}`;
          ul.appendChild(li);
      }
    }
   