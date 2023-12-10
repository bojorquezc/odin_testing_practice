import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./functions";

test('capitalizes string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('reverses string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('calculator results', () => {
    expect(calculator.add(2,2)).toBe(4);
    expect(calculator.subtract(2,2)).toBe(0);
    expect(calculator.divide(2,2)).toBe(1);
    expect(calculator.multiply(2,2)).toBe(4);
});

test('caesar cipher', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp');
    expect(caesarCipher('hello foo', 1)).toBe('ifmmp gpp');
    expect(caesarCipher('hello', 5)).toBe('mjqqt');
    expect(caesarCipher('hello', 26)).toBe('hello');
    expect(caesarCipher('hello', 27)).toBe('ifmmp');
    expect(caesarCipher('why why', 3)).toBe('zkb zkb');
    expect(caesarCipher('why why', 6)).toBe('cne cne');
});

test('analyze array', () => {
    const testArray1 = [1, 2, 3, 4, 5];
    const testArray2 = [3,9,1,25,99];
    const testArray3 = [425, 232, 33, 65, 939];
    expect(analyzeArray(testArray1)).toEqual({average:3, min:1, max:5, length:5});
    expect(analyzeArray(testArray2)).toEqual({average:27, min:1, max:99, length:5});
    expect(analyzeArray(testArray3)).toEqual({average:339, min:33, max:939, length:5 });
})