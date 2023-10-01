// Ex3
// Create an empty array
fruitsArray = [];

// add 2 inputs in the array using .push command
fruitsArray.push("apple", "pear");

// Ex3b
// Create a function addfruit
// and give it an argument with a variable (fruit)
// variable fruit can store new values
let addFruit = (fruit) => {
    // call the fruitsArray
    // include the new values from fruit into fruitsArray 
    // using push command
    fruitsArray.push(fruit);
    console.log("Fruit: " + fruit + " has been added to the array.");
    // return the length of the array
    return fruitsArray.length;
}
// call the function addFruit to pass a new value
// returns the length of the array
addFruit("orange");

// Ex3c
// This function displays all values of fruitsArray
// by calling it and using forEach goes through all the index
// print the values out in console.log
let listAllFruits = () => {
    fruitsArray.forEach((fruit) => {
        console.log(fruit);
    });
}
// call the function
listAllFruits();

// Ex3d
// This function deletes an index in the array
// using indexOf(fruit) command: it tells which index it 
// should look for in the fruitsArray and speficies
// that the values are from (fruit)
let deleteFruit = (fruit) => {
    let index = fruitsArray.indexOf(fruit);
    // if the index we are looking for is not
    // below 0 then
    // perform the deletion
    if (index > -1) {
        // index 1 will be deleted using .splice command
        fruitsArray.splice(index, 1);
        // display in console deletion was successful
        console.log("Fruit: " + fruit + " has been deleted from the array.");
    }
    return fruitsArray.length;
}
// call function to also delete any value with the string "apple"
deleteFruit("apple");
// display the array again
listAllFruits();