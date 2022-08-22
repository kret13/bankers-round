"use strict";
var bankersRound = require('bankers-round').bankersRound;
test('bankersRound(4.5) to be 4', function () {
    expect(bankersRound(4.5)).toBe(4);
});
test('bankersRound(5.5) to be 6', function () {
    expect(bankersRound(5.5)).toBe(6);
});
test('bankersRound(0.045, 2) to be 0.04', function () {
    expect(bankersRound(0.045, 2)).toBe(0.04);
});
test('bankersRound(0.055, 2) to be 0.06', function () {
    expect(bankersRound(0.055, 2)).toBe(0.06);
});
//# sourceMappingURL=index.test.js.map