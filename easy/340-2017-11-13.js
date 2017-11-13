/*
Description
Write a program that outputs the first recurring character in a string.

Input Description
A string of alphabetical characters.
Example: ABCDEBC

Output description
The first recurring character from the input.
From the above example: B

Bonus
Return the index where the original character is found in the string.
*/

const { expect } = require('chai');

const inputs = [
    'IKEUNFUVFV',
    'PXLJOUDJVZGQHLBHGXIW',
    '*l1J?)yn%R[}9~1"=k7]9;0[$',
    'ABBA'
];

function firstRecurringChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const next = str.indexOf(char, i + 1);
        if (next !== -1) return [char, i];
    }
}

function firstCharRecurring(str) {
    let recurrance = str.length;
    let i = 0;
    let char;
    for (; i < str.length; i++) {
        char = str[i];
        const next = str.indexOf(char, i + 1);
        if (next !== -1 && next <= recurrance) recurrance = next;
    }
    return [str.charAt(recurrance), str.indexOf(str.charAt(recurrance))];
}

describe('First Recurring Character', () => {

    it('Should return the first character that recurs in the given string', () => {
        const expected = ['U', 'X', '1', 'A'];
        const outputs = inputs.map(firstRecurringChar).map(([char, idx]) => char);
        for (let i = 0; i < outputs.length; i++) expect(outputs[i]).to.equal(expected[i]);
    });
    it('Should return the index of the character', () => {
        const expected = [3, 1, 2, 0];
        const outputs = inputs.map(firstRecurringChar).map(([char, idx]) => idx);
        for (let i = 0; i < outputs.length; i++) expect(outputs[i]).to.equal(expected[i]);
    });
});

describe('First Character to Recur', () => {
    it('Should return the fastest recurring character', () => {
        const expected = ['U', 'J', '1', 'B'];
        const outputs = inputs.map(firstCharRecurring).map(([char, idx]) => char);
        for (let i = 0; i < outputs.length; i++) expect(outputs[i]).to.equal(expected[i]);
    });
    it('Should return the index of the character', () => {
        const expected = [3, 3, 2, 1];
        const outputs = inputs.map(firstCharRecurring).map(([char, idx]) => idx);
        for (let i = 0; i < outputs.length; i++) expect(outputs[i]).to.equal(expected[i]);
    });
});
