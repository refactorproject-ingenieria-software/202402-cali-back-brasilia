describe('Given a Password Validator Controller', () => {
	describe('When it receives "Hello"', () => {
		test('Then it should return true', () => {
			expect(PasswordValidatorController.validator('Hello').toBe(true));
		});
	});
});
