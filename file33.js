const users= [
    {firstName:"harshit" , age: 20},
    {firstName:"sunil" , age: 25},
    {firstName:"Raju" , age: 26},
    {firstName:"mohit" , age: 28},

]

// users.forEach(function(user){
//     console.log(user.firstName);
//     ;
//     console.log(user.age);
    
// });

users.forEach((user, index)=>{
    console.log(user.firstName, user.age);
    
})