//Sets //

// const value=['value1','value2','value'];
// const num  = new Set();
// num.add(1);
// num.add(2);
// num.add(3);
// for (let value of num){
//     console.log(num);
    
// }

// const array = [1,2,3,4,4,5,6];
// const uniqueElements = new Set(array)
// let length=0;
// for (let elements of uniqueElements ){
//     length++;
// }
// console.log(length);


// Maps in objects //
// const person = new  Map();
// person.set('fristName', 'harshit ');
// person.set('age', 22);
// person.set(1 ,"one")
// // console.log(person);
// console.log(person.get('fristName'));

// for(let key of person.keys()){
    // console.log(key);
    

// console.log(key, typeof key);
// }



// for(let key of person){
    // console.log(Array.isArray(key));
    
// }

// const person1 ={
//     id: 1,fristName: "harsitkumar"
// } 
// const userInfo =new Map();
// userInfo.set(person1,{age:5,gender:"male"});
// // console.log(userInfo);
// console.log(person1.fristName);


// const person ={
//     firstName : "mohit",
//     age:22,
//     about: function(){
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);

//     }
// }
// person.about();


// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);   
// }

// const person1 ={
//     firstName:"mohit",
//     age:35,
//     about: personInfo
// // }
// const person2 ={
//     firstName:"satish",
//     age:33,
//     about:personInfo
// }
// person2.about();     //fun calling//
// person1.about();


const emp1 ={
    empname : "raju",
    age: 22,
    about: function(){
        console.log(this.empname,this.age);
    }
}
const emp2={
    empname : "kumar",
    age    : 23,
    about :function(hobby, musiction){
        console.log(this.empname , this.age, hobby ,musiction);
        
    }
}

emp2.about.call(emp2,"guitar","mohsin"); //inside calling//