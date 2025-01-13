//Find method //
const users= [
    {userID : 1, empName: "harshit",age:17},
    {userID : 2, empName: "Raju", age :22},
    {userID : 3, empName: "mohit" ,age:23},
    {userID : 4, empName: "suresh",age:24},
    {userID : 5, empName: "nitesh" ,age:44},
];
const myUser =users.find((user)=>{
    return user.empName== "nitesh"
});
console.log(myUser);

