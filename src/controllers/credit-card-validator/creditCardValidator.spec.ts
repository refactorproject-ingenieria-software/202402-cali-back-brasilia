import { creditCardValidator } from './creditCardValidator';

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
});
