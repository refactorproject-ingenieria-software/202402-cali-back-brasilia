import { PasswordValidatorService } from './password-validator.service';

describe('Given a Password-Validator service', () => {
	let passwordValidatorService: PasswordValidatorService;
	beforeEach(() => {
		passwordValidatorService = new PasswordValidatorService();
	});
	describe('When a request is made', () => {
		test('Then the service should be defined', () => {
			expect(passwordValidatorService).toBeDefined();
		});

		test('Then it should return a response of type "PasswordValidatorResponse"', () => {
			const response =
				passwordValidatorService.validatePassword('Password123!');
			expect(response.isValid).toBeDefined();
			expect(response.errors).toBeDefined();
		});

		test('Then it should validate the password length', () => {
			const response = passwordValidatorService.validatePassword('1234567');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must be at least 8 characters',
			);

			const response2 =
				passwordValidatorService.validatePassword('Password123!');
			expect(response2.isValid).toBe(true);
		});

		test('Then it should validate that the password contains at least 2 numbers', () => {
			const response = passwordValidatorService.validatePassword('password1');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must contain at least 2 numbers',
			);

			const response2 =
				passwordValidatorService.validatePassword('Password123!');
			expect(response2.isValid).toBe(true);
		});
	});
});
