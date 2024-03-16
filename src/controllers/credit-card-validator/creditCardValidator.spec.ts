import {
	CreaditCardValidationResult,
	creditCardValidator,
} from './creditCardValidator';

describe('Given the creditCardValidator function', () => {
	describe('When it receives 2 strings as parameters', () => {
		test('Then it should return a boolean', () => {
			const CreditCardInfo = {
				creditCardNumber: '4583 3953',
				expiryDate: '23/23',
			};
			expect(creditCardValidator(CreditCardInfo)).toBe(true);
		});
	});

	describe('When it receives a card number with less than 16 digits', () => {
		test("Then it should return false and an error message: 'The card must have at least 16 digits'", () => {
			const CreditCardInfo = {
				creditCardNumber: '4583 3953',
				expiryDate: '23/23',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: false,
				errorMessage: 'The card must have at least 16 digits',
			};

			expect(creditCardValidator(CreditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});
});
