//every method //
// const numbers = [2,4,8,22,];
// function isEven(number){
//     return number % 2===0;
// }
// const ans= numbers.every((number)=>number%2===0);

// console.log(ans);

// function isEven(number){
//     return number%2==0;
// }
// const ans=numbers.every(isEven);
// console.log(ans);


const products = [
    {productId: 1, produceName: "p1", price:300},
    {productId: 2, produceName: "p2", price:3000},
    {productId: 3, produceName: "p3", price:200},
    {productId: 4, produceName: "p4", price:500},
]

const ans =products.every((item)=>item.price <= 3000);
console.log(ans);





