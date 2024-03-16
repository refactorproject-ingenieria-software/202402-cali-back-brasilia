import {
	CreaditCardValidationResult,
	creditCardValidator,
} from './creditCardValidator';

describe('Given the creditCardValidator function', () => {
	// describe('When it receives 2 strings as parameters', () => {
	// 	test('Then it should return a boolean', () => {
	// 		const CreditCardInfo = {
	// 			creditCardNumber: '4583 3953',
	// 			expiryDate: '23/23',
	// 		};
	// 		expect(creditCardValidator(CreditCardInfo)).toBe(true);
	// 	});
	// });

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

	describe('When it receives a card number that is not valid according to Luhn algorithm', () => {
		test("Then it should return false and an error message: 'The card is not valid according to the Luhn algorithm'", () => {
			const CreditCardInfo = {
				creditCardNumber: '4583395332541345',
				expiryDate: '23/23',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: false,
				errorMessage: 'The card is not valid according to the Luhn algorithm',
			};

			expect(creditCardValidator(CreditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});

	describe('When it receives a card number that is valid according to Luhn algorithm', () => {
		test('Then it should return that is valid', () => {
			const CreditCardInfo = {
				creditCardNumber: '4111111111111111',
				expiryDate: '23/23',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: true,
				errorMessage: '',
			};

			expect(creditCardValidator(CreditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});

	describe('When it receives a card number with less than 16 digits and is not valid according Luhn algorithm', () => {
		test('Then it should return false and two error messages: "The card must have at least 16 digits" and "The card is not valid according to the Luhn algorithm"', () => {
			const CreditCardInfo = {
				creditCardNumber: '44448888',
				expiryDate: '23/23',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: false,
				errorMessage: [
					'The card must have at least 16 digits',
					'The card is not valid according to the Luhn algorithm',
				],
			};

			expect(creditCardValidator(CreditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});
});
