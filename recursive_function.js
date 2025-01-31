/////////////////////
// Write a recursive function to calculate the factorial of the given number!
/////////////////////


function fact_number(n){
    if (n == 1){
        return 1;
    }
    else{
        return n*(fact_number(n-1));
    }
}

console.log(fact_number(5));