import {
	CreaditCardValidationResult,
	creditCardValidator,
} from './creditCardValidator';

describe('Given the creditCardValidator function', () => {
	describe('When it receives 2 strings as parameters', () => {
		test('Then it should return an object with the properties isValid and errorMessages', () => {
			const creditCardInfo = {
				creditCardNumber: '4583 3953',
				expiryDate: '23/23',
			};

			expect(creditCardValidator(creditCardInfo)).toHaveProperty('isValid');
			expect(creditCardValidator(creditCardInfo)).toHaveProperty(
				'errorMessages',
			);
		});
	});

	describe('When it receives 2 parameters that are not strings', () => {
		test('Then it should throw an error', () => {
			const creditCardInfo = {
				creditCardNumber: true as unknown as string,
				expiryDate: 8 as unknown as string,
			};

			try {
				creditCardValidator(creditCardInfo);
			} catch (error) {
				expect(error).toBe(
					'You must provide creditCardNumber and expiry date as strings',
				);
			}
		});
	});

	describe('When it receives a card number with less than 16 digits', () => {
		test("Then it should return false and an error message: 'The card must have at least 16 digits'", () => {
			const creditCardInfo = {
				creditCardNumber: '4583 3953',
				expiryDate: '23/23',
			};
			const expectedErrorMessage = 'The card must have at least 16 digits';

			expect(
				creditCardValidator(creditCardInfo).errorMessages.includes(
					expectedErrorMessage,
				),
			).toBe(true);
		});
	});

	describe('When it receives a card number that is not valid according to Luhn algorithm', () => {
		test("Then it should return false and an error message: 'The card is not valid according to the Luhn algorithm'", () => {
			const creditCardInfo = {
				creditCardNumber: '4583395332541345',
				expiryDate: '01/28',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: false,
				errorMessages: [
					'The card is not valid according to the Luhn algorithm',
				],
			};

			expect(creditCardValidator(creditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});

	describe('When it receives a card number with less than 16 digits and is not valid according Luhn algorithm', () => {
		test('Then it should return false and two error messages: "The card must have at least 16 digits" and "The card is not valid according to the Luhn algorithm"', () => {
			const creditCardInfo = {
				creditCardNumber: '44448888',
				expiryDate: '01/28',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: false,
				errorMessages: [
					'The card must have at least 16 digits',
					'The card is not valid according to the Luhn algorithm',
				],
			};

			expect(creditCardValidator(creditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});

	describe('When it receives a valid card number which is not of type Visa, Mastercard, American Express or Diners Club ', () => {
		test('Then it should return false with an error message "The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club"', () => {
			const creditCardInfo = {
				creditCardNumber: '3911000990139424',
				expiryDate: '23/23',
			};
			const expectedErrorMessage =
				'The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club';

			expect(
				creditCardValidator(creditCardInfo).errorMessages.includes(
					expectedErrorMessage,
				),
			).toBe(true);
		});
	});

	describe('When it receives a credit card number and an unvalid expiration date', () => {
		test("Then it should return false with an error message: 'The card must have a valid expiration date'", () => {
			const creditCardInfo = {
				creditCardNumber: '3711000990139424',
				expiryDate: '01/22',
			};
			const expectedErrorMessage = 'The card must have a valid expiration date';

			expect(
				creditCardValidator(creditCardInfo).errorMessages.includes(
					expectedErrorMessage,
				),
			).toBe(true);
		});
	});

	describe('When it receives a valid credit card that satisfies all conditions', () => {
		test('Then it should return that is valid', () => {
			const creditCardInfo = {
				creditCardNumber: '4111111111111111',
				expiryDate: '01/28',
			};
			const expectedCreaditCardValidationResult: CreaditCardValidationResult = {
				isValid: true,
				errorMessages: [],
			};

			expect(creditCardValidator(creditCardInfo)).toStrictEqual(
				expectedCreaditCardValidationResult,
			);
		});
	});
});
