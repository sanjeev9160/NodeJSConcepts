import { add, sub } from '../src/arithmetic';

describe('test arithemtic suite', () => { 
    test('add method', () => {
        expect(add(2, 4)).toBe(6);
        expect(add(0, 1)).toBe(1);
    });

    test('sub method', () => {
        expect(sub(4, 2)).toBe(2);
        expect(sub(0, 1)).toBe(-1);
        expect(sub(0, 0)).toBe(0);
    });
});