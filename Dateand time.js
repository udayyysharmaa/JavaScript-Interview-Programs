/////////////////////
// Create a function that displays the current date and time in a specific format!
/////////////////////
function getcurrentandtime(){
    let currentDate = new Date();
    return currentDate.toTimeString();
}
console.log(getcurrentandtime());