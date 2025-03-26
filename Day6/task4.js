//async makes a function return a Promise.
//await pauses execution until the Promise resolves (only inside async functions).
function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Data Fetched")
        },2000);
    });
}
async function getData(){
    console.log("Fetching Data...");
    let resutl = await fetchData();
    console.log(resutl);
}
getData();