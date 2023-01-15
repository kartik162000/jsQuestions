
const { containScriptArrow } = require('./containScript')
const {  containScriptRegular} = require('./containScript');

describe('checking if the given input ends with Script ', () => {
    test('"javaScript" should result in "true"', () => {
        expect(containScriptArrow("javaScript")).toBe(true);
    });
    test('"typeScript" should result in "true"', () => {
        expect(containScriptArrow("typeScript")).toBe(true);
    });
    test('"javascript" should result in "false"', () => {
        expect(containScriptArrow("javascript")).toBe(false);
    });
    test('"IWorkAtMcKinsey" should result in "false"', () => {
        expect(containScriptArrow("IWorkAtMcKinsey")).toBe(false);
    });
    test('"javascriptis" should result in "false"', () => {
        expect(containScriptArrow("javascriptis")).toBe(false);
    });
});

describe('checking if the given input ends with Script ', () => {
    test('"javaScript" should result in "true"', () => {
        expect(containScriptRegular("javaScript")).toBe(true);
    });
    test('"typeScript" should result in "true"', () => {
        expect(containScriptRegular("typeScript")).toBe(true);
    });
    test('"javascript" should result in "false"', () => {
        expect(containScriptRegular("javascript")).toBe(false);
    });
    test('"IWorkAtMcKinsey" should result in "false"', () => {
        expect(containScriptRegular("IWorkAtMcKinsey")).toBe(false);
    });
    test('"javascriptis" should result in "false"', () => {
        expect(containScriptRegular("javascriptis")).toBe(false);
    });
});