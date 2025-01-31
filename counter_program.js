/////////////////////
// Create a counter function using closure that increments and returns the count each call!
/////////////////////
function createcounter(){
    let count =0;
    return function(){
        return ++count;
    }
}
let counter = createcounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());