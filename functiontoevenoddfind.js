/////////////////////
// Write a Function that checks if a number is odd or even and return “Even “ or “Odd” accordingly!
/////////////////////

function Findevenodd(num){
    if (num %2 == 0){
        return "Even";
    }
    else{
        return "odd";
    }
}
console.log(Findevenodd(25));