// Example 1
// The arrow function ()=> to call a function 
// and execute what's inside
const hello = () => {
    console.log("Hello");
}

// Call the function hello() and will
// execute this command to give back
// the results 
hello();

// Example 2
const bye = () => {
    console.log("Bye");
}

bye();

// Ex2a
// Same method as previous examples 
// but with different results
const ex2a = () => {
    console.log("Data Representation & Querying");
}
// call function
ex2a();

// Ex2b
// This exercise takes in an argument
// which then returns the value of the parameter
const ex2b = (arg1) => {
    return arg1;
}
// This is how to call the function and
// give the parameter a string value
console.log(ex2b("Data Representation & Querying"));

// Ex2c - Take two numbers as arguments and returns the sum 
// of both numbers
const ex2c = (val1, val2) => {
    return val1 + val2;
}

console.log(ex2c(2, 2));

// Ex2d - Multiply each number under 70 by 2
// create variable to store an array of numbers first
// then create a function to perform the calculations
const ages = [23, 2, 69, 72];
// the .map goes through all the index of the array
// the variable ages is stored in the argument x
const ex2d = ages.map((x) => {
    if (x <= 70) {
        return x * 2;
    }
});
// print out the values of ex2d function
console.log(ex2d);