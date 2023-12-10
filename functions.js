//A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(text) {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);

    return firstLetterCap + remainingLetters;
}

//A reverseString function that takes a string and returns it reversed.

function reverseString(text) {
    return Array.from(text).reverse().join("");
}


//A calculator object that contains functions for the basic operations: 
//add, subtract, divide, and multiply. Each of these functions should take 
//two numbers and return the correct calculation.

const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    divide: function(num1, num2) {
        return num1 / num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
}

//A caesarCipher function that takes a string and a shift factor and returns 
//it with each character “shifted”. Read more about how a Caesar cipher works on this website 
//https://crypto.interactive-maths.com/caesar-shift-cipher.html

const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

function findCharIndex(text) {
    const array = Array.from(text);
    const positionArray = [];

    for (const char of array) {
        if (alphabet.indexOf(char) == -1) {
            positionArray.push(char);
        } else {
            positionArray.push(alphabet.indexOf(char));
        }
    }

    return positionArray;
}

function shiftedArray (array, shiftFactor) {
    const shiftedArray = [];

    for (const position of array) {
        if (position === ' ') {
            shiftedArray.push(position);
        } else if (typeof(position) != 'number') {
            shiftedArray.push(position);
        } else if ((position + shiftFactor) >= 26) {
            const shift = (position + shiftFactor) % 26;
            shiftedArray.push(shift);
        } else {
            shiftedArray.push(position + shiftFactor);
        }
    }

    return shiftedArray;
}

function decipherArray(array) {
    const decipheredArray = [];

    for (const position of array) {
        if (position === ' ') {
            decipheredArray.push(' ');
        } else if (typeof(position) != 'number') {
            decipheredArray.push(position);
        } else {
            decipheredArray.push(alphabet[position]);
        }
    }

    return decipheredArray;
}


function caesarCipher (text, shiftFactor) {
    const positionArray = findCharIndex(text);
    const incrementArray = shiftedArray(positionArray, shiftFactor);
    const decipheredArray = decipherArray(incrementArray).join("");
    return decipheredArray;
}

//An analyzeArray function that takes an array of numbers and returns an object with the following 
//properties: average, min, max, and length.

function average(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return Math.round(sum / array.length);
}

function min (array) {
    let min = 0;
    for (const item of array) {
        if (array.indexOf(item) == 0) {
            min = item;
        } else {
            if (item < min) {
                min = item;
            }
        }
    }
    return min;
}

function max (array) {
    let max = 0;
    for (const item of array) {
        if (array.indexOf(item) == 0) {
            max = item;
        } else {
            if (item > max) {
                max = item;
            }
        }
    }
    return max;
}

function analyzeArray (array) {
    let object = {};
    object.average = average(array);
    object.min = min(array);
    object.max = max(array);
    object.length = array.length;
    return object;
}

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
}