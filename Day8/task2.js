//  old way default parameters
function greet(name,age){
    if(!age){
        age=25
    }
    return`Hello ${name} your age is ${age} years old`
}
console.log(greet("Asad"))
// new way default parameter
function greetings(myname, myage=25){
    return `Hello ${myname} your age is ${myage} years old `
}
console.log(greetings("Ali"));
console.log(greetings("Ashafaq", 23));

//Challege
function getUserInfo(nam,cityName="Gilgit"){
    return `${nam} living in ${cityName}`
};
console.log(getUserInfo("Asad"))