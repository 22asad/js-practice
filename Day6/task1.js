// Call Back
function callUserData(callback){
    console.log("Fetching user data");

    setTimeout(()=>{
        let user = {name:"Asad",age:26,country:"Pakistan"};
        callback(user);
    },2000);
}
function displayUser(user){
    console.log(`User ${user.name}, Age: ${user.age}`);
}
callUserData(displayUser)
