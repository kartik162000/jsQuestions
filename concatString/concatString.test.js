const {  concatStringRegular} = require('./concatString');
const { concatStringArrow } = require('./concatString');

describe('concatenating two strings without first char ', () => {
    test('"["code", "academy"]" should result in "odecademy"', () => {
        expect(concatStringRegular(["code", "academy"])).toBe("odecademy");
    });
    test('"["ca", " ac"]" should result in "aac"', () => {
        expect(concatStringRegular(["ca", " ac"])).toBe("aac");
    });
    test('"["a", "c"]" should result in ""', () => {
        expect(concatStringRegular(["a", "c"])).toBe("");
    });
    test('"["ac", ""]" should result in "c"', () => {
        expect(concatStringRegular(["ac", ""])).toBe("c");
    });
});

describe('concatenating two strings without first char using Arrow functions', () => {
    test('"["code", "academy"]" should result in "odecademy"', () => {
        expect(concatStringArrow(["code", "academy"])).toBe("odecademy");
    });
    test('"["ca", "ac"]" should result in "ac"', () => {
        expect(concatStringArrow(["ca", "ac"])).toBe("ac");
    });
    test('"["a", "c"]" should result in ""', () => {
        expect(concatStringArrow(["a", "c"])).toBe("");
    });
    test('"["ac", ""]" should result in "c"', () => {
        expect(concatStringArrow(["ac", ""])).toBe("c");
    });
});