
const { countVowelRegular } = require('./countVowel');
const { countVowelArrow} = require('./countVowel');

describe('counting vowels present in a string', () => {
    test('"codeacademy" should result in "5"', () => {
        expect(countVowelRegular("codeacademy")).toBe(5);
    });
    test('"gaurav" should result in "2"', () => {
        expect(countVowelRegular("kartik")).toBe(2);
    });
    test('"sdfghjk" should result in "0"', () => {
        expect(countVowelRegular("sdfghjk")).toBe(0);
    });
});

describe('counting vowels present in a string', () => {
    test('"codeacademy" should result in "5"', () => {
        expect(countVowelArrow("codeacademy")).toBe(5);
    });
    test('"gaurav" should result in "2"', () => {
        expect(countVowelArrow("kartik")).toBe(2);
    });
    test('"sdfghjk" should result in "0"', () => {
        expect(countVowelArrow("sdfghjk")).toBe(0);
    });
});