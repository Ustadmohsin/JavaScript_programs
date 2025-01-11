let winningNumber= 50;
let userGuess = +prompt("Gusse The Number");
 console.log(typeof userGuess, userGuess);
if (userGuess== winningNumber) 
    {
        console.log("Your Gusse is Right");
} else {
    console.log("Your Gusse is wrong");
    if (userGuess<winningNumber) {
        console.log("To Low Number");
        
    
    }

    
    
 }
 