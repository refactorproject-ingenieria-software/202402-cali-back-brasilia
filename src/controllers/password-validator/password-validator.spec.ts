import { PasswordValidatorService } from './password-validator.service';

describe('Given a Password-Validator service', () => {
	let passwordValidatorService: PasswordValidatorService;
	const validPassword = 'Password123!';
	beforeEach(() => {
		passwordValidatorService = new PasswordValidatorService();
	});
	describe('When a request is made', () => {
		test('Then the service should be defined', () => {
			expect(passwordValidatorService).toBeDefined();
		});

		test('Then it should return a response of type "PasswordValidatorResponse"', () => {
			const response = passwordValidatorService.validatePassword(validPassword);
			expect(response.isValid).toBeDefined();
			expect(response.errors).toBeDefined();
		});

		test('Then it should validate the password length', () => {
			const response = passwordValidatorService.validatePassword('1234567');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must be at least 8 characters',
			);

			const validResponse =
				passwordValidatorService.validatePassword(validPassword);
			expect(validResponse.isValid).toBe(true);
		});

		test('Then it should validate that the password contains at least 2 numbers', () => {
			const response = passwordValidatorService.validatePassword('password1');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must contain at least 2 numbers',
			);

			const validResponse =
				passwordValidatorService.validatePassword(validPassword);
			expect(validResponse.isValid).toBe(true);
		});

		test('Then it should validate that the password must contain at least 1 capital letter', () => {
			const response = passwordValidatorService.validatePassword('password123');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must contain at least 1 capital letter',
			);

			const validResponse =
				passwordValidatorService.validatePassword(validPassword);
			expect(validResponse.isValid).toBe(true);
		});

		test('Then it should validate that the password contains at least one special character', () => {
			const response = passwordValidatorService.validatePassword('password');
			expect(response.isValid).toBe(false);
			expect(response.errors).toContain(
				'Password must contain at least 1 special character',
			);
		});
	});
});
