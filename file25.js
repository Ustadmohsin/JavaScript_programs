// const band ={
//     bandName: "led zeppling",
//     famousSong: "stairway to heaven"
// };

// const{bandName, famousSong} = band;
// console.log(bandName);
const users =[
    {userId: 1,firstName: "harshit", gender: "male"},
    {userId: 2,firstName: "mohit", gender: "male"},
    {userId: 3,firstName: "suraj", gender: "male"},
]
// for(let user of users){
//     console.log(user.firstName);
    
// }
const [{firstName:var1},{gender}]=users;
// console.log(firstName,gender);
console.log(var1);


// const [{firstName},,{gender}]=users;
// console.log(firstName);
// // console.log(grnder);

