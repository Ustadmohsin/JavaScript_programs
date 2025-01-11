//reduce function//
// const numbers=[1,2,3,5,4,8];
// const sum=numbers.reduce((accumalator, currentvalue)=>{
//     return accumalator + currentvalue;
// });
// console.log(sum);
  

const userCart=[
    
        {productId:1, productName: "mobile", price: 120},
        {productId:1, productName: "laptop", price: 120},
        {productId:1, productName: "TV", price: 120},]

        const totalAmount=userCart.reduce((totalPrice, currentProduce)=>{
            return totalPrice+currentProduce.price;

        },0)

        console.log(totalAmount);
        