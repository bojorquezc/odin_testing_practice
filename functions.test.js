import { capitalize, reverseString, calculator } from "./functions";

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
})