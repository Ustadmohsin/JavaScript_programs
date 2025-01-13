// fill method //
// vlaue , start , end 


// const myArray = [1,2,3,4,5,6,7,8,9];

// myArray.fill(0,2,5)
// console.log(myArray);

// splice method //
const value=['value1','value2','value3','value4'];
value.splice(3,0,'inserted item');
const deletedItem =value.splice(1,1);
console.log("deleted item",deletedItem);

console.log(value);
