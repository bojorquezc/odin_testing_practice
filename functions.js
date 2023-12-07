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

export {
    capitalize,
    reverseString,
    calculator,
}