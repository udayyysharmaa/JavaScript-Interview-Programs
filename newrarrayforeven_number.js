/////////////////////
// Write a function that takes an array of numbers and returns a new array with only the even number!
/////////////////////

arr = [67,56,67,88,99,998];

function retunnewarr(arr){
    return arr.filter( num => num%2 == 0);
}

console.log(retunnewarr(arr));