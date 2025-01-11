// hello();
// function hello(){
//     console.log("hello world");    
// }

const app = () =>{
    const myFunc = () =>{
        console.log("hello from anyFunc");
    }
    const addTwo= (num1, num2)=>{
        return num1+num2;
    }
    const nul= (num1, num2) =>num1+num2;   
        console.log("inside app");
        myFunc();
    }
app();

