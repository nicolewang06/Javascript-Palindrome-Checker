let body = document.body.style;
let palinSubmit = document.getElementById("palinSubmit");
let showResult = document.getElementById("showResult");
let palinCheck = document.getElementById("palinCheck");
let testWord = ["b", "b", "o", "o", "b", "b"];
let palinTests = [
    testWord,
    ["e", "e", "r", "e", "e"],
    ["g", "k", "w", "i", "u", "y", "t"],
    "baaaabr",
    [0,3,4,4,3,0],
    7778889888777,
    54546546666677,
    "049355"
];

// Palindrome function. Checks if any string, array, or number is a palindrome:

function palin (possiblePalin) {    
    'use strict';
    if (Array.isArray(possiblePalin)) {
        let word = possiblePalin;
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();
        console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult.innerHTML = `${word} IS a palindrome.`;
                body.backgroundColor = "green";             
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult.innerHTML = `${word} IS a palindrome.`;
                    body.backgroundColor = "green";                    
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult.innerHTML = `${word} is NOT a palindrome.`;
                    body.backgroundColor = "red";                    
                    }
            }
    } else if (!Array.isArray(possiblePalin) && typeof possiblePalin !== "number") {
        possiblePalin.trim();
        let word = Array.from(possiblePalin);
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult.innerHTML = `${word} IS a palindrome.`;  
                body.backgroundColor = "green";               
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult.innerHTML = `${word} IS a palindrome.`; 
                    body.backgroundColor = "green";  
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult.innerHTML = `${word} is NOT a palindrome.`;
                    body.backgroundColor = "red";                   
                    }
            }
    } else if (typeof possiblePalin === "number") {
        let toString = possiblePalin.toString()
        let word = Array.from(toString);
        let wordHalfLength = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, wordHalfLength);
        let secondHalf = word.slice(wordHalfLength, word.length);
        let reverseSecondHalf = secondHalf.reverse();  
            console.log(wordHalfLength); // logs out stages of the operation, so. . .
        console.log(firstHalf); // . . .these line are not. . .
        console.log(reverseSecondHalf); // . . .necessary for the end result.
            if (firstHalf.join() == reverseSecondHalf.join()) {
                console.log(`${word} IS a palindrome.`);
                showResult.innerHTML = `${word} IS a palindrome.`;  
                body.backgroundColor = "green";                
            } else if (firstHalf.join() != reverseSecondHalf.join()) {
                reverseSecondHalf.pop();
                    if (firstHalf.join() == reverseSecondHalf.join()) {
                    console.log(`${word} IS a palindrome.`);
                    showResult.innerHTML = `${word} IS a palindrome.`;  
                    body.backgroundColor = "green";                   
                    } else {
                    console.log(`${word} is NOT a palindrome.`);
                    showResult.innerHTML = `${word} is NOT a palindrome.`;
                    body.backgroundColor = "red";
                    }
            }
    } else {
        throw "Please try again with an array, string, or numbers.";
    }
}

palinSubmit.addEventListener("click", palin(palinTests[0]));

