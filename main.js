// let url = "https://jsonplaceholder.typicode.com/users";

const fetchApi = (url)=>{
    fetch(url).then(v=>{
        console.log(v);
    })
}


fetchApi("https://jsonplaceholder.typicode.com/users")