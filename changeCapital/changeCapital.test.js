const { changeCapitalReg } = require('./changeCapital');
const { changeCapitalArrow } = require('./changeCapital');

describe('changing the capitalisation of every letter', () => {
    test('"MeRRy hAD a LITTle lAMp" should result in "mErrY Had A littLE LamP"', () => {
        expect(changeCapitalReg("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    });
    test('"I am a Human" should result in "i AM hUMAN"', () => {
        expect(changeCapitalReg("I am Human")).toBe("i AM hUMAN");
    });
});

describe('changing the capitalisation of every letter using arrow function', () => {
    test('"MeRRy hAD a LITTle lAMp" should result in "mErrY Had A littLE LamP"', () => {
        expect(changeCapitalArrow("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    });
    test('"I am a Human" should result in "i AM hUMAN"', () => {
        expect(changeCapitalReg("I am Human")).toBe("i AM hUMAN");
    });
});