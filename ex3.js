// Ex3
fruitsArray = [];

fruitsArray.push("apple", "pear");

// Ex3b
let addFruit = (fruit) => {
    fruitsArray.push(fruit);
    console.log("Fruit: " + fruit + " has been added to the array.");
    return fruitsArray.length;
}

addFruit("orange");

// Ex3c
let listAllFruits = () => {
    fruitsArray.forEach((fruit) => {
        console.log(fruit);
    });
}

listAllFruits();

// Ex3d
let deleteFruit = (fruit) => {
    let index = fruitsArray.indexOf(fruit);
    if (index > -1) {
        fruitsArray.splice(index, 1);
        console.log("Fruit: " + fruit + " has been deleted from the array.");
    }
    return fruitsArray.length;
}

deleteFruit("apple");
listAllFruits();