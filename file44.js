// const user1= {
//     Name :"nitesh",
//     lastName :"vashita",
//     email:"abc@gamil.com",
//     age :30,
//     address: "north kasba",
//     about: function(){
//     }}
// console.log(user1);


//function that fun create obj
//add key value
//obj return 




// Clone using object. assign  //
// const obj ={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2=Object.assign({}, obj);
// obj.key3 ="value3" //both values are changed
// console.log(obj);
// console.log(obj2);


//optional chaining //
// const user ={
//     firstName:"harshit",
//     address: {houseNumber: '555,north kasba'}
// }
// console.log(user.firstName);
// console.log(user.address.houseNumber);


//methods //
//function inside object //
// const person={
//     firstName : "harshit",
//     age:16,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
        
//     }
// }
// person.about();

function personInfo(){
          console.log(`person name is ${this.firstName} and age is ${this.age}`);
            
         }
const person1={
    firstName : "harshit",
    age:18,
    about: personInfo
}
const person2={
    firstName : "nitesh",
    age:16,
    about: personInfo
}
const person3={
    firstName : "nitesh",
    age:15,
    about: personInfo
}


