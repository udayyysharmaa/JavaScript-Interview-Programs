/////////////////////
// Implement a try-catch block to handle an error that occurs during APT data fetching!
/////////////////////


async function fetchprogram(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(erorrrrrrrr);
    }

}

fetchprogram();