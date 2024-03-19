import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		const validator = new PasswordValidator();
		const isValid = validator.validate(password);
		const errors = validator.getErrors();

		return {
			isValid,
			errors,
		};
	}
}

class PasswordValidator {
	private errors: string[] = [];

	validate(password: string): boolean {
		this.errors = [];

		if (!this.isValidLength(password))
			this.errors.push('Password must be at least 8 characters');

		if (!this.containsTwoNumbers(password))
			this.errors.push('Password must contain at least 2 numbers');

		if (!this.containsCapitalLetter(password))
			this.errors.push('Password must contain at least 1 capital letter');

		if (!this.containsSpecialChars(password))
			this.errors.push('Password must contain at least 1 special character');

		return this.errors.length === 0;
	}

	getErrors(): string[] {
		return [...this.errors];
	}

	private isValidLength(password: string): boolean {
		return password.length >= 8;
	}

	private containsTwoNumbers(password: string): boolean {
		return (password.match(/[0-9]/g) || []).length >= 2;
	}

	private containsCapitalLetter(password: string): boolean {
		return /[A-Z]/.test(password);
	}

	private containsSpecialChars(password: string): boolean {
		return /[^a-zA-Z0-9]/.test(password);
	}
}
