function capitalize(text) {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);

    return firstLetterCap + remainingLetters;
}

function reverseString(text) {
    return Array.from(text).reverse().join("");
}

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
        if (typeof(position) != 'number') {
            shiftedArray.push(position)
        } else if ((position + shiftFactor) >= 26) {
            const shift = (position + shiftFactor) % 26;
            shiftedArray.push(shift)
        } else {
            shiftedArray.push(position + shiftFactor);
        }
    }

    return shiftedArray;
}

function decipherArray(array) {
    const decipheredArray = [];

    for (const position of array) {
        if (position == null) {
            decipheredArray.push(' ')
        } else {
            decipheredArray.push(alphabet[position])
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

export {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
}