// instead of using multiple callback we will use .then() primises
function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`Step1: Fetching Data...`);
            resolve("Data");
        },2000);
    });

}

function processData(data){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log(`Step2: Processing ${data}`);
            resolve("Processed Data");
        },2000);
    });

}
function saveData(data){
    return new Promise(resolve=>{
        setTimeout(()=>{
          console.log(`Step3: Saving ${data}`);
        resolve("Saved Successfully ✅");  
        },2000);
        
    });
}

fetchData()
.then(data=>processData(data))
.then(processData=>saveData(processData))
.then(finalResult=>console.log(finalResult))
.catch(error=>console.log(error))
