const reverseString = function(reverseWord) {
if (reverseWord.length === 0){
    return "";
}
const split = reverseWord.split("");
let wordLength = split.length-1;
let reversed = split[wordLength]
for (i = wordLength-1; i>=0; i--)
    reversed += split[i];
return reversed;
}



// take the word and split each letter into an array
// get the length of the word and use the value as the index number for
// adding each letter last to first by decrementing the index number until 0


// Do not edit below this line
module.exports = reverseString;
