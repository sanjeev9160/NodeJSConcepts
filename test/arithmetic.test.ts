import { add } from '../src/arithmetic';

describe('test arithemtic suite', () => { 
    test('add method', () => {
        expect(add(2, 4)).toBe(6);
        expect(add(0, 1)).toBe(1);
    });
});