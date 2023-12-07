import { capitalize, reverseString } from "./functions";

test('capitalizes string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
});

test('reverses string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});