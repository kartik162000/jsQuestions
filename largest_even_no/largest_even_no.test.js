const { largeEvenNoReg } = require('./largest_even_no');
const { largeEvenNoArrow} = require('./largest_even_no');

describe('finding the largest even number', () => {
    test('[1, 2, 3, 4, 5] should give "4" ', () => {
        expect(largeEvenNoReg([1, 2, 3, 4, 5])).toBe(4);
    });
    test('[1, 3, 5, 7] should give "-1" ', () => {
        expect(largeEvenNoReg([1, 3, 5, 7])).toBe(-1);
    })
});

describe('finding the largest even number using arrow function', () => {
    test('[1, 2, 3, 4, 5] should give "4" ', () => {
        expect(largeEvenNoArrow([1, 2, 3, 4, 5])).toBe(4);
    });
    test('[1, 3, 5, 7] should give "-1" ', () => {
        expect(largeEvenNoArrow([1, 3, 5, 7])).toBe(-1);
    })
});