//filter Function//
const numbers = [1,2,4,2,6,8,7]
// const isEven= function(number){
//     return number%2 === 0;
// }
// const evenNumbers=numbers.filter(isEven);

// console.log(evenNumbers);

const isOdd=function(number){
    return number%2!==0;
}
const OddNumbers=numbers.filter(isOdd);
console.log(OddNumbers);


