// Closures
// Closures allow a function to access variables from it's outer scope even after the outer function has finished execution
function outerFunction(outervariable){
    return function innerFunction(innerVariable){
        console.log(`${outervariable}, Inner: ${innerVariable}`);
    }
};
const closureExample = outerFunction("Hello");
closureExample("World");