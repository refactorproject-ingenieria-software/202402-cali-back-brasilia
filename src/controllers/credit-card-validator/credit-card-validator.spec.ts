const creditCardValidator = (a, b) => {
	if (a && b) {
		return true;
	}
};

describe('Given the creditCardValidator function', () => {
	describe('When it receives 2 strings as parameters', () => {
		test('Then it should return a boolean', () => {
			expect(creditCardValidator('string', 'string')).toBe(true);
		});
	});
});
