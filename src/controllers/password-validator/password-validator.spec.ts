import { PasswordValidatorService } from './password-validator.service';

describe('Given a Password-Validator service', () => {
	describe('When a request is made', () => {
		const passwordValidatorService = new PasswordValidatorService();
		test('Then it should be defined', () => {
			expect(passwordValidatorService).toBeDefined();
		});

		test('Then it should return a PasswordValidatorResponse', () => {
			const response = passwordValidatorService.validatePassword('password');
			expect(response).toBeDefined();
		});
	});
});
