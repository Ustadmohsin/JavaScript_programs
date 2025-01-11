// sort method //
// const numbers=[1,4,8,23,15,65,55,];
// const userNames =['harshit','kumar','ABC','mohit','nitesh']
// userNames.sort();
// // console.log(numbers);

// console.log(userNames);

// numbers.sort((a,b)=>{
    // return a-b;
// });
// console.log(numbers);

//pirce lowToHigh //
// const products = [
//     {productId: 1, produceName: "p1", price:300},
//     {productId: 2, produceName: "p2", price:30000},
//     {productId: 3, produceName: "p3", price:200},
//     {productId: 4, produceName: "p4", price:500},
// ]
// //lowtoHigh //
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });

// console.log(lowToHigh);
 
// // pirce HighLow //

const products = [
    {productId: 1, produceName: "p1", price:300},
    {productId: 2, produceName: "p2", price:30000},
    {productId: 3, produceName: "p3", price:200},
    {productId: 4, produceName: "p4", price:500},
]
//HighTolow //
const HighToLow = products.slice(0).sort((a,
    b)=>{
    return b.price-a.price;
});

console.log(HighToLow);
