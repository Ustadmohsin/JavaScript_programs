//  Fatch
const URL ="https://jsonplaceholder.typicode.com/posts" 
fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
.then(newfile =>{
    console.log("then");
    
    return newfile.json()
})
.then(data => {
    console.log(data);
})
.catch(error =>{
    console.log("inside catch");
    console.log(error);
    
    
})