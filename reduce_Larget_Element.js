/////////////////////
// Find the largest element in an array using tha ‘reduce()’ method!
/////////////////////
let largetarray = [34,56,78,75,222,111];
function largestammount(largetarray){
    return largetarray.reduce((max,current) => current > max ? current :max);

}



let reduce = largestammount(largetarray);

console.log(reduce);