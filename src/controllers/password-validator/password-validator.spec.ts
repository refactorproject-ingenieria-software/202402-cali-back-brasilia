import { PasswordValidatorService } from './password-validator.service';

describe('Given a Password-Validator service', () => {
	let passwordValidatorService: PasswordValidatorService;
	beforeEach(() => {
		passwordValidatorService = new PasswordValidatorService();
	});
	describe('When a request is made', () => {
		test('Then it should be defined', () => {
			expect(passwordValidatorService).toBeDefined();
		});

		test('Then it should return a response of type "PasswordValidatorResponse"', () => {
			const response = passwordValidatorService.validatePassword('password');
			expect(response.isValid).toBeDefined();
			expect(response.errors).toBeDefined();
		});

		// test('Then it should validate the password length', () => {
		// 	const response = passwordValidatorService.validatePassword('1234567');
		// });
	});
});
