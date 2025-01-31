/////////////////////
// Implement a private variable using closures!
/////////////////////
function createcounter(){
    // private variable 
    let count =0;

    // Inner Function (Clouser)
    function increments(){
        count ++;
        console.log("count :", count);
    }
    return {
        incrementsCounter:function(){
            increments();
        },
        getCount:function(){
            return count;
        }
    }
}
const countermy = createcounter();
console.log(countermy);