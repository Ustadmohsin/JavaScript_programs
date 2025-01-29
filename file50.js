// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 1000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");


// setTimeout

// console.log("script start");

// const id = setTimeout(() => {
//   console.log("inside setTimeout");
// }, 1000);

// for (let i = 1; i < 100; i++) {
//   console.log("....");
// }
// console.log("settimeout id is ", id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("Script end")


// / setInterval
// console.log("script start");
// // const total=0
// // setInterval(() => {
// //   console.log(total);
// //   console.log(Math.random());
// // }, 90);
// console.log("script end");
// const body = document.body;
// const button = document.querySelector("button");
// const intervalId = setInterval(()=> {
//     const red = Math.floor(Math.random() * 126)
//     const green = Math.floor(Math.random() * 126)
//     const blue = Math.floor(Math.random() * 126)
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.background=rgb; 
// },1000);
// button.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     button.textContent= body.style.background;
// });
// console.log(intervalId);
// function myFun(callback){
//     console.log("Function is doing task 1");
//     callback();
// }
// myFun(()=>{
//     console.log("Functoin is doing task 2");
    
// });


//call backs, calback hell, pyaran of doon 
// asynchronous programing
// const heading1= document.querySelector(".heading1");
// const heading2= document.querySelector(".heading2");
// const heading3= document.querySelector(".heading3");
// const heading4= document.querySelector(".heading4");
// const heading5= document.querySelector(".heading5");
// const heading6= document.querySelector(".heading6");
// const heading7= document.querySelector(".heading7");
// //calback hall //
// setTimeout(() => {
//     heading1.textContent ="Heading 1"
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "heading2"
//         heading2.style.color = "green";
//     setTimeout(() => {
//         heading3.textContent = "heading3"
//         heading3.style.color = "red";
//      setTimeout(() => {
//         heading4.textContent = "heading4"
//         heading4.style.color = "gray";
//      setTimeout(() => {
//         heading5.textContent = "heading5"
//         heading5.style.color = "Pink";
//     setTimeout(() => {
//         heading6.textContent = "heading6"
//         heading6.style.color = "brown";
//     setTimeout(() => {
//         heading7.textContent = "heading7"
//         heading7.style.color = "Violet";
// }, 1000);   //after heading2 is start
// }, 1000);
// }, 1000);   //after heading2 is start
// }, 1000);   //after heading2 is start
// }, 1000);   //after heading2 is start
// }, 1000);   //after heading2 is start
// }, 1000);   //after heading2 is start
//function in setTimeout//
function changeText(element, text, color, time){
    setTimeout(()=>{
        element.textContent = Text;
        element.style.color = color;

    },time)
}
changeText(heading1 , "one", "violate", 1000);