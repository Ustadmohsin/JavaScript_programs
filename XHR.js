const URL ="https://jsonplaceholder.typicode.com/posts" 
const xhr =new XMLHttpRequest();
console.log(xhr);
//console.log(xhr);
//step1
xhr.open("GET", URL);

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    
}
xhr.send();
