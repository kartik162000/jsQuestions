
const { nextAlphaRegular } = require('./nextAlpha')
const { nextAlphaArrow } = require('./nextAlpha');

describe('replace every char with the next alphabet', () => {
    test('"codeacademy" should result in ""dpefbdbefnz""', () => {
        expect(nextAlphaRegular("codeacademy")).toBe("dpefbdbefnz");
    });
    test('"lazyinterns" should result in "mbazjoufsot"', () => {
        expect(nextAlphaRegular("lazyinterns")).toBe("mbazjoufsot");
    });
    test('"sdfghjk" should result in "teghikl"', () => {
        expect(nextAlphaRegular("sdfghjk")).toBe("teghikl");
    });
});

describe('replace every char with the next alphabet', () => {
    test('"codeacademy" should result in ""dpefbdbefnz""', () => {
        expect(nextAlphaArrow("codeacademy")).toBe("dpefbdbefnz");
    });
    test('"lazyinterns" should result in "mbazjoufsot"', () => {
        expect(nextAlphaArrow("lazyinterns")).toBe("mbazjoufsot");
    });
});