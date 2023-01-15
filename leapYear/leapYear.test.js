const { leapYearRegular } = require('./leapYear')
const { leapYearArrow} = require('./leapYear');

describe('finding if a year is leap or not using ternary', () => {
    test('2000 should return "true"', () => {
        expect(leapYearRegular(2000)).toBe(true);
    });
    test('2020 should return "true"', () => {
        expect(leapYearRegular(2020)).toBe(true);
    });
    test('1977 should return "false"', () => {
        expect(leapYearRegular(1977)).toBe(false);
    });
    test('2007 should return "false"', () => {
        expect(leapYearRegular(2007)).toBe(false);
    });
    test('2004 should return "true"', () => {
        expect(leapYearRegular(2004)).toBe(true);
    });
});

describe('finding if a year is leap or not using arrow function', () => {
    test('2000 should return "true"', () => {
        expect(leapYearArrow(2000)).toBe(true);
    });
    test('2020 should return "true"', () => {
        expect(leapYearArrow(2020)).toBe(true);
    });
    test('2019 should return "false"', () => {
        expect(leapYearArrow(2019)).toBe(false);
    });
    test('2006 should return "false"', () => {
        expect(leapYearArrow(2006)).toBe(false);
    });
    test('2004 should return "true"', () => {
        expect(leapYearArrow(2004)).toBe(true);
    });
});