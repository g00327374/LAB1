// The arrow function ()=> to call a function and execute what's inside
const hello = () => {
    console.log("Hello");
}

hello();

// Example 2
const bye = () => {
    console.log("Bye");
}

bye();

// Ex2a
const ex2a = () => {
    console.log("Data Representation & Querying");
}

ex2a();

// Ex2b
const ex2b = (arg1) => {
    return arg1;
}

console.log(ex2b("Data Representation & Querying"));

// Ex2c - Take two numbers as arguments and returns the sum of both numbers
const ex2c = (val1, val2) => {
    return val1 + val2;
}

console.log(ex2c(2, 2));

// Ex2d - Multiply each number under 70 by 2
// create variable to store an array of numbers first
// then create a function to 
const ages = [23, 2, 69, 72];

const ex2d = ages.map((x) => {
    if (x <= 70) {
        return x * 2;
    }
});

console.log(ex2d);