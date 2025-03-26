// Promises
function fetchData(){
    return new Promise((resolve,reject)=>{
        console.log("Fetching Data");
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("Data fetched successfully! ✅");
            }else{
                reject("Error: Failed to fetch data ❌")
            }
        },2000);
    })
}

// using the promise
fetchData()
.then(result=>console.log(result))
.catch(reject=>console.log(reject));