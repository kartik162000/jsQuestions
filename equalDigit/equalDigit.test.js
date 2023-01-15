const { equalDigitReg } = require('./equalDigit');
const { equalDigitArrow } = require('./equalDigit');

describe('finding if all the digits are same or not', () => {
    test('22 should return "true"', () => {
        expect(equalDigitReg(22)).toBe(true);
    });
    test('222 should return "true"', () => {
        expect(equalDigitReg(222)).toBe(true);
    });
    test('23 should return "false"', () => {
        expect(equalDigitReg(23)).toBe(false);
    });
    test('322 should return "false"', () => {
        expect(equalDigitReg(322)).toBe(false);
    });
    test('1 should return "true"', () => {
        expect(equalDigitReg(1)).toBe(true);
    });
});

describe('finding if all the digits are same or not using arrow function', () => {
    test('22 should return "true"', () => {
        expect(equalDigitArrow(22)).toBe(true);
    });
    test('222 should return "true"', () => {
        expect(equalDigitArrow(222)).toBe(true);
    });
    test('23 should return "false"', () => {
        expect(equalDigitArrow(23)).toBe(false);
    });
    test('322 should return "true"', () => {
        expect(equalDigitArrow(322)).toBe(false);
    });
    test('1 should return "true"', () => {
        expect(equalDigitArrow(1)).toBe(true);
    });
});