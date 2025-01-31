/////////////////////
// Create a function that generates a random number between a given range!
/////////////////////
function getnumber(min,max){
    return Math.floor(Math.random()*(max-min+1)) +min;
}

console.log(getnumber(50,100));