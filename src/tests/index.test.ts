const { bankersRound } = require('bankers-round');

test('bankersRound(4.5) to be 4', () => {
	expect(bankersRound(4.5)).toBe(4);
});
test('bankersRound(5.5) to be 6', () => {
	expect(bankersRound(5.5)).toBe(6);
});
test('bankersRound(0.045, 2) to be 0.04', () => {
	expect(bankersRound(0.045, 2)).toBe(0.04);
});
test('bankersRound(0.055, 2) to be 0.06', () => {
	expect(bankersRound(0.055, 2)).toBe(0.06);
});