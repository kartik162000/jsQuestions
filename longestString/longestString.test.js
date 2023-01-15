const { longestStringRegular } = require('./longestString');
const { longestStringArrow } = require('./longestString');

describe('finding the longest string of the given strings', () => {
    test('"["we", "love", "code", "academy"]" should result in "academy"', () => {
        expect(longestStringRegular(["we", "love", "code", "academy"])).toBe("academy");
    });
    test('"["I", "am", "Kartik","Goel]" should result in "Kartik"', () => {
        expect(longestStringRegular(["I", "am", "Kartik","Goel"])).toBe("Kartik");
    });
});

describe('finding the longest string of the given strings using arrow function', () => {
    test('"["we", "love", "code", "academy"]" should result in "academy"', () => {
        expect(longestStringArrow(["we", "love", "code", "academy"])).toBe("academy");
    });
    test('"["I", "am", "Kartik","Goel]" should result in "Kartik"', () => {
        expect(longestStringArrow(["I", "am", "Kartik","Goel"])).toBe("Kartik");
    });
});