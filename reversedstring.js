/////////////////////
// Write a Function that take a string and return the reversed version of it!
/////////////////////

let str = "Uday Sharma"

function reversedString(str){
    return str.split("").reverse().join("");
}

console.log(reversedString(str));