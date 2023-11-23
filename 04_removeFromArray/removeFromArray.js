const removeFromArray = function removeFromArray(array, ...itemToRemove) {
    
    // I'm going to try and use the rest parameter to take multiple arguments
    // This makes the remaining arguments an array;
    // With the arguments in an array, I should be able to use a loop to check each one until finished
    // becomes: [[1, 2, 3, 4], 3, 2]
    // 1,2,3,43,2

    // the for loop should loop through for..of

    const args = itemToRemove;
    // this turns all arguments into an array

    // console.log(args);

    for (const arg of args){
        // console.log(arg);
        // going to check if the item is in index 0
        if (array.indexOf(arg) === 0){
            array.splice(0, 1);
        } else if (array.indexOf(arg) > 0){
            // this checks to see if the item is in the array
            // console.log(array.indexOf(arg));
            // console.log(arg);
            array.splice(array.indexOf(arg), 1);
        }
        // console.log(array);
    }
return array;
//    if (array.indexOf(itemToRemove) > 0){
//     array.splice(array.indexOf(itemToRemove), 1);
//    }
}
// Do not edit below this line
module.exports = removeFromArray;


// this bit of code works to remove at least one item
// array.splice(array.indexOf(...itemToRemove), 1)