// Promises //
//produce 
// Promise
// console.log("script start");
// const bucket = ['coffee', 'chips','vegetables','salt','rice'];



// const friedRicePromise = new Promise((resolve,reject)=>{
//     if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value:"friedrice"});
//     }else{
//         reject("could not do it");
//     }
// })
// // consume 
// // how to consume 
// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error)
//     })
//     for(let i=0; i<=100; i++){
//         console.log(Math.random(), i);
//     }
//     console.log("script end!!!!");
    
// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
  
//     });
// }

// const getPromise = ()=>{
//     return new Promise((resolve,reject) =>{
//         console.log("I am a Promise");
//         // resolve("success");
//         reject("error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)    
// });
//  promise.catch((err)=> {
//     console.log("rejected",err);
    
 
//  })

//  Async-await
async function getAllData(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2...");
    await getData(1);
    console.log("getting data3...");
    await getData(1);
    console.log("getting data4...");
    await getData(1);
}