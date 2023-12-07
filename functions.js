function capitalize(text) {
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);

    return firstLetterCap + remainingLetters;
}

function reverseString(text) {
    return Array.from(text).reverse().join("");
}

export {
    capitalize,
    reverseString,
}